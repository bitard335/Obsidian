____

tags: #TypeScript #partial #required #nonnullable #record #readonly #readonlyArray

[[5. TypeScript |На главную]]

![](https://www.youtube.com/watch?v=BTB3VDkWiOQ)

keywords:

#Record Создает тип объекта, ключи свойств которого `Keys`, а значениями свойств - `Type`. 
Эту утилиту можно использовать для сопоставления свойств одного типа с другим типом.

```typescript
interface CatInfo {
	age: number;
	breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
	miffy: { age: 10, breed: "Persian" },
	boris: { age: 5, breed: "Maine Coon" },
	mordred: { age: 16, breed: "British Shorthair" },
};
```

_____

