var userAnswer, money = 0;
for (let i = 0; i < qna.length; i++) {
    userAnswer = +prompt('Вопрос №'+ (i+1) +":\n" + qna[i].q + '\nВарианты ответов:\n' + '1. '+qna[i].a1 + '\n2. '+qna[i].a2 + '\n3. '+qna[i].a3 + '\n4. '+qna[i].a4 + '\nВедине номер правильного варианта ответа. Введите 0, чтобы выйти') 
    if (userAnswer == 0) {
        alert('игра окончена')
        break;
    }
    if (userAnswer == qna[i].rightAnswer) {
        money += (i+1)*1000;
        alert('Верно! Вы заработали '+ money +' рублей! Переходим к следующему вопросу')
    } else {
        alert('Вы проиграли');
        break;
    }
}