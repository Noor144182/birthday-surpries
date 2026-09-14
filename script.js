function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });

    const selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active");

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function showCake() {

    showPage("page2");

    createSprinkles("sprinkles2");

}


function showPhotos() {

    showPage("page3");

    createSprinkles("sprinkles3");

}


function showWishes() {

    showPage("page4");

    createSprinkles("sprinkles4");

}


function createSprinkles(containerId) {

    const container =
        document.getElementById(containerId);

    if (!container) {

        return;

    }

    container.innerHTML = "";

    let numberOfSprinkles;

    if (window.innerWidth < 600) {

        numberOfSprinkles = 350;

    } else {

        numberOfSprinkles = 700;

    }


    const colors = [
        "#ff4f9a",
        "#ff85b3",
        "#d63384",
        "#ffb3d1",
        "#c77dff",
        "#7b2cbf",
        "#ff6b6b",
        "#ffd166",
        "#06d6a0",
        "#4dabf7"
    ];


    for (
        let i = 0;
        i < numberOfSprinkles;
        i++
    ) {

        const sprinkle =
            document.createElement("div");

        sprinkle.classList.add("sprinkle");

        sprinkle.style.left =
            Math.random() * 100 + "%";

        sprinkle.style.top =
            Math.random() * 100 + "%";

        sprinkle.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        const width =
            Math.random() * 6 + 4;

        const height =
            Math.random() * 12 + 8;

        sprinkle.style.width =
            width + "px";

        sprinkle.style.height =
            height + "px";


        sprinkle.style.animationDuration =
            Math.random() * 8 + 5 + "s";


        sprinkle.style.animationDelay =
            Math.random() * 8 + "s";


        sprinkle.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";


        container.appendChild(sprinkle);

    }

}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        showPage("page1");

        createSprinkles("sprinkles1");

    }
);
