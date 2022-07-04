const Reduxfile = () => {
  return (
    <div>
      <div>
        <h6>Redux</h6>
        <p>Redux is a pattern and library for managing and updating application state, using events called "actions". We use it because it helps to manage global state. We can use Redux when large amounts state is needed, state changes frequently, app size is large and many peoples are working on it. <br /> Recommended way to create React-Redux App is <small><mark> npx create-react-app my-app --template redux </mark></small> It will create react + redux project with 'Redux Toolkit' and 'React-Redux' already configured. <br /><strong>Redux Data Flow: </strong>Redux uses a 'one-way data flow' app structure. State describes the condition of the app at a specific point in time and UI is rendered based on that state. When something happens (such as a user clicking a button), the state is updated and UI re-renderes. Redux expects that all state updates are done immutably. </p>
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
        <h6>Redux Slices</h6>
        <p>Redux logic is typically organized into files called 'slices'. A 'slice' contains the reducer logic and actions related to a specific feature / section of the Redux state<br /> <small><mark> createSlice:</mark> </small> Redux Toolkit API that will help us simplify our Redux reducer logic and actions.  It take care of the work of generating action type strings, action creator functions, and action objects. It has 3 fields name, initialState,reducers. </p>
      </div>

      <div>
        <h6>Redux Thunk</h6>
        <p>It is a Redux function that can contain asynchronous logic. It has <small> <mark> dispatch </mark></small> and <small> <mark> getState </mark> </small> as arguments. Redux Toolkit enables the 'redux-thunk' middleware by default</p>
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
        <h6>Redux Saga</h6>
        <p>Handle async logic using synchronous-looking generator functions. Sagas return descriptions of effects, which are executed by the saga middleware, and act like "background threads" for JS applications.</p>
      </div>
    </div>
  )
}

export default Reduxfile
