ССЫЛКА на оригинальный источник: https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes

## **✔**MDN

Пользовательский атрибут данных - это атрибут без пространства имен, имя которого начинается со строки "`data-`", имеет по крайней мере один символ после дефиса, [совместим с XML](https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible) и не содержит [прописных букв ASCII](https://infra.spec.whatwg.org/#ascii-upper-alpha).

Все имена атрибутов [HTML-элементов](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) в [HTML-документах](https://dom.spec.whatwg.org/#html-document) автоматически переводятся в нижний регистр ASCII, поэтому ограничение на использование прописных букв ASCII не влияет на такие документы.

[Пользовательские атрибуты данных](https://html.spec.whatwg.org/multipage/dom.html#custom-data-attribute) предназначены для хранения пользовательских данных, состояния, аннотаций и тому подобного, частных для страницы или приложения, для которых больше нет подходящих атрибутов или элементов.

Эти атрибуты не предназначены для использования программным обеспечением, которое не известно администраторам сайта, использующего эти атрибуты. Для общих расширений, которые должны использоваться несколькими независимыми инструментами, либо эта спецификация должна быть расширена, чтобы явно предоставлять эту функцию, либо следует использовать такую технологию, как [микроданные](https://html.spec.whatwg.org/multipage/microdata.html#microdata) (со стандартизированным словарем).

Например, сайт о музыке может аннотировать элементы списка, представляющие треки в альбоме, с помощью пользовательских атрибутов данных, содержащих длину каждого трека. Затем эта информация может быть использована самим сайтом, чтобы позволить пользователю сортировать список по длине трека или фильтровать список по трекам определенной длины.

```
<ol>
 <li data-length="2m11s">Beyond The Sea</li>
 ...
</ol>
```

Однако для пользователя было бы неуместно использовать универсальное программное обеспечение, не связанное с этим музыкальным сайтом, для поиска треков определенной длины, просматривая эти данные.

Это связано с тем, что эти атрибуты предназначены для использования собственными скриптами сайта и не являются общим механизмом расширения общедоступных метаданных.

Аналогично, автор страницы может написать разметку, которая предоставляет информацию для инструмента перевода, который он намеревается использовать:

```
<p>The third <span data-mytrans-de="Anspruch">claim</span> covers the case of <span
translate="no">HTML</span> markup.</p>
```

В этом примере атрибут "`data-mytrans-de`" задает конкретный текст для продукта MyTrans, который будет использоваться при переводе фразы "претензия" на немецкий язык. Однако стандартный `[translate](https://html.spec.whatwg.org/multipage/dom.html#attr-translate)`атрибут используется, чтобы сообщить ему, что на всех языках "HTML" должен оставаться неизменным. Когда доступен стандартный атрибут, нет необходимости использовать [пользовательский атрибут данных](https://html.spec.whatwg.org/multipage/dom.html#custom-data-attribute).

В этом примере пользовательские атрибуты данных используются для хранения результата обнаружения функции для `[PaymentRequest](https://w3c.github.io/payment-request/#dom-paymentrequest)`, который может быть использован в CSS для оформления страницы оформления заказа по-другому.

```
<script>
 if ('PaymentRequest' in window) {
   document.documentElement.dataset.hasPaymentRequest = '';
 }
</script>
```

Здесь `data-has-payment-request`атрибут фактически используется как [логический атрибут](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute); достаточно проверить наличие атрибута. Однако, если автор того пожелает, позже он может быть заполнен некоторым значением, возможно, чтобы указать на ограниченную функциональность функции.

Каждый [HTML-элемент](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) может иметь любое количество заданных [пользовательских атрибутов данных](https://html.spec.whatwg.org/multipage/dom.html#custom-data-attribute) с любым значением.

Авторы должны тщательно разрабатывать такие расширения, чтобы при игнорировании атрибутов и удалении любого связанного CSS страница оставалась пригодной для использования.

Пользовательские агенты не должны выводить какое-либо поведение реализации из этих атрибутов или значений. Спецификации, предназначенные для пользовательских агентов, не должны определять, чтобы эти атрибуты имели какие-либо значимые значения.

Библиотеки JavaScript могут использовать [пользовательские атрибуты данных](https://html.spec.whatwg.org/multipage/dom.html#custom-data-attribute), поскольку они считаются частью страницы, на которой они используются. Авторам библиотек, которые повторно используются многими авторами, рекомендуется включать их имя в имена атрибутов, чтобы снизить риск конфликтов. Там, где это имеет смысл, авторам библиотек также рекомендуется настраивать точное имя, используемое в именах атрибутов, чтобы библиотеки, авторы которых по незнанию выбрали одно и то же имя, можно было использовать на одной странице, и чтобы на одной странице можно было использовать несколько версий конкретной библиотеки, даже если эти версии не являются взаимно совместимыми.

Например, библиотека с именем "DoQuery" может использовать такие имена атрибутов, как `data-doquery-range`, а библиотека с именем "jJo" может использовать такие имена атрибутов, как `data-jjo-range`. Библиотека jJo также может предоставить API для установки того, какой префикс использовать (например`J.setDataPrefix('j2')`, чтобы атрибуты имели имена, подобные `data-j2-range`).

---
`element.[dataset](https://html.spec.whatwg.org/multipage/dom.html#dom-dataset)`

## **✔**MDN

Возвращает `[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`объект для атрибутов элемента`[data-*](https://html.spec.whatwg.org/multipage/dom.html#attr-data-*)`.

Имена, написанные через дефис, становятся верблюжьими. Например, `data-foo-bar=""`становится `element.dataset.fooBar`.

Атрибут `dataset`IDL предоставляет удобные средства доступа для всех `[data-*](https://html.spec.whatwg.org/multipage/dom.html#attr-data-*)`атрибутов элемента. При получении атрибут `[dataset](https://html.spec.whatwg.org/multipage/dom.html#dom-dataset)`IDL должен возвращать a`[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`, ассоциированным элементом которого является этот элемент.

`[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`Интерфейс используется для `[dataset](https://html.spec.whatwg.org/multipage/dom.html#dom-dataset)`атрибута. У каждого `[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`есть связанный элемент.

```
[Exposed=Window,
 LegacyOverrideBuiltIns]
interface DOMStringMap {
  getter DOMString (DOMString name);
  [CEReactions] setter undefined (DOMString name, DOMString value);
  [CEReactions] deleter undefined (DOMString name);
};
```

Чтобы получить пары`DOMStringMap` имя-значение, выполните следующий алгоритм:

1.  Пусть list- пустой список пар имя-значение.
    
2.  Для каждого атрибута содержимого `[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`[связанного элемента](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-element), первые пять символов которого являются строкой "`data-`", а остальные символы (если таковые имеются) не содержат никаких [прописных букв ASCII](https://infra.spec.whatwg.org/#ascii-upper-alpha), в том порядке, в котором эти [атрибуты перечислены](https://dom.spec.whatwg.org/#concept-element-attribute) в списке атрибутов элемента, добавьте пару имя-значение, к listимени которойимя атрибута, из которого удалены первые пять символов и значение которого является значением атрибута.
    
3.  Для каждого имени вlist, для каждого символа U + 002D С МИНУСОМ ДЕФИСА (-) в имени, за которым следует [строчная альфа ASCII](https://infra.spec.whatwg.org/#ascii-lower-alpha), удалите символ U + 002D С МИНУСОМ ДЕФИСА (-) и замените символ, который следует за ним, на тот же символ, [преобразованный в ASCII верхний регистр](https://infra.spec.whatwg.org/#ascii-uppercase).
    
4.  Возвратlist.
    

[Поддерживаемые имена свойств](https://webidl.spec.whatwg.org/#dfn-supported-property-names) `[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`объекта в любой момент времени - это имена каждой пары, возвращенной в результате [получения`DOMStringMap` пар "имя-значение](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-pairs)" в этот момент в порядке возврата.

Чтобы [определить значение именованного свойства](https://webidl.spec.whatwg.org/#dfn-determine-the-value-of-a-named-property) name для a `[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`, верните компонент значения пары имя-значение, компонент имени которого находится nameв списке, возвращенном при [получении`DOMStringMap` пар имя-значение](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-pairs).

Чтобы [задать значение нового именованного свойства](https://webidl.spec.whatwg.org/#dfn-set-the-value-of-a-new-named-property) или [задать значение существующего именованного свойства](https://webidl.spec.whatwg.org/#dfn-set-the-value-of-an-existing-named-property) для `[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`, с учетом имени свойства nameи нового значенияvalue, выполните следующие действия:

1.  Если nameсодержит символ U+ 002D С МИНУСОМ ЧЕРЕЗ ДЕФИС (-), за которым следует [строчная альфа ASCII](https://infra.spec.whatwg.org/#ascii-lower-alpha), затем введите ["`SyntaxError`"](https://webidl.spec.whatwg.org/#syntaxerror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
    
2.  Для каждой [строчной буквы ASCII](https://infra.spec.whatwg.org/#ascii-upper-alpha) nameвставьте символ U + 002D ЧЕРЕЗ ДЕФИС-МИНУС (-) перед символом и замените символ тем же символом, [преобразованным в нижний регистр ASCII](https://infra.spec.whatwg.org/#ascii-lowercase).
    
3.  Вставьте строку `data-`в начале name.
    
4.  Если nameне соответствует XML`[Name](https://www.w3.org/TR/xml/#NT-Name)`-коду, введите ["`InvalidCharacterError`"](https://webidl.spec.whatwg.org/#invalidcharactererror) `[DOMException](https://webidl.spec.whatwg.org/#dfn-DOMException)`.
    
5.  [Задайте значение атрибута](https://dom.spec.whatwg.org/#concept-element-attributes-set-value) для `[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`[связанного элемента](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-element), используя nameи value.
    

Чтобы [удалить существующее именованное свойство](https://webidl.spec.whatwg.org/#dfn-delete-an-existing-named-property) name для a `[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`, выполните следующие действия:

1.  Для каждой [строчной буквы ASCII](https://infra.spec.whatwg.org/#ascii-upper-alpha) nameвставьте символ U + 002D ЧЕРЕЗ ДЕФИС-МИНУС (-) перед символом и замените символ тем же символом, [преобразованным в нижний регистр ASCII](https://infra.spec.whatwg.org/#ascii-lowercase).
    
2.  Вставьте строку `data-`в начале name.
    
3.  [Удалите атрибут по заданному имени](https://dom.spec.whatwg.org/#concept-element-attributes-remove) nameи `[DOMStringMap](https://html.spec.whatwg.org/multipage/dom.html#domstringmap)`[связанный с ним элемент](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-element).
    

Этот алгоритм будет вызываться Web IDL только для имен, которые заданы более ранним алгоритмом для [получения`DOMStringMap` пар имя-значение](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-pairs). [[WEBIDL]](https://html.spec.whatwg.org/multipage/references.html#refsWEBIDL)

Если веб-страница хотела, чтобы элемент представлял космический корабль, например, как часть игры, он должен был бы использовать `[class](https://html.spec.whatwg.org/multipage/dom.html#classes)`атрибут вместе с `[data-*](https://html.spec.whatwg.org/multipage/dom.html#attr-data-*)`атрибутами:

```
<div class="spaceship" data-ship-id="92432"
     data-weapons="laser 2" data-shields="50%"
     data-x="30" data-y="10" data-z="90">
 <button class="fire"
         onclick="spaceships[this.parentNode.dataset.shipId].fire()">
  Fire
 </button>
</div>
```

Обратите внимание, как имя атрибута, написанное через дефис, становится верблюжьим в API.

Дан следующий фрагмент и элементы с аналогичными конструкциями:

```
<img class="tower" id="tower5" data-x="12" data-y="5"
     data-ai="robotarget" data-hp="46" data-ability="flames"
     src="towers/rocket.png" alt="Rocket Tower">
```

... можно представить функцию`splashDamage()`, которая принимает некоторые аргументы, первым из которых является элемент для обработки:

```
function splashDamage(node, x, y, damage) {
  if (node.classList.contains('tower') && // checking the 'class' attribute
      node.dataset.x == x && // reading the 'data-x' attribute
      node.dataset.y == y) { // reading the 'data-y' attribute
    var hp = parseInt(node.dataset.hp); // reading the 'data-hp' attribute
    hp = hp - damage;
    if (hp < 0) {
      hp = 0;
      node.dataset.ai = 'dead'; // setting the 'data-ai' attribute
      delete node.dataset.ability; // removing the 'data-ability' attribute
    }
    node.dataset.hp = hp; // setting the 'data-hp' attribute
  }
}
```