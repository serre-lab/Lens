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

// change class for images (twoe elements per column to 4 elements per column on click)
button = document.querySelector('.md-button.columns')
button.addEventListener('click', function () {
    var images = document.querySelectorAll('.feature-viz-intro .gallery-container-img');
    for (var i = 0; i < images.length; i++) {
        images[i].classList.toggle('four-columns');
    }
})