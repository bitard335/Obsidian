![Методы строк в JavaScript?](https://youtu.be/CjdCxxqObaM?t=415)

#### Ответ

![[Pasted image 20230702123146.png|600]]

В JavaScript есть множество методов для работы со строками. Некоторые из наиболее популярных методов строк приведены ниже:

1. `length` - возвращает длину строки.

```
const str = "Hello, world!";
console.log(str.length); // 13
```

2. `toLowerCase()` - возвращает строку в нижнем регистре.

```
const str = "Hello, World!";
console.log(str.toLowerCase()); // "hello, world!"
```

3. `toUpperCase()` - возвращает строку в верхнем регистре.

```
const str = "Hello, World!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
```

4. `charAt(index)` - возвращает символ в строке по указанному индексу.

```
const str = "Hello, World!";
console.log(str.charAt(0)); // "H"
console.log(str.charAt(7)); // "W"
```

5. `indexOf(substring)` - возвращает индекс первого вхождения подстроки в строку.

```
const str = "Hello, World!";
console.log(str.indexOf("o")); // 4
console.log(str.indexOf("z")); // -1
```

6. `slice(start, end)` - возвращает новую строку, содержащую символы между указанными индексами.

```
const str = "Hello, World!";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(7)); // "World!"
```

7. `replace(searchValue, replaceValue)` - заменяет все вхождения подстроки на другую строку.

```
const str = "Hello, World!";
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
```

8. `split(separator)` - разбивает строку на массив подстрок, используя разделитель.

```
const str = "Hello, World!";
console.log(str.split(" ")); // ["Hello,", "World!"]
```

9. `trim()` - удаляет пробельные символы в начале и конце строки.

```
const str = "   Hello, World!   ";
console.log(str.trim()); // "Hello, World!"
```

Это лишь некоторые из методов, доступных для работы со строками в JavaScript. Они помогают упростить различные операции со строками и могут быть использованы во многих сценариях программирования.

___
#JS #string #length #chartAt #toUpperCase #toLowerCase #indexOf #lastIndexOf #slice #substr #substring #replace #trim

___

### [[003 JSCore|Назад]]