____

tags: #TypeScript #rest 

[[005 TypeScript|На главную]]

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
