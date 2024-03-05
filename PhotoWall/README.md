# Photos_Exif

照片放在images文件夹中，以image0.jpg命名



遍历 GitHub 上的图片资源需要通过 GitHub API 来获取仓库中的文件列表，并从中筛选出图片文件。然后，你可以使用 JavaScript 来动态生成 HTML 中的图片标签，避免手动写入大量的 <img> 标签。


<!DOCTYPE html>
<html>
<head>
  <title>GitHub Image Gallery</title>
</head>
<body>
  <div id="image-container"></div>

  <script>
    // GitHub API 请求地址
    const apiUrl = 'https://api.github.com/repos/username/repo/contents/path/to/images';

    // 使用 fetch 方法发送 GET 请求获取仓库中的文件列表
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // 筛选出图片文件
        const imageFiles = data.filter(file => file.type === 'file' && file.name.match(/\.(jpg|jpeg|png|gif)$/i));

        // 生成图片标签并添加到页面中
        const container = document.getElementById('image-container');
        imageFiles.forEach(file => {
          const imageElement = document.createElement('img');
          imageElement.src = file.download_url;
          imageElement.alt = file.name;
          container.appendChild(imageElement);
        });
      })
      .catch(error => {
        console.error('Error fetching image files:', error);
      });
  </script>
</body>
</html>



