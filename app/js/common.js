$(function() {
	$(document).ready(function(){
		new WOW().init();
		$('.autoplay').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:false,
		    autoplay:true,
		    autoplayTimeout:2000,
		    responsive:{
		        0:{
		            items:2,
		        },
		        480:{
		            items:3,
		        },
		        768:{
		            items:4,
		        },
		        992:{
		            items:5,
		        }
		    }
		});
		$('.loop').owlCarousel({
			loop:true,
			margin:10,
		    center: true,
		    items:2,
		    nav:false
		});
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    navText:'',
		    animateOut: 'fadeOut',
		    items:1
		});
		jQuery('.parallax-layer').parallax();

    var show = true;
    var countbox = document.querySelector("#counts");
    $(window).on("scroll load resize", function(){

      if(!show) return false;

      if(isElementVisible(countbox)){
        $(".spincrement-1").spincrement({
          thousandSeparator: "",
          duration: 2400,
          to: 35
        });

        $(".spincrement-2").spincrement({
          thousandSeparator: "",
          duration: 2500,
          to: 22
        });

        $(".spincrement-3").spincrement({
          thousandSeparator: "",
          duration: 2300,
          to: 650
        });

        show = false;
      }

      /**
        * Определяет, видим ли элемент.
        * @param {HTMLElement} element
        * return {boolean}
        */
      function isElementVisible(element) {
        var elementPosition = element.getBoundingClientRect();
        return elementPosition.top - $(window).height() <= 0;
      }

      /**
        * Throttle оптимизация
        * @param  {function} callback
        * @param  {number} timeDelay
        * @return {function}
        */
      function throttle(callback, timeDelay) {
        var lastCall = 0;
        return function() {
          if (Date.now() - lastCall >= timeDelay) {
            callback();
            lastCall = Date.now();
          }
        };
      }
    });
	});
});


(function() {
  $(document).ready(function(){

    var buttonBay = document.querySelector(".offers__btn");
    var buttonGift = document.querySelector(".present__btn");
    var popupThanks = document.querySelector(".popup--thanks");
    var popupForm = document.querySelector(".popup--form");
    var popupBay = document.querySelector(".popup--bay");
    var send = popupForm.querySelector("#send");
    var closeBay = popupBay.querySelector(".popup__close");
    var closeForm = popupForm.querySelector(".popup__close");
    var closeThanks = popupThanks.querySelector(".popup__close");
    var next = popupBay.querySelector("#next");
    var gift = popupBay.querySelector("#gift");
    var ashtrayQuantity = popupBay.querySelector("#ashtrayQuantity");
    var fullPrice = popupBay.querySelector("#fullPrice");
    var quantity = popupBay.querySelector("#quantity");
    var minus = document.querySelector(".number__button--minus");
    var plus = document.querySelector(".number__button--plus");
    var min = parseInt(ashtrayQuantity.getAttribute('min')) || 0;
    var max = parseInt(ashtrayQuantity.getAttribute('max'));
    var price = 249;

    popupBay.style.display = 'block';
    popupForm.style.display = 'block';
    popupThanks.style.display = 'block';

    if (min>max) {
      var x = min;
      min = max;
      max = x;
    }

    minus.addEventListener('click', function(){
      changeNumber(false);
      initFilelds()
    });

    plus.addEventListener('click', function(){
      changeNumber(true);
      initFilelds()
    });

    function changeNumber(operation) {
        var value = parseInt(ashtrayQuantity.value);
        if (operation) {
          value = value + 1;
          if (!isNaN(max)){
            value = Math.min(value, max);
          }
        }  else {
          value = value - 1;
          value = Math.max(value, min);
        }
        ashtrayQuantity.value = value;
      }

    function initFilelds() {
      fullPrice.innerHTML = price*ashtrayQuantity.value + ' рублей';
      quantity.innerHTML = ashtrayQuantity.value;
    }

    buttonBay.addEventListener("click", function(event) {
      event.preventDefault();
      initFilelds()
      gift.checked = false;
      popupBay.classList.add("popup--show");
    });
    buttonGift.addEventListener("click", function(event) {
      event.preventDefault();
      initFilelds()
      gift.checked = true;
      popupBay.classList.add("popup--show");
    });
    next.addEventListener("click", function(event) {
      event.preventDefault();
      popupForm.classList.add("popup--show");
      setTimeout('document.querySelector(".popup--bay").classList.remove("popup--show");', 100);
    });
    send.addEventListener("click", function(event) {
      event.preventDefault();
      popupThanks.classList.add("popup--show");
      setTimeout('document.querySelector(".popup--form").classList.remove("popup--show");', 100)
    });
    closeBay.addEventListener("click", function(event) {
      event.preventDefault();
      popupBay.classList.remove("popup--show");
    });
    closeForm.addEventListener("click", function(event) {
      event.preventDefault();
      popupForm.classList.remove("popup--show");
    });
    closeThanks.addEventListener("click", function(event) {
      event.preventDefault();
      popupThanks.classList.remove("popup--show");
    });
  });
})();
