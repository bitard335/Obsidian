#### Ответ

It is possible. Below are the possible options:

```js
render() {
  return false
}
```

```js
render() {
  return true
}
```

```js
render() {
  return null
}
```

React version >=16.0.0:

```js
render() {
  return []
}
```

```js
render() {
  return ""
}
```

React version >=16.2.0:

```js
render() {
  return <React.Fragment></React.Fragment>
}
```

```js
render() {
  return <></>
}
```

React version >=18.0.0:

```js
render() {
  return undefined
}
```

____
#react

____

#### [[004 React + Redux|Назад]]