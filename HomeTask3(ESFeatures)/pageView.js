import {
    postControl , events
} from "./pageController.js";

import {
    constants
} from "./data.js";

export class viewPage  {
    renderPage = () => {
        //let objConst = new constants();
        //Adding Header Panel    
        this.addHeader();
        //Adding body Part
        this.addMain();
        //Adding Footer Panel
        this.addFooter();
        // //Setting data to the elements
        // setData(data);
        let obj = new postControl();
        obj.onLoadPage();

    }
    //Header
    addHeader = () => {
        let obj = new events();
        this.createHTMLElement(constants.headerElements);
        let thisElement = document.getElementById("emailIdSubmitBtn");
        thisElement.addEventListener("click",obj.submitEmail);
        
    }

    addFooter = () => {
        this.createHTMLElement(constants.footerElements);
    }



    //Body
    addMain = () => {
        this.createHTMLElement(constants.mainElements);

        //creation of side panel for adding select category and subscription
        this.addSidePanel();
    }

    //sidePanel 
    addSidePanel = () => {

        let obj = new events();
        //Attributes for input tag
        let thisElement = document.getElementById("emailIdTextBox");
        thisElement.placeHoler = "EmailAddress";
        thisElement.type = "text";

        thisElement = document.getElementById("closeBtn");
        thisElement.addEventListener("click",obj.popUpCloseBtn);

        thisElement = document.getElementById("categoryLstBox");
        thisElement.addEventListener("change",obj.listBoxSelection);

        

        //Attributes for button for submision of mail 
        thisElement = document.getElementById("emailIdSubmitBtn");
        thisElement.value = "Subscribe";
        thisElement.type = "submit";

        //Creating and appending option tag for displaying categories
        for (let allCategories = 0; allCategories < constants.categories.length; allCategories++) {
            // Create an Option        
            let opt = document.createElement("option");
            // Add an Option object to List Box
            document.getElementById("categoryLstBox").options.add(opt);
            opt.text = constants.categories[allCategories].toUpperCase();
            opt.value = allCategories;
        }
    }


    //Create Function to create respective element
    createHTMLElement = (elements) => {
        elements.forEach(function (eachElement) {
            let div = document.createElement(eachElement.element);
            if (eachElement.class) {
                div.className = eachElement.class;
            }
            if (eachElement.id) {
                div.id = eachElement.id;
            }
            if (eachElement.text) {
                div.innerHTML = eachElement.text;
            }
            if (eachElement.event) {
                let funct = eachElement.eventFunction;
                div.addEventListener(eachElement.event, funct);
            }
            document.getElementById(eachElement.parent).appendChild(div);
        });
    }
    //Setting data and cloning for more posts
    setData = (dataToSet) => {
        for (let entries = 0; entries < dataToSet.length; entries++) {
            this.createPost(entries + 1, dataToSet[entries]);
        }
    }

    //Post Creation
    createPost = (postNumber, dataArray) => {
        //Footer Elements
        if(dataArray.postDate){
            dataArray.postDate = dataArray.postDate.substr(0,10);
        }
        let postElements = [{
                id: `post${postNumber}`,
                element: "div",
                class: "flxRow allPosts",
                parent: "content",
                text: "",
                event: "",
                eventFunction: ""
            },
            {
                id: `postDivisionLine1${postNumber}`,
                element: "hr",
                class: "divideLine",
                parent: "content",
                text: "",
                event: "",
                eventFunction: ""
            },
            {
                id: `postImageId${postNumber}`,
                element: "img",
                class: "postImage",
                parent: `post${postNumber}`,
                text: "",
                event: "",
                eventFunction: ""
            },
            {
                id: `postContent${postNumber}`,
                element: "div",
                class: "marginForPost",
                parent: `post${postNumber}`,
                text: "",
                event: "",
                eventFunction: ""
            },
            {
                id: `postTitleId${postNumber}`,
                element: "h2",
                class: "marginForPost",
                parent: `postContent${postNumber}`,
                text: dataArray.postTitle,
                event: "",
                eventFunction: ""
            },
            {
                id: `postTitleDescId${postNumber}`,
                element: "h6",
                class: "spacingWithInPosts",
                parent: `postContent${postNumber}`,
                text: `<span class=fontLight>Posted on </span>"  ${dataArray.postDate}  "<span class=fontLight>// Category :</span> "  ${dataArray.postCategory} "`,
                event: "",
                eventFunction: ""
            },
            {
                id: `postDescId${postNumber}`,
                element: "p",
                class: "spacingWithInPosts",
                parent: `postContent${postNumber}`,
                text: dataArray.postDesc,
                event: "",
                eventFunction: ""
            },
            {
                id: `postContinueBtnId${postNumber}`,
                element: "button",
                class: "postButton spacingWithInPosts",
                parent: `postContent${postNumber}`,
                text: "Continue Reading",
                event: "",
                eventFunction: ""
            },
        ];
        let obj = new events();
        this.createHTMLElement(postElements);
        document.getElementById("postTitleDescId" + postNumber).value = dataArray.postCategory;
        document.getElementById("postImageId" + postNumber).src = dataArray.imageSrc;
        document.getElementById("postContinueBtnId" + postNumber).addEventListener("click",function(){obj.continueReading(this);});


    }


}



