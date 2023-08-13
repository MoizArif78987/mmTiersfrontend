import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Rooms from './components/rooms';
import Contact from './components/contact';
import Review from './components/review';
import Addreview from './components/addreview';
import Book from './components/book';
import Registration from './components/registration'
import AdminPortal from './components/admin';
import Checkstatus from './components/checkstatus';
import Employee from './components/employee';
import Addnewemployee from './components/addnewemployee';
import Bookingrequest from './components/bookingrequest';
import Adminreview from './components/adminreview';
import Editemployee from './components/editemployee';
import Adminrooms from './components/Adminrooms';
import Roomhistory from './components/roomhistory';
import Adminlogin from './components/adminlogin';
import Messages from './components/messages';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/rooms' component={Rooms}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/review' component={Review}/>
        <Route exact path='/addreview' component={Addreview}/>
        <Route exact path='/book' component={Book}/>
        <Route exact path='/register' component={Registration}/>
        <Route exact path='/admin' component={AdminPortal}/>
        <Route exact path='/checkStatus' component={Checkstatus}/>
        <Route exact path='/employee' component={Employee}/>
        <Route exact path='/AddNewEmployee' component={Addnewemployee}/>
        <Route exact path='/bookingRequest' component={Bookingrequest}/>
        <Route exact path='/adminreview' component={Adminreview}/>
        <Route exact path='/editemployee/:id' component={Editemployee}/>
        <Route exact path='/adminrooms' component={Adminrooms}/>
        <Route exact path='/roomhistory/:roomNumber' component={Roomhistory}/>
        <Route exact path='/adminlogin' component={Adminlogin}/>
        <Route exact path='/messages' component={Messages}/>
      </Switch>
    </div>
  );
}

export default App;
