import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripData } from './trip-data';

@Injectable({
  providedIn: 'root'
})

export class Authentication {
    // Setup our storage and service access
    constructor(
        @Inject (BROWSER_STORAGE) private storage: Storage,
        private tripData: TripData
    ) { }

    // Variable to handle Authentication Responses
    authResp: AuthResponse = new AuthResponse();

    // Get our token from our storage provider
    // NOTE: For this application we have decided that we will name the key for our token 'travlr-token'
    public getToken(): string {
        let out: any;
        out = this.storage.getItem('travlr-token');

        // Make sure we return a string even if we don't have a token
        if (!out) {
            return '';
        }
        return out;
    }

    // Save our token to our Storage provider
    public saveToken(token: string): void {
        this.storage.setItem('travlr-token', token);
    }

    // Logout of our application and remove the JWT from Storage
    public logout(): void {
        this.storage.removeItem('travlr-token');
    }

    // Boolean to determine if we are logged in and the token is stil valid. Even if we have a token, will still have to reauthenticate if the token expired
    public isLoggedIn(): boolean {
        const token: string = this.getToken();
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > (Date.now() / 1000);
        } else {
            return false;
        }
    }

    // Retrieve the current user. This function should only be called after the calling method has checked to make sure that the user isLoggedIn
    public getCurrentUser(): User {
        const token: string = this.getToken();
        const { email, name } = JSON.parse(atob(token.split('.')[1]));
        return { email, name } as User;
    }

    // Login mehod that leverages the login method in tripData
    public login(user: User, passwd: string) : void {
        this.tripData.login(user, passwd)
            .subscribe({
                next: (value: any) => {
                    if (value) {
                        console.log(value);
                        this.authResp = value;
                        this.saveToken(this.authResp.token);
                    }
                },
                error: (error: any) => {
                    console.log('Error: ' + error);
                }
            })
    }

    // Register method that leverages the register method in tripData
    public register(user: User, passwd: string) : void {
        this.tripData.register(user, passwd)
            .subscribe({
                next: (value: any) => {
                    if (value) {
                        console.log(value);
                        this.authResp = value;
                        this.saveToken(this.authResp.token);
                    }
                },
                error: (error: any) => {
                    console.log('Error: ' + error);
                }
            })
    }
}
