var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }


// Sticky menu background
window.addEventListener('scroll', ()=>{
  if(scrollY > 150){
    document.querySelector('nav').style.opacity = 0.9;
  }
  else{
    document.querySelector('nav').style.opacity = 1;

  }
});



// Smooth Scrolling
$('nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});