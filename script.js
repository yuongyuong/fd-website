document.addEventListener("DOMContentLoaded", function () {
    const fruits = document.querySelectorAll(".falling-fruit");

    function startFallingAnimation() {
        fruits.forEach((fruit, index) => {
            fruit.style.animationDelay = `${index * 1}s`;
        });
    }

    startFallingAnimation();

    // Button interaction
    const ctaButton = document.querySelector(".cta");
    ctaButton.addEventListener("click", function () {
        alert("Explore Our Products coming soon!");
    });
});
