window.onscroll = function fixedHeader() {
  const header = document.querySelector(".header");
  if (window.pageYOffset > 200) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

let tab = function () {
  let tabNav = document.querySelectorAll(".tabs__nav-item"),
    tabContent = document.querySelectorAll(".tabs__content-block"),
    tabName;
  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }
};
tab();

$(".slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

var accordion = (function (element) {
  var _getItem = function (elements, className) {
    // функция для получения элемента с указанным классом
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  return function () {
    var _mainElement = {},
      _items = {},
      _contents = {};
    var _actionClick = function (e) {
        if (!e.target.classList.contains("faq__accardeon-block-caption")) {
          return;
        }
        e.preventDefault();
        var header = e.target,
          item = header.parentElement,
          itemActive = _getItem(_items, "show");
        if (itemActive === undefined) {
          item.classList.add("show");
        } else {
          itemActive.classList.remove("show");
          if (itemActive !== item) {
            item.classList.add("show");
          }
        }
      },
      _setupListeners = function () {
        _mainElement.addEventListener("click", _actionClick);
      };

    return {
      init: function (element) {
        _mainElement =
          typeof element === "string"
            ? document.querySelector(element)
            : element;
        _items = _mainElement.querySelectorAll(".faq__accardeon-block");
        _setupListeners();
      },
    };
  };
})();

var accordion1 = accordion();
accordion1.init("#accordion");

$(".slider-big").slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: true,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 3500,
});
