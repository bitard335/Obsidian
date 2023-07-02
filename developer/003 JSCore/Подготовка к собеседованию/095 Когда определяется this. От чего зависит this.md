#### 19. Когда определяется this? От чего зависит this? 

В большинстве случаев значение `this` определяется тем, каким образом вызвана функция. 

~~~
Значение `this` не может быть установлено путём присваивания во время исполнения кода и может иметь разное значение при каждом вызове функции. 
~~~

Оно может неявно варьироваться в зависимости от методов-прототипов: #bind, #call и #apply.

##### [Значение](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this#%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5)
Свойство контекста выполнения кода ( #global, #function или #eval), которое в нестрогом режиме всегда является ссылкой на объект, а в строгом режиме может иметь любое значение.

То есть, оно зависит от контекста в пределах которого его вызвали:
##### 1 [Global контекст](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this#global_%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82)
В глобальном контексте выполнения (за пределами каких-либо функций) `this` ссылается на глобальный объект вне зависимости от режима (строгий или нестрогий).
```
// В браузерах, объект window также является объектом global:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```

##### 2 [Function контекст](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this#function_%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82)
В пределах функции значение `this` зависит от того, каким образом вызвана функция.

###### [Простой вызов](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this#%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2)
В простом вызове по умолчанию будет использоваться объект #global, которым в браузере является #window.

```
function f1(){
  return this;
}

// В браузере:
f1() === window; // window - глобальный объект в браузере

// В Node:
f1() === global; // global - глобальный объект в Node
```

###### Строгий вызов
В строгом режиме, если значение `this` не установлено в контексте выполнения, оно остаётся `undefined`, как показано в следующем примере:

```
function f2(){
  "use strict"; // см. strict mode
  return this;
}

f2() === undefined; // true
```

Для того, чтобы при вызове функции установить `this` в определённое значение, используйте [`call()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call) или [`apply()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)



___
 #JS 

___

### [[003 JSCore|Назад]]