var imageContainer = document.getElementById('image-gallery');
var imageDirectory = 'images/';

function loadImages() {
  fetch(imageDirectory)
    .then((response) => response.text())
    .then((html) => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      var links = doc.querySelectorAll('a');

      var imagePromises = [];

      links.forEach((link) => {
        var fileName = link.getAttribute('href');

        if (fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') || fileName.endsWith('.png')) {
          var imagePromise = new Promise((resolve, reject) => {
            var image = new Image();
            image.onload = function () {
              resolve({ element: image, src: image.src });
            };
            image.onerror = function () {
              reject(new Error('Failed to load image: ' + image.src));
            };
            image.src = imageDirectory + fileName;
          });

          imagePromises.push(imagePromise);
        }
      });

      Promise.all(imagePromises)
        .then((images) => {
          images.sort((a, b) => {
            var aTime = getExifDateTime(a.element);
            var bTime = getExifDateTime(b.element);
            return bTime - aTime;
          });

          images.forEach((image) => {
            var container = document.createElement('div');
            container.classList.add('image-container');

            var imgElement = document.createElement('img');
            imgElement.src = image.src;

            var exifInfo = document.createElement('p');
            exifInfo.textContent = getExifDataString(image.element);

            container.appendChild(imgElement);
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

function getExifDateTime(image) {
  var exifData = EXIF.getAllTags(image);
  var dateTime = exifData.DateTimeOriginal || exifData.DateTimeDigitized || exifData.DateTime;
  return dateTime ? Date.parse(dateTime) : 0;
}

function getExifDataString(image) {
  var exifData = EXIF.pretty(image);
  return exifData;
}

window.onload = loadImages;
