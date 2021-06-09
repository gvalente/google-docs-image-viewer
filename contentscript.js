// Global constants
const GOOGLE_PRODUCTS = {
  DOCUMENT: 'documents',
  SHEETS: 'sheets'
};

// Get the image URL from the GDOCS_IMG_OBJECT_CLASS
function getImageURL(image) {
  return image.getElementsByTagName("image")[0].src;
}

// Identify which google product you're currently on by URL
//TODO: optimize to only call the proper product function instead of looping through all logic ever interval
function initiateCurrentGoogleProduct(currentURL) {
  if (currentURL.indexOf('document') !== -1) {
    insertImageLinksToDocs();
  } else if (currentURL.indexOf('spreadsheets') !== -1) {
    insertImageLinksToSheets();
  } else {
    console.log('Unable to identify product from URL: ' + currentURL);
  }
}


// Initiate after initial assets have loaded
window.addEventListener(
  "load",
  () => {
    const currentURL = location.href;
    // TODO: Filter out domain for home directory
    initiateCurrentGoogleProduct(currentURL);

    // Recheck for images because gDocs lazy loads images on scroll
    setInterval(
      () => {
        initiateCurrentGoogleProduct(currentURL);
      },
      8000);
  },
  false
);