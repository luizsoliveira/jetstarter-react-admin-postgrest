import { env } from "./env";

import { AuthProvider } from 'react-admin';


export const authProvider: AuthProvider = {
    login: ({ username, password }) =>  {
        const url = env.API_BASE_URL + "/rpc/login"
        const request = new Request(url, {
            method: 'POST',
            body: JSON.stringify({ email: username, pass: password }),
            //The method login is the only one public endpoint
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Content-Profile': 'public'
            }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    return response.json().then(json => {throw new Error(json.message)})
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
            })
            .catch((error) => {
                throw new Error(error)
                
            });
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () => {
        // Required for the authentication to work
        return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject()
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    getPermissions: () => {
        // Required for the authentication to work
        return Promise.resolve();
    },
    // ...
};