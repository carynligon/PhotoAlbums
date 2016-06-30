var $navBar = $('nav');
var $mainContainer = $('#album-container');
var $imagePreview = $('#image-preview');
var $h2 = $('h2');
var $albumClass = $('.album-preview');
var $imgPreview = $('.img-preview');


$(document).ready(function () {
  $h2.addClass('display-none');
  $navBar.addClass('display-none');

  albums.forEach(function(album, i) {
    var $imageHtml = $('<li class="album-preview"><img src="#" class="album-preview"/></li>');
    var $coverLink = $imageHtml;
    var $albumTitle = $('<p>Album Name</p>');
    $coverLink.children('img').attr('src', album.cover);
    $imagePreview.append($coverLink);
    $coverLink.append($albumTitle);
    $albumTitle.text(album.title);
  });
});

$imagePreview.on('click', function (evt) {
  $navBar.removeClass('display-none');
  $imagePreview.addClass('img-preview');

  data.forEach(function(photo, i) {
    if (i <= 5) {
      $albumClass.remove('album-preview');
      $albumClass.addClass('display-none');
      var $imageHtml = $('<li><img src="#" class="img-preview"/></li>');
      var $imgLink = $imageHtml;
      var $imgTitle = $('<p>Image Name</p>');
      $imgLink.children('img').attr('src', data.path);
      $imagePreview.append($imgLink);
      $imgLink.append($imgTitle);
      $imgTitle.text(data.title);
      console.log('hi');
    }
  });
});
