
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Parent3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFooter: 1
    };

    this.settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
        }
      ]
    };
  } 
  render() {
    return (
      <div className="container">
        <SimpleSlider3 settings={this.settings} />
      </div>
    );
  }
}

class SimpleSlider3 extends Component {
  constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      componentDidMount() {
        fetch("https://raw.githubusercontent.com/rashaobaid/projectt1/master/children.json")
        .then(res => res.json())
        .then((data) => {
          this.setState({ isLoaded: true, items: data })
          console.log(this.state. items)
        })
            .catch(err => console.log(err))
      }
    
  render() {
    var{ isLoaded,items} = this.state
       
    return (
      <div  className="slider" >
         <Row>
          <div> <h2> Children</h2></div>
      </Row>
      <Slider {...this.props.settings}>
          {this.state.items.map((item) => (
        <div key={item.id}>
            <div className="card1">
               <img className="card1-img-top" src={item.image} width="100%" alt=""/ >
                  <div className="card1-body">
                      <p className="card1-title">{item.title}</p>
                      <p className="card1-text">{item.author}</p>
                      <p className="card1-text2">{item.reviewedBy}</p>
                    </div>
             </div>
        </div>
        ))}
      </Slider>
      </div>
    );
  }
}


export default Parent3 ;




