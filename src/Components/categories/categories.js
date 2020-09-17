import React,{Component} from 'react';
import { Container,Row,Col} from 'react-bootstrap';
class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/rashaobaid/projectt1/master/categories.json")
    .then(res => res.json())
    .then((data) => {
      this.setState({ isLoaded: true, items: data })
      console.log(this.state. items)
    })
        .catch(err => console.log(err))
  }

  render(){
    var{ isLoaded,items} = this.state
    console.log(items)
    if(!isLoaded){
      return <div> loding...</div>
    }
    else{
      return (
        <div className="Categories">
          <Container>
              <Row>
                  <div><h1>Browse Our Most Popular Categories</h1></div>
                  
              </Row>
              <Row className="content">
              {this.state.items.map((item) => (
                <Col  xl ={3} lg={3} md={4} sm={6} xs={12} key={item.id}>
                <div className="item d-flex justify-content-between" >
                <img src={item.image} alt="" />
                <div className="item-body">
                    <p className="title">{item.title}</p>
                    <p className="discription">{item.description}</p>
                </div>
                </div>
                </Col>
             ))}
            </Row>
          </Container>
      </div>
      );
    }
   
  }
  
}

export default Categories;
