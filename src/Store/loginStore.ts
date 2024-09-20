import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            isLoggedIn: false
            
        }
    },
    actions: {
        setLoginStatus(status : boolean) {
            this.isLoggedIn = status;
            localStorage.setItem('isLoggedIn', JSON.stringify(status));
        },
        getLoginStatus() {
            return this.isLoggedIn;
        }
    }
})

