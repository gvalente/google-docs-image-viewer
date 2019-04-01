let images = new Map();

// Check if page is google docs
// can this be done from the manifest to only apply on googledocs domains?

// Create image menu overlay
//v1
// single button to view image in new tab

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

// find the images and store the object and image source
function findImageEmbeds() {
  const images = document.getElementsByClassName("kix-embeddedobject-image");
  const imageSourceURL = images[0]
    .getElementsByTagName("image")[0]
    .getAttribute("xlink:href");

  const imgContainer = images[0].closest(".goog-inline-block");
  const imgHTML = `<a href="${imageSourceURL}" target="_blank" class="imageLink"><p>View Image</p></a>`;
  imgContainer.insertAdjacentHTML("afterbegin", imgHTML);
}
window.addEventListener("load", () => findImageEmbeds(), false);

// <a href="https://lh4.googleusercontent.com/mYxq77dhBdiScIQ_Y1NqM0uUUdwA3XebNKFvR69qiyysexI_FV3lRtVaHvt1Zl9y8uiZU7qE2vZsHyo_E6FwYfDE2Dki7uCoKPTne7RifoxJhunSY8wyC95GgpS_IodZUZW-PEej" target="_blank" class="imageLink"><p>View Image</p></a>
