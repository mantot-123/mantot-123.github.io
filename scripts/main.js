// SHUFFLE BETWEEN BACKGROUNDS UPON LOADING THE PAGE
function selectBackground() {
    const backgrounds = [
        "images/backgrounds/Canada, Manitoba, Wapusk National Park, aurora borealis.jpg",
        "images/backgrounds/Manila Skyline at Night.jpg",
        "images/backgrounds/Tarantula nebula.jpg",
        "images/backgrounds/China, Guangxi, rice fileds and mountains, sunset.jpg",
        "images/backgrounds/Sunset over the swamp, Okavango Delta, Botswana.jpg"
    ];

    const element = document.getElementsByTagName("body")[0];
    const randomBg =  backgrounds[Math.floor(Math.random() * backgrounds.length)];
    element.style.backgroundImage = `url("${randomBg}")`;
}

selectBackground();