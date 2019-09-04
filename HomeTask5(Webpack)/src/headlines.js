import {
    viewPage
} from "./pageView.js";

import {
    constants
} from "./data.js";

export class headLines {
    //Headlines
    constructor(){
        let viewObj = new viewPage();
        viewObj.createHTMLElement(constants.headLinesElements);
        document.getElementById("closeBtnHeadline").addEventListener("click",this.closeHeadline);
    }

     headlinesInit  () {
        this.fetchHeadlines();
    }

     closeHeadline  (){
        document.getElementById("popUpHeadlines").style.display = "none";
    }

    async  fetchHeadlines() {

        await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=d4e03df5989c4e4a998e4fb2fe632d48`)
            .then(response => response.json())
            .then(data => {
                this.setHeadlines(data.articles);
            })

    }

     setHeadlines (data) {
        console.log("Setting data");
        console.log(data);

        // cleaning 
        let myNode = document.getElementById("flxMainHeadline");
        console.log(myNode);
        while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        }

        for (let entries = 0; entries < data.length; entries++) {

            let postElements = [{
                    id: `headline${entries}`,
                    element: "div",
                    class: "flxColumn",
                    parent: "flxMainHeadline",
                    text: "",
                    event: "",
                    eventFunction: ""
                },
                {
                    id: `headlineTitle${entries}`,
                    element: "h6",
                    class: "spacingWithInPosts",
                    parent: `headline${entries}`,
                    text:data[entries].title,
                    event: "",
                    eventFunction: ""
                },
                {
                    id: `postDivisionLine${entries}`,
                    element: "hr",
                    class: "divideLineHeadLine",
                    parent: `headline${entries}`,
                    text: "",
                    event: "",
                    eventFunction: ""
                },
            ];
            let v = new viewPage();
            v.createHTMLElement(postElements);
            console.log("HTML Created");
        }
        document.getElementById("popUpHeadlines").style.display = "block";
    }

}