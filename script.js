const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
let filterEmployee = employers.filter(employee => employee.trim() !== '');
const data = {
    cash: [3, 8, 3],
    react: ['JSX', 'components', 'props', 'state', 'hooks'],
    add: ['styled-components', 'firebase'],
    gang(){
        let obj = [];
        for(let employee of filterEmployee){
            obj.push(employee.trim().toLowerCase().charAt(0).toUpperCase() + employee.trim().toLowerCase().substr(1));
        }
        return obj;
    }
};
const {
    cash,
    react,
    add
} = data;

calcCash = (cash) => {
    return Object.keys(cash).length > 1 ? cash.reduce((partial_sum, a) => partial_sum + a, 0) : 0;
};

makeBusiness = (director = 'Артем', teacher = 'Максим', allModule = calcCash(cash), gang = data.gang(), course = 'Базовый React') => {
    const oneLine = `Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. 
Команда Академии: ${gang}
Первое что изучим будет ${react[0]}". Он очень похож на HTML!"
Технологии которые мы изучим:
${react.concat(add, 'и другие').join(' ')}`;
    console.log(oneLine);
};
makeBusiness();