// search function
function searchFunction() {
    // declare variables
    var input, filter, card, headers, headerText, txtValue;
    input = document.getElementById('search-input');
    card = document.getElementById("card-row");
    headers = card.getElementsByClassName('card-header');
    // loop through all card headers, and hide those who don't match the search query
    for (i = 0; i < headers.length; i++) {
        headerText = headers[i].innerText.toLowerCase();
        // console.log(headerText)
        txtValue = headerText.innerText || headerText.textContent;
        if (!headerText.includes(input.value)) {
            headers[i].parentElement.parentElement.parentElement.style.display = "none";
        } else {
            headers[i].parentElement.parentElement.parentElement.style.display = "";
        }
    }
}
// end of search function

// pagination function
function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

$(function () {
    var numberOfItems = $(".card-row .col").length;
    var limitPerPage = 16; //how many card items visible per page
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 5; //how many page visible in pagination
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".card-row .col").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".paginations li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots").toggleClass("active", item === currentPage).append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
        });

        $(".previous-page").toggleClass("disable", currentPage === 1);
        $(".next-page").toggleClass("disable", currentPage === totalPages);
        return true;
    }

    $(".paginations").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
    );

    $(".card-row").show();
    showPage(1);

    $(document).on("click", ".paginations li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".next-page").on("click", function () {
        return showPage(currentPage + 1);
    })
    $(".previous-page").on("click", function () {
        return showPage(currentPage - 1);
    })
});
// end of pagination function


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

// adding adsterra social bar
// var adsterraSocialBar = document.createElement('script');
// adsterraSocialBar.type = 'text/javascript';
// adsterraSocialBar.src = '//pl18191454.highcpmrevenuenetwork.com/7c/15/70/7c15703359cb984a6f7721038814e486.js';
// document.body.appendChild(adsterraSocialBar);
// end of adding adsterra social bar



// let cards = document.querySelectorAll('.card');
// cards.forEach(card => {
//     const date = new Date(card.querySelector('.card-footer').textContent);
//     console.log(date);
// });
// function createCarousel() {
//     // Get the container element
//     const container = document.querySelector('.container.mt-3');

//     // Create a new div element for the carousel
//     const carouselContainer = document.createElement('div');
//     carouselContainer.classList.add('carousel-container');

//     // Insert the carousel container before the card-row container
//     container.insertBefore(carouselContainer, container.firstChild);

//     // Get all the card-footer elements 
//     const cardFooters = document.querySelectorAll('.card-footer');

//     // Create an array to hold the cards
//     const cards = [];

//     // Iterate over the card-footer elements
//     cardFooters.forEach(cardFooter => {
//         // Get the parent element of the card-footer (the card element)
//         let card = cardFooter.parentElement.parentElement.parentElement;
//         // Get the date from the card-footer text content
//         let date = new Date(cardFooter.textContent);
//         // Add the card element and date to the cards array
//         cards.push({ card, date });

//     });
//     // Sort the cards by date (most recent first)
//     cards.sort((a, b) => b.date - a.date);

//     // Get the 8 most recent cards
//     const recentCards = cards.slice(0, 8);

//     // Add each recent card to the carousel
//     recentCards.forEach(card => {
//         carouselContainer.appendChild(card.card);
//     });
// }

// // Call the function when the DOM is loaded
// document.addEventListener("DOMContentLoaded", createCarousel);

