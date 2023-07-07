#### Ответ

Если реквизиты компонента изменяются без обновления компонента, новое значение реквизита никогда не будет отображено, поскольку функция конструктора никогда не обновит текущее состояние компонента. Инициализация состояния из props выполняется только при первом создании компонента.

Приведенный ниже компонент не будет отображать обновленное входное значение:

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      inputValue: this.props.inputValue,
    };
  }

  render() {
    return <div>{this.state.inputValue}</div>;
  }
}
```

Использование реквизита внутри метода рендеринга обновит значение:

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      record: [],
    };
  }

  render() {
    return <div>{this.props.inputValue}</div>;
  }
}
```


____
#React #props 

____

#### [[004 React + Redux|Назад]]