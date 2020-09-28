import React,{Component} from 'react';
import { BrowserRouter ,Route } from 'react-router-dom'; 
import './Assets/css/main.css'
import Header from './Components/headerComponent/header';
import Section from './Components/sectionComponent/section';
import Book from './Components/bookComponent/book';

class App extends Component {
  render(){
    return (
        <div className="App">
        <BrowserRouter>
          <div>
          <Header options={["Palestaine", "Russia","Lebanon" ,"Egypt","Turkey","Vanuatu"]}  skill= {["Front-End Developer", " Back-End Developer", "Solution Architect", "Project Manager"]}/>
          <Route exact component={Section} path="/" />
          <Route exact component={Book} path="/book" />
          </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
