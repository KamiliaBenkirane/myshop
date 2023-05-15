import { defineStore } from "pinia"


export const useSessionStore = defineStore('session', {
    state : () => ({
        token: ''
    }),
    actions : {
        setToken(token){
            this.token = token
        },
        getToken(){
            return this.token
        }
    },
    persist : true
})
