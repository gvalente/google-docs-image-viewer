let images = new Map();
const GDOCS_IMG_OBJECT_CLASS = "kix-embeddedobject-image";
const GDOCS_IMG_CONTAINER_CLASS = "goog-inline-block";

// Check if page is google docs
// can this be done from the manifest to only apply on googledocs domains?

//v2
// button to view image in shadowbox
// import shadowbox
// button to download image

// Scan for all images within the document
// get image source
// append hidden image menu onto image

// check if a url is a google docs
// function isGDOCurl(url) {
//   return url.indexOf("docs.google.com") !== -1;
// }

// Get the image URL from the GDOCS_IMG_OBJECT_CLASS
function getImageURL(image) {
  return image.getElementsByTagName("image")[0].getAttribute("xlink:href");
}

// Insert anchor into parent container
function insertAnchor(image) {
  const imageContainer = image.closest(`.${GDOCS_IMG_CONTAINER_CLASS}`);
  const imageURL = getImageURL(image);
  const imageHTML = `<a href="${imageURL}" target="_blank" class="imageLink"><p>View Image</p></a>`;
  imageContainer.insertAdjacentHTML("afterbegin", imageHTML);
}

// find the images and store the object and image source
function findImageEmbeds() {
  const images = document.getElementsByClassName(GDOCS_IMG_OBJECT_CLASS);
  const imageSourceURL = images[0]
    .getElementsByTagName("image")[0]
    .getAttribute("xlink:href");

  insertAnchor(images[0]);
}
window.addEventListener("load", () => findImageEmbeds(), false);
