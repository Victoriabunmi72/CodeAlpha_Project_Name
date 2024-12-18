// Select elements

const images = document.querySelectorAll(".gallery img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Function to show the image based on the current index

function showImage(index) {
    // Remove active class from all images
    images.forEach((img) => img.classList.remove("active"));
    // Add active to the current image
    images[index].classList.add("active");

    // Show the initial image
    showImage(currentIndex);
}

// Event listeners for navigation
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex -1 + images.length) % images.length;
    showImage(currentIndex);
});

nextButton.addEventListener("click",() => {
    currentIndex = (currentIndex + 1) % imagesq.length;
    showImage(currentIndex);
});