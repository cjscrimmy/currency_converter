import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            currencies: {},
            selectedCurrency: null
        },
        computed:{
            conversionFromEurosResult: function (){
                return this.convertFromEuros;
            }
        },
        methods:{
            fetchCurrencies: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                    .then(resourses => resourses.json())
                    .then(currencies => this.currencies = currencies.rates)
            },
            convertFromEuros: function(){
               return this.euroValue * this.selectedCurrency;
            }

        },
        mounted(){
            this.fetchCurrencies()
        }
    })
})