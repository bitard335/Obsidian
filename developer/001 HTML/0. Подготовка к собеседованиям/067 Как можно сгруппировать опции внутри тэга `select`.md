![Как можно сгруппировать опции внутри тэга `<select>`?](https://youtu.be/trriSYNrHw4?t=304)

![[Pasted image 20230704022703.png|600]]

#### Ответ

Опции внутри тега `select` можно сгруппировать, используя тег `optgroup`. Этот тег позволяет создавать группы опций, которые могут быть связаны общей характеристикой.

Например, следующий код демонстрирует использование тега `optgroup` для создания двух групп опций:

```
<select>
  <optgroup label="Фрукты">
    <option>Яблоко</option>
    <option>Банан</option>
    <option>Апельсин</option>
  </optgroup>
  <optgroup label="Овощи">
    <option>Морковь</option>
    <option>Огурец</option>
    <option>Помидор</option>
  </optgroup>
</select>
```

В этом примере, опции "Яблоко", "Банан" и "Апельсин" группируются внутри тега `optgroup` с меткой "Фрукты", а опции "Морковь", "Огурец" и "Помидор" группируются внутри тега `optgroup` с меткой "Овощи".

При выборе опции из списка, выбранный элемент будет отображаться внутри тега `select`, а метка группы опций будет отображаться в качестве заголовка этой группы.

Использование тега `optgroup` может помочь упорядочить и структурировать список опций, особенно если список довольно длинный или содержит много элементов.

___
#HTML #select #optgroup 

___

#### [[001 HTML|Назад]]