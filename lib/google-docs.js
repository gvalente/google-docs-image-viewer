// GDOCS GLOBAL CONSTANTS
const GDOCS_IMG_OBJECT_CLASS = "kix-embeddedobject-image";
const GDOCS_IMG_CONTAINER_CLASS = "kix-embeddedobject-view";


// Find the images and store the object and image source
function insertImageLinksToDocs() {
  let images = document.getElementsByClassName(GDOCS_IMG_OBJECT_CLASS);

  // Insert image anchor into each parent container
  for (let image of images) {
    // skip if the imageContainer already has the imageLink object added by this plugin
    const imageContainer = image.closest(`.${GDOCS_IMG_CONTAINER_CLASS}`);
    if (imageContainer.querySelector(".imageLink") != null) return;

    // insert imageLink object
    const imageURL = image.getElementsByTagName("image")[0].getAttribute("xlink:href");
    const imageHTML = `<a href="${imageURL}" target="_blank" class="imageLink"></a>`;
    imageContainer.insertAdjacentHTML("afterbegin", imageHTML);
  }
}

//TODO: can I private scope functions to this file so names are simpler?
//https://stackoverflow.com/questions/2421911/what-is-the-purpose-of-wrapping-whole-javascript-files-in-anonymous-functions-li