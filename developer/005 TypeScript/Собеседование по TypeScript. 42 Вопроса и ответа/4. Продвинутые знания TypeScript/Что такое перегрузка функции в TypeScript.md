____

tags: #

[[005 TypeScript|На главную]]

links: 

youtube: 
1. 

keywords:

_____

Перегрузка функции - это способ определить функцию с несколькими вариантами типов и реализаций. Перегруженная функция может иметь несколько определений, которые отличаются по количеству и типу параметров.

```typescript
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
	return a + b;
}
```
