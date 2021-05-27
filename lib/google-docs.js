// GDOCS GLOBAL CONSTANTS
const GDOCS_IMG_OBJECT_CLASS = "kix-embeddedobject-image";
const GDOCS_IMG_CONTAINER_CLASS = "kix-embeddedobject-view";


// Google Docs - Insert image anchor into parent container
function insertImageAnchorToDocuments(image) {
  // skip if the imageContainer already has the imageLink object added by this plugin
  const imageContainer = image.closest(`.${GDOCS_IMG_CONTAINER_CLASS}`);
  if (imageContainer.querySelector(".imageLink") != null) return;

  // insert imageLink object
  //TODO: Not properly finding the 
  const imageURL = image.getElementsByTagName("image")[0].src;
  const imageHTML = `<a href="${imageURL}" target="_blank" class="imageLink"></a>`;
  imageContainer.insertAdjacentHTML("afterbegin", imageHTML);
}


// Find the images and store the object and image source
function findImagesOnDocs() {
  let images = document.getElementsByClassName(GDOCS_IMG_OBJECT_CLASS);
  for (let image of images) {
    insertImageAnchorToDocuments(image);
  }
}