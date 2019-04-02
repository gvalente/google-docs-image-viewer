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

  // skip if the imageContainer already has the imageLink object
  if (imageContainer.querySelector(".imageLink") != null) return;

  // insert imageLink object
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

// Initiate after initial assets have loaded
window.addEventListener(
  "load",
  () => {
    findImageEmbeds();
    // Recheck for images because gDocs lazy loads images on scroll
    setInterval(findImageEmbeds, 10000);
  },
  false
);
