var uploadedImages = []; // 存储上传的照片

function handleImageUpload(event) {
  var files = event.target.files; // 获取上传的文件

  // 遍历上传的每个文件
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // 创建一个FileReader实例
    var reader = new FileReader();

    // 读取文件完成时的回调函数
    reader.onload = function (e) {
      var imageData = e.target.result; // 获取图片数据

      // 创建一个img元素来显示图片
      var imageElement = document.createElement('img');
      imageElement.src = imageData;

      // 将新上传的照片添加到数组的开头
      uploadedImages.unshift(imageElement);

      // 在HTML中显示照片
      displayImages();
    };

    // 读取文件
    reader.readAsDataURL(file);
  }
}

function displayImages() {
  var imageContainer = document.getElementById('image-gallery');
  imageContainer.innerHTML = ''; // 清空容器中的内容

  // 遍历uploadedImages数组并显示照片
  for (var i = 0; i < uploadedImages.length; i++) {
    imageContainer.appendChild(uploadedImages[i]);
  }
}

window.onload = displayImages
