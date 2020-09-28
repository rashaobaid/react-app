import React, { Component } from "react";
import { Navbar,Nav,Container,Button,Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Form from '../formComponent/form.js'

import { AiOutlineUserAdd } from "react-icons/ai";

const regExp =  /\S+@\S+\.\S+/;
const formValid = ({ isError, ...rest }) => {
  let isValid = false;

  Object.values(isError).forEach(val => {
      if (val.length > 0) {
          isValid = false
      } else {
          isValid = true
      }
  });

  Object.values(rest).forEach(val => {
      if (val === null) {
          isValid = false
      } else {
          isValid = true
      }
  });

  return isValid;
};

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
         showHide : false,
          firstname:'',
          lastname:'',
          email:'',
          gender: '',
          country:'',
          phone:'',
          newUser:{experience: []},
          isError: {
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            country:'',
          } 
    }

}


handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
}



handleOptionChange = changeEvent => {
  this.setState({
     gender: changeEvent.target.value
  },console.log("You have submitted:", this.state.gender)
  );
};

handleCheckBox =(e)=> {
  const newSelection = e.target.value;
  console.log(newSelection);
  let newSelectionArray;

  if (this.state.newUser.experience.indexOf(newSelection)>-1) {
    newSelectionArray = this.state.newUser.experience.filter(
      s => s !== newSelection
    );
  } else {
    newSelectionArray = [...this.state.newUser.experience, newSelection];
  }

  this.setState(prevState => ({
    newUser: { ...prevState.newUser, experience: newSelectionArray }
  }),console.log("You have submitted:", this.state.newUser.experience));
}

handleSubmit = event => {
  event.preventDefault()
  if (formValid(this.state)) {
    document.getElementsByClassName('valid')[0].display="block"
    console.log(this.state)
} 
else {
    console.log("Form is invalid!");
}
}
formValChange = e => {
  e.preventDefault();
  const { name, value } = e.target;
  let isError = { ...this.state.isError };

  switch (name) {
      case "firstname":
          isError.firstname =
              value.length < 3 ? "Atleast 3 characaters required" :""  ; 
          break;
      case "lastname":
        isError.lastname =
            value.length < 3 ? "Atleast 3 characaters required" : "";
        break;   
      case "email":
          isError.email = regExp.test(value)
              ? ""
              : "Please enter correct email adress";
          break;
      case "phone":
          isError. phone =
              value.length < 10 ? "Atleast 10 characaters required" : "";
          break;
          case "country":
            isError. country =
            value.length < 0  ? "Atleast 10 characaters required" : "";
            break;
      default:
          break;
  }

  this.setState({
      isError,
      [name]: value
  })
};

render(){
  const { isError } = this.state;
  
  return(
    <div>
       <Navbar expand="lg" fixed="top">
       <Container>
      <Navbar.Brand href="/"> <span>Books</span>Reviews</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-nadjjjdj-nav">
        <Nav className="ml-auto">
          <Link  className="nav-link" to="/">HOME</Link>
          <Link  className="nav-link" to="/book">BOOKS</Link>
          <Link className="nav-link" to="/">REVIEWS</Link>
          <Link className="nav-link" to="/">NEWS</Link>
          <Link  className="nav-link" to="/">CONTACTS</Link>
          <Link  className="nav-link" to="/"><i className="fa fa-search"></i></Link>
          <Link  className="nav-link" to="/"><li onClick={() => this.handleModalShowHide()}><AiOutlineUserAdd/></li></Link>
          <div>
                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title >
                      <div className="text-center">Sign Up</div>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <span className="valid" style={{display:"none"}} >"Form is nvalid!"</span>
                    <form className="container" onSubmit={this.handleSubmit}>
                          <div className="form-group">
                              <label htmlFor="First Name"  className="form-label"> First Name </label>
                              <input  className={isError.firstname.length > 0 ? "is-invalid form-control" : "form-control"}  value={this.state.firstname}  id="First Name"  name="firstname" 
                              type="text" placeholder="First Name"  onChange={this.formValChange} required />
                              {
                                 <span className="invalid-feedback">{isError.firstname}</span>
                               }
                          </div>
                          <div className="form-group">
                              <label htmlFor="Last Name"  className="form-label">Last Name</label>
                              <input  className={isError.lastname.length > 0 ? "is-invalid form-control" : "form-control"} value={this.state.lastname}  id="Last Name" name="lastname"
                               type="text" placeholder="Last Name"  onChange={this.formValChange} required/>
                                {
                                   <span className="invalid-feedback">{isError.lastname}</span>
                                 }
                          </div>
                          <div className="form-group">
                              <label htmlFor="Email"  className="form-label"> Email address </label>
                              <input   className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"} value={this.state.email}  id="Email"name="email" 
                               type="email" placeholder="Enter email"  onChange={this.formValChange} required />
                                {
                                   <span className="invalid-feedback">{isError.email}</span>
                                }
                          </div>
                          <div className="form-group">
                              <label htmlFor="phone"  className="form-label"> Phone Number </label>
                              <input className={isError.phone.length > 0 ? "is-invalid form-control" : "form-control"} value={this.state.phone}  id="phone"name="phone" 
                               type="text" placeholder="Enter phone"  onChange={this.formValChange} required />
                               {
                                  <span className="invalid-feedback">{isError.phone}</span>
                                }
                          </div>
                         <div className="form-group">
                          <label href="country"> Country </label>
                           <select
                           placeholder="Select Country"
                            id={"country"}
                            name={"country"}
                            className={isError.country.length >0? "is-invalid form-control" : "form-control"}
                            title={"Country"}
                            value={this.state.country}
                            onChange={this.formValChange}
                            required
                          >
                            {this.props.options.map(option => {
                              return (
                                <option key={option} value={option} label={option}>
                                  {option}
                                </option>
                              );
                            })}
                          </select>
                          {
                              <span className="invalid-feedback">{isError.country}</span>
                            }
                        </div>
                      <div className="form-group">
                      <label href="experience" className="form-label">Experience: </label>
                        <div className="checkbox">
                          {this.props.skill.map(option => {
                            return (
                              <label key={option} className="checkbox-inline" >
                                <input
                                  id="experience"
                                  name="experience"
                                  onChange={this.handleCheckBox}
                                  value={option}
                                  type="checkbox"
                                />
                                {option}
                              </label>
                            );
                          })}
                        </div>
                      </div>
                      <label>Please select your gender:</label>
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            name="react-tips"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleOptionChange }
                            className="form-check-input"
                          />
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <label>
                          <input
                            type="radio"
                            name="react-tips"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleOptionChange}
                            className="form-check-input"
                          />
                         Female
                        </label>
                      </div>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                      <p className="forgot-password text-right">
                          Already registered <a href="#">sign in?</a>
                      </p>
                     </form>
               
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
}
export default Header;