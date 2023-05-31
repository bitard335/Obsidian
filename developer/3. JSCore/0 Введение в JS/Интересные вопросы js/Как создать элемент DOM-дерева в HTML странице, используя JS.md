В [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)-документе `document.createElement()` метод создает HTML-элемент, указанный с помощью _tagName_ , или [`HTMLUnknownElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement), если _tagName_ не распознается.

## Добавление / удаление элементов DOM - дерева

	* node.prepend (...nodes or strings) - вставляет узлы или строки в начало node;
	* node.before (...nodes or strings) - вставляет узлы или строки до node;
	* node.after (...nodes or strings) - вставляет узлы или строки после node;
	* node.replaceWith (...nodes or strings) - заменяет node с заданными узлами или строками.
![[Pasted image 20221212215725.png]]

`document.createTextNode(Text)` 

`elem.insertAdjacentHTML(where, html)` 
* beforebegin - для вставки html непосредственно перед elem;
* afterbegin - для вставки html как первого дочернего элемента в elem;
* beforeend - для вставки html как последнего дочернего элемента в elem;
* afterend - для вставки html непосредственно после elem

![[Pasted image 20221212222135.png]]

`insertAdjacentText(where, text)` - для вставки строки текста text
`insertAdjacentText(where, elem)`  - для вставки элемента elem

node.remove()
elem.cloneNode(flDeep)

	DocumentFragment - используется редко. Идеален для создания шаблонов.

* parent.appandChild(node) - добавляет элемент в конец списка дочерних элементов; 
* parent.insertBefore(node, nextSibling) - вставляет элемент перед nextSibling;
* parent.removeChild(node) - удаляет элемент npde (здесь parent является родителем node)
* parent.replaceChild(newElem, node - заменяет дочерний элемент node на новый newElem.

document,write(HTML)

![[Pasted image 20221212225859.png]]