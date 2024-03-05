var imageContainer = document.getElementById('image-gallery');
var imageDirectory = 'images/';

function loadImages() {
  fetch(imageDirectory)
    .then((response) => response.text())
    .then((html) => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      var links = Array.from(doc.querySelectorAll('a'));

      var imagePromises = links
        .filter((link) => isImageFile(link.getAttribute('href')))
        .map((link) => {
          var fileName = link.getAttribute('href');
          var imageUrl = imageDirectory + fileName;
          return loadImage(imageUrl)
            .then((image) => {
              var exifData = getExifData(image);
              return {
                element: image,
                src: image.src,
                exifData: exifData
              };
            })
            .catch((error) => {
              console.log('Failed to load image:', imageUrl);
              console.log(error);
              return null;
            });
        });

      Promise.all(imagePromises)
        .then((images) => {
          images = images.filter((image) => image !== null);
          images.sort((a, b) => compareExifDateTime(a.exifData, b.exifData));

          images.forEach((image) => {
            var container = createImageContainer(image.src);
            var exifInfo = createExifInfo(image.exifData);

            container.appendChild(image.element);
            container.appendChild(exifInfo);
            imageContainer.appendChild(container);
          });
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

function isImageFile(fileName) {
  return /\.(jpg|jpeg|png)$/i.test(fileName);
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    var image = new Image();
    image.onload = function () {
      resolve(image);
    };
    image.onerror = function () {
      reject(new Error('Failed to load image: ' + url));
    };
    image.src = url;
  });
}

function getExifData(image) {
  return EXIF.getAllTags(image);
}

function compareExifDateTime(a, b) {
  var aTime = getExifDateTime(a);
  var bTime = getExifDateTime(b);
  return bTime - aTime;
}

function getExifDateTime(exifData) {
  var dateTime = exifData.DateTimeOriginal || exifData.DateTimeDigitized || exifData.DateTime;
  return dateTime ? Date.parse(dateTime) : 0;
}

function createImageContainer(src) {
  var container = document.createElement('div');
  container.classList.add('image-container');

  var imgElement = document.createElement('img');
  imgElement.src = src;

  container.appendChild(imgElement);

  return container;
}

function createExifInfo(exifData) {
  var exifInfo = document.createElement('p');
  exifInfo.textContent = JSON.stringify(exifData, null, 2);

  return exifInfo;
}

window.onload = loadImages;
