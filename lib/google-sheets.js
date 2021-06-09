// GSHEETS GLOBAL CONSTANTS
const GSHEETS_IMG_CONTAINER_CLASS = "waffle-borderless-embedded-object-container";

// Insert image anchor into parent containers floating above cells
function insertToFloatingImages() {
  let imageContainers = document.getElementsByClassName(GSHEETS_IMG_CONTAINER_CLASS);

  for (let imageContainer of imageContainers) {
    // skip if the imageContainer already has the imageLink object added by this plugin
    if (imageContainer.querySelector(".imageLink") != null) return;

    // insert imageLink object
    // const imageURL = imageContainer.getElementsByTagName('img')[0].getAttribute("xlink:href");
    const imageURL = imageContainer.getElementsByTagName('img')[0].src;
    const imageHTML = `<a href="${imageURL}" target="_blank" class="imageLink"></a>`;
    imageContainer.insertAdjacentHTML("afterbegin", imageHTML);
  }
}

// Insert image anchor into parent containers within cells
function insertToCellImages() {
  let allImages = document.getElementsByTagName("img");
  for (let image of allImages) {

    image.parentNode
    // check if parent of image is a div, and it's parent is a td
    // get imageURL
    // insert imageURL
  }
}


// Find all images types
function insertImageLinksToSheets() {
  insertToFloatingImages();
  // insertToCellImages();
}