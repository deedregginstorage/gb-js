var userAnswer = {}, checkAnswer;
function addUserAnswer(i) {
    works[i].user = userAnswer;
}

for (let i = 0; i < works.length;) {
    userAnswer = +prompt(works[i].situation + works[i].answers[0] + works[i].answers[1] + '-1 exit')
    if (userAnswer == -1) {
        alert('See you next time. Again')
        break;
    } else if (userAnswer <= 0 || userAnswer > works[i].x || isNaN(userAnswer)) {
        alert('Вы ввели неправильное значение');
    } else {
        addUserAnswer(i);
        i += userAnswer;
    }
}
function checker() {
    var arrFilter = works.filter(x => x.user)[(checkAnswer - 1)]
    alert('В ходе №' + checkAnswer + ' было задание:\n'+ arrFilter.situation + 'В результате которого Вы выбрали вариант:\n' + arrFilter.answers[(arrFilter.user - 1)])
}
    

checkAnswer = +prompt('введите номер хода');

checker();
