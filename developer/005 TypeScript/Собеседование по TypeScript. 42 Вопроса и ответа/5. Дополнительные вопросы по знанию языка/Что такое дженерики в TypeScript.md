____

tags: #

[[005 TypeScript|На главную]]

links: 

youtube: 
1. 

keywords:

_____

Generics - это инструмент, который позволяет создавать компоненты, которые можно переиспользовать. Он создает компонент, который может работать с различными типами данных. Это позволяет пользователям использовать свои собственные типы. Generics гарантируют, что программа масштабируемой в долгосрочной перспективе.

```typescript
function identity<T>(arg: T): T {
	return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
```
