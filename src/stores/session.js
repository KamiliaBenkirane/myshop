import { defineStore } from "pinia"

export const useSessionStore = defineStore('session', {
    state : () => ({
        token: '',
        nbItems : 0,
        price : 0,
        basket : [],
        basketOnce : []
    }),
    actions : {
        setToken(token){
            this.token = token
        },
        getToken(){
            return this.token
        },
        setPrice(price) {
            this.price = price
        },
        getPrice(){
            return this.price
        },
        setNbItems(nbItems) {
            this.nbItems = nbItems
        },
        getNbItems(){
            return this.nbItems
        },
        incrementPrice(priceItem){
            this.price+=priceItem
            return this.price
        },
        incrementNbItems(){
            return this.nbItems+=1
        },

        /*addBasket(item) {
            this.basket = this.basket.unshift(item)
        },*/
        /*addBasketOnce(item, list){
            for (let i =0; i<this.list.length;i++){
                if (list[i] === item){
                    break;
                }
            }
            if (i === list.length){
                this.basketOnce.unshift(item)
            }
            this.basket.unshift(item)
        },

        getOccurences(item, list){
            let count = 0
            for (let i =0; i<list.length; i++){
                if (list[i]===item){
                    count+=1
                }
            }
            return count;
        },*/

        /*removeBasket(item, list){
            let index = 0
            for (let i =0; i<list.length; i++){
                if (list[i]===item){
                    index = i
                }
            }
            list.slice(index, 1)
        },*/


        getBasket(){
            return this.basket
        },


    },
    persist : true,
})
