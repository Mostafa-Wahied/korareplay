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
var div = document.createElement("div");
div.className = "fb-customerchat";
div.setAttribute("page_id", "113064408307589");
div.setAttribute("ref", "OPTIONAL_REFERENCE_PARAMETER");
document.body.appendChild(div);
// end of adding the fb plugin