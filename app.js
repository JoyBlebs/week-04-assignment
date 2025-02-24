console.log("Here's my output");

let imageIndex = 0;

const thumbnailContainer = document.getElementById("thumbnail-container");
const backgroundImage = document.getElementById("background-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const images = [
  {
    src: "./images/street-one.jpg",
    alt: "woman with yellow umbrella standing under a Chase Chicago sign",
  },
  {
    src: "./images/street-two.jpg",
    alt: "a black Mercedez Benz e220d on a highstreet on a snowy day",
  },
  {
    src: "./images/street-three.jpg",
    alt: "side view of an orange-red 1971 Chevrolette Chevelle outside a cafe",
  },
  {
    src: "./images/street-four.jpg",
    alt: "two people walking on the pavement under a leafless tree in front of a cafe",
  },
  {
    src: "./images/street-five.jpg",
    alt: "several motocycles on a busy street in front of a colourful vietnamese restaurant",
  },
];

function createThumbnails() {
  console.log("createThumbnails invoked!");

  for (let i = 0; i < images.length; i++) {
    const imgTag = document.createElement("img");
    imgTag.src = images[i].src;
    imgTag.alt = images[i].alt;

    imgTag.addEventListener("click", function () {
      createBackgroundImage(images[i]);
      imageIndex = i;
    });

    thumbnailContainer.appendChild(imgTag);
  }
}

function createBackgroundImage(currentImage) {
  backgroundImage.style.backgroundImage = `url(${currentImage.src})`;
  backgroundImage.style.backgroundSize = "cover";
  backgroundImage.style.backgroundPosition = "center";
  backgroundImage.style.transition = "background-image 0.5s ease-in-out";

  console.log("The thing passed in is", currentImage);
}

prevButton.addEventListener("click", function () {
  imageIndex = imageIndex > 0 ? imageIndex - 1 : images.length - 1;
  updateBackgroundImage();
});

nextButton.addEventListener("click", function () {
  imageIndex = imageIndex < images.length - 1 ? imageIndex + 1 : 0;
  updateBackgroundImage();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    imageIndex = imageIndex < images.length - 1 ? imageIndex + 1 : 0;
    updateBackgroundImage();
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    imageIndex = imageIndex > 0 ? imageIndex - 1 : images.length - 1;
    updateBackgroundImage();
  }
});

function updateBackgroundImage() {
  createBackgroundImage(images[imageIndex]);
}

createThumbnails();
