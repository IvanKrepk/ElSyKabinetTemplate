'use strict';

document.addEventListener('DOMContentLoaded', () => {

//#region DateRangePicker

$('#idDatePeriodReports').daterangepicker({
    startDate: moment().subtract(20, 'days'),
    endDate: moment(),
    autoUpdateInput: false,
    showCustomRangeLabel: false,
    startOfWeek: "monday",
    locale: {
    "format": "DD.MM.YYYY",
    "separator": " - ",
    "applyLabel": "Ок",
    "cancelLabel": "Назад",
    "daysOfWeek": [
        "Вс",
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб"
    ],
    "monthNames": [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ]
}});

let labelDateRange = document.querySelector("#idDateRangeTitle");

let dateRangePicker = $("#idDatePeriodReports").data('daterangepicker');
dateRangePicker.callback = function() { 
    let startDate = $("#idDatePeriodReports").data('daterangepicker').startDate.format("YYYY/MM/DD");
    let endDate = $("#idDatePeriodReports").data('daterangepicker').endDate.format("YYYY/MM/DD");

   labelDateRange.textContent = startDate + " - " + endDate;
}

let buttonDateRangeRefresh = document.querySelector(".daterangepicker_element_refresh");
buttonDateRangeRefresh.addEventListener('click', function() {
    labelDateRange.textContent = "Введите период";
});

//#endregion 

});