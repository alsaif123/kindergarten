import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import OurSuccess from './Components/OurSuccess/OurSuccess';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
       <Route exact path="/">
            <Home></Home>
          </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/services">
           <Services></Services>
         </Route>
         <Route path="/aboutus">
           <AboutUs></AboutUs>
         </Route>
         <Route path="/oursuccess">
           <OurSuccess></OurSuccess>
         </Route>
         <Route exact path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>


      
    </div>
  );
}

export default App;
