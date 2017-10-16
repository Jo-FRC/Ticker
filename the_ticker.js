(function() {
    var elem = document.getElementById('the_ticker');
    var links = document.getElementsByTagName("a");
    var animFrameId;
    var position = document.getElementById('container');
    elem.style.left = parseInt(position.offsetWidth) + "px";

    function animate () {
        var leftPosition = elem.offsetLeft - 1;
        elem.style.left = leftPosition + "px";
        animFrameId = requestAnimationFrame(animate);
        if (leftPosition < -links[0].offsetWidth) {
            elem.style.left = links[0].offsetWidth + leftPosition + 'px';
            elem.appendChild(links[0]);
        }
    }
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (e){
            cancelAnimationFrame(animFrameId);
        });
    }

    for (i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseleave", function (e){
            animFrameId = requestAnimationFrame(animate);
        });
    }

    animate();
})();
