import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
const Footer =()=>{
    return (
        <div className="page-footer font-small blue pt-4 pb-5">
         <Container className="text-center text-md-left">
         <Row>
            <Col  lg={2} md={3} className="  mt-md-0 mt-3">
              <h5 className="text-uppercase">navigation</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!" className="active"  style={{color:"yellowgreen"}}>Books</a>
                </li>
                <li>
                  <a href="#!">Reviews</a>
                </li>
                <li>
                  <a href="#!">News</a>
                </li>
                <li>
                    <a href="#!">Contacts</a>
                  </li>
              </ul>
            </Col>
            <Col  lg={7} md={6}  className=" mb-md-0 mb-3">
              <h5 className="text-uppercase">categories</h5>
               <Row>
                  <Col>
                    <ul className="list-unstyled">
                        <li>
                          <a href="#!">Art</a>
                        </li>
                        <li>
                          <a href="#!">Biography</a>
                        </li>
                        <li>
                          <a href="#!">Business</a>
                        </li>
                        <li>
                          <a href="#!">Chick Lit</a>
                        </li>
                        <li>
                            <a href="#!">Children's</a>
                          </li>
                          <li>
                            <a href="#!">Chistian</a>
                          </li>
                          <li>
                            <a href="#!">Classics</a>
                          </li>
                          <li>
                            <a href="#!">Comics</a>
                          </li>
                      </ul>
                  </Col>
                  <Col>
                    <ul className="list-unstyled">
                        <li>
                          <a href="#!">Contemporary</a>
                        </li>
                        <li>
                          <a href="#!">Cookbooks</a>
                        </li>
                        <li>
                          <a href="#!">Crime</a>
                        </li>
                        <li>
                          <a href="#!">Ebooks</a>
                        </li>
                        <li>
                            <a href="#!">Fantasy</a>
                          </li>
                          <li>
                            <a href="#!">Fiction</a>
                          </li>
                          <li>
                            <a href="#!">Gay And Lesbian</a>
                          </li>
                          <li>
                            <a href="#!">Graphic Novels</a>
                          </li>
                      </ul>
                  </Col>
                  <Col>
                    <ul className="list-unstyled">
                        <li>
                          <a href="#!">Histortical Fiction</a>
                        </li>
                        <li>
                          <a href="#!">History</a>
                        </li>
                        <li>
                          <a href="#!">Horror</a>
                        </li>
                        <li>
                          <a href="#!">Humor and Comedy</a>
                        </li>
                        <li>
                            <a href="#!">Manga</a>
                          </li>
                          <li>
                            <a href="#!">Memoir</a>
                          </li>
                          <li>
                            <a href="#!">Music</a>
                          </li>
                      </ul>
                  </Col>
              </Row>
            </Col>
            <Col lg={3} md={3} className=" mb-md-0 mb-3">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Facebook</a>
                </li>
                <li>
                  <a href="#!">Twitter</a>
                </li>
                <li>
                  <a href="#!">RSS</a>
                </li>
              </ul>
            </Col>
        </Row>
        </Container>
    </div>

        );
}

export default Footer;
