// JavaScript Document

//julian martinez


window.onload = function() {
    "use strict";

    const slideWidth = $("#slider ul li img").first().width();
    const numSlides = $("#slider ul li").length;
    const totalWidth = slideWidth * numSlides;

    // Set the total width of the slider
    $("#slider ul").width(totalWidth);

    let leftPosition = 0;
    let counter = 0;

    $("#next").click(function(e) {
        e.preventDefault();

        // Increment the counter
        counter++;
        
        if (counter >= numSlides) {
            counter = 0;
        }

        leftPosition = -(counter * slideWidth);

        $("#slider ul").animate({left: leftPosition + "px"}, 1000, "easeInQuad");
    });

    $("#previous").click(function(e) {
        e.preventDefault();

        counter--;

        if (counter < 0) {
            counter = numSlides - 1;
        }

        leftPosition = -(counter * slideWidth);

        // Animate the transition
        $("#slider ul").animate({left: leftPosition + "px"}, 1000, "easeInQuad");
    });
};
