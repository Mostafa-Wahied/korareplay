function searchFunction() {
    // declare variables
    var input, filter, card, headers, headerText, txtValue;
    input = document.getElementById('search-input');
    card = document.getElementById("card-row");
    headers = card.getElementsByClassName('card-header');

    // console.log(headers);
    // console.log(input.value);

    // loop through all card headers, and hide those who don't match the search query
    for (i = 0; i < headers.length; i++) {
        headerText = headers[i].innerText;
        // console.log(headerText)
        txtValue = headerText.innerText || headerText.textContent;
        if (!headerText.includes(input.value)) {
            headers[i].parentElement.style.display = "none";
        } else {
            headers[i].parentElement.style.display = "";
                }
    }
}