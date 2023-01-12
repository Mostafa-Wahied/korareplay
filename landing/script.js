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