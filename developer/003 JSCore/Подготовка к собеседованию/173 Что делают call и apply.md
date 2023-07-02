![Разница между `.call()`, `.apply()` и `bind()`?](https://youtu.be/rlWgI7AvV18?t=548)

#### Ответ
Подробнее: [[2.3 Декораторы и переадресация вызова, сall и apply]]

##### Метод #Call
Метод функции [func.call(context, …args)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call)  позволяет вызывать функцию, явно устанавливая `this`.

Синтаксис: `func.call(context, arg1, arg2, ...)

`thisArg` Значение `this`, предоставляемое для вызова функции _`fun`_. 
Обратите внимание, что `this` может не быть реальным значением, видимым этим методом: если метод является функцией в [нестрогом режиме (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode "Currently only available in English (US)"), значения [`null`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/null) и [`undefined`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/undefined) будут заменены глобальным объектом, а примитивные значения будут упакованы в объекты.

`arg1, arg2, ...` Аргументы для объекта.
`
Он запускает функцию `func`, используя первый аргумент как её контекст `this`, а последующие – как её аргументы.

Проще говоря, эти два вызова делают почти то же самое:
`func(1, 2, 3); func.call(obj, 1, 2, 3)`
Они оба вызывают `func` с аргументами `1`, `2` и `3`. Единственное отличие состоит в том, что `func.call` ещё и устанавливает `this` равным `obj`.

В приведенном ниже коде, мы вызываем функцию sayHi в контексте различных обьектов.
~~~
`function sayHi() {   
	alert(this.name); }  

let user = { 
	name: "John" }; 

let admin = { 
	name: "Admin" };  // используем 'call' для передачи различных объектов в качестве 'this' 
	
sayHi.call( user ); // John 
sayHi.call( admin ); // Admin`
~~~

##### Метод #Apply
Синтаксис встроенного метода [func.apply](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply): `func.apply(context, args)`

Он выполняет `func`, устанавливая `this=context` и принимая в качестве списка аргументов псевдомассив `args`.
Единственная разница в синтаксисе между `call` и `apply` состоит в том, что `call` ожидает список аргументов, в то время как `apply` принимает псевдомассив.

Эти два вызова почти эквивалентны:
`func.call(context, ...args); // передаёт массив как список с оператором расширения func.apply(context, args);   // тот же эффект`

Есть только одна небольшая разница:
-   Оператор расширения `...`  ( #spread)позволяет передавать _перебираемый_ объект `args` в виде списка в `call`.
-   А `apply` принимает только _псевдомассив_ `args`.

Так что эти вызовы дополняют друг друга. 
Для перебираемых объектов сработает `call`, а где мы ожидаем псевдомассив – `apply`.


___
 #JS 

___

### [[003 JSCore|Назад]]