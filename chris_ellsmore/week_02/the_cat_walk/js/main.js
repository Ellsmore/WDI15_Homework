var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '-400px';


var catRight = function() {
    img.style.left = parseInt(img.style.left) + 10 + 'px';

    if (parseInt(img.style.left) == 1450) {
        img.style.left = '-250px';
    }

};

var blah = setInterval(catRight, 50);

/* ------------------------- SUN ---------------------------*/
