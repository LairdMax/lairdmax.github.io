$(document).ready(function() {
  
  var username = 'wanqian6311';
  var repository = 'Photos';
  var path = 'images';

  var apiUrl = 'https://api.github.com/repos/' + username + '/' + repository + '/contents/' + path;

  $.get(apiUrl, function(data) {
    $.each(data, function(index, item) {
      if (item.type === 'file' && item.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
        var photoUrl = item.download_url;
        var photoElement = $('<div class="photo" align="center"></div>');
        var imgElement = $('<img>').attr('src', photoUrl).attr("width","60%");
        photoElement.append(imgElement);
        $('#photo-gallery').append(photoElement);

        EXIF.getData(imgElement[0], function() {
          var exifData = this.exifdata;
          var exifInfo = generateExifInfo(exifData);
          var exifInfoElement = createExifInfoElement(exifInfo);
          photoElement.append(exifInfoElement);

          });
      }
    });
  });
});
/*
async function processLocation(longitude, latitude) {
  const cityName = await getCityNameByCoordinates(longitude, latitude);
  console.log("City Name:", cityName);
  console.log("gpsLatitude:", latitude);
  console.log("gpsLongitude:", longitude);
  return cityName;
}

async function getCityNameByCoordinates(longitude, latitude) {
  var mapboxGeocodingEndpoint = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  var mapboxAccessToken = 'pk.eyJ1IjoibGFpcmRtYXgiLCJhIjoiY2xsZzJ6czI2MDhuejNxcjZwaHBvdnBueCJ9.DF1ulIXtQoftNAulwI1Xyg';
  var requestUrl = `${mapboxGeocodingEndpoint}${longitude},${latitude}.json?access_token=${mapboxAccessToken}`;


    const response = await fetch(requestUrl);
    const data = await response.json();
     const features = data.features;
    
    let city = '';
    let province = '';
    let country = '';

  // 遍历 features 数组以提取城市、省份和国家信息
  for (const feature of features) {
    const context = feature.context;
    for (const contextItem of context) {
      if (contextItem.id.startsWith('place')) {
        city = contextItem.text;
      } else if (contextItem.id.startsWith('region')) {
        if (contextItem.short_code.startsWith('CN')) {
          province = contextItem.text;
        } else {
          country = contextItem.text;
        }
      }
    }

    if (city && province && country) {
      break; // 如果已找到所有信息，退出循环
    }
  }
  const formattedLocation = `${city}-${province}-${country}`; 
  return formattedLocation;
}
*/
function generateExifInfo(exifData) {
  var dateTime = exifData.DateTimeOriginal || exifData.DateTimeDigitized || exifData.DateTime;
  var exposureTime = formatExposureTime(exifData.ExposureTime);
  var isoSpeedRatings = exifData.ISOSpeedRatings;
  var make = exifData.Make;
  var model = exifData.Model;
  var FocalLength = exifData.FocalLength;
  var ApertureValue = exifData.ApertureValue;
  var formattedDateTime = formatDateTime(dateTime);
  var GPSLatitude =  convertDmsToDecimal(exifData.GPSLatitude) ;
  var GPSLongitude =  convertDmsToDecimal(exifData.GPSLongitude);
  //var LocationName =  processLocation(GPSLongitude, GPSLatitude);    
          
  return {
    dateTime: formattedDateTime,
    exposureTime: exposureTime,
    isoSpeedRatings: isoSpeedRatings,
    make: make,
    model: model,
    FocalLength: FocalLength,
    ApertureValue: ApertureValue,
    GPSLatitude : GPSLatitude,
    GPSLongitude : GPSLongitude,
    //LocationName : LocationName,
  };
}


function createExifInfoElement(exifInfo) {
  var exifElement = $('<div class="exif"></div>');
  var metabarElement = $('<div data-v-9c46fcc4 class="metabar"></div>');
  var barElement = $('<div data-v-9c46fcc4 class="bar"></div>');
  var itemsElement = $('<ul data-v-9c46fcc4 body-scroll-lock-ignore class="items"></ul>');

  var exifInfoTemplate = `
    <li data-v-2d46ff28 data-v-9c46fcc4 class="item category clickable">
      <h5 data-v-2d46ff28 class="title">DateTime</h5>
      <span data-v-9c46fcc4 data-v-2d46ff28>${exifInfo.dateTime}</span>
    </li>
    <li data-v-2d46ff28 data-v-9c46fcc4 class="item exif clickable">
      <h5 data-v-2d46ff28 class="title">EXIF</h5>
      <ul data-v-9c46fcc4  data-v-2d46ff28>
        <li data-v-9c46fcc4  data-v-2d46ff28>
          <i data-v-9c46fcc4  data-v-2d46ff28 class="focus">
          </i>
          <span data-v-9c46fcc4  data-v-2d46ff28>${exifInfo.FocalLength}mm</span>
        </li>
        <li data-v-9c46fcc4  data-v-2d46ff28>
          <i data-v-9c46fcc4  data-v-2d46ff28 class="aperture">
          </i>
          <span data-v-9c46fcc4  data-v-2d46ff28>ƒ/${exifInfo.ApertureValue}</span>
        </li>
        <li data-v-9c46fcc4  data-v-2d46ff28>
          <i data-v-9c46fcc4  data-v-2d46ff28 class="shutter">
          </i>
          <span data-v-9c46fcc4  data-v-2d46ff28>${exifInfo.exposureTime}s</span>
        </li>
        <li data-v-9c46fcc4  data-v-2d46ff28>
          <i data-v-9c46fcc4  data-v-2d46ff28 class="iso">
          </i>
          <span data-v-9c46fcc4  data-v-2d46ff28>${exifInfo.isoSpeedRatings}</span>
        </li>
      </ul>
    </li>
     <li data-v-9c46fcc4  data-v-2d46ff28 class="item location clickable">
      <h5 data-v-2d46ff28 class="title">Location</h5>
      <span data-v-9c46fcc4  data-v-2d46ff28>经度：${exifInfo.GPSLongitude} 纬度：${exifInfo.GPSLatitude}</span>
    </li>
    <li data-v-9c46fcc4  data-v-2d46ff28 class="item camera clickable">
      <h5 data-v-2d46ff28 class="title">Camera</h5>
      <span data-v-9c46fcc4  data-v-2d46ff28>${exifInfo.make}</span>
    </li>
    <li  data-v-9c46fcc4  data-v-2d46ff28 class="item lens clickable">
      <h5 data-v-2d46ff28 class="title">Model</h5>
      <span data-v-9c46fcc4  data-v-2d46ff28>${exifInfo.model}</span>
    </li>
  `;

  itemsElement.append(exifInfoTemplate);
  barElement.append(itemsElement);
  metabarElement.append(barElement);
  exifElement.append(metabarElement);

  return exifElement;
}

// Format the date and time
function formatDateTime(dateTimeString) {
  var dateTimeParts = dateTimeString.split(' ');
  var dateParts = dateTimeParts[0].split(':');
  var timeParts = dateTimeParts[1].split(':');

  var year = dateParts[0];
  var month = ('0' + dateParts[1]).slice(-2);
  var day = ('0' + dateParts[2]).slice(-2);
  var hours = ('0' + timeParts[0]).slice(-2);
  var minutes = ('0' + timeParts[1]).slice(-2);
  var seconds = ('0' + timeParts[2]).slice(-2);

  return year + '年' + month + '月' + day + '日' + hours + ':' + minutes + ':' + seconds;
}
  
// Format the exposure time
  function formatExposureTime(fraction) {
    var denominator =1/fraction;
    var denominator1 = Math.round(denominator);
    return '1/' + denominator1;
  }

// Format the coordinate
  function formatCoordinate(coordinate) {
    var degrees = coordinate[0].numerator / coordinate[0].denominator;
    var minutes = coordinate[1].numerator / coordinate[1].denominator;
    var seconds = coordinate[2].numerator / coordinate[2].denominator;

    return degrees + '° ' + minutes + '\' ' + seconds + '"';
  }
 // 将经纬度转化为小数
function convertDmsToDecimal(dmsArray) {
  var degrees = dmsArray[0];
  var minutes = dmsArray[1];
  var seconds = dmsArray[2];
  
  var decimalValue = degrees + (minutes / 60) + (seconds / 3600);
  return decimalValue.toFixed(2);
}

