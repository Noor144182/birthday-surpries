
// ============================================================
// Birthday Surprise Website
// ============================================================


// ============================================================
// PAGE 1 → PAGE 2
// ============================================================

function showCake() {

    document.getElementById("page1").style.display = "none";

    document.getElementById("page2").style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createSprinkles("sprinkles2");
}



// ============================================================
// PAGE 2 → PAGE 3
// MEMORIES
// ============================================================

function showPhotos() {

    document.getElementById("page2").style.display = "none";

    document.getElementById("page3").style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createSprinkles("sprinkles3");
}



// ============================================================
// PAGE 3 → PAGE 4
// FINAL WISHES
// ============================================================

function showWishes() {

    document.getElementById("page3").style.display = "none";

    document.getElementById("page4").style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createSprinkles("sprinkles4");
}



// ============================================================
// CREATE COLORFUL SPRINKLES
// ============================================================

function createSprinkles(containerId) {

    const container =
        document.getElementById(containerId);


    if (!container) {

        return;

    }


    // Remove old sprinkles

    container.innerHTML = "";


    // Number of sprinkles

    let numberOfSprinkles;


    if (window.innerWidth < 600) {

        numberOfSprinkles = 350;

    } else {

        numberOfSprinkles = 700;

    }


    // Sprinkle colors

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


    // Create sprinkles

    for (
        let i = 0;
        i < numberOfSprinkles;
        i++
    ) {


        const sprinkle =
            document.createElement("div");


        sprinkle.classList.add(
            "sprinkle"
        );


        // Random horizontal position

        sprinkle.style.left =
            Math.random() * 100 + "%";


        // Random vertical position

        sprinkle.style.top =
            Math.random() * 100 + "%";


        // Random color

        sprinkle.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        // Random width

        const width =
            Math.random() * 6 + 4;


        // Random height

        const height =
            Math.random() * 12 + 8;


        sprinkle.style.width =
            width + "px";


        sprinkle.style.height =
            height + "px";


        // Random animation speed

        const duration =
            Math.random() * 8 + 5;


        sprinkle.style.animationDuration =
            duration + "s";


        // Random animation delay

        const delay =
            Math.random() * 8;


        sprinkle.style.animationDelay =
            delay + "s";


        // Random rotation

        sprinkle.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";


        // Add sprinkle to page

        container.appendChild(
            sprinkle
        );

    }

}



// ============================================================
// START PAGE 1 SPRINKLES
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createSprinkles(
            "sprinkles1"
        );

    }
);
