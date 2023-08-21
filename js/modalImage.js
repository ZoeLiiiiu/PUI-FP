

console.log($('.myImages'),'点击事件')
var current = ''
$('.myImages').bind('click',function() {
  current = $('.myImages').index(this)
  console.log($(this).attr('alt'),'属性')
  $('.bottom-text').html($(this).attr('alt'))
  console.log(current,'当前第几个')
  }
)
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
var swiper = new Swiper('.swiper-container', {

  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  slidesPerView: 1,
  initialSlide : current,
  paginationClickable: true,
  spaceBetween: 10,
  // loop: true,
  onSlideChangeStart: function(swiper){
    console.log(swiper.activeIndex,'循环第几个')
    var text = $('.myImages').eq(swiper.activeIndex)
    $('.bottom-text').html(text.attr('alt'))
  },
 
});
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

//get the cross icon
var span = document.getElementsByClassName("close")[0];

//set the display to none while click on the cross
span.onclick = function() {
  modal.style.display = "none";
}