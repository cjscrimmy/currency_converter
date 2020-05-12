import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            currencies: {},
            selectedCurrency: null
        },
        methods:{
            fetchCurrencies: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                    .then(resourses => resourses.json())
                    .then(currencies => this.currencies = currencies.rates)
            }
        },
        mounted(){
            this.fetchCurrencies()
        }
    })
})