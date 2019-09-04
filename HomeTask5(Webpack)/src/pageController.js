import {
    constants
} from "./data.js";

import {
    dataFetch
} from "./postModel.js";

import {
    viewPage
} from "./pageView.js";

import '../styles.css';

export class postControl {
    category = "cnn";
    

    init = () => {
        let obj = new viewPage();
        obj.renderPage();

    }

    onLoadPage = () => {
        let obj = new dataFetch(this.category);
        obj.fetchData();

    }

    setPostData = (sourceOfPost, data) => {
        let postData = [];
        //urlToImage,title,publishedAt,description,{postCategory:this.source}
        data.forEach(function (eachPost) {
            postData.push({
                imageSrc: eachPost.urlToImage,
                postTitle: eachPost.title,
                postDate: eachPost.publishedAt,
                postCategory: sourceOfPost,
                postDesc: eachPost.description
            })
        });
        let obj = new viewPage();
        obj.setData(postData);

    }

    sourceSelectionEvent = (sourceOfPost, data) => {
    //let objConst = new constants();   
    //Getting value selected by user
    let listBox = document.getElementById("categoryLstBox");
    let selectedValue = listBox.value;

    let myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    let selectedcategory = constants.categories[selectedValue];
    let obj = new dataFetch(selectedcategory);
    obj.fetchData();
    
    }
}

export class events {

    //Email submit event
    submitEmail = () => {
        let arrayOfMailId = [];
        //getting the mailId entered
        let mailId = document.getElementById("emailIdTextBox").value;
        //Regular Expression for email Id
        let re = /\S+@\S+\.\S+/;
        //If mailId is valid then store else show alert
        if (re.test(mailId)) {
            let ids = localStorage.getItem("mailId");
            if (ids) {
                arrayOfMailId = ids.split(',');
            }
            //Storing mailId to localStorage
            arrayOfMailId.push(mailId);
            localStorage.setItem('mailId', arrayOfMailId);
            document.getElementById("emailIdTextBox").value = "";
        }
        else {
            alert("Enter Valid Email address");
        }
    }
    
    
        //popup close event
     popUpCloseBtn = () => {
        document.getElementById("popUp").style.display = "none";
    }
       //Events 
    
    //List Box Selection Event
    listBoxSelection = () => {
        
        let obj = new postControl();
        obj.sourceSelectionEvent();
    
    }

    //Continue Reading event
 continueReading = (obj) => {
    let self = obj;
    //displaying popup
    document.getElementById("popUp").style.display = "block";
    //getting related text to display
    let btnId = self.id;
    let postId = btnId.substr(17);
    let title = document.getElementById("postTitleId" + postId).textContent;
    let titleDesc = document.getElementById("postTitleDescId" + postId).textContent;
    let desc = document.getElementById("postDescId" + postId).textContent;

    //Creating and displaying text
    let content = title + "<br><br>" + titleDesc + "<br><br>" + desc + "<br>";
    document.getElementById("contentDisplayArea").innerHTML = content;
}
    
    }



//export default events;

const app = new postControl();
(() => {
    app.init();
})()