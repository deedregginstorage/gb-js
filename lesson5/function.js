var arr = [
    // {
    //     blackLine1:['&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;'], 
    //     blackLine2:['&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;']
    // },
    // {
    //     whiteLine1:['&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;'],
    //     whiteLine2:['&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;']
    // }
    {name: '&#9820;', x:1, y:'a'}, {name: '&#9822;', x:1, y:'b'}, {name: '&#9821;', x:1, y:'c'},{name: '&#9819;', x:1, y:'d'},
    {name: '&#9818;', x:1, y:'e'}, {name: '&#9821;', x:1, y:'f'}, {name: '&#9822;', x:1, y:'g'}, {name: '&#9820;', x:1, y:'h'},
    {name: '&#9823;', x:2, y:'a'},{name: '&#9823;', x:2, y:'b'},{name: '&#9823;', x:2, y:'c'},{name: '&#9823;', x:2, y:'d'},
    {name: '&#9823;', x:2, y:'e'},{name: '&#9823;', x:2, y:'f'},{name: '&#9823;', x:2, y:'g'},{name: '&#9823;', x:2, y:'h'},
    // white
    {name: '&#9817;', x:7, y:'a'},{name: '&#9817;', x:7, y:'b'},{name: '&#9817;', x:7, y:'c'},{name: '&#9817;', x:7, y:'d'},
    {name: '&#9817;', x:7, y:'e'},{name: '&#9817;', x:7, y:'f'},{name: '&#9817;', x:7, y:'g'},{name: '&#9817;', x:7, y:'h'},
    {name: '&#9814;', x:8, y:'a'}, {name: '&#9816;', x:8, y:'b'}, {name: '&#9815;', x:8, y:'c'},{name: '&#9813;', x:8, y:'d'},
    {name: '&#9812;', x:8, y:'e'}, {name: '&#9815;', x:8, y:'f'}, {name: '&#9816;', x:8, y:'g'}, {name: '&#9814;', x:8, y:'h'}
]

var cells = []

var chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var charsReverse = chars.slice().reverse(); 
for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 8; j++) {
        var color;  
        if (i%2 == j%2) {
            color = 'white';
        } else {
            color = 'black';
        }
        var y = String.fromCharCode('a'.charCodeAt(0) + (j - 1))
        var fig = arr.find(z => z.x === i && z.y === y);
            cells.push({color: color, x:i, y:y, fig:fig})
        
    }
}

var table = document.createElement("table");
for (let i = 0; i < 10; i++) {
    var tr = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        var td = document.createElement('td');
        if ((i == 0 || i == 9) && j > 0 && j < 9 ) {
            td.className = 'white';
            td.innerText = i == 0 ? charsReverse[j - 1] : chars[j - 1];
        } else if ((j == 0 || j == 9) && i > 0 && i < 9) {
            td.className = 'white';
            td.innerText = j == 0 ? (9 - i) : (i - 1) % 8 + 1
        } else if ((i > 0 && j > 0) && (i < 9 && j < 9)) {
            td.className = cells[((i - 1) * 8) + j - 1].color;
            td.innerHTML = cells[((i - 1) * 8) + j - 1].fig?.name ?? null
        }
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
document.body.appendChild(table);

// var table = document.createElement("table");
// for (var i = 1; i < 9; i++) {
//     var tr = document.createElement('tr');
//     for (var j = 1; j < 9; j++) {
//         var td = document.createElement('td');
//         if (i%2 == j%2) {
//             td.className = "white";
//         } else {
//             td.className = "black";
//         }
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);
