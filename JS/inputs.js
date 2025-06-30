const h3s = document.querySelectorAll(".content div h3");
const checkboxs = document.querySelectorAll("div .checkbox");
const arrow = document.querySelector(".back");

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = window.localStorage.getItem("lang") || "ar";
    if (currentLang === "en") {
        window.document.dir = "ltr";
        h3s.forEach((el) => {
            el.dir = "ltr";
        });
        checkboxs.forEach((el) => {
            el.dir = "ltr";
        });
        document.body.style.fontFamily = "Poppins";
        arrow.style.transform = "rotate(180deg)";
    }
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[currentLang][key];
    });
});
