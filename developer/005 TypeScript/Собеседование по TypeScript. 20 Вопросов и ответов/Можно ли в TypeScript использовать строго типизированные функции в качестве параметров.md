____

tags: #TypeScript #type 

[[005 TypeScript|На главную]]

_____

Строгая типизация (strong typing) в TypeScript - это основной принцип языка TypeScript, который предоставляет возможность определения типов данных для переменных, функций, параметров и свойств объектов в коде.

Строгая типизация в TypeScript позволяет выявлять ошибки в типах данных на этапе компиляции, что уменьшает количество ошибок во время выполнения программы и улучшает общую надежность кода. Кроме того, строгая типизация облегчает понимание кода и повышает его читабельность.

Определение типов данных в TypeScript происходит с помощью явного указания типов или вывода типов. Например:

```
let age: number = 30;
let name: string = "John";
let isValid: boolean = true;

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
```

Здесь мы определяем переменные `age`, `name` и `isValid` с явно указанными типами данных `number`, `string` и `boolean`. Также мы определяем функцию `greet` с параметром `name` и типом `void`, который указывает на то, что функция не возвращает значение.

Строгая типизация в TypeScript также поддерживает использование типов данных для объектов и массивов. Например:

```
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "John",
  age: 30
};

let numbers: number[] = [1, 2, 3, 4, 5];
```

Здесь мы определяем интерфейс `Person`, который содержит свойства `name` и `age`. Затем мы определяем переменную `person` с типом `Person`, которая содержит объект с полями `name` и `age`. Мы также определяем переменную `numbers` с типом `number[]`, которая содержит массив чисел.

Строгая типизация в TypeScript позволяет использовать более безопасные и надежные типы данных в коде, что облегчает отладку и сопровождение программы. Кроме того, TypeScript предоставляет множество инструментов для проверки типов данных и улучшения качества кода, таких как проверка типов во время компиляции, автодополнение кода в редакторах кода и многие другие.

Рассмотрим следующий пример:  
  
```
class Foo {
    save(callback: Function) : void {
        //Выполняем сохранение
        var result : number = 42; //Получаем в ходе операции сохранения некое число
        //Можно ли во время выполнения программы как-то обеспечить то, чтобы коллбэк принимал лишь один параметр типа number?
        callback(result);
    }
}

var foo = new Foo();
var callback = (result: string) : void => {
    alert(result);
}
foo.save(callback);
```
  
Можно ли в методе `save` организовать работу с типизированным коллбэком? Перепишите код для того, чтобы это продемонстрировать.  
  
В TypeScript можно объявить тип коллбэка, после чего переписать код:  
  
```
type NumberCallback = (n: number) => any;

class Foo {
    // Эквивалент
    save(callback: NumberCallback): void {
        console.log(1)
        callback(42);
    }
}

var numCallback: NumberCallback = (result: number) : void => {
    console.log("numCallback: ", result.toString());
}

var foo = new Foo();
foo.save(numCallback)
```

  
→ [Источник](https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript)