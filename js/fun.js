$(document).ready(function() {
    var Food = $(".Dog");

    $(".normal-button").on("click", function() {
    Food.animate({ height: "300px" });
    });
    $(".grow-button").on("click", function() {
    Food.animate({ height: "500px" });
    });
    $(".shrink-button").on("click", function() {
    Food.animate({ height: "100px" });
    });
    $(".stretch-btn").on("click", function() {
    Food.animate({ height: "1000px", width: "200px" });
    });
    $(".unstretch-btn").on("click", function() {
    Food.animate({ height: "300px", width: "450px" });
    });
    $(".up-button").on("click", function() {
    Food.animate({ top: "-=200px" }, "normal");
    });
    $(".down-button").on("click", function() {
    Food.animate({ top: "+=200px" }, "normal");
    });
    $(".left-button").on("click", function() {
    Food.animate({ left: "-=200px" }, "normal");
    });
    $(".right-button").on("click", function() {
    Food.animate({ left: "+=200px" }, "normal");
    });
    $(".back-button").on("click", function() {
    Food.animate({ top: "50px", left: "80px" }, "fast");
    });
});