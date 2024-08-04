// external js: isotope.pkgd.js, imagesloaded.pkgd.js

// init Isotope elements after images have loaded
imagesLoaded(".isotope-box", function() {
  var $box = $(".isotope-box").isotope({
    itemSelector: ".isotope-item",
      filter: '[data-type="Brinjals"]'
  });

  // filter functions
  // bind filter button click
  $(".isotope-toolbar").on("click", "button", function () {
    var filterValue = $(this).attr("data-type");
    $(".isotope-toolbar-btn").removeClass("active");
    $(this).addClass("active");
    if (filterValue !== "*") {
      filterValue = '[data-type="' + filterValue + '"]';
    }
    console.log(filterValue);
    $box.isotope({ filter: filterValue });
  });
});
