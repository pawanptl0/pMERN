import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Htmlfile from './pages/htmlfile'
import Cssfile from './pages/cssfile'
import Es6file from './pages/es6file'
import Reactfile from './pages/reactfile'
import Reduxfile from './pages/reduxfile'
import Graphqlfile from './pages/graphqlfile'
import Expressfile from './pages/expressfile'
import Programs from './pages/programs'
import Mongofile from './pages/mongofile'
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Htmlfile />} />
          <Route path="css" element={<Cssfile />} />
          <Route path="es6" element={<Es6file />} />
          <Route path="react" element={<Reactfile />} />
          <Route path="redux" element={ <Reduxfile />} />
          <Route path="graphql" element={<Graphqlfile />} />
          <Route path="express" element={<Expressfile />} />
          <Route  path="mongo" element={ <Mongofile />} />
          <Route  path="programs" element={<Programs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
