React `Profiler` - это инструмент для измерения затрат на рендеринг в приложении React. Он помогает разработчикам идентифицировать части приложения, которые работают медленно и могут быть оптимизированы.

Компонент `Profiler` может быть добавлен в любом месте дерева компонентов, чтобы измерить затраты на его рендеринг. Например, приведенный ниже код демонстрирует, как компонент `Profiler` используется для измерения затрат на рендеринг компонента `Navigation` и его потомков:

dust

Copy

```
render(
  <App>
    <Profiler id="Navigation" onRender={callback}>
      <Navigation {...props} />
    </Profiler>
    <Main {...props} />
  </App>
);
```

**Read More**: [8 Best Resume Builders & CV Makers for Software Developers](https://arc.dev/developer-blog/best-resume-builders/)


____
#react

____

#### [[004 React + Redux|Назад]]