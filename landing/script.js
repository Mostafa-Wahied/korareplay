function searchFunction() {
    // declare variables
    var input, filter, card, headers, headerText, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    card = document.getElementById("card-row");
    headers = card.getElementsByClassName('card-header');
    console.log(headers)

    // loop through all card headers, and hide those who don't match the search query
    for (i = 0; i < headers.length; i++) {
        headerText = headers[i].innerText;
        console.log(headerText)
        txtValue = headerText.innerText || headerText.textContent;
        if (input.value.length === false) {
            headers[i].style.display = "";
        } else {
            headers[i].style.display = "none";
        }
    }
}