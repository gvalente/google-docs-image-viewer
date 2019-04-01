let images = new Map();
const GDOCS_IMG_OBJECT_CLASS = "kix-embeddedobject-image";
const GDOCS_IMG_CONTAINER_CLASS = "goog-inline-block";

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
  let images = document.getElementsByClassName(GDOCS_IMG_OBJECT_CLASS);
  for (let image of images) {
    insertImageLinkAnchor(image);
  }
}

// Initiate after all assets have loaded
window.addEventListener("load", () => findImageEmbeds(), false);
