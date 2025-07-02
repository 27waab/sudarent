const priceInPage = document.querySelector("h1");

const countPrice = (data) => {
    const theSpace = data.space;
    const priceOfSpace = theSpace * 1500;

    let totalPercentage = 0;
    if (data.balcony) totalPercentage += 2;
    if (data.courtyard) totalPercentage += 3;
    if (data.school) totalPercentage += 1;
    if (data.market) totalPercentage += 1;
    if (data.bas) totalPercentage += 1;
    if (data.furnished) totalPercentage += 12;

    if (!data.water) totalPercentage -= 10;
    if (!data.electricity) totalPercentage -= 8;

    const cleanlinessEffect = (5 - data.cleanliness) * 1.5;
    totalPercentage += cleanlinessEffect;
    const districtEffect = (5 - data.district) * 1.5;
    totalPercentage += districtEffect;
    const areaEffect = (5 - data.area) * 1.5;
    totalPercentage += areaEffect;
    const roomEffect = (data.room > 1) ? (data.room - 1) * 2 : 0;
    totalPercentage += roomEffect;
    const bathroomEffect = (data.bathroom > 1) ? (data.bathroom - 1) * 1.5 : 0;
    totalPercentage += bathroomEffect;
    const acEffect = data.ice * 1;
    totalPercentage += acEffect;

    const finalPrice = Math.round(priceOfSpace + (priceOfSpace * (totalPercentage / 100)));
    priceInPage.textContent = finalPrice.toLocaleString('en-US').replace(/,/g, ',');
}

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = window.localStorage.getItem("lang") || "ar";

    if (currentLang === "en") {
        window.document.dir = "ltr";
        document.body.style.fontFamily = "Poppins";
    }
    
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[currentLang][key];
    });
    const dataInLocal = JSON.parse(window.localStorage.getItem("houseData"));
    console.log(dataInLocal);
    countPrice(dataInLocal);
});