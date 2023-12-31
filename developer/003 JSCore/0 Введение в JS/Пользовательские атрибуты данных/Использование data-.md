____

tags: #DOM #HTML #HTMLElement  #data- #dataset 

youtube: 
1. 
_____

The **data-*** Глобальные атрибуты образуют класс атрибутов, называемых пользовательскими атрибутами данных, которые позволяют обмениваться проприетарной информацией между #HTML и его представлением #DOM посредством сценариев.
~~~
<h1>Secret agents</h1>

<ul>
    <li data-id="10784">Jason Walters, 003: Found dead in "A View to a Kill".</li>
    <li data-id="97865">Alex Trevelyan, 006: Agent turned terrorist leader; James' nemesis in "Goldeneye".</li>
    <li data-id="45732">James Bond, 007: The main man; shaken but not stirred.</li>
</ul>
~~~

Все такие пользовательские данные доступны через интерфейс [`HTMLElement`](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement) элемента, для которого установлен атрибут. Свойство [`HTMLElement.dataset` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset "Currently only available in English (US)") предоставляет к ним доступ. Символ * может быть заменён любым именем, соответствующим производственному правилу имён xml, со следующими ограничениями:

-   имя не должно начинаться с xml, в любом случае для этих букв используется регистр;
-   имя не должно содержать точку с запятой (U + 003A);
-   имя не должно содержать заглавных букв.

Обратите внимание, что свойство [`HTMLElement.dataset` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset "Currently only available in English (US)") является [`DOMStringMap`](https://developer.mozilla.org/ru/docs/Web/API/DOMStringMap), и имя настраиваемого атрибута данных data-test-value будет доступно через #HTMLElement. #dataset. testValue (или HTMLElement.dataset ["testValue"]), поскольку любая тире (U + 002D) заменяется заглавной буквой следующей буквы, преобразуя имя в camelcase.

### Использование

Добавляя атрибуты #data- *, даже обычные элементы HTML могут стать довольно сложными и мощными программными объектами. Например, «спрайт» космического корабля в игре может быть простым элементом [`<img>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img) с атрибутом класса и несколькими атрибутами data- *:

```
<img class="spaceship cruiserX3" src="shipX3.png"
  data-ship-id="324" data-weapons="laserI laserII" data-shields="72%"
  data-x="414354" data-y="85160" data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()">
</img>
```

Более подробное руководство по использованию атрибутов данных HTML см. В разделе [Using data attributes](https://developer.mozilla.org/ru/docs/Learn/HTML/Howto/Use_data_attributes)