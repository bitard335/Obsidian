Этот раздел описывает синтаксис JavaScript. Исходный код ECMAScript скриптов сканируется слева направо и преобразуется в последовательность найденных элементов в токены, управляющие символы, окончания строк, комментарии или пробелы.

ECMAScript также определяет ключевые слова и литералы и имеет указания для автоматической вставки точек с запятой к концу инструкции.

## Спецсимволы

Спецсимволы не имеют визуального представления, однако используются для управления интерпретацией текста.

Code point
Name
Abbreviation
Description
`U+200C`
Zero width non-joiner

### ZWNJ
Размещается между символами во избежание их соединений в лигатуры для некоторых языков ([Wikipedia](http://en.wikipedia.org/wiki/Zero-width_non-joiner))
`U+200D`
Zero width joiner

### ZWJ
Размещается между символами, которые не могли бы нормально объединиться для того, чтобы символы отрисовывались, используя их соединительную форму в некоторых языках ([Wikipedia](http://en.wikipedia.org/wiki/Zero-width_joiner))
`U+FEFF`
Byte order mark

### BOM
Используется вначале скрипта для того, чтобы пометить Юникод и порядок байтов ([Wikipedia](http://en.wikipedia.org/wiki/Byte_order_mark))

## Пробелы

Пробельные символы улучшают читабельность исходного текста и разделяет токены друг от друга. Пробельные символы обычно не обязательны для функционирования кода. 
[Утилиты для уменьшения объёма кода](http://en.wikipedia.org/wiki/Minification_%28programming%29) часто удаляют пробельные символы, чтобы уменьшить объем кода.

## Окончание строк

В дополнение к пробельным символам, символы окончания строк тоже используются для читабельности исходного кода. Однако, в некоторых случаях, символы окончания строк могут влиять на выполнение JavaScript-кода, т.к. есть некоторые места, где они запрещены.

Окончания строк также затрагивают процесс [автоматического проставления точки с запятой](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion). Также окончания строк попадают под условия [регулярных выражений](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions) при поиске **\s** класса.

В ECMAScript, в качестве окончания строк можно использовать только ниже перечисленные Юникод символы. Другие символы окончания строк будут интерпретированы, как пробельные символы (например, Next Line, NEL, U+0085 будут интерпретироваться, как пробельные символы).

## Комментарии

Комментарии используются для добавления подсказок, заметок, предложений или предупреждений. Они могут упростить чтение и понимание кода. Также они могут быть использованы для предотвращения выполнения кода (этот приём практикуется при отладке кода).

В JavaScript есть несколько способов указать комментарии в коде.

Первый способ `//` комментарий; в этом случае весь текст в строке после двойного слеша будет комментарием, например:

```
function comment() {
  // Это комментарий в строке
  console.log("Hello world!");
}
comment();
```

Copy to Clipboard
Второй способ - это `/* */`, такой способ более гибок, чем первый.
Например, вы можете использовать его в одной строке:

```
function comment() {
  /* Это однострочный комментарий */
  console.log("Hello world!");
}
comment();
```

Copy to Clipboard
Либо вы можете сделать многострочный комментарий, как показано здесь:

```
function comment() {
  /* Этот комментарий располагается на нескольких линиях.
     Обратите внимание, что вам не нужно обрывать комментарий, пока вы его не закончите*/
  console.log("Hello world!");
}
comment();
```

Copy to Clipboard
Также, если пожелаете, то вы можете использовать такое комментирование посреди строки кода. Хотя это может ухудшить читабельность кода:

```
function comment(x) {
  console.log("Hello " + x /* вставьте значение x */ + " !");
}
comment("world");
```

Copy to Clipboard
Чтобы отключить выполнение кода, просто оберните код в комментарий, как здесь:

```
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

Copy to Clipboard
В этом случае `console.log()` никогда не выполнится, пока он внутри комментария. Таким способом можно отключить любое количество строк кода.

## Шебанг комментарии

Третий специализированный синтаксис комментариев, **шебанг комментарий**, в процессе стандартизации в ECMAScript (смотреть [Hashbang Grammar proposal](https://github.com/tc39/proposal-hashbang)).

Шебанг комментарий ведёт себя точно также как и однострочный (`//`) комментарий. Вместо этого, он начинается с `#!` и **действителен только в самом начале скрипта или модуля**. Обратите внимание, что никакие пробелы не разрешены перед `#!`. Комментарий состоит из всех символов после `#!` до конца первой строки; только такой комментарий разрешён.

Шебанг комментарий определяет путь к JavaScript интерпретатору, скрипт которого вы хотите выполнить. Пример, как это работает:

```
#!/usr/bin/env node

console.log("Hello world");
```

Copy to Clipboard
**Примечание:** Hashbang comments in JavaScript mimic [shebangs in Unix](https://en.wikipedia.org/wiki/Shebang_(Unix)) used to run files with proper interpreter.

**Предупреждение:** Although [BOM](https://en.wikipedia.org/wiki/Byte_order_mark) before hashbang comment will work in a browser it is not advised to use BOM in a script with hasbang. BOM will not work when you try to run the script in Unix/Linux. So use UTF-8 without BOM if you want to run scripts directly from shell.

Для определения JavaScript интерпретатора используйте только `#!` . В любых других случаях используйте `//` (или многострочный комментарий).

## Ключевые слова
### Зарезервированные ключевые слова в ECMAScript 2015

-   [`break`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/break)
-   [`case`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch)
-   `class`
-   [`catch`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch)
-   [`const`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const)
-   [`continue`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/continue)
-   [`debugger`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/debugger)
-   [`default`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch)
-   [`delete`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/delete)
-   [`do`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while)
-   [`else`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else)
-   [`export`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export)
-   `extends`
-   [`finally`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch)
-   [`for`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for)
-   [`function`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/function)
-   [`if`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else)
-   [`import`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import)
-   [`in`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in)
-   [`instanceof`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/instanceof)
-   [`let`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let)
-   [`new`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new)
-   [`return`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/return)
-   [`super`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/super)
-   [`switch`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch)
-   [`this`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this)
-   [`throw`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/throw)
-   [`try`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch)
-   [`typeof`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof)
-   [`var`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/var)
-   [`void`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/void)
-   [`while`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while)
-   [`with`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/with)
-   `yield`

### Ключевые слова, зарезервированные на будущее

Следующие ключевые слова зарезервированы на будущее ECMAScript спецификацией. За ними сейчас не стоит никакой функциональности, но она может появиться в будущих версиях, поэтому эти ключевые слова не могут быть использованы, как идентификаторы. Эти ключевые слова не могут быть использованы даже в strict или non-strict режимах.

-   `enum`
-   `await`

Следующие ключевые слова зарезервированы для кода, который выполняется в strict режиме:

-   `implements`
-   `package`
-   `protected`
-   `static`
-   `interface`
-   `private`
-   `public`

### Зарезервированные ключевые слова в более старых версиях

Перечисленные ниже ключевые слова зарезервированы для старых версий ECMAScript спецификаций (ECMAScript от 1 по 3).

-   `abstract`
-   `boolean`
-   `byte`
-   `char`
-   `double`
-   `final`
-   `float`
-   `goto`
-   `int`
-   `long`
-   `native`
-   `short`
-   `synchronized`
-   `transient`
-   `volatile`

К тому же, литералы `null`, `true`, и `false` зарезервированы в ECMAScript для их обычной функциональности.

### Использование зарезервированных слов

Зарезервированные слова действительно применяются только к идентификаторам **(vs. IdentifierNames)**. Как описано в [es5.github.com/#A.1](http://es5.github.com/#A.1), это все имена IdentifierNames, которые не исключают зарезервированных слов.

```
a.import
a["import"]
a = { import: "test" }.
```

Copy to Clipboard

С другой стороны, следующее выражение неправильно, т.к. Идентификатор `IdentifierName` не содержит зарезервированных слов. Идентификаторы используются для `FunctionDeclaration, FunctionExpression, VariableDeclaration` и т.п., в то время, как `IdentifierNames` используются для `MemberExpression, CallExpression` и т.п.

```
function import() {} // неправильно.
```

Copy to Clipboard

## Литералы
### Литерал Null

Подробнее о ``[`null`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/null)null``.

```
null
```

Copy to Clipboard

### Литерал Boolean

Подробнее о ``[`Boolean`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean)``.

```
true
false
```

Copy to Clipboard

### Литералы чисел

#### Decimal (десятичные числа)

```
1234567890
42

// Будьте осторожны с использованием нуля вначале числа:

0888 // 888 распознается, как десятичное число
0777 // распознается, как восьмеричное число, 511 - как десятичное число
```

Copy to Clipboard

Имейте в виду, что литералы десятичных чисел могут начинаться с нуля (0), за которым следует другое десятичное число, но в случае, если число начинается с нуля и за ним идёт цифра меньше 8, то число будет распознано как восьмеричное. This won't throw in JavaScript, see [баг 957513](https://bugzilla.mozilla.org/show_bug.cgi?id=957513). See also the page about ``[`parseInt()`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt#octal_interpretations_with_no_radix)``.

#### Binary (двоичные числа)

Синтаксис двоичных чисел состоит из цифры ноль, за которой следует маленькая или большая латинская буква "B" (0b или 0B). Этот синтаксис новый и появился только в ECMAScript 2015, пожалуйста посмотрите таблицу совместимости с браузерами. Это может производить ошибку ``[`SyntaxError`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)``: "Missing binary digits after 0b", Если цифры не 0 или 1.

```
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
```

Copy to Clipboard

#### Octal (восьмеричные числа)

Восьмеричный числовой синтаксис, который использует 0 с последующей, в нижнем или верхнем регистре, латинскую букву "О" (`0o` или `0O)`. Этот синтаксис появился в ECMAScript 2015, пожалуйста, посмотрите таблицу совместимости с браузерами. Это может производить ошибку `SyntaxError`: "Missing octal digits after 0o", если цифры не между 0 и 7.

```
var n = 0O755; // 493
var m = 0o644; // 420

// Так же возможно с лидирующими нулями (см. заметку о десятичных дробях выше)
0755
0644
```

Copy to Clipboard

#### Hexadecimal (шестнадцатеричные числа)

Шестнадцатеричный числовой синтаксис, который использует 0 с последующей, в нижнем или верхнем регистре, латинскую букву "X" (`0x` или `0X)`. Если числа после 0x вне диапазона (0123456789ABCDEF), то может последовать за этим [`SyntaxError`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError): "Identifier starts immediately after numeric literal".

```
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

Copy to Clipboard

### Литерал Object (Объект)

Смотрите также [`Object`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object) и [`Object initializer`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer) для получения более подробной информации.

```
var o = { a: "foo", b: "bar", c: 42 };

// сокращённая нотация. Появилась в ES2015
var a = "foo", b = "bar", c = 42;
var o = {a, b, c};
// вместо
var o = { a: a, b: b, c: c };
```

Copy to Clipboard

### Литерал Array (Массив)

Смотрите также [`Array`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array) для получения более подробной информации.

```
[1954, 1974, 1990, 2014]
```

Copy to Clipboard

### Литерал String (Строка)

```
'foo'
"bar"
```

Copy to Clipboard

#### Экранирование шестнадцатеричной последовательности

```
'\xA9' // "©"
```

Copy to Clipboard

#### Экранирование Юникод символов

Для экранирования Юникод символов обязательно нужно указать по крайней мере 4 символа после \u.

```
'\u00A9' // "©"
```

Copy to Clipboard


### Литерал Регулярного выражения

Смотрите также ``[`RegExp`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp)`` для получения более подробной информации.

```
/ab+c/g

// An "empty" regular expression literal
// The empty non-capturing group is necessary
// to avoid ambiguity with single-line comments.
/(?:)/
```

Copy to Clipboard

### Литерал Шаблона

Смотрите также [`template strings`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals) для получения более подробной информации.

```
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`
```

Copy to Clipboard

## Автоматическая вставка "точки с запятой"

Некоторые [`JavaScript условия`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements) должны быть завершены точкой с запятой и поэтому на них влияет автоматическая вставка точки с запятой (ASI):

-   Пустое условие
-   `let`, `const`, переменные
-   `import`, `export`, объявление модулей
-   Оператор-выражение
-   `debugger`
-   `continue`, `break`, `throw`
-   `return`

Спецификация ECMAScript напоминает о [трёх правилах вставки точки с запятой](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-rules-of-automatic-semicolon-insertion).

1. Точка с запятой ставится до, когда ограничитель строки или "}" is encountered that is not allowed by the grammar.

```
{ 1 2 } 3

// согласно ASI, будет преобразовано в

{ 1 2 ;} 3;
```

Copy to Clipboard

2. Точка с запятой ставится в конце, когда обнаружен конец вводимой строки токенов и парсер is unable to parse the single input stream as a complete program.

Here `++` is not treated as a [`postfix operator` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators "Currently only available in English (US)") applying to variable `b`, because a line terminator occurs between `b` and `++`.

```
a = b
++c

// согласно ASI, будет преобразовано в

a = b;
++c;
```

Copy to Clipboard

3. Точка с запятой вставляется в конце, когда согласно инструкции с ограниченным производством в грамматике следует ограничитель строки. Эти утверждения с правилами «no LineTerminator here» здесь:

-   PostfixExpressions (`++` and `--`)
-   `continue`
-   `break`
-   `return`
-   `yield`, `yield*`
-   `module`

```
return
a + b

// согласно ASI, будет преобразовано в

return;
a + b;
```