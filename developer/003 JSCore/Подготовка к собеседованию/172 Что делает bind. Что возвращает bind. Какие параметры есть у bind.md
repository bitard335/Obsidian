#### 16. Что делает #bind? Что возвращает bind? Какие параметры есть у bind? 

`bind() `Метод создает новую функцию, которая при вызове имеет `this` ключевое слово, равное указанному значению, с заданной последовательностью аргументов, предшествующих любому, предоставленному при вызове новой функции.

```
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, /* …, */ argN)
```

##### Параметры
`thisArg` Значение, которое будет передано в качестве `this`параметра целевой функции `func`при вызове связанной функции. Если функция не находится в [строгом режиме](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)и [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)будет заменен глобальным объектом, и примитивные значения будут преобразованы в объекты. Значение игнорируется, если связанная функция создается с использованием [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)оператора.

`arg1, …, argN`  Аргументы для добавления к аргументам, предоставляемым связанной функции при вызове `func`.

##### Возвращаемое значение
Копия данной функции с указанным `this`значением и начальными аргументами (если они указаны).

##### Подробнее
Существует тонкая разница между стрелочной функцией => и обычной функцией, вызванной с `.bind(this)`:

-   `.bind(this)` создаёт «связанную версию» функции.
-   Стрелка => ничего не привязывает. У функции просто нет `this`. При получении значения `this` – оно, как обычная переменная, берётся из внешнего лексического окружения.

Функция [`bind`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) возвращает **новую** _привязанную_ функцию. Значение _this_ внутри созданной функции _всегда_ то, которое передали при вызове [`bind`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

* ***Важная особенность:** при использовании привязанной функции в качестве конструктора, значение _this_ все равно будет указывать на создаваемый объект, как описано выше.
* **Важная особенность:** в _НЕ strict mode_ при передаче в качестве параметра _this_ значений `null` и `undefined` - этот параметр будет проигнорирован и _this_ будет установлен в глобальный объект.

```javascript
function A(){console.log(typeof this,'is window', this === window);}
console.log('execute with null');
A.bind(null)();
console.log('execute with undefined');
A.bind(undefined)();

function A1(){'use strict'; console.log(typeof this, this);}
console.log('execute with null');
A1.bind(null)();
console.log('execute with undefined');
A1.bind(undefined)();
```

* ***Важная особенность:** значение _this_ у созданной функции **нельзя** переопределить используя функции [`call`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call) и [`apply`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) описанные выше.

```javascript
function A(){console.log(this);}

var B = A.bind({o:'object'});
console.log('execute binded');
B();
console.log('execute with call');
B.call({another: 'some new object'});

console.log('execute as constructor');
new B();
```

bind - возвращает функции( привязать контектс)
call / apply - возвращает результат этой функции.
