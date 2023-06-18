## 53 Как работает props children

Некоторые компоненты не знают своих потомков заранее. Это особенно характерно для таких компонентов, как Sidebar или Dialog, которые представляют из себя как бы «коробку», в которую можно что-то положить. Для таких компонентов мы рекомендуем использовать специальный проп children, который передаст дочерние элементы сразу на вывод:

function FancyBorder(props) {

  return (

    <div className={'FancyBorder FancyBorder-' + props.color}>

      {props.children}

    </div>

  );

}

Это позволит передать компоненту произвольные дочерние элементы, вложив их в JSX:

function WelcomeDialog() {

  return (

    <FancyBorder color="blue">

      <h1 className="Dialog-title">

        Добро пожаловать

      </h1>

      <p className="Dialog-message">

        Спасибо, что посетили наш космический корабль!

      </p>

    </FancyBorder>

  );

}

Всё, что находится внутри JSX-тега , передаётся в компонент FancyBorder через проп children. Поскольку FancyBorder рендерит {props.children} внутри div, все переданные элементы отображаются в конечном выводе.
