#### 2. Как работает #instanceof ?  

Оператор **`instanceof`** проверяет, принадлежит ли объект к определённому классу. 
Другими словами, `object instanceof constructor` проверяет, присутствует ли объект `constructor.prototype` в цепочке прототипов `object`.
~~~
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
~~~

`object` Проверяемый объект.
`constructor` Функция-конструктор, на которую идёт проверка.

##### [Описание](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/instanceof#%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5)
Оператор `instanceof` проверяет, присутствует ли объект `constructor.prototype` 
в цепочке прототипов `object`

Что если нам нужно определить конкретный класс экземпляра? Для этого можно использовать свойство constructor:  
  
```
writer.constructor === ContentWriter // true
writer.constructor === User // false
// или
writer.__proto__ === ContentWriter.prototype // true
writer.__proto__ === User.prototype // false
```


___
 #JS 

___

### [[003 JSCore|Назад]]