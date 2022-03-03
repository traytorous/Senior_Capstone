import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Frontpage} from './pages/Frontpage';
import {Dashboard} from './pages/Dashboard';
import {CreateEventPage} from './pages/CreateEventpage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Frontpage/>} />
          <Route exact path="/Dashboard" element={<Dashboard/>} />
          <Route exact path="/CreateEventPage" element={<CreateEventPage/>}/>
        </Routes>
      </Router>
      <header className="App-header">

      </header>

    </div>
  );
}

export default App;
