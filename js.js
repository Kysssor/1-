var rotate1 = 0;
var rotate2 = 0;
Circle.onclick = function() {
    var circle = document.getElementById('TropicCircle');
    var circle2 = document.getElementById('SiderCircle');
    var circle3 = document.getElementById('AstrolCircle');
    rotate1 = rotate1 ? 0 : 360;
    rotate2 = rotate2 ? 0 : -360;
    circle.style.transform = "rotate(" + rotate1 + "deg)";
    circle2.style.transform = "rotate(" + rotate2 + "deg)";
    circle3.style.transform = "rotate(" + rotate1 + "deg)";
    circle.style.transition = "transform 1.5s";
    circle2.style.transition = "transform 1.5s";
    circle3.style.transition = "transform 1.5s";
    console.log("Work");
    //window.requestAnimationFrame(update);

};
