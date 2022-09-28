const Reduxfile = () => {
  return (
    <div>
      <div>
        <h6>Redux</h6>
        <p>Redux is a pattern and library for managing and updating application state, using events called "actions". We use it because it helps to manage global state. We can use Redux when large amounts state is needed, state changes frequently, app size is large and many peoples are working on it. <br /> Recommended way to create React-Redux App is <small><mark> npx create-react-app my-app --template redux </mark></small> It will create react + redux project with 'Redux Toolkit' and 'React-Redux' already configured. <br /><strong>Redux Data Flow: </strong>Redux uses a 'one-way data flow' app structure. State describes the condition of the app at a specific point in time and UI is rendered based on that state. When something happens (such as a user clicking a button), the state is updated and UI re-renderes. Redux expects that all state updates are done immutably. <br />
        redux pattern depends on 3 principles single object has state which managed by store, update state only with action object, how state changes happen only pure function reducer.</p>
      </div>

      <div>
        <h6>Action</h6>
        <p>It is plain JS objects with <small> <mark>type</mark> </small> and sometimes <small> <mark>payload</mark> </small> property. Its like an event.<br /> An 'action creator' is a function that returns an action object.</p>
      </div>

      <div>
        <h6>Reducer</h6>
        <p>it’s just a Js 'pure function' that takes <small> <mark> state </mark></small> and <small> <mark> action </mark></small> as arguments, and returns the new <small> <mark> state </mark></small>. It's like an 'event listner'. reducers copy the existing <small> <mark> state </mark></small> and making changes to the copied values called as 'immutable update'. We can write small reducers and combine them into rootReducer. reducers must not do any asynchronous logic, calculate random values, or cause other 'side effects'.</p>
      </div>

      <div>
        <h6>React-Redux library</h6>
        <p>React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.<br /> <small> <mark> useSelector </mark> </small> read data from the Redux store.<br /><small> <mark> useDispatch </mark> </small> hook gives us the store's <small> <mark>dispatch</mark> </small> method as its result. <small> <mark> const dispatch = useDispatch()  </mark></small><br /><small> <mark> &lt;Provider&gt;</mark></small> to pass down the Redux store. Wrap <small> <mark> &lt;App&gt;</mark></small> into it.</p>
      </div>

      <div>
        <h6>Redux Toolkit</h6>
        <p>recommended approach for writing Redux logic.</p>
      </div>

      <div>
        <h6>Store</h6>
        <p>The current Redux application <small> <mark> state </mark></small> lives in an object called the 'store'. only have a single store in a Redux application.<br />
          <small> <mark>dispatch: </mark> </small>The only way to update the state <br />
          <small><mark> getState:</mark> </small>returns the current state value.<br />
          <small><mark> subscribe:</mark> </small>Registers listener callbacks via <small> <mark>store.subscribe(listener).</mark> </small><br />
          <small><mark> createStore:</mark> </small>used to create 'store' from Redux library <small> <mark>createStore(reducer, preloadedState )</mark></small><br />
          <small><mark> configureStore: </mark> </small> Used to create Redux store. It requires 'reducer' as argument. import it from Redux Toolkit.<br />
          <strong>Selectors: </strong>These are functions to extract specific pieces of information from a store state value.
          </p>
      </div>

      <div>
        <h6>Methods from redux library</h6>
        <p><small><mark> combineReducers(): </mark> </small> to combine the multiple reducers. <br />
        <code>
          import &#123; combineReducers, applyMiddleware &#125; from 'redux'; <br />
          const rootReducer = combineReducers(&#123; cake: cakeReducer, milk: milkReducer &#125;)
          </code> <br /><br />
          
          <small><mark> applyMiddleware(): </mark> </small> to apply middleware function. pass this as second argument to 'createStore'. <br />
        <code>
          
          const store = createStore(rootReducer,  applyMiddleware(fn)) <br />
          
          </code> 

          <small><mark> thunkMiddleware(): </mark> </small> to apply thunk middleware function. pass this as second argument to 'createStore'. <br />
        <code>
        const thunkMiddleware = redux('redux-thunk').default <br />
          const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware)) <br />
          
          </code> 
          
          </p>
      </div>



      <div>
        <h6>Redux Slices</h6>
        <p>Redux logic is typically organized into files called 'slices'. A 'slice' contains the reducer logic and actions related to a specific feature / section of the Redux state<br /> <small><mark> createSlice:</mark> </small> Redux Toolkit API that will help us simplify our Redux reducer logic and actions.  It take care of the work of generating action type strings, action creator functions, and action objects. It has 3 fields name, initialState,reducers. </p>
      </div>


      <div>
        <h6>prepare callback</h6>
        <p>use in reducer to take passing extra parameters</p>
      </div>

      <div>
        <h6>Reselect library</h6>
        <p>generate memoized selector functions</p>
      </div>

      
      <div>
        <h6>Redux Flow</h6>
        <p>
        Initial Phase:<br />
1. store is created using reducer function.<br />
2. store calls reducer function which returns state.<br />
3. With the state value UI is rendered.<br /><br />

Update Phase:<br />
1. something happen in app like user clicks button.<br />
2. app dispatches an action to store.<br />
3. store runs reducer function.<br />
4. get new state.<br />
5. It checks which components needs that chage that and UIis changes.<br />
        </p>
      </div>

      <div>
        <h6>Redux Middleware</h6>
        <p>It is function that seats between action and reducer.  It interacts with dispatched action before it reaches to reducer.
user for API call,Async logic, logging.
</p>
      </div>

      <div>
        <h6>Redux Thunk</h6>
        <p>Redux-Thunk is middleware function. It allows to write action creators that return a thunk function.  It has <small> <mark> dispatch </mark></small> and <small> <mark> getState </mark> </small> as arguments do some side effects and dispatch the action. It is used to call API, do async logic , logging etc. Redux Toolkit enables the 'redux-thunk' middleware by default. <br />
        <code>
        function getItems()&#123; //it is action creatore<br />
    return async function(dispatch)&#123;<br />
        let items = await fetch(api)<br />
        dispatch(&#123; type: 'CART', payloads: items&#125;)<br />
        &#125;<br />
        &#125;<br />

        </code>
        </p>
      </div>

      <div>
        <h6>Redux Saga</h6>
        <p>It is also a middleware function. It uses 'generators'to write async code. generator functions are paused in between execution even exited and re-enter later. Redux Saga listens to the dispatched actions and triggers an API call or any other side effect you write. Redux-Saga thread can be started, paused and cancelled from the main application with normal Redux actions.
        </p>
      </div>

      <div>
        <h6>Redux Ex</h6>
        <p>
         
            <code>
            import &#123; createStore&#125; from 'redux'<br/>

const initialState= &#123; value: 0&#125;<br/><br/>

const myReducer = (state = initialState,action) = &gt; &#123;<br/>
    switch(action.type)&#123;<br/>
        case 'ADD':<br/>
            return&#123;value: state.value + 1 &#125;<br/>
        default:<br/>
            return state<br/>
            &#125;<br/>
            &#125;<br/><br/>

const store = createStore(myReducer)<br/><br/>


store.subscribe(() =&gt; console.log(store.getState())) <br/>
store.dispatch(&#123; type: 'ADD'&#125;)<br/>
            </code>
         
        </p>
      </div>





    </div>
  )
}

export default Reduxfile
