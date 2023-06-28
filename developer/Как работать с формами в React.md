#### Ответ
Подробнее: [[1.4.12 Работа с формами]]

Используем:
#onChange() чтобы получать текущее значение;
#onSubmit() - событие "отправки" формы;
e.preventDefault() - чтобы страница не перезагружалась.

HTML-элемент `<textarea>` в качестве текста отображает дочерний элемент:

```
<textarea>
  Привет! Тут просто немного текста внутри тега textarea
</textarea>
```

В HTML `<select>` создаёт выпадающий список. HTML-код в этом примере создаёт выпадающий список
```
<select>
  <option value="grapefruit">Грейпфрут</option>
  <option value="lime">Лайм</option>
  <option selected value="coconut">Кокос</option>
  <option value="mango">Манго</option>
</select>
```

В HTML `<input type="file">` позволяет пользователю выбрать один или несколько файлов для загрузки с устройства на сервер или управлять им через JavaScript с помощью [File API](https://developer.mozilla.org/ru/docs/Web/API/File/Using_files_from_web_applications)
```
<input type="file" />
```


____
#react

____

#### [[004 React + Redux|Назад]]