const langBtn = document.getElementById("changeLanguge");
const changeLangugeText = document.querySelector("#changeLanguge p");

function applyLanguage(lang) {
    document.body.style.fontFamily = lang === "en" ? "Poppins" : "IBM Plex Sans Arabic";
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    changeLangugeText.style.fontSize = lang === "en" ? "18px" : "14px";
    changeLangugeText.style.fontFamily = lang === "en" ? "IBM Plex Sans Arabic" : "Poppins";
    langBtn.style.width = lang === "en" ? "130px" : "180px";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
    localStorage.setItem("lang", lang);
    }
    document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem("lang") || "ar";
    applyLanguage(currentLang);
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "ar" ? "en" : "ar";
        applyLanguage(currentLang);
    });
});
