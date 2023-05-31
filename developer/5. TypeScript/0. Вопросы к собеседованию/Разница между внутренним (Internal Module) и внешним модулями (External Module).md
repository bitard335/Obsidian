____

tags: #TypeScript #internal-modules #external-modules

[[5. TypeScript |На главную]]

![Разница между внутренним (Internal Module) и внешним модулями (External Module)?](https://youtu.be/TOn-1RrowKE?t=807)

keywords:
Модули в TypeScript - это набор связанных переменных, функций, классов и интерфейсов.

Вы можете думать о модулях как о контейнерах, которые содержат все необходимое для выполнения задачи. Модули можно импортировать, чтобы легко обмениваться кодом между проектами.


### Внешний модуль

Например. В файле main.d.ts:

```typescript
import log = module("log");
log.message("hello");
```

Этот ссылается на внешний модуль log, который определен в файле log.ts.

```typescript
export function message(s: string) {
	console.log(s);
}
```

### Внутренний модуль

В этом файле есть два внутренних модуля X.Y.Z.

```typescript
module A.B.C {
	import XYZ = X.Y.Z;
	export function ping(x: number) {
		if (x > 0) {
			XYZ.pong(x – 1)
			};
	}
}
module X.Y.Z {
	import ABC = A.B.C;
	export function pong(x: number) {
		if (x > 0) {
			ABC.ping(x – 1)
			};
	}
}
```

### Как сделать так, чтобы классы, определенные в модуле, были доступны вне модуля

Вы можете использовать ключевое слово `export`, чтобы классы, определенные вне модуля.

```typescript
module Admin {
	// use the export keyword in TypeScript to access the class outside
	export class Employee {
		constructor(name: string, email: string) {}
	}
	let alex = new Employee("alex", "alex@gmail.com");
}

// The Admin variable will allow you to access the Employee class outside the module with the help of the export keyword in TypeScript
let nick = new Admin.Employee("nick", "nick@yahoo.com");
```

_____

В TypeScript модули используются для организации кода и разделения его на отдельные файлы, что облегчает его повторное использование и поддержку. В TypeScript есть два типа модулей: внутренние ( #internal-modules ) и внешние модули ( #external-modules ).

## Внутренние модули #internal-modules 

Внутренние модули, также называемые пространствами имен (namespaces), позволяют группировать связанный код в одном месте. Они могут содержать классы, интерфейсы, функции и другие объекты и могут быть вложенными. Внутренние модули описываются с помощью ключевого слова `namespace`.

````
namespace MyNamespace {
  export interface Person {
    name: string;
    age: number;
  }

  export function sayHello(person: Person) {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
  }
}

const person: MyNamespace.Person = { name: 'John', age: 30 };
MyNamespace.sayHello(person); // Output: 'Hello, my name## Внешние модули (External Modules)

Внешние модули, также называемые модулями CommonJS или AMD, позволяют загружать код из отдельных файлов и использовать его в других проектах. Внешние модули могут импортировать и экспортировать объекты, функции, классы и другие элементы кода. 

Внешний модуль определяется в отдельном файле, который может быть загружен с помощью инструментов сборки, таких как Webpack или Rollup. Для экспорта элементов из модуля используется ключевое слово `export`, а для импорта элементов из других модулей используется ключевое слово `import`.

Вот пример определения и использования внешнего модуля:

```typescript
// myModule.ts
export interface Person {
  name: string;
  age: number;
}

export function sayHello(person: Person) {
  console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}
````

```
// app.ts
import { Person, sayHello } from './myModule';

constperson: Person = { name: 'John', age: 30 };
sayHello(person); // Output: 'Hello, my name is John and I am 30 years old.'
```

В этом примере мы определили внешний модуль `myModule`, который экспортирует интерфейс `Person` и функцию `sayHello()`. Затем мы импортировали эти элементы в файл `app.ts`, создали объект `person` типа `Person` и передали его в функцию `sayHello()`.

## Различия между внутренними и внешними модулями

Основное различие между внутренними и внешними модулями заключается в том, что внутренние модули используются для организации кода в рамках одного проекта, а внешние модули используются для распространения кода между различными проектами и библиотеками.

Внутренние модули также могут быть вложенными, что позволяет создавать более сложные структуры кода, в то время как внешние модули обычно имеют более простую структуру и располагаются в отдельных файлах.

Внутренние модули могут быть загружены в браузере с помощью скриптов, что может привести к проблемам с именами и конфликтами, в то время как внешние модули обычно загружаются с помощью инструментов сборки, которые обеспечивают правильное разрешение зависимостей и управление именами.

Кроме того, внешние модули могут использовать различные форматы модулей, такие как CommonJS или AMD, в то время как внутренние модули используют только синтаксис TypeScript и не могут использовать другие форматы.

В целом, внешние модули обычно предпочтительнее для распространения кода между различными проектами и библиотеками, тогда как внутренние модули могут быть полезны для организации кода внутри одного проекта, если не требуется распространение кода между различными проектами.