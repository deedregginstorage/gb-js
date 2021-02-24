//корзина в процессе, за вёрстку не стреляйте(( 

let items = [{name: 'Marlboro', price: 130, quantity: 0, src:'./img/marl.jpg'}, {name: 'Беломорканал', price: 30, quantity: 0, src:'./img/belomor.webp'}, {name: 'Winston', price: 110, quantity: 0, src:'./img/winston.png'}]

let cardsImg = document.querySelectorAll('img');
let card = document.querySelectorAll('.item');
let h1 = document.querySelectorAll('h1');
let button = document.querySelectorAll('button');
let cartField = document.querySelector('div')

for (let i = 0; i < items.length; i++) {
    cardsImg[i].src = items[i].src;
    h1[i].innerHTML = 'Цена: ' + items[i].price + ' рублей';
    card[i].id = i;
    button[i].id = i;
}

let cart = [];

function toCart(event) {
        let cartQuantity = event.target.id;
        ++items[cartQuantity].quantity;
        cart = items.filter(function (e) {
            return e.quantity > 0
        });
        for (let i = 0; i < cart.length; i++) {
            let sum = cart[i].quantity * cart[i].price;
            cartField.innerHTML = '<p>название: ' + cart[i].name + '</p>\n' + '<p> количество: \n' + cart[i].quantity + '</p\n>' + '<p>сумма: '+ sum + 'рублей </p>';
        }
}

