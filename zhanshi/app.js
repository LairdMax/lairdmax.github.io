new Vue({
  el: '#app',
  data: {
    photos: []
  },
  mounted() {
    this.fetchPhotos();
  },
  methods: {
    fetchPhotos() {
      const apiUrl = 'https://api.github.com/repos/lairdmax/lairdmax.github.io/contents/images';
      // 使用实际的GitHub用户名和存储照片的仓库替换上述的"username/repo"
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          this.photos = data.map(photo => ({
            id: photo.name,
            url: photo.download_url,
            name: photo.name,
            showExif: false,
            exif: {}
          }));
        });
    },
    showExif(photo) {
      photo.showExif = !photo.showExif;
      if (photo.showExif && Object.keys(photo.exif).length === 0) {
        this.fetchExif(photo);
      }
    },
    fetchExif(photo) {
      // 使用exif.js获取照片的EXIF信息，并将其存储到photo.exif对象中
      // 在这里添加获取EXIF信息的代码
      // 示例：
      photo.exif = {
        shootTime: '2021-09-15 12:30',
        device: 'Canon EOS 5D Mark IV',
        parameters: 'Aperture: f/2.8, Shutter Speed: 1/1000s, ISO: 200'
      };
    }
  }
});
