'use strict';

let elsyDropdowns = document.querySelectorAll(".elsy-dropdown");
    elsyDropdowns.forEach(elsyDropDown => {
        let isFocused = false;
        let elsyDropDownSelected = elsyDropDown.querySelector(".dropdown-current");
        let elsyDropDownButton = elsyDropDown.querySelector("button");
        let elsyDropDownArrow = elsyDropDownButton.querySelector(".dropdown-arrow");
        let elsyDropDownList = elsyDropDown.querySelector(".dropdown-list");
        let elsyDropDownListItems = elsyDropDownList.querySelectorAll("li");

        elsyDropDownList.style.borderTopLeftRadius = "0px";
        elsyDropDownList.style.borderTopRightRadius = "0px";

        const toggleArrow = () => {
            if (elsyDropDownList.classList.contains("hidden")) {
                elsyDropDownArrow.style.borderRight = "var(--arrow-size) solid transparent";
                elsyDropDownArrow.style.borderLeft = "var(--arrow-size) solid transparent";
                elsyDropDownArrow.style.borderTop = "var(--arrow-size) solid black";
                elsyDropDownArrow.style.borderBottom = "none";
            } else {
                elsyDropDownArrow.style.borderRight = "var(--arrow-size) solid transparent";
                elsyDropDownArrow.style.borderLeft = "var(--arrow-size) solid transparent";
                elsyDropDownArrow.style.borderTop = "none";
                elsyDropDownArrow.style.borderBottom = "var(--arrow-size) solid black";
            }
        };

        const toggleDropdown = (toHide = null) => {
            (toHide == null) ? elsyDropDownList.classList.toggle("hidden") : 
                elsyDropDownList.classList.toggle("hidden", toHide);

            toggleArrow();

            if (elsyDropDownList.classList.contains("hidden")) {
                elsyDropDownButton.style.borderBottomWidth = "0px";
                elsyDropDownList.style.borderTopWidth = "1px";
                elsyDropDown.style.borderBottomLeftRadius = "var(--border-radius)";
                elsyDropDown.style.borderBottomRightRadius = "var(--border-radius)";
                elsyDropDownButton.style.borderBottomLeftRadius = "var(--border-radius)";
                elsyDropDownButton.style.borderBottomRightRadius = "var(--border-radius)"; 
            } else {
                elsyDropDownButton.style.borderBottomWidth = "0px";    
                elsyDropDownList.style.borderTopWidth = "0px";  
                elsyDropDown.style.borderBottomLeftRadius = "0px";
                elsyDropDown.style.borderBottomRightRadius = "0px";  
                elsyDropDownButton.style.borderBottomLeftRadius = "0px";
                elsyDropDownButton.style.borderBottomRightRadius = "0px"; 
            }
        };

        elsyDropDownButton.addEventListener("click", () => {
            toggleDropdown();
            elsyDropDown.style.borderColor = "var(--color-border-focused)";
            elsyDropDownList.style.borderColor = "var(--color-border-focused)";
        });

        elsyDropDownButton.addEventListener("blur", () => {
            isFocused = false;
            setTimeout(() => { 
                toggleDropdown(true); 
                if (!isFocused) {
                    elsyDropDown.style.borderColor = "var(--color-border)";
                    elsyDropDownList.style.borderColor = "var(--color-border)";
                }
            }, 150);
        });

        elsyDropDownListItems.forEach(item => {
            item.addEventListener("click", () => {
                elsyDropDownSelected.textContent = item.textContent;
                isFocused = true;
                elsyDropDownButton.focus();
            })
        });
    });