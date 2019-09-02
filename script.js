var money, time, appData;
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
var exp, value;
for(i=0; i<2; i++){
    exp = prompt("Введите обязательную статью расходов в этом месяце");
    value = prompt("Во сколько обойдется?");
    if(typeof(exp) === String && typeof(exp) != null && typeof(value) != null && exp != '' && value != ''){
        appData.expenses[exp] = value;
    }
    
}
appData.moneyPday = appData.budget/30;
if(appData.moneyPday < 100){
    alert('БЕГИ ОТСЮДА');
}else if(appData.moneyPday < 200 && appData.moneyPday > 100){
    alert('БЕГИ ОТСЮДа ээ');
}else if(appData.moneyPday < 400 && appData.moneyPday > 300){
    alert('БЕГИ ОТСЮДа ээ дурак шоле');
}else if(appData.moneyPday > 1000){
    alert('Тупа дурак');
}else{
    alert('Ты цифры вводи дуреньб');
}

    
