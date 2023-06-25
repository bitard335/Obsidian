____

tags: #

links: 

youtube: 
1. 

keywords:

_____
В TypeScript, при объявлении свойств классов, нельзя использовать ключевое слово `const`. При попытке использования этого ключевого слова выводится следующее сообщение об ошибке: `A class member cannot have the ‘const’ keyword`. В TypeScript 2.0 имеется модификатор `readonly`, позволяющий создавать свойства класса, предназначенные только для чтения:  
  

```
class MyClass {
    readonly myReadonlyProperty = 1;

    myMethod() {
        console.log(this.myReadonlyProperty);
    }
}

new MyClass().myReadonlyProperty = 5; // ошибка, так как свойство предназначено только для чтения
```

  
→ [Источник](https://stackoverflow.com/questions/37265275/how-to-implement-class-constants-in-typescript)
