'use strict';

document.addEventListener("DOMContentLoaded", function() {

    let accountsListsElements = document.querySelectorAll(".accounts-list");

    accountsListsElements.forEach(accountsListElement => {
        let filter = accountsListElement.querySelector(".accounts-list-filter")
        let filterSvg = filter.querySelector("svg");
        let filterInput = filter.querySelector("input");
        let accountsList = accountsListElement.querySelector("ul");
        let accountsListItems = accountsList.querySelectorAll("li");
        
        let accountsCount = accountsListElement.querySelector(".accounts-number");
        accountsCount.textContent = accountsListItems.length; 

        let placeholderInterval;

        filterInput.addEventListener("focus", () => {
            filterSvg.style.fill = "black";

            let colorPlaceholder = "black";
            filterInput.style.setProperty("--colorPlaceholer", colorPlaceholder);
            placeholderInterval = setInterval(() => {
                if (colorPlaceholder == "black") {
                    colorPlaceholder = "transparent";
                } else {
                    colorPlaceholder = "black";
                }
                filterInput.style.setProperty("--colorPlaceholer", colorPlaceholder);
            }, 400);   
        });

        filterInput.addEventListener("blur", () => {
            filterSvg.style.fill = "var(--palette-text-not-enable)";
            clearInterval(placeholderInterval);
            filterInput.style.setProperty("--colorPlaceholer", "var(--palette-text-not-enable)");
        });

        filterInput.addEventListener("input", (event) => {
            let filterText = event.target.value;
            let regularExpAccountsFilter = new RegExp("(^" + filterText + ")");

            accountsListItems.forEach(item => {
                let itemText = item.textContent;
                let regExpAccountNumber = new RegExp("(\\d)*", "g");
                let accountNumber = itemText.match(regExpAccountNumber)[0];

                let regExpFilterResult = accountNumber.match(regularExpAccountsFilter);
                if (regExpFilterResult == null) {
                    item.classList.add("hidden");
                } else {
                    item.classList.remove("hidden");
                }
            });

            let accountsCountNew = 0;
            accountsListItems.forEach(item => {
                if (!item.classList.contains("hidden")) {
                    accountsCountNew++;
                }
            });
            accountsCount.textContent = accountsCountNew;
        });
    });

});