import {
    postControl
} from "./pageController.js";
require('es6-promise').polyfill();
require('isomorphic-fetch');


//To fetch the required data
export  class dataFetch {

    constructor(source) {
        this.source = source;
    }

    async fetchData  ()  {

        await fetch(`https://newsapi.org/v1/articles?source=${this.source}&apiKey=d4e03df5989c4e4a998e4fb2fe632d48`)
            .then(response => response.json())
            .then(data => {
                let obj = new postControl();
                obj.setPostData(data.source, data.articles);

            })

    }
}