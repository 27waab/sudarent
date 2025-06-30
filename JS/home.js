const langBtn = document.getElementById("changeLanguge");
const changeLangugeText = document.querySelector("#changeLanguge p");
let currentLang = "ar";

langBtn.addEventListener("click", () => {
    if (currentLang === "ar") {
        currentLang = "en";
        document.body.style.fontFamily = "Poppins";
        window.document.dir = "ltr";
        changeLangugeText.style.fontSize = "18px";
        changeLangugeText.style.fontFamily = "IBM Plex Sans Arabic";
        langBtn.style.width = "130px";
    } else if (currentLang === "en") {
        currentLang = "ar";
        document.body.style.fontFamily = "IBM Plex Sans Arabic";
        window.document.dir = "rtl";
        changeLangugeText.style.fontSize = "14px";
        changeLangugeText.style.fontFamily = "Poppins";
        langBtn.style.width = "180px";
    }
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[currentLang][key];
    });
    window.localStorage.setItem("lang", currentLang);
})
