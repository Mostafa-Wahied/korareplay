// tabs function
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    // Get the element with id="defaultOpen" and click on it
}
document.getElementById("defaultOpen").click();
// end of tabs function


// Translation function
function loadGoogleTranslate() {
    new google.translate.TranslateElement({
        pageLanguage: 'ar',
        autoDisplay: 'true',
        includedLanguages: 'ar,en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}
// end of translation function

// <!-- fb chat plugin -->
window.fbAsyncInit = function () {
    FB.init({
        appId: '548698587299556',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v10.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
// <!-- end of fb chat plugin -->
// adding the fb plugin to all pages
var fb_chat_div = document.createElement("div");
fb_chat_div.className = "fb-customerchat";
fb_chat_div.setAttribute("page_id", "113064408307589");
fb_chat_div.setAttribute("ref", "OPTIONAL_REFERENCE_PARAMETER");
document.body.appendChild(fb_chat_div);
// end of adding the fb plugin

// adding fb page icon to all apges
var fbIcon = document.createElement("div");
fbIcon.id = "facebook-icon";

var fbLink = document.createElement("a");
fbLink.href = "https://www.facebook.com/profile.php?id=100088127456293";
fbLink.target = "_blank";

var fbIconImg = document.createElement("i");
fbIconImg.className = "fab fa-facebook-square";

fbLink.appendChild(fbIconImg);
fbIcon.appendChild(fbLink);
document.body.appendChild(fbIcon);
// end of adding fb page

// adding fontawesome stylesheet to all pages head
var fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css";
document.head.appendChild(fontAwesomeLink);
// end of adding fontawesome

// monetag multi 
function monetagMulti() {
    let d = 'rouwhapt.com';
    let z = 5711309;

    let s = document.createElement('script');
    s.src = 'https://' + d + '/400/' + z;

    try {
        (document.body || document.documentElement).appendChild(s);
    } catch (e) {
        // handle error
    }
}
window.onload = function () {
    monetagMulti();
}
// end of multi

// adding adsterra social bar
// var adsterraSocialBar = document.createElement('script');
// adsterraSocialBar.type = 'text/javascript';
// adsterraSocialBar.src = '//pl18191454.highcpmrevenuenetwork.com/7c/15/70/7c15703359cb984a6f7721038814e486.js';
// document.body.appendChild(adsterraSocialBar);
// end of adding adsterra social bar

// adding adsterra native banner
const footerParent = document.querySelector("footer").parentNode;
const footer = document.querySelector("footer");
const adsterraNativeBannerScript = document.createElement("script");
adsterraNativeBannerScript.src = "//pl18191413.highcpmrevenuenetwork.com/863366fe232d0cb1c719b75fa0772d3f/invoke.js";
const adsterraNativeBannerDiv = document.createElement("div");
adsterraNativeBannerDiv.id = "container-863366fe232d0cb1c719b75fa0772d3f";
footerParent.insertBefore(adsterraNativeBannerScript, footer);
footerParent.insertBefore(adsterraNativeBannerDiv, footer);
// end of adsterra native banner

// adding adsterra native banner
const disclaimerParent = document.querySelector(".alert-message").parentNode;
const disclaimer = document.querySelector(".alert-message");
const adsterraNativeBannerScript2 = document.createElement("script");
adsterraNativeBannerScript2.src = "//pl18191413.highcpmrevenuenetwork.com/863366fe232d0cb1c719b75fa0772d3f/invoke.js";
const adsterraNativeBannerDiv2 = document.createElement("div");
adsterraNativeBannerDiv2.id = "container-863366fe232d0cb1c719b75fa0772d3f";
disclaimerParent.insertBefore(adsterraNativeBannerScript2, disclaimer);
disclaimerParent.insertBefore(adsterraNativeBannerDiv2, disclaimer);
// // <!-- adsterra native banner -->
// <script async="async" data-cfasync="false"
//     src="//pl18191413.highcpmrevenuenetwork.com/863366fe232d0cb1c719b75fa0772d3f/invoke.js"></script>
// <div id="container-863366fe232d0cb1c719b75fa0772d3f"></div> 
// end of adsterra native banner

// adding container with 2 col for 300x250 adsterra ad
// create container element with class "container"
const container = document.createElement("div");
container.classList.add("container");

// create row element with class "row"
const row = document.createElement("div");
row.classList.add("row");

// create first column element with class "col" and styles for width and height
const col1 = document.createElement("div");
col1.classList.add("col");
col1.style.width = "200px";
col1.style.height = "300px";

// create script element with the necessary options
const script1 = document.createElement("script");
script1.type = "text/javascript";
script1.innerHTML = "atOptions = { 'key': 'e16e6f5235ac5658269b0cc594173ff2', 'format': 'iframe', 'height': 250, 'width': 300, 'params': {} }; document.write('<scr' + 'ipt type=\"text/javascript\" src=\"http' + (location.protocol === 'https:' ? 's' : '') + '://www.effectivecreativeformat.com/e16e6f5235ac5658269b0cc594173ff2/invoke.js\"></scr' + 'ipt>');";

// append script1 to col1
col1.appendChild(script1);

// create second column element with class "col" and styles for width and height
const col2 = document.createElement("div");
col2.classList.add("col");
col2.style.width = "200px";
col2.style.height = "300px";

// create script element with the necessary options
const script2 = document.createElement("script");
script2.type = "text/javascript";
script2.innerHTML = "atOptions = { 'key': 'e16e6f5235ac5658269b0cc594173ff2', 'format': 'iframe', 'height': 250, 'width': 300, 'params': {} }; document.write('<scr' + 'ipt type=\"text/javascript\" src=\"http' + (location.protocol === 'https:' ? 's' : '') + '://www.effectivecreativeformat.com/e16e6f5235ac5658269b0cc594173ff2/invoke.js\"></scr' + 'ipt>');";

// append script2 to col2
col2.appendChild(script2);

// append col1 and col2 to row
row.appendChild(col1);
row.appendChild(col2);

// append row to container
container.appendChild(row);

// insert into the document
footerParent.insertBefore(container, footer);


// end of adding container with 2 col for 300x250 adsterra ad
