// const galleryImages = document.querySelectorAll(".gallery img");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");

// let currentIndex = 0;

// // Function to update the gallery display
// function updateGallery(index) {
//     galleryImages.forEach((img, i) => {
//         if (i === index) {
//             img.classList.add("active");
//             img.classList.remove("hidden");
//         } else {
//             img.classList.add("hidden");
//             img.classList.remove("active");
//         }
//     });
// }

// // Event listener for the Previous button
// prevButton.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
//     updateGallery(currentIndex);
// });

// // Event listener for the Next button
// nextButton.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % galleryImages.length;
//     updateGallery(currentIndex);
// });

// // Initialize the gallery display
// updateGallery(currentIndex);


const galleryImages = document.querySelectorAll(".gallery img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function updateGallery(index) {
    galleryImages.forEach((img, i) => {
        img.classList.toggle("active", i === index);
        img.classList.toggle("hidden", i !== index);
    });
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery(currentIndex);
});

nextButton.addEventListener("click", () => {
    if (currentIndex === galleryImages.length - 1) {
        window.location.href = "end.html"; // Redirect to the thank-you page
    } else {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateGallery(currentIndex);
    }
});