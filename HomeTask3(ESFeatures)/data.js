export const constants =  {

//  a = new events();

//Data for content
//Various Categories
 categories : ["cnn", "bbc-sport", "cnbc", "fortune", "google-news", "metro", "mirror", "talksport", "time", "the-hindu"],

    
//Header elements
 headerElements : [
    {
        id: "titleContainer",
        element: "div",
        class: "titleMain flxRow",
        parent: "headerTitle",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "",
        element: "h2",
        class: "titleHeading",
        parent: "titleContainer",
        text: "NEWSFEED",
        event: "",
        eventFunction: ""
    },
    {
        id: "",
        element: "h6",
        class: "titleDesc",
        parent: "titleContainer",
        text: "<i>Yet another newsfeed</i>",
        event: "",
        eventFunction: ""
    },
    {
        id: "subscribeFlx",
        element: "div",
        class: "flxRow subscribeFlx",
        parent: "titleContainer",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "emailIdAction",
        element: "form",
        class: "",
        parent: "subscribeFlx",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "emailIdTextBox",
        element: "input",
        class: "txtBoxMeasures",
        parent: "subscribeFlx",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "emailIdSubmitBtn",
        element: "input",
        class: "btnSubscribe",
        parent: "subscribeFlx",
        text: "",
        event: "",
        eventFunction: "",//`${submitEmail}`
    },
],


//Footer Elements
 footerElements : [
    {
        id: "",
        element: "div",
        class: "",
        parent: "wrapper",
        text: "<br>",
        event: "",
        eventFunction: ""
    },
    {
        id: "",
        element: "div",
        class: "marginForFooterContent",
        parent: "footerTitle",
        text: "&copy; NewsFeed 2019",
        event: "",
        eventFunction: ""
    }
],





//Main Elements
 mainElements : [
    {
        id: "mainContainer",
        element: "div",
        class: "flxRow",
        parent: "wrapper",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "popUp",
        element: "div",
        class: "modal",
        parent: "wrapper",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "popUpContent",
        element: "div",
        class: "modal-content",
        parent: "popUp",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "closeBtn",
        element: "span",
        class: "close",
        parent: "popUpContent",
        text: "&times;",
        event: "",//"click",
        eventFunction: ""//this.popUpCloseBtn
    },
    {
        id: "contentDisplayArea",
        element: "p",
        class: "",
        parent: "popUpContent",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "content",
        element: "div",
        class: "flxColumn allPosts",
        parent: "mainContainer",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "sidePanel",
        element: "div",
        class: "sidePanelStyle",
        parent: "mainContainer",
        text: "",
        event: "",
        eventFunction: ""
    },
    {
        id: "",
        element: "h3",
        class: "",
        parent: "sidePanel",
        text: "Select Category",
        event: "",
        eventFunction: ""
    },
    {
        id: "categoryLstBox",
        element: "select",
        class: "lstBox",
        parent: "sidePanel",
        text: "",
        event: "",//"change",
        eventFunction: ""//this.listBoxSelection
    },
    {
        id: "",
        element: "div",
        class: "",
        parent: "sidePanel",
        text: "<br><br>",
        event: "",
        eventFunction: ""
    }
],

}