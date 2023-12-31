![Зачем в `setState()` нужно передавать функцию?](https://youtu.be/GZUy2i6QN7o?t=627)

#### Ответ

![[Pasted image 20230704174536.png|600]]

`setState()` - это метод, который используется в React для обновления состояния компонента и запуска перерисовки (re-render) компонента с обновленным состоянием.

Когда вызывается `setState()`, React обновляет состояние компонента, объединяя его с новыми данными, переданными в качестве аргумента. Затем React перерисовывает компонент с обновленным состоянием, что приводит к обновлению отображения на экране.

Обновление состояния с помощью `setState()` является асинхронным и может быть объединено (batched) для оптимизации производительности. Это означает, что несколько вызовов `setState()` могут быть объединены в одно обновление состояния, чтобы уменьшить количество перерисовок компонента и повысить производительность.

Например, представим, что у нас есть компонент `Counter`, который отображает счетчик и имеет кнопку для его увеличения. Мы можем использовать `setState()` для обновления состояния компонента при нажатии на кнопку:

```
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
```

Здесь мы используем `setState()` в обработчике события `handleClick` для обновления состояния компонента `Counter`. При каждом клике на кнопку `Increment` вызывается `setState()`, что приводит к обновлению состояния компонента и его перерисовке с новым значением счетчика.

> Какой второй аргумент можно передать опционально в setState и какова его цель?

Второй аргумент, который можно передать в метод `setState()` - это функция обратного вызова (callback), которая будет выполнена после того, как состояние компонента будет обновлено и компонент будет перерисован.

Цель этой функции обратного вызова - выполнить какой-либо дополнительный код после обновления состояния компонента. Например, это может быть выполнение каких-то действий, которые зависят от обновленного состояния компонента, или выполнение каких-то действий после перерисовки компонента.

Вот пример использования функции обратного вызова в `setState()`:

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      { count: this.state.count + 1 },
      () => console.log("Count updated:", this.state.count)
    );
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
```

Здесь мы передаем вторым аргументом функцию обратного вызова, которая выводит обновленное значение счетчика в консоль после его обновления. При каждом клике на кнопку `Increment` вызывается `setState()`, обновляя состояние компонента и вызывая функцию обратного вызова после обновления.

____
#React #setState 

____

#### [[004 React + Redux|Назад]]