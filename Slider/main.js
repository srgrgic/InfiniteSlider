$(document).ready(function () {

    // references to the slider elements and buttons
    var topSlider = $("#top-slider");
    var bottomSlider = $("#bottom-slider");
    var scrollLeft = $("#scroll-left");
    var scrollRight = $("#scroll-right");
    var sliderWidth = topSlider.width();
    var isAnimating = false;

    var moveSliders = function (direction) {
        if (isAnimating) return;
        isAnimating = true;//this prevents other animations from running while this one is in progress

        if (direction === "left") {
            //animation to slide both sliders to the left
            topSlider.animate({ left: "-=" + sliderWidth }, 100);
            bottomSlider.animate({ left: "-=" + sliderWidth }, 100, function () {
                var firstTopImage = topSlider.find("img:first");
                var firstBottomImage = bottomSlider.find("img:first");
                topSlider.append(firstTopImage);//the first image is moved at the end of a slider using append
                bottomSlider.append(firstBottomImage);
                topSlider.css("left", "0");
                bottomSlider.css("left", "0");
                isAnimating = false;
            });
        } else if (direction === "right") {
            //case to slide to the right
            var lastTopImage = topSlider.find("img:last");
            var lastBottomImage = bottomSlider.find("img:last");
            topSlider.prepend(lastTopImage);//last image is moved to the beggining of the slider using prepend
            bottomSlider.prepend(lastBottomImage);
            topSlider.css("left", -sliderWidth);//- for opposite direction
            bottomSlider.css("left", -sliderWidth);
            topSlider.animate({ left: "0" }, 100);
            bottomSlider.animate({ left: "0" }, 100, function () {
                isAnimating = false;//this allows the next animations to start
            });
        }
    };

    scrollLeft.click(function () {
        moveSliders("left");
    });

    scrollRight.click(function () {
        moveSliders("right");
    });
});














  
  
  
  
  
  
  
