MathJax.Hub.Config({
    config: ["MMLorHTML.js"],
    jax: ["input/TeX", "output/HTML-CSS", "output/NativeMML"],
    extensions: ["MathMenu.js", "MathZoom.js"]
});

MathJax.Hub.Config({
    config: ["MMLorHTML.js"],
    extensions: ["tex2jax.js"],
    jax: ["input/TeX", "output/HTML-CSS", "output/NativeMML"],
    tex2jax: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true,
        ignoreClass: ".*|",
        processClass: "arithmatex"
    },
});

const translate_size = 140
const carts = [...document.querySelectorAll('.feature-viz-intro .gallery-container-img')]

carts.map(car => {
    car.addEventListener("click", (event) => {
        // show little crops
        hidden_images = [...car.querySelectorAll(".hidden-images img")]
        hidden_images.map((img, i) => {
            theta = i * 2 * Math.PI / hidden_images.length
            if (img.style.transform == `translate(0px, 0px)` || img.style.transform == ``) {
                img.style.transform = `translate(${Math.cos(theta) * 140}px, ${Math.sin(theta) * 140}px)`
                console.log(`translate(${Math.cos(theta) * 140}px, ${Math.sin(theta) * 140}px)`)
                img.style.opacity = 1
            } else {
                img.style.transform = `translate(0px, 0px)`
                img.style.opacity = 0
            }
            console.log(img, theta)
            //img.style.transform = `translate(${'{'}Math.cos(theta) * translate_size{'}'}px, ${'{'}Math.sin(theta) * translate_size{'}'}px)`
        })
        // if possible, show the most similar classes
        let concept_id = car.id.split('-')[1]
        if (concept_id in concept_to_classes) {
            document.querySelector('.classes-proximity-info').innerHTML = concept_to_classes[concept_id]
            document.querySelector('.classes-proximity').style.borderColor = car.style.borderColor
            document.querySelector('.classes-proximity').style.opacity = 1.0
        } else {
            document.querySelector('.classes-proximity-info').innerHTML = ""
            document.querySelector('.classes-proximity').style.borderColor = "white"
            document.querySelector('.classes-proximity').opacity = 0.0
        }
        // remove the previous selected
        carts.map(c => {
            if (c.id != car.id) {
                // hide the little crops
                hidden_images = [...c.querySelectorAll(".hidden-images img")]
                hidden_images.map((img, i) => {
                    img.style.transform = `translate(0px, 0px)`
                    img.style.opacity = 0
                })
                // opacity on the other carts
                c.style.opacity = 0.25
            }
        });

    });
})

// on hover on some cart, hide the other little crops
carts.map(car => {
    car.addEventListener("mouseleave", (event) => {
        carts.map(c => {
            hidden_images = [...c.querySelectorAll(".hidden-images img")]
            hidden_images.map((img, i) => {
                img.style.transform = `translate(0px, 0px)`
                img.style.opacity = 0
            })
            // put the original opacity
            c.style.opacity = 1.0
        });
    });
})


const hide_image = () => {
    let img = document.getElementById("img-tooltip");
    let container = document.querySelector(".image-hover");

    container.style.display = "none";
}