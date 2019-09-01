var money, time, appData;
money = prompt("Ваш бюджет на месяц?");
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
    appData.expenses+= exp + " : " + value + '\n';
}
alert(appData.budget/30);
console.log(appData.expenses);
    
