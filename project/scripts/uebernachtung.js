var nextYear= new Date();
nextYear.setFullYear(new Date().getFullYear() + 1);

document.addEventListener("DOMContentLoaded", function () {
    var calendars = document.querySelectorAll("#calendar");
    calendars.forEach(function (calendar) {
        calendar.setAttribute("min", new Date().toISOString().split("T")[0]);
        calendar.setAttribute("max", nextYear.toISOString().split("T")[0]);
    });
});
