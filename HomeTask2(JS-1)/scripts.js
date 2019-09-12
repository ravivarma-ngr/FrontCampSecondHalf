//Creation part
//Create Function to create respective element
function createHTMLElement(element, elementId, styleClass, parentElement, HTMLTextOfElement, event, eventFunction) {
    let div = document.createElement(element);
    if (styleClass) {
        div.className = styleClass;
    }
    if (elementId) {
        div.id = elementId;
    }
    if (HTMLTextOfElement) {
        div.innerHTML = HTMLTextOfElement;
    }
    if (event) {
        div.addEventListener(event, eventFunction);
    }
    document.getElementById(parentElement).appendChild(div);
}

//Creates the elements required for the page and adds them
function create() {
    //Adding Header Panel    
    addHeader();
    //Adding body Part
    addMain();
    //Adding Footer Panel
    addFooter();
    //Setting data to the elements
    setData(data);
}

//Header
function addHeader() {
    headerElements.forEach(function(eachElement){
        createHTMLElement(eachElement.element,eachElement.id,eachElement.class,eachElement.parent,eachElement.text,eachElement.event,eachElement.eventFunction);
        }
    );
}

//Body
function addMain() {
    mainElements.forEach(function(eachElement){
        createHTMLElement(eachElement.element,eachElement.id,eachElement.class,eachElement.parent,eachElement.text,eachElement.event,eachElement.eventFunction);
        }
    );
    //creation of side panel for adding select category and subscription
    addSidePanel();
}

//sidePanel 
function addSidePanel() {
    
    //Attributes for input tag
    let thisElement = document.getElementById("emailIdTextBox");
    thisElement.placeHoler = "EmailAddress";
    thisElement.type = "text";

    //Attributes for button for submision of mail
    thisElement = document.getElementById("emailIdSubmitBtn");
    thisElement.value = "Subscribe";
    thisElement.type = "submit";

    //Creating and appending option tag for displaying categories
    for (var allCategories = 0; allCategories < categories.length; allCategories++) {
        // Create an Option        
        var opt = document.createElement("option");
        // Add an Option object to List Box
        document.getElementById("categoryLstBox").options.add(opt);
        opt.text = categories[allCategories];
        opt.value = allCategories;
    }
}

//Footer
function addFooter() {
    footerElements.forEach(function(eachElement){
        createHTMLElement(eachElement.element,eachElement.id,eachElement.class,eachElement.parent,eachElement.text,eachElement.event,eachElement.eventFunction);
        }
    );
}

//Post Creation
function createPost(postNumber, dataArray) {

    //Creating and appending div tag
    createHTMLElement('div', 'post' + postNumber, 'flxRow allPosts', 'content', '', '', '');

    //Creating and appending hr tag
    createHTMLElement('hr', 'postDivisionLine1' + postNumber, 'divideLine', 'content', '', '', '');

    //Creating and appending img tag
    createHTMLElement('img', 'postImageId' + postNumber, 'postImage', 'post' + postNumber, '', '', '');
    document.getElementById("postImageId" + postNumber).src = dataArray[postNumber - 1].imageSrc;

    //Creating and appending div tag
    createHTMLElement('div', 'postContent' + postNumber, 'marginForPost', 'post' + postNumber, '', '', '');

    //Creation of elements inside the postContent 
    //Creating and appending h2 tag to display Post Title
    createHTMLElement('h2', 'postTitleId' + postNumber, '', 'postContent' + postNumber, dataArray[postNumber - 1].postTitle, '', '');

    //Creating and appending h6 tag to display category and date of post
    var titleDescData = "<span class=fontLight>Posted on </span>" + dataArray[postNumber - 1].postDate + "<span class=fontLight>// Category :</span> " + dataArray[postNumber - 1].postCategory;
    createHTMLElement('h6', 'postTitleDescId' + postNumber, 'spacingWithInPosts', 'postContent' + postNumber, titleDescData, '', '');
    document.getElementById("postTitleDescId" + postNumber).value = dataArray[postNumber - 1].postCategory;

    //Creating and appending p tag to display post description
    createHTMLElement('p', 'postDescId' + postNumber, 'spacingWithInPosts', 'postContent' + postNumber, dataArray[postNumber - 1].postDesc, '', '');
    //Creating and appending button tag for displaying popup
    createHTMLElement('button', 'postContinueBtnId' + postNumber, 'postButton spacingWithInPosts', 'postContent' + postNumber, 'Continue Reading', 'click', continueReading);


}

//Setting data and cloning for more posts
function setData(dataToSet) {
    for (let entries = 0; entries < dataToSet.length; entries++) {
        createPost(entries + 1, dataToSet);
    }
}

//Events 

//List Box Selection Event
function listBoxSelection() {

    var selectedData;
    //Getting value selected by user
    let listBox = document.getElementById("categoryLstBox");
    let selectedValue = listBox.value;

    var myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    if (selectedValue != 0) {
        selectedData = data.filter(function (el) {
            return el.postCategory == categories[selectedValue];
        });

    } else {
        selectedData = data;
    }
    setData(selectedData);
}

//Email submit event
function submitEmail() {
    var arrayOfMailId = [];
    //getting the mailId entered
    let mailId = document.getElementById("emailIdTextBox").value;
    //Regular Expression for email Id
    var re = /\S+@\S+\.\S+/;
    //If mailId is valid then store else show alert
    if (re.test(mailId)) {
        var ids = localStorage.getItem("mailId");
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

//Continue Reading event
function continueReading() {
    //displaying popup
    document.getElementById("popUp").style.display = "block";
    //getting related text to display
    var btnId = this.id;
    var postId = btnId.substr(btnId.length - 1);
    var title = document.getElementById("postTitleId" + postId).textContent;
    var titleDesc = document.getElementById("postTitleDescId" + postId).textContent;
    var desc = document.getElementById("postDescId" + postId).textContent;

    //Creating and displaying text
    var content = title + "<br><br>" + titleDesc + "<br><br>" + desc + "<br>";
    document.getElementById("contentDisplayArea").innerHTML = content;
}

//popup close event
function popUpCloseBtn() {
    document.getElementById("popUp").style.display = "none";
}