import "./App.css";
import Cv from "./pages/Cv/Cv";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageError from "./pages/PageError/PageError";
import Blog from "./pages/Blog/Blog";
import ExampleObject from "./components/ExampleObject/ExampleObject";
import Toogle from "./components/Toogle/Toogle"
import Counter from "./components/Counter/Counter"
import List from "./components/List/List"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Cv />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<PageError></PageError>} />
          <Route path="/exampleObject" element={<ExampleObject/>}/>
          <Route path="/toogle" element={<Toogle/>} />
          <Route path="/list" element={<List/>}/>
          <Route path="/counter" element={<Counter/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
