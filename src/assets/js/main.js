let navigation = {
	init: function () {
		this.showDropdown();
	},
	showDropdown: function () {
		let btn = document.querySelector(
			".nav__mobile-cart .nav__button .item__link"
		);
		let btnTimes = document.querySelectorAll(
			".nav__mobile-cart .nav__button .item__link"
		)[1];
		let dropDown = document.querySelector(".nav__mobile");
		btnTimes.style.display = "none";
		btnTimes.style.fontSize = "1.8rem";

		btn.addEventListener("click", function () {
			dropDown.classList.add("show");
			btnTimes.style.display = "block";
			btn.style.display = "none";
		});

		btnTimes.addEventListener("click", function () {
			dropDown.classList.remove("show");
			btn.style.display = "block";
			btnTimes.style.display = "none";
		});
	},
};

let subNavigation = {
	init: function () {
		this.showSubDropDown();
	},
	showSubDropDown: function () {
		let linkElement = document.querySelector(
			".nav__mobile .nav__mobile-item .item__link"
		);
		let listElement = document.querySelector(
			".nav__mobile .nav__mobile-item .item__dropdown"
		);
		linkElement.addEventListener("click", function () {
			listElement.classList.toggle("show");
		});
	},
};

let scrollBtn = {
	init: function () {
		this.scrollUp();
	},
	scrollUp: function () {
		let btn = document.querySelector(".scroll-up");
		$(window).scroll(function () {
			if ($(window).scrollTop() > 100) {
				btn.classList.add("show");
			} else {
				btn.classList.remove("show");
			}
		});
	},
};

let searchBtn = {
	init: function () {
		this.showSearch();
	},
	showSearch: function () {
		let btn = document.querySelector(
			".nav__list-item .search__close .item__link"
		);
		let overLay = document.querySelector(".nav__list-item .search__overlay");
		let btnClose = document.querySelector(".search__wrap .lnr-cross");
		btn.addEventListener("click", function () {
			overLay.classList.add("show");
		});
		btnClose.addEventListener("click", function () {
			overLay.classList.add("close");
			overLay.classList.remove("show");
		});
	},
};

//Call function
navigation.init();
subNavigation.init();
scrollBtn.init();
searchBtn.init();

//Own Carousel
$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	items: 1,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
	},
});
/*
window.onload = () => {
  const owl = {
    init: function () {
      this.slider('.overview-carousel');
      this.slider('.client-carousel');
    },
    slider: function (target) {
      const mainWrap = $(target)
      let options = {}
      switch (target) {
        case '.overview-carousel':
          options = {
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '.client-carousel':
          options = {
            loop: false,
            margin: 10,
            autoplay: false,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
              0: {
                items: 2
              },
              425:{
                items:2
              },
              768:{
                items:3
              },
              1024:{
                items: 5
              },
              1520:{
                items: 6
              }
            }
          }
          break;
        default:
          return true
      }
      if (mainWrap) {
        $(mainWrap).owlCarousel(options)
      }
    },
  }
  owl.init();

  const category = {
    init: function() {
      this.openMenu()
    },
    openMenu: function() {
      const main = document.querySelector('#category-menu')
      if (main) {
        const menuLevel = main.querySelectorAll('.menu-level')

        menuLevel.forEach((item, index) => item.addEventListener('click', () => {
          item.classList.toggle('active')

          const menuChild = item.querySelector('.menu-item-child')
          if (menuChild) {
            menuChild.classList.toggle('active')
          }
        }))
      }
    },
  }
  category.init()
}
*/
