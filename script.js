const mainImage = document.getElementById("display-img");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function() {
        mainImage.src = this.src;  // Change main image source
    });
});
