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

let labelDateRange = document.querySelector("#idDatePeriodReports");
labelDateRange.style.color = "gray";

let dateRangePicker = $("#idDatePeriodReports").data('daterangepicker');
dateRangePicker.callback = function() {
    let lblReportsDatePeriod = document.querySelector("#idDatePeriodReports");
    
    let startDate = $("#idDatePeriodReports").data('daterangepicker').startDate.format("YYYY/MM/DD");
    let endDate = $("#idDatePeriodReports").data('daterangepicker').endDate.format("YYYY/MM/DD");

    lblReportsDatePeriod.textContent = startDate + " - " + endDate;
    labelDateRange.style.color = "black";
}

let buttonDateRangeRefresh = document.querySelector("#idDatePeriodRefresh");
buttonDateRangeRefresh.addEventListener('click', function() {
    labelDateRange.textContent = "Введите период";
    labelDateRange.style.color = "gray";
});

//#endregion 

});