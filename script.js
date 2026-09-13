const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("quoteBtn");

button.addEventListener("click", function () {

    button.disabled = true;
    button.textContent = "Loading...";

    fetch("https://dummyjson.com/quotes/random")

        .then(function (response) {

            if (!response.ok) {
                throw new Error("Failed to fetch quote");
            }

            return response.json();
        })

        .then(function (data) {

            quote.textContent = data.quote;
            author.textContent = "— " + data.author;

        })

        .catch(function (error) {

            quote.textContent =
                "Unable to load quote. Please try again.";

            author.textContent = "— Error";

            console.log(error);

        })

        .finally(function () {

            button.disabled = false;
            button.textContent = "Get New Quote";

        });

});