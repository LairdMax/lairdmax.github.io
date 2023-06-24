var imageContainer = document.getElementById('image-gallery');
var imageDirectory = 'images/'; // 图片文件夹路径

function loadImages() {
  fetch(imageDirectory)
    .then((response) => response.text())
    .then((html) => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      var links = doc.querySelectorAll('a');

      // 遍历文件夹中的所有图片
      links.forEach((link) => {
        var fileName = link.getAttribute('href');

        // 筛选出图片文件
        if (fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') || fileName.endsWith('.png')) {
          var image = document.createElement('img');
          image.src = imageDirectory + fileName;

          imageContainer.appendChild(image);
        }
      });
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

window.onload = loadImages;
