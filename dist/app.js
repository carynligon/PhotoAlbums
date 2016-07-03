var $navBar = $('nav');
var $mainContainer = $('#album-container');
var $albumPreview = $('.album-preview');
var $imagePreview = $('.image-preview');
var $h2 = $('h2');
var $header = $('header');
var $albumClass = $('.album-preview li');
var $imgPreview = $('.img-preview');


$(document).ready(function () {
  $h2.addClass('display-none');
  location.hash = '#home';

  data.forEach(function(album, i) {
    var $imageHtml = $('<li><a href="#"><img src="#" /></a></li>');
    var $title = $('<p>Album Name</p>');
    $albumPreview.append($imageHtml);
    $imageHtml.children('a').attr('href', data[i].path);
    $imageHtml.children('a').children('img').attr('src', data[i].cover);
    $imageHtml.append($title);
    $title.text(data[i].title);
  });
});

window.addEventListener('hashchange', function () {
  var index = location.hash.split('/')[1];
  if (location.hash === '#home') {
    console.log('home');
  } else if (location.hash.split('/')[2] !== 'image'){
  var dataToRender = data[Number(index)-1];
  $albumPreview.removeClass('display-none');
  renderContent(dataToRender);
  console.log(dataToRender);
} else {
  var photoZoom = document.querySelectorAll('li');
  photoZoom.forEach(zoom);
  }
});

function renderContent (whatContent) {
  $imagePreview.html('');
  $h2.removeClass('display-none');
  $h2.html('<h2>Album Name</h2>');
  $h2.children('h2').text(whatContent.title);
  $header.addClass('display-none');
  var imgArr = whatContent.images;
  console.log(imgArr);

  imgArr.forEach(function (image, i) {
    $albumPreview.children('li').addClass('album-collapse');
    $albumPreview.addClass('navigation-collapse');
    var $imageHtml = $('<li class="image"><a href="#"><img src="#" /></a></li>');
    var $imageId = ('#images');
    var $title = $('<p>Album Name</p>');
    $imagePreview.append($imageHtml);
    $imageHtml.children('a').attr('href', imgArr[i].path);
    $imageHtml.children('a').children('img').attr('src', imgArr[i].src);
    $imageHtml.append($title);
    $title.text(imgArr[i].name);
  });
}

    function zoom(click) {
      $(click).click(function(evt) {
          $(evt.target).parent('a').parent('li').addClass('zoomed-in').removeClass('image');
          $('.image').addClass('icon');
          $albumPreview.addClass('display-none');
          console.log(evt.target);
          $header.removeClass('display-none');
          $h2.html('<h2><a href="#">Back to the album</a></h2>');
          $h2.children('h2').children('a').attr('href', (location.hash.split('/')[0] + '/' +  location.hash.split('/')[1]));
        });
    }
