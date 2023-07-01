#### 3. Что такое #super?  

Ключевое слово **super** используется для вызова функций, принадлежащих родителю объекта.

Выражения `super.prop` и `super[expr]` действительны в любом [определении метода](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Method_definitions) в [классах](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes) и в [литералах объекта](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer).

```
super([arguments]); // вызов родительского конструктора.
super.functionOnParent([arguments]);
```

##### [Описание](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/super#%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5)
В конструкторе ключевое слово `super()` используется как функция, вызывающая родительский конструктор. Её необходимо вызвать до первого обращения к ключевому слову `this` в теле конструктора. Ключевое слово `super` также может быть использовано для вызова функций родительского объекта.

Используется для получения доступа к родительскому конструктору или экземпляру.

###### 3.1. Родительский конструктор: super() в constructor()
  
Для того, чтобы вызвать конструктор родительского класса в дочернем классе, следует использовать специальную функцию super(), доступную в конструкторе дочернего класса.  
  
Пусть конструктор ContentWriter вызывает родительский конструктор и инициализирует поле posts:  
  
```
class User {
    name

    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

class ContentWriter extends User {
    posts = []

    constructor(name, posts) {
        super(name)
        this.posts = posts
    }
}

const writer = new ContentWriter('Лермонтов', ['Герой нашего времени'])
writer.name // Лермонтов
writer.posts // ['Герой нашего времени']
```
  
super(name) в дочернем классе ContentWriter вызывает конструктор родительского класса User.  
  
Обратите внимание, что в дочернем конструкторе перед использованием ключевого слова this вызывается super(). Вызов super() «привязывает» родительский конструктор к экземпляру.  
  
```
class Child extends Parent {
    constructor(value1, value2) {
        // не работает!
        this.prop2 = value2
        super(value1)
    }
}
```

###### 3.2. Родительский экземпляр: super в методах

  Для того, чтобы получить доступ к родительскому методу внутри дочернего класса, следует использовать специальное сокращение super:  
  
```
class User {
    name

    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

class ContentWriter extends User {
    posts = []

    constructor(name, posts) {
        super(name)
        this.posts = posts
    }

    getName() {
        const name = super.getName()
        if (name === '') {
            return 'Имярек'
        }
        return name
    }
}

const writer = new ContentWriter('', ['Герой нашего времени'])
writer.getName() // Имярек
```

getName() дочернего класса ContentWriter вызывает метод getName() родительского класса User.  
Это называется переопределением метода.  
Обратите внимание, что super можно использовать и для статических методов родительского класса.
