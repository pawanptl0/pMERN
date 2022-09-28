const Reactfile = () => {
  return (
    <div>

      <div>
        <h6>What is React</h6>
        <p>React is a JavaScript library for building user interfaces. It is used to build single page applications. It allows us to create reusable UI components. It renders HTML to the web page by using a function <small> <mark> ReactDOM.render() </mark></small></p>
      </div>

      <div>
        <h6>Why React?</h6>
        <p>It is fast, Apps made in React can handle complex updates and still feel quick and responsive. It is modular, Instead of writing large, dense files of code, can write many smaller, reusable files. It is scalable, Large programs that display a lot of changing data are where React performs best. It is flexible, can use React for interesting projects that have nothing to do with making a web app. It is popular.</p>
      </div>

      <div>
        <h6>HTML, CSS and JS/ES6</h6>
        <p>
          <strong>HTML: </strong>'What' contents you want to place on your webpage. It defines 'the structure' of webpage.<br />
          <strong>CSS: </strong>'How' content should appear on webpage. It define 'style rules' for webpages.<br />
          <strong>JS/ES6: </strong> to provide functionalities on webpages like DOM manipulation, event handling, ajax calls, business logic, ...</p>
      </div>

      <div>
        <h6>Framework and Library</h6>
        <p>'Framework' standardizes the process. Angular, ember, spring are frameworks. 'Library' simplifies the task. jquery, react, collection/io/jdbc/servlet are libraries.</p>
      </div>

      <div>
        <h6>React Environment Setup</h6>
        <p>Download and install 'NodeJS' <br /> Install 'create-react-app' CLI tool. <small> npm install -g create-react-app</small><br />Create a React Project. <small>npx create-react-app my-app</small><br /> Run React Project. <small> npm start </small>. It compiling JSX/modern JS to legacy JS. do bundling, minification, uglification. start webpack development server. host all the bundles.</p>
      </div>

      <div>
        <h6>What happen's when don't install 'create-react-app'</h6>
        <p>We have to setup manually react library, react-dom library, babel, webpack/gulp/grunt, devlopment server, linting tool, testing tools, etc. We have to add 'create-react-app' plugin manually to our Babel configuration. It’s intended only for development and must be disabled in production.</p>
      </div>

      <div>
        <h6>Bundling</h6>
        <p> It is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once. </p>
      </div>

      <div>
        <h6>Code-spliting</h6>
        <p>To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” bundle. Code-Splitting is a feature supported by bundlers which can create multiple bundles that can be dynamically loaded at runtime. The best way to introduce code-splitting into your app is through the dynamic <small> <mark>import().</mark> </small></p>
      </div>

      <div>
        <h6>Babel</h6>
        <p>it is transplier. converts the jsx code into its equivalant js code. converts the modern js code into legacy js code</p>
      </div>

      <div>
        <h6>Virtual-DOM</h6>
        <p>The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation. Then the difference between the previous DOM representation and the new one is calculated. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.</p>
      </div>

      <div>
        <h6>reconciliation</h6>
        <p>When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.</p>
      </div>

      <div>
        <h6>React Fiber</h6>
        <p>Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.</p>
      </div>

      <div>
        <h6>JSX(Javascript Syntax Extension)</h6>
        <p>JSX used to describe the UI. It is similar to html. safe to embed user input in JSX. Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.</p>
      </div>

      <div>
        <h6>Elements</h6>
        <p>The <small> <mark> render </mark></small> method returns a 'React element', which is a lightweight <i>description</i> of what to render to see on the screen. These are the smallest building blocks of React apps. These are what components are “made of”. React elements are immutable. the only way to update the UI is to create a new element</p>
      </div>

      <div>
        <h6>Component</h6>
        <p>Component is JS function or Js class. It encapsulates data/logic/view together. Always start component names with a capital letter. Components can refer to other components in their output. All React components must act like pure functions with respect to their props.<br />

          <strong> Functional component: </strong> It accepts a single <small> <mark> props </mark></small> (which stands for properties) object argument with data and returns a React element.<br />

          <strong> Class  component: </strong>It has properties/data, members/fields, methods to process some business logic. Always call the base constructor with props <small><mark> super(props)</mark></small>.<br />

          <strong> controlled component: </strong> form data is handled/controlled by a React component's <small> <mark> state </mark></small> which is 'single source of truth'. The input’s value is always driven by the React state. form elements accept a <small> <mark> value </mark></small> attribute that can use to implement a controlled component. Use event handlers to get form data.<br />

          <strong>Uncontrolled component: </strong> The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML. form data is handled by the DOM itself. Instead of writing an event handler for every state update,  use a <small> <mark> ref </mark></small> to get form values from the DOM. can specify a <small> <mark> defaultValue </mark></small> attribute instead of <small> <mark> value </mark></small>
        </p>
      </div>

      <div>
        <h6>Props</h6>
        <p>These are like function arguments, and we send them into the component as 'attributes'. 'props' are readonly. components may accepts arbitrary props, including priitive values, React elements or functions. Children is a prop  that allow you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop.
        </p>
      </div>

      <div>
        <h6>What is the purpose of using super constructor with props argument?</h6>
        <p>A child class constructor cannot make use of <small> <mark> this </mark></small> reference until <small> <mark> super() </mark></small> method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to <small> <mark> super() </mark></small> call is to access <small> <mark> this.props </mark></small> in your child constructors.</p>
      </div>

      <div>
        <h6>State</h6>
        <p>To “remember” things, components use <mark><small>state</small></mark>. Components has a built-in <mark><small>state</small></mark> object. It is private and fully controlled by the component. Component properties should be kept in <mark><small>state</small></mark>. </p>
        <p>When the <mark><small>state</small></mark> object changes, the component re-renders. State Updates May Be Asynchronous. Set <mark><small>state</small></mark> using <mark><small>setState((state, props) =&gt; stateChange, [callback])</small></mark> method. If we try to update <mark><small>state</small></mark> directly then it won't re-render the component. State Updates are Merged. It is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it. Component may choose to pass its <mark><small>state</small></mark> down as props to its child components. This is commonly called a “top-down” or “unidirectional” data flow. There are three things you should know about <mark><small>setState().</small></mark> Do Not Modify State Directly.
          <a href="https://reactjs.org/docs/faq-state.html"
            target="_blank" className="btn btn-link" rel="noopener noreferrer">More...</a></p>
      </div>

      <div>
        <h6>Why immutability is important</h6>
        <p>Immutability makes complex features much easier to implement. Avoiding direct data mutation lets us keep previous versions of the partucular project history intact, and reuse them later. Detecting changes in mutable objects is difficult because they are modified directly. Detecting changes in immutable objects is considerably easier. If the immutable object that is being referenced is different than the previous one, then the object has changed. The main benefit of immutability is that it helps you build pure components in React. Immutable data can easily determine if changes have been made, which helps to determine when a component requires re-rendering.</p>
      </div>

      <div>
        <h6>key</h6>
        <p>Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. Keys apply on lists. A good rule of thumb is that elements inside the <small> <mark> map() </mark></small> call need keys. Keys Must Only Be Unique Among Siblings. Keys serve as a hint  but they don’t get passed to your components. If need, pass it explicitly as a prop with a different name. </p>
      </div>

      <div>
        <h6>lifting state up</h6>
        <p>When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.</p>
      </div>

      <div>
        <h6>Error Boundaries</h6>
        <p>This component provides a simple and reusable wrapper that you can use to wrap around components. Any rendering errors in components hierarchy can then be gracefully handled. A class component becomes an error boundary if it defines either (or both) of the lifecycle methods <small><mark> static getDerivedStateFromError()</mark> </small> or <small> <mark> componentDidCatch() </mark></small>. try / catch is great but it only works for imperative code.  Error boundaries do not catch errors inside event handlers. Error boundaries work like a JavaScript <small> <mark> catch &#123; &#125;</mark></small> block, but for components.</p>
        <p>Now we have 'react-error-boundary' library.  <a href="https://www.npmjs.com/package/react-error-boundary"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Hooks FAQ</a></p>
      </div>

      <div>
        <h6>refs</h6>
        <p> <small> <mark> ref </mark></small> attribute provides a way to access DOM nodes or React elements created in the render method. the ref created in the constructor with <small> <mark> React.createRef() </mark></small> receives the underlying DOM element as its current property. When the <small> <mark> ref </mark></small>  attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current. There are a few good use cases for refs: Managing focus, text selection, or media playback, Triggering imperative animations,
Integrating with third-party DOM libraries. Avoid using refs for anything that can be done declaratively. you may not use the ref attribute on function components. </p>
      </div>

      <div>
        <h6>HOC</h6>
        <p><small> <mark> const EnhancedComponent = higherOrderComponent(WrappedComponent); </mark></small><br />HOC is a function that takes a component and returns a new component. We want an abstraction that allows to define logic in a single place and share it across many components. This is where higher-order components comes in handy. a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects. Don’t Use HOCs Inside the render Method. Static Methods Must Be Copied Over. Refs Aren’t Passed Through.</p>
      </div>

      <div>
        <h6>Render Prop</h6>
        <p>A technique for sharig code between react components using a <small> <mark> prop </mark></small> whose value is a function. </p>
      </div>

      <div>
        <h6>React and Web Components</h6>
        <p>React and Web Components are built to solve different problems. Web Components provide strong encapsulation for reusable components, while React provides a declarative library that keeps the DOM in sync with your data. The two goals are complementary. As a developer, you are free to use React in your Web Components, or to use Web Components in React, or both.</p>
      </div>

      <div>
        <h6>Context</h6>
        <p>Provides a way to pass data through the component tree without having to pass props down manually at each level.It has 3 steps create context, provide context value and consume context value. It share data called as 'global' such as the current authenticated user, theme, or preferred language. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.</p>
      </div>

      <div>
        <h6>Portals</h6>
        <p><small> <mark> ReactDOM.createPortal(child, container); </mark></small><br />Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element. Regular application has single root element means single DOM Tree. We can create another root DOM tree and access nodes of each other. Mostly used for Modal, dialogs, hovercards, and tooltips.</p>
      </div>

      <div>
        <h6>Profiler</h6>
        <p>The Profiler measures how often a React application renders and what the “cost” of rendering is. Its purpose is to help identify parts of an application that are slow and may benefit from optimizations such as memoization.</p>
      </div>

      <div>
        <h6>React.StrictMode</h6>
        <p>StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants. Its useful for Identifying components with unsafe lifecycles, Warning about legacy string ref API usage, deprecated findDOMNode usage. Detecting unexpected side effects. Detecting legacy context API</p>
      </div>

      <div>
        <h6>React Security</h6>
        <p>By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.</p>
      </div>

      <div>
        <h6>Synthetic Event</h6>
        <p>Its a wrapper around a DOM Event object. SyntheticEvent, a cross-browser wrapper around the browser’s native event. Form Events: onChange onInput onInvalid onReset onSubmit</p>
      </div>

      <div>
        <h6>Shallow comparison</h6>
        <p>Primitive types: a (SC) b returns true if a and b have the same value and are of the same type.<br />
          Complex types: a (SC) b returns true if a and b reference the exact same object.</p>
      </div>

      <div>
        <h6> render()</h6>
        <p>This method is the only required method in a class component. When called, it should examine <small> <mark> this.props</mark></small> and <small> <mark> this.state </mark></small> and return one of the following types: React elements, Arrays and fragments, Portals, String and numbers, Booleans or null. The <small><mark> render() </mark></small> function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.</p>
      </div>

      <div>
        <h6>Use of Constructor</h6>
        <p>In React constructors are only used for two purposes:Initializing local state by assigning an object to this.state and Binding event handler methods to an instance.</p>
      </div>

      <div>
        <h6>How to use innerHTML in React?</h6>
        <p>The <small> <mark> dangerouslySetInnerHTML</mark></small> attribute is React's replacement for using <small> <mark> innerHTML </mark></small> in the browser DOM. </p>
      </div>

      <div>
        <h6>Hooks</h6>
        <p>Hooks are a new addition in React 16.8. Hooks are functions. let use <small> <mark> state </mark></small> and other React features without writing a class component. Hooks not work inside class. Use same hook more than once in component. Get rid of class. proper way to share statefull logic. Rules for using Hooks is always call hooks at the top level means do not call in loops, nested functions, and conditions. always call hooks from React Functions not regular javascript function. create your own Hooks to reuse stateful behavior between different components. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.</p>
      </div>

      <div>
        <h6>State Hook</h6>
        <p><small> <mark> const [state, setstate] = useState(initialState) </mark></small><br />
          Lets add <small> <mark> state </mark></small> in functional component. The brackets means array destructuring. The <small> <mark> initialState </mark></small> argument is used only during the first render. State hook returns array of two elements are current state variable(current state value) and setter function(function that update state). Setter function similar to <small> <mark> this.setState</mark></small> in a class, except it doesn’t merge the old and new state together. use spread operator to merge. When dealing with object or array use spread operator to get original info.</p>
      </div>

      <div>
        <h6>Effect Hook</h6>
        <p><small> <mark> useEffect(() =&gt; function,[input])</mark></small><br />Effect hook adds the ability to perform side effects from a function component. Perform data fetching, subscriptions, or manually changing the DOM from React components. We call these operations 'side effects' or 'effects' for short because they can affect other components and can’t be done during rendering. Effect hook serves the same purpose as <small> <mark> componentDidMount, componentDidUpdate, componentWillUnmount</mark> </small> in React classes, but unified into a single API.Effect hook has <small> <mark> function </mark></small> as first argument which optionally return function were we can write unsubscribe event and dependacy array as second optional argmuent. Effect hook runs both after the first render and after every update. Every time we re-render, we schedule a different effect, replacing the previous one. React also cleans up effects from the previous render before running the effects next time. Can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument. If want to run an effect and clean it up only once (on mount and unmount), can pass an empty array ([]) as a second argument. Effects Without Cleanup are Network requests, manual DOM mutations, and logging.</p>
      </div>

      <div>
        <h6>Reducer Hook</h6>
        <p><small><mark> const [state, dispatch] = useReducer(reducer, initialState, init) </mark></small><br />It is an alternative to State hook. Type of <small> <mark> state </mark></small> is Object or Array. Two or many number of state transitions. </p>
      </div>

      <div>
        <h6>Callback Hook</h6>
        <p> <small> <mark> useCallback(() =&gt; function,[input])</mark></small><br /> It will return memoized version of the callback function that only changes only if one of dependancies changes. Pass an inline callback and an array of dependencies. It is useful for performance optimization and prevent uneccessary re-render. use with <small> <mark> React.memo(). </mark></small> When we want to use cached function use this hook.</p>
      </div>

      <div>
        <h6>Memo Hooks</h6>
        <p><small> <mark> useMemo(() =&gt; function, input)</mark></small><br /> Returns a memoized value. It will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render. When we want to use cached result use this hook<br /></p>
      </div>

      <div>
        <h6>Ref Hooks</h6>
        <p><small> <mark> const ref = useRef(initialValue) </mark></small> Returns a mutable ref object. Mostly used for uncontrolled inputs. Preserves value. Does not re-render. Target are DOM nodes and elements.</p>
      </div>

      <div>
        <h6>custom Hooks</h6>
        <p>Create a JS function with append 'use' word. Call other hooks if required. Used to share logic like HOC and render prop. Complex business logic. To maintain global state.</p>
      </div>

      <div>
        <h6>joi-browser library</h6>
        <p>Imagine you run facebook and you want visitors to sign up on the website with real names and not something like l337_p@nda in the first name field. How would you define the limitations of what can be inputted and validate it against the set rules? This is joi, joi allows you to create blueprints or schemas for JavaScript objects (an object that stores information) to ensure validation of key information. joi object schema validation bundled for the browser (babelified and bundled). </p>
      </div>

      <div>
        <h6>react-toastify</h6>
        <p>React-Toastify allow you to add notification to your app with ease. No more nonsense!</p>
      </div>

      <div>
        <h6>Useful VSCode Extensions</h6>
        <p>'Auto Import ES6/TS/TSX/JSX', 'reactjs code snippets', 'beautify','Auto Rename Tag', 'Better Comments', 'Bracket Pair Colorizer', 'Cobalt2 Theme Offical', 'Code Snapshot', 'ES7 React/Redux/GraphQL/React-Native Snippets', 'ESLint','GitLens', 'HTML CSS Support', 'HTML Snippets','indent-rainbow', 'Live Server', 'Quakko.js', 'vscode-icons'.</p>
      </div>

      <div>
        <h6>How to enable production mode in React?</h6>
        <p>You should use Webpack's <small> <mark> DefinePlugin</mark></small> method to set <small> <mark> NODE_ENV </mark></small> to <small> <mark> production </mark></small>, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglify's dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle.</p>
      </div>

      <div>
        <h6>Is it possible to use React without rendering HTML?</h6>
        <p><small> <mark> render() return false/null/[] </mark></small></p>
      </div>

      <div>
        <h6>How can we find the version of React at runtime in the browser?</h6>
        <p>You can use <small> <mark> React.version</mark></small> to get the version.

        </p>
      </div>

      <div>
        <h6>How to use https instead of http in create-react-app?</h6>
        <p>You just need to use <small> <mark> HTTPS=true</mark></small> configuration. You can edit your package.json scripts section:</p>
      </div>

      <div>
        <h6>How to avoid using relative path imports in create-react-app?</h6>
        <p>Create a file called .env in the project root and write the import path: <small> <mark> NODE_PATH=src/app</mark></small></p>
      </div>

      <div>
        <h6>What are the popular packages for animation?</h6>
        <p>React Transition Group and React Motion are popular animation packages in React ecosystem.</p>
      </div>

      <div>
        <h6>What is redux-saga?</h6>
        <p>It is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.</p>
      </div>

      <div>
        <h6>What is the difference between React and Angular?</h6>
        <p><strong>React: </strong>React is a library.React uses JSX that looks like HTML in JS. In React, data flows only in one way and hence debugging is easy.<br />
          <strong>Angular: </strong> Angular is a framework. Angular follows the template approach for HTML. In Angular, data flows both way i.e it has two-way data binding between children and parent and hence debugging is often difficult.</p>
      </div>

      <div>
        <h6>How to use TypeScript in create-react-app application?</h6>
        <p><small> <mark> npx create-react-app my-app --typescript</mark></small></p>
      </div>

      <div>
        <h6>What is render hijacking in react?</h6>
        <p>The concept of render hijacking is the ability to control what a component will output from another component. It actually means that you decorate your component by wrapping it into a Higher-Order component. By wrapping you can inject additional props or make other changes, which can cause changing logic of rendering. It does not actually enables hijacking, but by using HOC you make your component behave in different way.</p>
      </div>

      <div>
        <h6>What is the purpose of registerServiceWorker in React?</h6>
        <p>React creates a service worker for you without any configuration by default. The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that's what you should know about service worker's for now. It's all about adding offline capabilities to your site.</p>
      </div>

      <div>
        <h6>How React PropTypes allow different types for one prop?</h6>
        <p>You can use <small> <mark> oneOfType()</mark></small> method of <small> <mark> PropTypes</mark></small>.</p>
      </div>

      <div>
        <h6>What is the behavior of uncaught errors in react 16?</h6>
        <p>In React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree. The reason behind this decision is that it is worse to leave corrupted UI in place than to completely remove it. For example, it is worse for a payments app to display a wrong amount than to render nothing.</p>
      </div>

      <div>
        <h6>What is NextJS and major features of it?</h6>
        <p>Next.js is a popular and lightweight framework for static and server‑rendered applications built with React. It also provides styling and routing solutions. Server-rendered by default. Automatic code splitting for faster page loads. Simple client-side routing (page based). Webpack-based dev environment which supports (HMR). Able to implement with Express or any other Node.js HTTP server. Customizable with your own Babel and Webpack configurations</p>
      </div>

      <div>
        <h6>What is diffing algorithm?</h6>
        <p>React needs to use algorithms to find out how to efficiently update the UI to match the most recent tree. The diffing algorithms is generating the minimum number of operations to transform one tree into another. However, the algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree. In this case, for displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions: Two elements of different types will produce different trees. The developer can hint at which child elements may be stable across different renders with a key prop.</p>
      </div>

      <div>
        <h6>What is windowing technique?</h6>
        <p>Windowing is a technique that only renders a small subset of your rows at any given time, and can dramatically reduce the time it takes to re-render the components as well as the number of DOM nodes created. If your application renders long lists of data then this technique is recommended. Both react-window and react-virtualized are popular windowing libraries which provides several reusable components for displaying lists, grids, and tabular data.</p>
      </div>

      <div>
        <h6>What is the typical use case of portals?</h6>
        <p>React portals are very useful when a parent component has overflow: hidden or has properties that affect the stacking context(z-index,position,opacity etc styles) and you need to visually “break out” of its container. For example, dialogs, global message notifications, hovercards, and tooltips.</p>
      </div>

      <div>
        <h6>What is the difference between Real DOM and Virtual DOM?</h6>
        <p><strong> Real DOM: </strong>Updates are slow. DOM manipulation is very expensive. You can update HTML directly. It causes too much of memory wastage. Creates a new DOM if element updates.
          <strong> Virtual DOM: </strong>Updates are fast. DOM manipulation is very easy. You Can’t directly update HTML. There is no memory wastage. It updates the JSX if element update.</p>
      </div>

      <div>
        <h6>Can you list down top websites or applications using react as front end framework?</h6>
        <p>Facebook, Uber, Instagram, WhatsApp, Airbnb, Dropbox, Flipboard, Netflix, PayPal</p>
      </div>

      <div>
        <h6>What is react scripts?</h6>
        <p>The 'react-scripts' package is a set of scripts from the create-react-app starter pack which helps you kick off projects without configuring. The 'react-scripts start' command sets up the development environment and starts a server, as well as hot module reloading.</p>
      </div>

      <div>
        <h6>What is Concurrent Rendering?</h6>
        <p>The Concurrent rendering makes React apps to be more responsive by rendering component trees without blocking the main UI thread. It allows React to interrupt a long-running render to handle a high-priority event. i.e, When you enabled concurrent Mode, React will keep an eye on other tasks that need to be done, and if there's something with a higher priority it will pause what it is currently rendering and let the other task finish first. </p>
      </div>

      <div>
        <h6>What are the benefits of using typescript with reactjs?</h6>
        <p>It is possible to use latest JavaScript features. Use of interfaces for complex type definitions. IDEs such as VS Code was made for TypeScript. Avoid bugs with the ease of readability and Validation.</p>
      </div>

      <div>
        <h6>What is the difference between Shadow DOM and Virtual DOM?</h6>
        <p>The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.</p>
      </div>

      <div>
        <h6>React 17</h6>
        <p>JSX Transformation: Reat import is not required, Improved bundle size.</p>
      </div>

      <div>
        <h6>React 18</h6>
        <p>
          <code>
          import ReactDom from 'react-dom' //before 18 <br/>
import ReactDom from 'react-dom/client' // in 18<br/><br/>

ReactDom.render(&lt;App /&gt;, document.getElementById('root')) //before 18<br/>

const root = ReactDom.createRoot(document.getElementById('root'))<br/>
root.render(&lt;App /&gt;) // new in 18<br/><br />
          </code>
before 18 state update was done without concurrency means state update was done sequential.in 18 state update was done with concurrency means state update was done parallel.<br />

New concurrent API's<br />
1. useTransition()  :It is hook use in functional component. It tells react that some state update be handled with lower priority. returs array with exactly 2 values [isPending, startTransition]<br /><br />

2. startTransition(): It is function for class based compoenent. It tells react that some state update ay be handled with lower priority. wrap state update in startTransition()
Ex. startTransition(() =&gt; setSelectedUser(user))<br /><br />

3. useDefferedValue(): It is a hook. tell react that older value should be displayed until a new(updated) value is ready. kind of similar to startTransition(). 
Ex. const defferedVal = useDefferedValue(value)
get and deffered(old) value until updated value availabel.<br /><br />

# New hooks<br />
1. useSyncExternalStore()<br />
2. useInsertionEffect()<br />
3. useId()
<br /></p>
      </div>

      <div>
        <h6>TypeScript Features</h6>


        <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript is pure object oriented with classes, interfaces and statically typed like C# or Java. TypeScript features are it is just JavaScript, it supports other JS libraries, It is portable. It also embraces features like generics and type annotations. TypeScript supports Object Oriented Programming concepts like classes, interfaces, inheritance, etc. </p>

        <p>TypeScript supports type definitions for existing JavaScript libraries. TypeScript Definition file (with .d.ts extension) provides definition for external JavaScript libraries. Hence, TypeScript code can contain these libraries. When a TypeScript script gets compiled, there is an option to generate a declaration file (with the extension .d.ts) that functions as an interface to the components in the compiled JavaScript. The concept of declaration files is analogous to the concept of header files found in C/C++. The declaration files (files with .d.ts extension) provide intellisense for types, function calls, and variable support for JavaScript libraries like jQuery, MooTools, etc.</p>

        <p>2 pros are provide type checking errors and provides better documentation. We should use TS because no reason not to use, becoming preffered way to use JS, more reliable and easy to understand</p>

        <p>Installation: <small> <mark> npm i -g typescript <br /> tsc --version </mark></small> <br />
          Save file as .ts extension and transpile to js using command <small> <mark> tsc filename </mark></small><br />
          React we create template like <small> <mark> npx create-react-app myapp --template typescript</mark></small></p>

        <p>Typescript Props:<br />
          <samp>
            interface HomeProps &#123; header: string, subHeader?: string&#125; <br />
            const Home = (&#123; Headers, subHeader &#125; : HomeProps) =&gt;  &#123; &#125;
          </samp>
        </p>

        <p>Typescript useState: <br />
          <samp>
            interface Address &#123; city: string, pin?: number&#125; <br />
            interface User &#123; name: string, admin: boolean, address: Address &#125; <br />
            const Home = () =&gt;  &#123; const [user, setUser] = useState&lt; User | null &gt;(null) &#125; // this is called union type. <br />
          </samp>
        </p>

        <p>TypescripT Forms and Events:<br />
          <samp>
            interface Address &#123; city: string, pin?: number&#125; <br />
            interface User &#123; name: string, admin: boolean, address: Address &#125; <br />
            const Home = () =&gt;  &#123; const [user, setUser] = useState&lt; User | null &gt;(null) &#125; // this is called union type. <br />
          </samp>
        </p>



        <p>ex. <samp> let num: number / boolean / string / any / number[] / any[] <br />
          enum Color &#123; red = 1, green = 2 &#125;; let bgColor = Color.green; <br />
          let endswith = (&lt;string&gt;message).endsWith('c') // this is one metnod type assertion. <br />
          let endswith = (message as string).endsWith('c') // this is another metnod type assertion. <br /><br />
          let drawPoint = (point: &#123; x: number, y: number &#125; ) =&gt; &#123; &#125; //this is called inline annotation<br />
          drawPoint(&#123; x: 1, y: 3 &#125;) <br /><br />
          interface IPoint &#123; x: number, y: number &#125; <br />
          let drawPoint = (point: IPoint ) =&gt; &#123; &#125; <br /><br />
          constructor(x?:number, y?number).... // in class constructor '?' means parameters are optional.

        </samp></p>
      </div>

      <div>
        <h6>React Rendering</h6>
        <p><strong>Initial Phase</strong>
        During Initial rendering React goes 'root' to 'leaf'. It converts JSX into JS Object using 'CreateElement'. Put into virtual DOM and send updates to commit phase to render into the DOM.
        <br />

        <strong>Re-rendering Phase</strong>
        React checks 'flagged' component. It converts JSX into JS Object using 'CreateElement'. Compare updated element with previous rendered elemetns tree. send only update to commit phase to render into DOM.
        </p>
      </div>

      <div>
        <h6>How to stop unnecessary render</h6>
        <p>Parent has a Child and When Parent renders, child also render but not commit. Can stop this unnessary rendering by using child as 'children' in Parent. Component change its state not its props. <br/>
        use childs memoized version.<br />
        Parent has Object and we passing it to child then use memoized version of that Object and pass memoized version to child. Same for array.
        </p>
      </div>

      <div>
        <h6>Ways to cause Re-rendering</h6>
        <p>When component calls useState's setter or useReducer's dispatch function. <br />
        When parent components Re-renders.<br />
  All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.</p>
      </div>


	


      <div>
        <h6>Axios</h6>
        <p>It is promise based HTTP client for browser and Node.js. It sends asynchronous HTTP requests to REST endpoints and perform CRUD operations.<br />
        * basic methods for generating requests in axios: <small> <mark> axios.request(config), axios.get(url[, config]), axios.delete(url[, config]), axios.head(url[, config]), axios.options(url[, config]), axios.post(url[, data[, config]]), axios.put(url[, data[, config]]), axios.patch(url[, data[, config]])</mark></small><br />
        config object may have 'method', 'url', 'headers' properties.<br />
        * Axios response object consist of : <samp> data, status, statusText, headers, config, request.</samp><br />

        </p>
      </div>



      <div>
        <a href="https://github.com/sudheerj/reactjs-interview-questions"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Router</a>
        <a href="https://github.com/sudheerj/reactjs-interview-questions"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Interview Questions</a>
        <a href="https://www.w3schools.com/react/react_lifecycle.asp" target="_blank" className="btn btn-link" rel="noopener noreferrer">LifeCycle Methods</a>
        <a href="https://reactjs.org/docs/react-component.html#setstate"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">setState</a>
        <a href="https://www.w3schools.com/react/react_events.asp"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">React Events</a>
        <a href="https://formik.org/docs/tutorial"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Formik</a>
        <a href="https://reactjs.org/docs/optimizing-performance.html"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Performance Optimization</a>
        <a href="https://reactjs.org/docs/hooks-faq.html"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Hooks FAQ</a>
        <a href="https://react-typescript-cheatsheet.netlify.app/docs/basic/setup"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">React Typescript</a>
      </div>
    </div>
  )
}

export default Reactfile
