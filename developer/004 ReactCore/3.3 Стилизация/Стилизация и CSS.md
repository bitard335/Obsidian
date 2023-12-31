____

tags: #React #CSS

keywords:

_____

### Как добавить CSS-классы в компоненты?

Передайте в проп `className` строку:

```
render() {
  return <span className="menu navigation-menu">Меню</span>
}
```

Обычно CSS-классы зависят от пропсов или состояния:

```
render() {
  let className = 'menu';
  if (this.props.isActive) {
    className += ' menu-active';
  }
  return <span className={className}>Меню</span>
}
```

> Совет
> 
> Если вы часто пишете похожий код, то пакет [classnames](https://www.npmjs.com/package/classnames#usage-with-reactjs) поможет упростить его.

### Можно ли использовать встроенные стили?

Конечно, прочитайте [документацию об элементах DOM](https://ru.reactjs.org/docs/dom-elements.html#style).

### Встроенные стили — это плохо?

CSS-классы, как правило, лучше для производительности, чем встроенные стили.

### Что такое CSS-in-JS?

«CSS-in-JS» — это паттерн, в котором CSS-код создаётся при помощи JavaScript, вместо того, чтобы писать его во внешних файлах.

_Обратите внимание, что данная функциональность не входит в React из коробки, а предоставляется сторонними библиотеками._ React ничего не знает про то, как определяются стили. Если вы сомневаетесь, использовать указанный выше способ, то хорошим началом станет определение стилей в отдельном файле с расширением `*.css`, как вы ранее привыкли это делать, а затем указать нужные классы с помощью [`className`](https://ru.reactjs.org/docs/dom-elements.html#classname).

### Можно создавать анимации в React?

React может использоваться для создания крутых анимаций! В качестве примера посмотрите библиотеки [React Transition Group](https://reactcommunity.org/react-transition-group/), [React Motion](https://github.com/chenglou/react-motion), [React Spring](https://github.com/react-spring/react-spring) или [Framer Motion](https://framer.com/motion).