# Questions

1) What is the difference between Component and PureComponent? Give
an example where it might break my app.
- The PureComponent only does a shallow comparison of props vs the component doing it deep, it may break the app if a PureComponent is set and the state or the store is several levels deep then its not going to work as expected tho I would expect something like this to be solved at development.

2) Context + ShouldComponentUpdate might be dangerous. Why is that?
Depending on where te context is set it may cause the whole tree to re-render triggering shouldComponentUpdate if not correctly setup may cause an infinite update loop.

3) Describe 3 ways to pass information from a component to its PARENT.
- Store (Redux, Sagas, Zustand, ...etc)
- Callback (send a function to the child that the child updates with some value)

4) Give 2 ways to prevent components from re-rendering.
- Memoizing values
- Avoid prop drilling

5) What is a fragment and why do we need it? Give an example where it might
break my app.
- Fragments were created because we couldn't render multiple root child so one would have to wrap them all in either a div or something else that would cause a mess, so fragments renders nothing on the dom but it allows to return a single root component node, as I know it may not break the app perse but it may cause some styling issues when implementing a styling library that is based on the virtual dom which is where fragments live.

6) Give 3 examples of the HOC pattern.
- When you need some shared functionality from third-party libs across components for example `withAnalytics`
- When you need to extend functionality across multiple components like `withToggle`
- When you need to share the store across multiple components like `withStore`

7) What's the difference in handling exceptions in promises, callbacks
and async…await?
- In promises you catch exception by chaining the result for example `.catch((error) => {//code})` in async await one would need to wrap the await call in a `try-catch` block to ensure any exceptions are handled.

8) How many arguments does setState take and why is it async.
- From class components it takes two, the state change and then a callback when the component finishes rendering,
its async because its a promise that the component will render, so this depending on the component may take a long time.

9) List the steps needed to migrate a Class to Function Component.
- Assuming the components we built using the single responsability principle and its not 200+ lines of code one can safely migrate it just by:
- Extract the state to `useState`
- Extract the side-effects to `custom hooks` or `useEffect`

Otherwise it may be safer to first break it down into multiple components


10) List a few ways styles can be used with components.
- Import the stylesheet file (CSS, sass, less, ...etc)
- Use styled components
- Using modules
- Inline styling

11) How to render an HTML string coming from the server.
- Not recommended but using the dangerouslySetInnerHTML prop from the elements