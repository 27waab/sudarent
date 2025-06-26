const langBtn = document.getElementById("changeLanguge");
let currentLang = "ar";

langBtn.addEventListener("click", () => {
    if (currentLang === "ar") {
        currentLang = "en";
        document.body.style.fontFamily = "Poppins";
    } else if (currentLang === "en") {
        currentLang = "ar";
        document.body.style.fontFamily = "IBM Plex Sans Arabic";
    }
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[currentLang][key];
    });
    window.localStorage.setItem("lang", currentLang);
})
