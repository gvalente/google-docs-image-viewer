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
function initiateCurrentGoogleProduct() {
  const currentURL = location.href;

  if (currentURL.indexOf('document') !== -1) {
    // return GOOGLE_PRODUCTS.DOCUMENT;
    findImagesOnDocs();
  } else if (currentURL.indexOf('spreadsheets') !== -1) {
    // return GOOGLE_PRODUCTS.DOCUMENT;
    findImagesOnSheets();
  } else {
    console.log('Unable to identify product from URL: ' + currentURL);
  }
  // TODO: Filter out domain for home directory
}

// Initiate after initial assets have loaded
window.addEventListener(
  "load",
  () => {
    initiateCurrentGoogleProduct();
    //TODO: optimize to only call the proper product function

    // Recheck for images because gDocs lazy loads images on scroll
    setInterval(initiateCurrentGoogleProduct(), 8000);
  },
  false
);