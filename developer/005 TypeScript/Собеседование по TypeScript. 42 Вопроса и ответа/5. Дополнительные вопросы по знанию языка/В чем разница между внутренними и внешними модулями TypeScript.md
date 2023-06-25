____

tags: #

[[005 TypeScript|На главную]]

links: 

youtube: 
1. 

keywords:

_____


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
