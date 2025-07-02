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

const space = document.getElementById("space"), balcony = document.getElementById("balcony"), courtyard = document.getElementById("courtyard"), furnished = document.getElementById("furnished");
const room = document.getElementById("room"), bathroom = document.getElementById("bathroom"), ice = document.getElementById("ice");
const water = document.getElementById("water"), electricity = document.getElementById("electricity");
const inputGroupSelectClean = document.getElementById("inputGroupSelectClean");
const inputGroupSelectArae = document.getElementById("inputGroupSelectArae"), inputGroupSelectDistrict = document.getElementById("inputGroupSelectDistrict");
const school = document.getElementById("school"), market = document.getElementById("market"), bas = document.getElementById("bas");
const sendData = document.querySelector(".sendDataBtn");


const getData = () => {
    const inputs = {
        theSpace: space.value,
        theBalcony: balcony.checked,
        theCourtyard: courtyard.checked,
        theFurnished: furnished.checked,
        theRoom: room.value,
        theBathroom: bathroom.value,
        theIce: ice.value,
        theClean: inputGroupSelectClean.value,
        theArae: inputGroupSelectArae.value,
        theDistrict: inputGroupSelectDistrict.value,
        theSchool: school.checked,
        theMarket: market.checked,
        theBas: bas.checked
    };

    if (
        inputs.theSpace !== "" &&
        inputs.theRoom !== "" &&
        inputs.theBathroom !== "" &&
        inputs.theIce !== ""
    ) {
        const Data = {
            space: inputs.theSpace,
            balcony: inputs.theBalcony,
            courtyard: inputs.theCourtyard,
            furnished: inputs.theFurnished,
            room: inputs.theRoom,
            bathroom: inputs.theBathroom,
            ice: inputs.theIce,
            cleanliness: inputs.theClean,
            area: inputs.theArae,
            district: inputs.theDistrict,
            school: inputs.theSchool,
            market: inputs.theMarket,
            bas: inputs.theBas
        };
        window.localStorage.setItem("houseData", JSON.stringify(Data));
        inputs.theSpace = "";
        inputs.theRoom = "";
        inputs.theBathroom = "";
        inputs.theIce = "";
    }
}

sendData.addEventListener("click", getData);
