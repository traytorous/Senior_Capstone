import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Frontpage} from './pages/Frontpage';
import {Dashboard} from './pages/Dashboard';
import {CreateEventPage} from './pages/CreateEventpage';
import {SignupPage} from './pages/SignupPage';
import {MyEventsPage} from './pages/MyEventsPage';
import { EventPage } from './pages/EventPage';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Frontpage/>} />
          <Route exact path="/Dashboard" element={<Dashboard/>} />
          <Route exact path="/CreateEventPage" element={<CreateEventPage/>}/>
          <Route exact path="/SignupPage" element={<SignupPage/>}/>
          <Route exact path="/MyEventsPage" element={<MyEventsPage/>}/>
          <Route exact path="/EventPage" element={<EventPage />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
