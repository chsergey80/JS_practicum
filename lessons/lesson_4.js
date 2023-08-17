// Объекты
const myCity = {
  city: 'Ney York',
  population: 8000000,
}
myCity.city = 'Las Vegas';  // меняем свойство
myCity.country = 'USA';   // добавляем свойство
delete myCity.country   //удаление свойства
myCity['popular'] = true;   //Добавляем свойство
const countryPropertyName = 'country';  // вводим переменную, которая будет новым или имеющимся свойством
myCity[countryPropertyName] = 'Russia';  // задаем значение этому свойству
console.log(myCity);

// Вложенные свойства

