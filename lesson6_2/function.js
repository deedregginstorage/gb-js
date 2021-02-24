let items = [{name: 'Marlboro', price: 130, quantity: 0, src:'./img/marl.jpg'}, {name: 'Беломорканал', price: 30, quantity: 0, src:'./img/belomor.webp'}, {name: 'Winston', price: 110, quantity: 0, src:'./img/winston.png'}]

let cardsImg = document.querySelectorAll('img');
let card = document.querySelectorAll('.item');
let h1 = document.querySelectorAll('h1');
let button = document.querySelectorAll('button');

for (let i = 0; i < items.length; i++) {
    cardsImg[i].src = items[i].src;
    h1[i].innerHTML = 'Цена: ' + items[i].price + ' рублей';
    card[i].id = i;
    button[i].id = i;
}

function f(){
    if (items.quantity > 0) {
        return true
    } else {
        return false
    }
}

function toCart(event) {
        let cartQuantity = event.target.id;
        ++items[cartQuantity].quantity;
        console.log(items[cartQuantity].quantity)
        let cart = items.filter(f)
        console.log(cart)
}