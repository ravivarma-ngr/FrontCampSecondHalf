import {
    postControl
} from "./pageController.js";

//To fetch the required data
export  class dataFetch {

    constructor(source) {
        this.source = source;
    }

    fetchData = () => {

        fetch(`https://newsapi.org/v1/articles?source=${this.source}&apiKey=b75366c0a439417d8c44c1b288139ecb`)
            .then(response => response.json())
            .then(data => {
                let obj = new postControl();
                obj.setPostData(data.source, data.articles);

            })

    }
}