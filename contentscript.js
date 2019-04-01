let images = new Map();
const GDOCS_IMG_OBJECT_CLASS = "kix-embeddedobject-image";
const GDOCS_IMG_CONTAINER_CLASS = "kix-embeddedobject-view";

// Get the image URL from the GDOCS_IMG_OBJECT_CLASS
function getImageURL(image) {
  return image.getElementsByTagName("image")[0].getAttribute("xlink:href");
}

// Insert image anchor into parent container
function insertImageLinkAnchor(image) {
  const imageContainer = image.closest(`.${GDOCS_IMG_CONTAINER_CLASS}`);
  const imageURL = getImageURL(image);
  const imageHTML = `<a href="${imageURL}" target="_blank" class="imageLink"></a>`;
  imageContainer.insertAdjacentHTML("afterbegin", imageHTML);
}

// Find the images and store the object and image source
function findImageEmbeds() {
  //TODO: 1
  let images = document.getElementsByClassName(GDOCS_IMG_OBJECT_CLASS);
  for (let image of images) {
    insertImageLinkAnchor(image);
  }
}

// Initiate after all assets have loaded
window.addEventListener("load", findImageEmbeds(), false);

//TODO 1: Not finding images when they are in bulleted lists or tables
// standalone: https://docs.google.com/document/d/1T570Ldo_PcOhL4jNHDOAc4TUnGct2cJw-D7cba6aYec/edit
// lists: https://docs.google.com/document/d/1qZQEd1cDHPBxGHZ5I15kFIoyxjFdn7cBlEVxYoUZgnU/edit
// tables: https://docs.google.com/document/d/18gKe4HfBRnL75ouNO5S5MP7xt72QF_xJjo0fmEjuvw0/edit
