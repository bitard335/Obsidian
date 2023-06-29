_Optimizations are a key part of every application. Knowing which tools to use can be a huge productivity boost. This is a more advanced question that an interview might ask to understand the candidate’s ability to diagnose and optimize a React application._

React **`Profiler`** is a means to measure the cost of rendering in a React application. The purpose of this component is to help developers identify parts of the application that are slow and may benefit from further optimizations.

The `Profiler` can be added anywhere in the component tree to measure its rendering cost. For example, the code below shows how the `Profiler` component is used to measure the rendering cost of the `Navigation` component and its descendants:

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