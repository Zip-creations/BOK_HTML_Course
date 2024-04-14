var nextYear= new Date();
nextYear.setFullYear(new Date().getFullYear() + 1);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calendar").setAttribute("min", new Date().toISOString().split("T")[0]);
    document.getElementById("calendar").setAttribute("max", nextYear.toISOString().split("T")[0]);
});
