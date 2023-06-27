Vue.component('photo-gallery', {
  props: ['photos'],
  template: `
    <div class="photo-gallery">
      <div v-for="photo in photos" :key="photo.id" class="photo-card">
        <img :src="photo.url" alt="Photo" @load="fetchExifData(photo)">
        <div class="exif-info">
          <p><strong>拍摄时间:</strong> {{ photo.exifData.DateTimeOriginal }}</p>
          <p><strong>设备信息:</strong> {{ photo.exifData.Make }}, {{ photo.exifData.Model }}</p>
          <p><strong>拍照参数:</strong> 光圈值: {{ photo.exifData.FNumber }}, 快门速度: {{ photo.exifData.ExposureTime }}</p>
          <!-- 添加更多 exif 信息的显示 -->
        </div>
      </div>
    </div>
  `,
  methods: {
    fetchExifData(photo) {
      const image = new Image();
      image.src = photo.url;
      image.onload = () => {
        EXIF.getData(image, function() {
          const exifData = EXIF.getAllTags(this);
          photo.exifData = exifData;
        });
      };
    }
  }
});

new Vue({
  el: '#app',
  data: {
    photos: []
  },
  mounted() {
    // 使用 GitHub API 获取照片列表
    fetch('https://api.github.com/repos/lairdmax/lairdmax.github.io/zhanshi/images')
      .then(response => response.json())
      .then(data => {
        data.forEach(file => {
          if (file.type === 'file' && /\.(jpe?g|png|gif)$/i.test(file.name)) {
            this.photos.push({
              id: file.sha,
              url: file.download_url,
              exifData: {}
            });
          }
        });
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }
});
