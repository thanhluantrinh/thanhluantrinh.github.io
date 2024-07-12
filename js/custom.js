// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

(function scrollToSection() {
    var targetSection = document.getElementById("whoWeAre");
    targetSection.scrollIntoView({ behavior: 'smooth' });
})();