function imgClickScaled(event) {
    let source = event.target.src;
    let splitted = source.split('/')
    let imgScaled = document.getElementById('imgScaled');
    imgScaled.src = './' + splitted[splitted.length - 1];
    imgScaled.onerror = function() { 
        alert("Inserting alternate");
    }
}

// массив с картинками
// маленькая картинка и большая 

//функиця инициализации с контейнером

//пробежаться по массиву, добавить элементы img в контецнер min //addevent handler into dom, add func onclick

//обработка кликов по стрелочкам 

// в функцию обработки по клику записывать счетчик, найти в массиве с картинками индекс объекта по которому был клик indexOf и получить

function changeImg(event, left) {
    let minImg = document.getElementsByClassName('min');
    document.crea
}

