____

tags: #

[[5. TypeScript |На главную]]

links: 

youtube: 
1. 

keywords:

_____

Rest параметры позволяют передавать функции различное количество аргументов (ноль или более). Это полезно, когда вы не знаете, сколько параметров получит функция. Все аргументы после оставшегося символа `...` будут сохранены в массиве.

Например:

```typescript
function Greet(greeting: string, ...names: string[]) {
	return greeting + " " + names.join(", ") + "!";
}

Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

Greet("Hello"); // returns "Hello !"
```
