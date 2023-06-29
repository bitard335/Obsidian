#### Ответ

When you want to access `this.props` in `constructor()` then you should pass props to `super()` method.

**Using `super(props)`:**

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props); // { name: 'John', ... }
  }
}
```

**Using `super()`:**

```js
class MyComponent extends React.Component {
  constructor(props) {
    super();
    console.log(this.props); // undefined
  }
}
```

Outside `constructor()` both will display same value for `this.props`.


____
#react

____

#### [[004 React + Redux|Назад]]