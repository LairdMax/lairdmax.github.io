var imageContainer = document.getElementById('image-gallery');
var imageDirectory = 'images/'; // 图片文件夹路径

function loadImages() {
  fetch(imageDirectory)
    .then((response) => response.text())
    .then((html) => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      var links = doc.querySelectorAll('a');

      var imagePromises = [];

      // 遍历文件夹中的所有图片
      links.forEach((link) => {
        var fileName = link.getAttribute('href');

        // 筛选出图片文件
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

      // 等待所有图片加载完成
      Promise.all(imagePromises)
        .then((images) => {
          // 根据拍摄时间进行排序
          images.sort((a, b) => {
            var aTime = getExifDateTime(a.element);
            var bTime = getExifDateTime(b.element);

            return bTime - aTime;
          });

          // 显示排序后的照片和EXIF信息
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
