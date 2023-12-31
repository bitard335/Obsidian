____

tags: #HTML #тег #DOCTYPE

links: [[Список тэгов разметки]] , [[006 HTML, XHTML и XML и их отличия]]

_____

#HTML расшифровывается как «Hypertext Markup Language», то есть «язык гипертекстовой разметки». HTML отвечает за структуру и содержание страницы.

HTML состоит из тегов, а тег состоит из имени, заключённого между знаками «меньше» и «больше». Примеры тегов: h1, p, ul

## Парные теги

Теги бывают парными и одиночными.

Парные теги могут содержать текст и другие теги. У парных тегов, в отличие от одиночных, есть вторая половинка — закрывающий тег:

~~~
<h3>Текст заголовка</h3
~~~

В закрывающей части парных тегов перед именем ставится символ / («слэш»).

В парные теги можно вкладывать другие теги. Например, как в списках:
~~~
<ul>
  <li>Элемент списка</li>
</ul>
~~~
У вложенных тегов всегда нужно следить за правильным порядком закрытия. Вложенный тег не может закрываться позже родительского:

Не все теги можно вкладывать в другие теги, например, тег h1 нельзя вкладывать в p.

## Одиночные теги

Существуют не только парные, но и одиночные теги.

Например, тег <img> позволяет добавить картинку в разметку.

Сам по себе <img> не имеет смысла. Чтобы этот тег был действительно полезен, необходимо написать внутри него адрес, ведущий к картинке. #img

Делается это с помощью атрибута src:
~~~
<img src="keks.png">
~~~
У тега может быть несколько атрибутов. В этом случае они пишутся через пробел:
~~~
<тег атрибут1="значение1" атрибут2="значение2">
~~~
Например, картинке при желании можно задать размеры:
~~~
<img src="keks.png" width="200" height="100">
~~~
Комментарии

Код, заключённый между символами <!-- и -->, работать не будет. Если эти символы удалить, то код заработает, это называется «раскомментировать». С помощью комментариев обычно временно отключают какой-то код или оставляют подсказки и разъяснения.

<!-- Это комментарий в HTML --> HTML

## Структура HTML

Каждый HTML-документ начинается с декларации типа документа или «доктайпа». Тип документа необходим, чтобы браузер мог определить версию HTML и правильно отобразить страницу.
Подробнее про: [[DOCTYPE]]

~~~
<!--  !DOCTYPE html
-->
~~~

Подробнее про: [[006 HTML, XHTML и XML и их отличия]]

Простейшая HTML-страница состоит как минимум из трёх тегов: #html, #head и #body.

Тег #head обычно содержит заголовок, ключевые слова, описание страницы и другие служебные данные. Также внутри него подключаются внешние ресурсы, например, стили. Содержимое этого тега не отображается на странице напрямую.

Для подключения стилей к странице существует тег #link.

Для этого у него есть атрибут #href в котором задаётся адрес стилевого файла, а значение stylesheet атрибута rel говорит браузеру, что мы подключаем именно стили, а не что-то другое.
~~~
<head>

  <link href="адрес_файла_стилей.css" rel="stylesheet">

</head>
~~~
Ещё один элемент, который располагается в head — это тег #title.

В нём задаётся заголовок страницы, который отображается во вкладках браузера. По заголовку должно быть понятно, о чём эта страница, даже когда она не открыта в браузере, а отображается в результатах поиска или в браузерных закладках.
~~~
<head>

  <title>Тренажёры — HTML Academy</title>

</head>
~~~
Ещё один важный тег, располагающийся внутри head это тег #meta.

Он одиночный, то есть не требует парный закрывающий тег в конце. 
С помощью meta можно сообщать браузеру, поисковому роботу или другому устройству различную служебную информацию (или метаинформацию) о вашем сайте: кодировку текста, описание контента и так далее. 
Для этого используются теги meta с разными атрибутами и их значениями.

Кодировка текста HTML-страницы указывается с помощью атрибута #charset:
~~~
meta charset="название кодировки"
~~~
Самая распространённая современная кодировка — #utf-8.

Перечень ключевых слов задаётся тегом meta, у которого атрибут name имеет значение #keywords. Ключевые слова (самые важные слова из содержания страницы) перечисляются в атрибуте content через запятую:
~~~
<meta name="keywords" content="важные, ключевые, слова">
~~~

Краткое описание (или аннотация) страницы задаётся похожим образом, только значение атрибута name меняется на #description:
~~~
<meta name="description" content="краткое описание">
~~~

В теге #body хранится содержание страницы, которое отображается в окне браузера.
Внутри body находятся те теги, которые отображаются на странице.

Например, тег #main выделяет основное содержание страницы, которое не повторяется на других страницах. И обычно на странице используется один main.

Тег #header содержит вводную часть страницы, которую чаще называют «шапкой», а тег #footer описывает заключительную часть страницы, или «подвал». Существует тег #section, который обозначает крупный смысловой (или «логический») раздел (он неотделяемый).

Тег #article, обозначает цельный, законченный и самостоятельный фрагмент информации.

Коммент / статья / твит

Для создания логического раздела с основной навигацией предназначен тег nav (сокращение от английского «navigation»). Обычно в #nav включают ссылки на другие страницы или навигацию по текущей странице.

Тег #aside включает в себя дополнительное содержание, не связанное напрямую с основным. Такие блоки ещё часто называют «сайдбарами» или боковыми панелями.

Для создания основной структуры текста используют заголовки.

В HTML существует целое семейство заголовочных тегов: от h1 до h6.

Тег h1 обозначает самый важный заголовок (заголовок верхнего уровня), а тег h6 обозначает подзаголовок самого нижнего уровня.
~~~
<h1>Спецификация HTML</h1>

<h2>Раздел 1 Введение</h2>

<h3>Раздел 1.1 Происхождение языка</h3>
~~~

Основную структуру текста создают с помощью заголовков, а более мелкую выстраивают с помощью параграфов (или абзацев). Для разметки параграфов предназначен тег p. По умолчанию абзацы начинаются с новой строки и отделяются от остального контента отступами сверху и снизу.

Подробнее про: [[Список тэгов разметки]]