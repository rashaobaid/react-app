import React,{Component} from 'react';
import  Categories from '../categories/categories';
import Carousels from '../carouselsComponent.js/carousels';
import Carousels2 from '../carousels2/carousels2';
import Carousels3 from '../carousels3/carousels3';
import Carousels4 from '../Carousels4/Carousels4';

import Footer from '../footerComponent.js/footer';
class Book extends Component {
  render(){
    return (
      <div>
        <Categories />
        <Carousels />
        <Carousels2 />
        <Carousels3 />
        <Carousels4 />
        <Footer />
      </div>
    );
  }
  
}

export default Book ;
