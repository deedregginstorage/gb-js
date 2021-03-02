let pics = [{big: './img/big/1.jpg', small: './img/1.jpg'}, {big: './img/big/2.jpg', small: './img/2.jpg'}, {small: './img/3.jpg'}];

let images = document.querySelectorAll('img')
images[0].src = pics[0].big;

for (let i = 0; i < pics.length; i++) {
    images[i + 1].src = pics[i].small;
    images[i + 1].id = i;
}

function changeImg(event) {
    let getId = event.target.id
    images[0].src = pics[getId].big
    images[0].onerror = function() {
        alert('no image found');
    }
}

let i = 0;

function nextImg() {
    if (i < pics.length - 1) {
        i = i + 1;
    } else {
        i = 0;
    }
    images[0].src = pics[i].big;
    images[0].onerror = function() {
        alert('no image found')
    }
}

function prewImg(){

    if (i <= pics.length - 1 && i > 0) {
        i = i - 1;
    } else if (i <= 1) {
        i = pics.length - 1;
    }
    images[0].src = pics[i].big;
    images[0].onerror = function() {
        alert('no image found')
    }
}