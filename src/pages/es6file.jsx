const Es6file = () => {
  return (
    <div>
      <div>
        <h6>Statement & Expression</h6>
        <p>If you can print it, or assign it to a variable, it’s an expression. If you can’t, it’s a statement.</p>
      </div>

      <div>
        <h6>Data types</h6>
        <p><strong>Number - </strong>integer or floating-point, integers are limited by ±253. also <mark><small>Infinity, -Infinity, NaN</small></mark>.<br />
          <strong>BigInt - </strong>supports for integers of arbitrary length, created by appending <mark><small>n</small></mark> to the end of an integer.<br />
          <strong>String - </strong>supports for strings.<br />
          <strong>Boolean - </strong><mark><small>true/false</small></mark><br />
          <strong>Object - </strong>more complex data structures<br />
          <strong>Symbol - </strong>unique identifiers.<br />
          <strong>undefined - </strong> Whenever we declare a variable without assigning any value to it, javascript implicitly assigns its value as <mark><small>undefined.</small></mark><br />
          <strong>null - </strong>It essentially represents a non-existent or an empty value i.e. we explicitly tell javascript interpreter that the variable has no value. We can assign a null value to a variable explicitly using the keyword <mark><small>null.</small></mark></p>
      </div>

      <div>
        <h6>Comparison</h6>
        <p>
          All comparison operators return a boolean value<br />
          comparing values of different types, JavaScript converts the values to numbers.<br />
          <mark><small>===</small></mark> checks the equality without type conversion called strict equality.<br />
          <mark><small>null/undefined</small></mark> are converted to numbers except equality. <mark><small>null</small></mark>  becomes <mark><small>0</small></mark>, <mark><small>undefined</small></mark> becomes <mark><small>NaN</small></mark>. <mark><small>null</small></mark> only equals <mark><small>undefined</small></mark><br />
          <code>'2' &gt; 1</code> returns true because both operands coverts to number.<br />
          <code>'2' &gt; '12'</code> returns true because of same type string not coverted to number. compare dictionary chars</p>
      </div>

      <div>
        <h6>Conditional branching: <small>if, ?</small></h6>
        <p>The <small><mark> if (…) </mark> </small>statement evaluates the expression in its parentheses and converts the result to a boolean.</p>
      </div>

      <div>
        <h6>Logical <small> OR </small> and <small> AND </small></h6>
        <p><mark><small>OR</small></mark> returns first truthy value and <mark><small>AND</small></mark> returns first falsy value.</p>
      </div>

      <div>
        <h6>Nullish coalescing operator <small> ?? </small></h6>
        <p>It checks for <mark><small>null/undefined</small></mark> value and returns defined value. Its like a ternary operator. We can also use a sequence of <mark><small>??</small></mark> to select the first value from a list that isn’t <mark><small>null/undefined</small></mark>. syntax. <small><mark>  a ?? b ?? c ... </mark></small>. We can compare it with logical <mark><small>OR</small></mark> operator. only difference is it returns first defined value.</p>
      </div>

      <div>
        <h6>Object</h6>
        <p>objects are used to store keyed collections of various data and more complex entities. It is key value pair. key can be multiword, access key and computed properties(result of any expression) using square bracket notation in object literal. objects are stored and copied “by reference”<br />
          - number <mark><small>0</small></mark> becomes a string <mark><small>"0"</small></mark> when used as a property key<br />

          - Reserved words are allowed as property names<br />

          - Array is an object and it is copied by reference. <small> <mark> Array.isArray(arr) </mark></small> method determines whether the passed value is an Array or not. returns <mark><small>true</small></mark> if Array otherwise <small><mark>false.</mark></small><br />

          - Generic objects or Object constructor method <small><mark> let obj = new Object() </mark> </small> <br />

          - literal method <small><mark> let obj = &#123; &#125;</mark> </small> <br />

          - delete the property <small> <mark> delete obj.propertyName </mark></small> <br />

          - clone or merge two objects dynamically <small> <mark> Object.assign(dest, [src1, src2, src3...]) </mark></small> <br />

          - check property existence <small><mark> obj.propertyName </mark></small> if present returns property value otherwise
          <mark><small>undefined</small></mark>. <small> <mark> 'key' in obj </mark></small> if present returns <mark><small>true</small></mark> otherwise <mark><small>false</small></mark><br />

          - walk over all keys of an object <small> <mark> for...in </mark></small> <br />

          - optional chaining stops the evaluation if the value before <mark><small>?.</small></mark> is <mark><small>undefined/null</small></mark> and returns <mark><small>undefined</small></mark>.
          ex.<code> alert( obj?.address?.street ); // undefined</code><br />

          - In primitive conversion all objects are <small> <mark> true </mark></small> in a boolean context. There are only numeric and string conversions. <small> <mark> obj[Symbol.toPrimitive](hint) </mark></small> here, <mark><small>hint</small></mark> is either 'string', 'number' or 'default'.
          <small> <mark> obj.toString() </mark></small> and <small> <mark> obj.valueOf() </mark></small> are old way method of conversion, <br />

          - Get <small> <mark> [key, value] </mark></small> pair from Object use <small> <mark> Object.entries(obj) </mark> </small>. It can use to create Map from Object.<br />

          - Get Object from <small> <mark> [key, value] </mark></small> use <small> <mark> Object.fromEntries(map) </mark></small>. It can use get Object from Map.<br />


          - Get real array of keys <small> <mark> Object.keys(obj) </mark></small><br />

          - Check property use <small> <mark> obj.hasOwnproperty(key) </mark></small>. It returns <small> <mark> true </mark></small> if obj has its own(not inherited) property named 'key'.</p>
      </div>

      <div>
        <h6>getter and setter properties</h6>
        <p>- two kinds of object properties 'data' and 'accessor'.<br />
          - data properties are regular properties.<br />
          - accessor properties are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.<br />
          - represented by 'getter' and 'setter' methods and denoted by <mark><small>get</small></mark> and <mark><small>set</small></mark> in literal objects.<br />
          - accessor properties are access and set like regular properties.<br />
          - can be used as wrappers over “real” property values. <code>get name()&#123; return this._name &#125;</code></p>
      </div>

      <div>
        <h6> <small>this</small> keyword</h6>
        <p>It’s common that an object method needs to access the information stored in the object to do its job. To access the object, a method can use the <small> <mark> this </mark></small> keyword. The value of this is the object “before dot”, the one used to call the method. The value of this is evaluated during the run-time. And it can be anything. In Arrow function <small> <mark> this </mark></small> represent the object where it defined. If arrow function defined in component then <small> <mark> this </mark></small> refers component. In regular function
          <small> <mark> this </mark></small> represent the object that called the method. If function called from button then <small> <mark> this </mark></small> represent button. if we call a method of an object using object.method notation then the value of 'this' is object itself. If we call method of an Object as standalone object or outside of that object 'this' will return global/window object in strict mode return undefined. </p>
      </div>

      <div>
        <h6>Symbol</h6>
        <p>It represents a unique identifier.
          - <code>let id = Symbol('userId');</code> <mark><small>id</small></mark> is a symbol and <mark><small>userId</small></mark> is a description or symbol name.<br />
          - Two symbols with same description are not equal.<br />
          - Symbols are not auto-convert. to display Symbols call explicit methods like <small><mark> toString() </mark></small><br />
          - Symbols are “Hidden” object properties. Symbols are use in objects with square brackets around it and access it using square brackets. <code>let user = &#123;name: 'John', [id]:1234 &#125;; alert(user[id]);</code> <br />
          - Symbolic properties do not participate in <small> <mark> for..in </mark></small> loop.<br />
          - to read (create if absent) a symbol from the global symbol registry, use <small><mark> Symbol.for(key) </mark></small><br />
          - get description of global symbols, use <small> <mark> Symbol.keyFor(sym) </mark></small><br />
          - There are number of system Symbols.<br />
          - <small> <mark> Symbol.iterator </mark></small> in object to make object iterable (and thus let <small> <mark> for..of </mark></small> work).</p>
      </div>

      <div>
        <h6>Increment/Decrement</h6>
        <p>The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).</p>
      </div>

      <div>
        <h6>Iterables</h6>
        <p>
          - <strong>Object</strong> - <small><mark> for...in </mark></small><br />

          - <strong>Array / Generator</strong> - <small><mark> for...of </mark></small><br />

          - <strong>Iterable</strong> - it allows to make any object useable in a <small><mark> for...of </mark></small> loop. It implements <small> <mark> Symbol.iterator </mark></small> method. Ex. <code>let range = &#123;from: 1, to: 2&#125;;</code><br />

          - <strong>Array-like</strong> - these are objects that have indexes and length, so they look like arrays. It uses <small><mark> for...of </mark></small> loop. Ex. <code>let arrayLike  = &#123;0: 'Hi', 1: 'World', length: 2 &#125;</code> <br />

          - <strong>Map/Set</strong> - <small><mark> for...of </mark></small> and <small> <mark> array.forEach </mark></small><br />

          - <small><mark> Array.from(iterable) </mark></small> - It converts iterables or array-likes into real array and then apply array methods on it. can not apply array methods on array-like or iteratable directly.
          <small> <mark> map.keys(), map.values(), set.keys(), set.values(), </mark></small> etc. returns iterables not real array.<br />

          - Array Destructuring works on iterables also.</p>
      </div>

      <div>
        <h6> IIFE</h6>
        <p>In the past, as there was only <mark><small>var</small></mark>, and it has no block-level visibility, programmers invented a way to emulate it called “immediately-invoked function expressions”. That’s not something we should use nowadays. Function Expression is created and immediately called. So the code executes right away and has its own private variables like <mark><small>let</small></mark>. The Function Expression is wrapped with parenthes is <small><mark> (function &#123;...&#125;) </mark></small> So, parentheses around the function is a trick to show JavaScript that the function is created in the context of another expression, and hence it’s a Function Expression: it needs no name and can be called immediately.</p>
      </div>

      <div>
        <h6>NFE</h6>
        <p>Named Function Expression, or NFE, is a term for Function Expressions that have a name. It allows the function to reference itself internally. It is not visible outside of the function.</p>
      </div>

      <div>
        <h6>Global object</h6>
        <p>The global object provides variables and functions that are available anywhere. In a browser it is named window, for Node.js it is global, for other environments it may have another name. Recently, <mark><small>globalThis</small></mark> was added to the language, as a standardized name for a global object, that should be supported across all environments and all major browsers.</p>
      </div>

      <div>
        <h6>call, apply and bind </h6>
        <p>
          <mark><small>call</small></mark> allows to call a function explicitly setting this. It accepts an argument list.
          <small> <mark> func.call(context, arg1, arg2, arg3, .....) </mark> </small><br />
          <mark><small>apply</small></mark> allows to call a function explicitly setting this with args as array-like object as the list of arguments.<small> <mark> func.apply(context, args)</mark> </small><br />
          <mark><small>bind</small></mark> a built-in method bind that allows to fix this. Syntax: <small> <mark> func.bind(context) </mark></small>.alternative for bind is wrapper function like arrow function.
        </p>
      </div>

      <div>
        <h6>Arrow function</h6>
        <p>- Arrow functions is simple and concise syntax for creating functions<br />
          - better than Function Expressions<br />
          - convenient for simple one-line actions<br />
          - Arrow functions have no <mark><small>this</small></mark>. The lookup of <mark><small>this</small></mark> is made exactly the same way as a regular variable search in the outer lexical environment.<br />
          - can’t be used as constructors<br />
          - can’t be called with <mark><small>new</small></mark> keyword<br />
          - Arrows have no “arguments”<br />
          - Arrows don’t have <mark><small>super</small></mark><br />
          - Arrow functions dont rebind constructor they inherit it.</p>
      </div>

      <div>
        <h6>Closure and its advantages / Lexical Environment</h6>
        <p>A closure is a function that remembers its outer variables and can access them. All functions are naturally closures. Every running function, code block &#123;...&#125;, script has an internal hidden associated object called 'Lexical Environment' having 2 parts 'Environment Record' an object that stores all local variables as properties and A reference to the outer 'lexical environment', the one associated with the outer code. When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.</p>
      </div>

      <div>
        <h6>Prototypal inheritance</h6>
        <p>objects have a special internal hidden property called <mark><small>[[ Prototype ]]</small></mark> that is either <mark><small>null</small></mark> or references another object. That object is called 'a prototype'. When read a property from <mark><small>object</small></mark> and its missing, Javascript automatically takes it from the prototype. such a thing is called as 'prototypal inheritance'.</p>
      </div>

      <div>
        <h6>Constructors function</h6>
        <p>The regular literal syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on. That can be done using Constructor functions and the <small> <mark> new </mark></small> operator. It is technically are regular functions. It called each time an object is created (also referred to as instantiated). It creates the properties of the object and assigns them the value of the parameters passed to it. It named with capital letter first and it should be executed only with <small> <mark> new </mark></small> operator.</p>
      </div>

      <div>
        <h6>Class</h6>
        <p>
          - The class function basically creates a template that we can use to create objects later.<br />

          - classes can be defined inside another expression, passed around, returned, assigned, etc.<br />

          - Just like literal objects, classes may include getters/setters, computed properties etc.<br />

          - The <small> <mark> constructor()&#123;...&#125; </mark></small> is a special method, called when an instance of the class is created.<br />

          - “Class fields” is a syntax that allows to add any properties.<br />

          - using getter property can be made read-only.<br />

          - Protected properties are usually prefixed with an underscore <mark><small>_.</small></mark>  these  are naturally inheritable.<br />

          - Privates should start with <mark><small>#</small></mark>. They are only accessible from inside the class.<br />

          - to access private properties rely on getter/setter.<br />

          - Private fields are not available as <mark><small>this[name]</small></mark><br />

          - static methods are used to implement functions that belong to the class, but not to any particular object of it.It called using className. Static properties are also possible, they look like regular class properties, but prepended by <small> <mark> static</mark></small>. Static properties and methods are inherited. No static inheritance in built-ins<br />

          - Built-in classes like <small> <mark> Array, Map </mark></small> and others are extendable also.<br />

          - The <mark><small>instanceof</small></mark> operator allows to check whether an object belongs to a certain class. It also takes inheritance into account. syntax: <small><mark> obj instanceof Class </mark></small><br />

          - <mark><small>&#123; &#125;.toString</small></mark> type-checking method works for primitives, built-in objects, objects with <mark><small>Symbol.toStringTag</small></mark> and returns string.<br />

          - Mixin is a generic object-oriented programming term: a class that contains methods for other classes.<br />
          - mixins can be implemented by copying methods into prototype.<br />
          - Call other class methods by creating instance of first class into second class's constructor or declare one class method as static and call in second class by using <small><mark> ClassName.methodName() </mark></small></p>
      </div>

      <div>
        <h6>Classical inheritance</h6>
        <p>Class inheritance is a way for one class to extend another class. Classes inherit from classes and create subclass relationships. class inheritance uses the prototype chain to wire the child `Constructor.prototype` to the parent `Constructor.prototype` for delegation. Usually, the `super()` constructor is also called. extends gives child class the <mark><small>[[Prototype]]</small></mark> reference to Parent class. Instance methods are regular methods and can be inherite but static methods are not inherite.</p>
      </div>

      <div>
        <h6>Four Pillars of Object Oriented Programming (OOP)</h6>
        <p>- <strong>Abstraction</strong> of Data or hiding of Information is called Abstraction!<br />
          - Binding of Data and Functions (that manipulate the data) together and keep both safe from outside interference and misuse is called <strong>Encapsulation</strong>.<br />
          - <strong>Inheritance</strong> enables new objects to take on the properties of existing objects. <br />
          - <strong>Polymorphism</strong> is the ability to redefine methods for derived classes. </p>
      </div>

      <div>
        <h6>Drawback of having private method in a javascript object</h6>
        <p>- calling private method via Symbol lookup like <small> <mark> this[methodSymbol]() </mark></small><br />
          - deal with a complete restructuring of the language’s core semantics to support class-based objects, while still maintaining backwards compatibility with existing code that uses objects with prototype-based inheritance.</p>
      </div>

      <div>
        <h6>Mutable and Immutable</h6>
        <p>A 'mutable' object is an object whose state can be modified/changed after it is created. ex. objects, arrays, functions, classes, sets, maps. An 'immutable' object is an object whose state cannot be modified/changed after it is created. ex. numbers, strings. it’s still possible to treat JavaScript objects as immutable. This can first be done through Object.freeze, which shallowly renders a JavaScript object immutable.</p>
      </div>

      <div>
        <h6>Singleton</h6>
        <p>The 'Singleton' Pattern limits the number of instances of a particular object to just one. This single instance is called the 'singleton'. These are useful in situations where system-wide actions need to be coordinated from a single central place. Several other patterns such as, 'Factory', 'Prototype', and 'Façade' are frequently implemented as 'Singletons' when only one instance is needed.</p>
      </div>

      <div>
        <h6>Screen Objects. </h6>
        <p>The screen object contains information about the visitor's screen. It can be used to display screen <small> <mark> width, height, colorDepth, pixelDepth </mark></small> etc.</p>
      </div>

      <div>
        <h6>Variable Scoping.</h6>
        <p>The scope of a variable(where it can be accessed) is controlled by the location of the variable declaration. In Javascript, there are two scopes.<br />
          <strong>Global Scope - </strong> A variable is in the Global scope if it’s defined outside of a function. we can also access and alter any variable declared in a global scope from any other scope.<br />
          <strong>Local Scope - </strong> Variables declared within a function are in the local scope. Local scope is also called function scope because local scope is created by functions in Javascript. Variables in the local scope are only accessible within the function in which they are defined, i.e they are bound to their respective functions each having different scopes. This allows us to create variables that have the same name and can be used in different functions.</p>
      </div>

      <div>
        <h6>Hoisting</h6>
        <p>Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (to the top of the current script or the current function) a variable can be used before it has been declared. JavaScript only hoists declarations, not initializations.</p>
      </div>

      <div>
        <h6>Event bubbling and prevention</h6>
        <p>When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. To stop the bubbling The method for it is <small><mark> event.stopPropagation() </mark></small> which stops the move upwards, but on the current element all other handlers will run. To stop the bubbling and prevent handlers on the current element from running, there’s a method <small><mark> event.stopImmediatePropagation() </mark></small> After it no other handlers execute.</p>
      </div>

      <div>
        <h6>Errors shown in JavaScript?</h6>
        <p>
          - <strong>Load-time errors - </strong> The errors shown at the time of the page loading are counted under Load-time errors. These errors are encountered by the use of improper syntax, and thus are detected while the page is getting loaded.<br />
          - <strong>Run-time errors - </strong> This is the error that comes up while the program is running. It is caused by illegal operations, for example, division of a number by zero, or trying to access a non-existent area of the memory.<br />
          - <strong>Logic errors - </strong> It is caused by the use of syntactically correct code, which does not fulfill the required task. For example, an infinite loop.</p>
      </div>

      <div>
        <h6>ES6 features</h6>
        <p>
          - Support for constants (also known as “immutable variables”), Map/Set, WeakMap/WeakSet, Promises<br />
          - Block-Scope support<br />
          - Arrow functions<br />
          - Extended Parameter Handling<br />
          - Template Literals and Extended Literals<br />
          - Enhanced Regular Expression<br />
          - Destructuring Assignment<br />
          - Modules<br />
          - Classes<br />
          - Iterators<br />
          - Generators<br />
          - Enhanced Object Properties<br />
          - Meta-Programming<br />
          - Internationalization and Localization</p>

      </div>

      <div>
        <h6>WebSocket</h6>
        <p>The WebSocket protocol, provides a way to exchange data between browser and server via a persistent connection. WebSocket is especially great for services that require continuous data exchange, e.g. online games, real-time trading systems and so on.</p>
      </div>

      <div>
        <h6>Event Binding</h6>
        <p>The event binding allow to add an event handler for a specified event so that our chosen JavaScript function will be invoked when that event is triggered for the associated DOM element. This can be used to bind to any event, such as keypress, mouseover or mouseout.</p>
      </div>

      <div>
        <h6>Anonymous function</h6>
        <p>They have no name, and so are called anonymous. Such functions are not accessible outside of another function.</p>
      </div>

      <div>
        <h6>Host object</h6>
        <p>These are objects supplied by a certain environment. They are not always the same because each environment differs and contains host objects that accommodates execution of ECMAScript. Ex. browser environment supplies objects such as <small> <mark> window </mark></small>. While a node.js/server environment supplies objects such as <small> <mark> NodeList </mark></small></p>
      </div>

      <div>
        <h6>Native object</h6>
        <p>These are standard built-in objects provided by Javascript. Native objects is sometimes referred to as ‘Global Objects’ since they are objects Javascript has provided natively available for use. Javascript is mainly constructed by these categorized native global objects. These objects can be used either as Constructor (<small> <mark> String(), Number(), Boolean() </mark></small>) or as Primitive Value, like literally as a value (‘string’, 123, <small> <mark>true </mark> </small>).</p>
      </div>

      <div>
        <h6>Synchronous/Pull and Asynchronous/Push</h6>
        <p><strong>Synchronous/pull:</strong> Synchronous/pull means that the client code requests a value from the production code(abstraction) and waits until this value is returned.<br /> <strong>Asynchronous/push: </strong> Asynchronous/push means that the production code(abstraction) notifies the client code that a new value is being emitted, and the client code handles this notification.</p>
      </div>

      <div>
        <h6>Synchronous and Asynchronous Programming?</h6>
        <p><strong>Synchronous - </strong>define synchronous code as 'a bunch of statements in sequence'; so each statement in our code is executed one after the other. This means each statement has to wait for the previous one to finish executing. synchronous code has block the further execution until it has finished what it’s doing. <br />
          <strong>Asynchronous - </strong>It takes statements outside of the main program flow, and continue execution to another statements without waiting.</p>
      </div>

      <div>
        <h6>defer and async</h6>
        <p>
          <strong>defer - </strong>defer allows execution only after the whole document has been parsed. <br />
          <strong>async - </strong> Async allows execution of scripts asynchronously.
        </p>
      </div>

      <div>
        <h6>Async and Await.</h6>
        <p>The word <mark><small>async</small></mark> before a function means one simple thing: a function always returns a promise. There’s another keyword <mark><small>await</small></mark> that works only inside async functions. The keyword await makes JavaScript wait until that promise settles and returns its result. Simply <mark><small>await</small></mark> replaces <mark><small>then</small></mark></p>
      </div>

      <div>
        <h6>functions</h6>
        <p>
          - <strong>First class function/citizen - </strong>It can be stored in variables, passed as an argument, returned from other functions, and even hold their own properties.<br />
          - <strong>Higher Order Function - </strong>It is a function that receives a function as an argument or returns the function as output.<br />
          - <strong>Pure function - </strong>It is a function for the same input, will always return the same output.<br />
          - <strong>Impure function - </strong>cannot use the input value to determine if the output will change. cannot be shared because the internal state can be affected from outside.</p>

      </div>

      <div>
        <h6><small> <mark> window.load </mark> </small> event</h6>
        <p>The load event triggers when the whole page is loaded including styles, images and other resources.</p>
      </div>

      <div>
        <h6><small> <mark> document.DOMcontentLoaded </mark></small> event</h6>
        <p>It triggers when the browser fully loaded HTML, and build DOM tree, but external resources like pictures, img and stylesheets may be not loaded yet.</p>
      </div>

      <div>
        <h6>Virtual DOM</h6>
        <p>A virtual DOM can be thought of as a copy of the original DOM. This copy can be frequently manipulated and updated, without using the DOM APIs. Once all the updates have been made to the virtual DOM, we can look at what specific changes need to be made to the original DOM and make them in a targetted and optimised way.</p>
      </div>

      <div>
        <h6>Automated Testing</h6>
        <p>Automated testing means that tests are written separately, in addition to the code. They run our functions in various ways and compare results with the expected. Before creating the code of function, we can imagine what the function should do and describe it. Such description is called a specification or, in short, a spec, and contains descriptions of use cases together with tests for them.</p>
      </div>

      <div>
        <h6>Deep and Shallow copy</h6>
        <p>A <strong>deep copy</strong> means that all of the values of the new variable are copied and disconnected from the original variable. A <strong>shallow copy</strong> means that certain (sub-)values are still connected to the original variable.</p>
      </div>

      <div>
        <a href="https://javascript.info/strict-mode"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Strict mode</a>
        <a href="https://javascript.info/array-methods"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Array Methods</a>
        <a href="https://javascript.info/generators"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Generators</a>
        <a href="https://javascript.info/destructuring-assignment"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Destructuring assignment</a>
        <a href="https://javascript.info/property-descriptors"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Property flags, descriptor, object modification</a>
        <a href="https://javascript.info/prototype-inheritance"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">prototypal inheritence / object based inheritence</a>
        <a href="https://javascript.info/function-prototype"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">function prototype</a>
        <a href="https://javascript.info/prototype-methods"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Protoype methods</a>
        <a href="https://javascript.info/cookie"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Cookies</a>
        <a href="https://javascript.info/callbacks"
          className="btn btn-link" rel="noopener noreferrer" target="_blank">Callbacks</a>
        <a href="https://javascript.info/promise-basics"
          className="btn btn-link" rel="noopener noreferrer" target="_blank">Promise</a>
        <a href="https://javascript.info/map-set"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Map and Set</a>
        <a href="https://javascript.info/weakmap-weakset"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">WeakMap and WeakSet</a>
        <a href="https://javascript.info/currying-partials"
          className="btn btn-link" rel="noopener noreferrer" target="_blank">Currying</a>
        <a href="https://javascript.info/proxy"
          className="btn btn-link" rel="noopener noreferrer" target="_blank">Proxy</a>
        <a href="https://javascript.info/onload-ondomcontentloaded"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">lifecycle of an HTML page</a>
        <a href="https://javascript.info/event-loop"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">How JavaScript Works (Event Loop)</a>
        <a href="https://en.wikipedia.org/wiki/Behavior-driven_development"
          className="btn btn-link" rel="noopener noreferrer" target="_blank">BDD</a>
        <a href="https://en.wikipedia.org/wiki/Test-driven_development"
          className="btn btn-link" rel="noopener noreferrer" target="_blank">TDD</a>
        <a href="https://javascript.info/fetch-crossorigin"
          target="_blank" className="btn btn-link" rel="noopener noreferrer">Cross-Domain data access(Wipro)</a>
      </div>
    </div>
  )
}

export default Es6file
