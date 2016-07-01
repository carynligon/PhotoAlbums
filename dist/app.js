var $navBar = $('nav');
var $mainContainer = $('#album-container');
var $imagePreview = $('#image-preview');
var $h2 = $('h2');
var $albumClass = $('.album-preview li');
var $imgPreview = $('.img-preview');


$(document).ready(function () {
  $h2.addClass('display-none');
  $navBar.addClass('display-none');
  location.hash = '#home';

  data.forEach(function(album, i) {
    var $imageHtml = $('<a href="#>"<li><img src="#" /></li></a>');
    var $albumTitle = $('<p>Album Name</p>');
    $imagePreview.append($imageHtml);
    $imageHtml.attr('href', data[i].path);
    $imageHtml.children('img').attr('src', data[i].cover);
    $imageHtml.append($albumTitle);
    $albumTitle.text(data[i].title);
    console.log(data);
  });
});

window.addEventListener('hashchange', function () {
  var index = location.hash.slice(6) - 1;
  var dataToRender = data[index];
  renderContent(dataToRender);
  console.log(dataToRender);
});

function renderContent (whatContent) {
  data.forEach(function(album, i) {
    var $imgArr = album.images;
    $imagePreview.children('img').attr('src', $imgArr[whatContent].path);
  });
}
