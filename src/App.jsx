import { useEffect, useState } from 'react'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import frstimg from '../src/assets/logo1.1.webp'
import { Form } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel'
import pdtsimg from '../src/assets/c1.webp'
import pdtssimg from '../src/assets/c2.webp'
import pdtsssimg from '../src/assets/c3.webp'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import twooil from '../src/assets/cc1.1.webp'
import twooil1 from '../src/assets/cc1.webp'
import twooil2 from '../src/assets/cc1.3.webp'
import twooil3 from '../src/assets/combo3.webp'
import skin1 from '../src/assets/lipnew.webp'
import skin2 from '../src/assets/cc2.2.webp'
import skin3 from '../src/assets/cc2.webp'
import skin4 from '../src/assets/cc2.3.jpg'
import setmore from '../src/assets/save1.webp'
import setmore1 from '../src/assets/s2.webp'
import comb1 from '../src/assets/combo1.webp'
import comb2 from '../src/assets/combo2.webp'
import comb3 from '../src/assets/combo3.webp'
import comb4 from '../src/assets/combo4.webp'
import trophy1 from '../src/assets/award1.webp'
import trophy2 from '../src/assets/award2.webp'
import trophy3 from '../src/assets/award3.webp'
import new1 from '../src/assets/news1.avif'
import new2 from '../src/assets/news2.avif'
import new3 from '../src/assets/news3.avif'
import new4 from '../src/assets/news4.avif'
import new5 from '../src/assets/news5.avif'
import new6 from '../src/assets/news6.avif'
import new7 from '../src/assets/news7.avif'
import new8 from '../src/assets/news8.avif'
import new9 from '../src/assets/news9.avif'
import new10 from '../src/assets/news10.avif'
import new11 from '../src/assets/news11.avif'
import new12 from '../src/assets/news12.avif'
import sto1 from '../src/assets/chenn.avif'
import sto2 from '../src/assets/coimb.avif'
import sto3 from '../src/assets/erode.avif'


function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      {/* start part */}
      <div className='p-2 top border'>
        <p className='fs-5 text-center text-light'>Buy any 3 Minis @ ₹499. Click here for more offers !!</p>
      </div>
      <div className='first container'>
        <div className="row">
          <div className="col-lg d-flex">
           {/* <i className='fa-brands fa-apple fa-2xl apl' style={{color: 'black'}}></i>
           <i className='fa-brands fa-google-play fa-xl pla' style={{color: 'black'}}></i> */}
          </div>
          <div className="col-lg">
           <img className='mainpic' src={frstimg} alt="logo" />
          </div>
          <div className="col-lg d-flex">
           {/* <Form.Control  style={{width:'200px', height:'50px'}} type="text" placeholder="Search" className="small"/>
           <i className='fa-solid fa-cart-shopping fa-xl trolly' style={{color: '#635f5f'}}></i> */}
          </div>
        </div>
      </div>
      {/* nav bar */}
      <Navbar expand="lg" className="bg-body-light" >
        <Container>
          <Navbar.Brand href="#home" className='border rounded p-2 undo' style={{backgroundColor:'forestgreen'}}>New Launch</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#HairCare">Hair</Nav.Link>
            <Nav.Link href="#SkinCare">Skin & Face</Nav.Link>
            <Nav.Link href="#link">Body</Nav.Link>
            <Nav.Link href="#Buymore">Best Sellers</Nav.Link>
            <Nav.Link href="#lots">Combo</Nav.Link>
            <Navbar.Brand href="#Buymore" className='border rounded p-2 undo' style={{backgroundColor:'forestgreen'}}>Offers</Navbar.Brand>
            <Nav.Link href="#link">Travel Minis</Nav.Link>
            <Nav.Link href="#link">Help Me Choose</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* carousal */}
      <Carousel data-bs-theme="dark">
       <Carousel.Item>
         <img
          className="d-block w-100"
          src={pdtsimg}
          alt="carousal1" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pdtssimg}
          alt="carousal2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pdtsssimg}
          alt="carousal3"
        />
      </Carousel.Item>
      </Carousel>
     <br /> <br /> <br />


      {/* best sellar card -1 */}
      <div className='set1 container'>
       <div className='text-center'> <h2 className='fw-bolder fs-1' data-aos="zoom-y-out" >BEST SELLERS</h2> </div> <br />
       <div className='justify-content-center align-items-center'>
         <p id='HairCare' className='text-center fs-3' data-aos="zoom-y-out" data-aos-delay="50">Hair Care</p> <br />
         <div className="row">
           <div className="col-md">
             <Card className='p-2' style={{border:'none'}}>
               <Card.Img variant="top" src={twooil} />
               <Card.Body>
                 <h5 className='fw-bold text-center'>Hair Strengthening Combo</h5>
                 <Card.Text>
                   <p className='text-center text-secondary'>Strengthens | Conditions Hair</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 1,199.00    <span className='text-secondary' style={{textDecoration:'line-through',fontSize:'15px'}}> ₹ 1,133.00  </span>  </p>
                     <p className='text-center'><em>You'll save ₹131.00 </em></p>    
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
               </Card.Body>
             </Card>
           </div>
           <div className="col-md">
             <Card className='p-2' style={{border:'none'}}>
               <Card.Img variant="top" src={twooil1} />
               <Card.Body>
                 <h5 className='fw-bold text-center'>Daily Use Healthy Hair Combo</h5>
                 <Card.Text>
                   <p className='text-center text-secondary'>Deep scalp cleansingd | Frizz control</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 999.00  <span className='text-secondary' style={{textDecoration:'line-through',fontSize:'15px'}}> ₹ 1,280.00  </span> </p> 
                     <p className='text-center'><em>You'll save ₹281.00 </em></p>  
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
               </Card.Body>
             </Card>
           </div>
           <div className="col-md">
             <Card className='p-2' style={{border:'none'}}>
               <Card.Img variant="top" src={twooil2} />
               <Card.Body>
                 <h5 className='fw-bold text-center'>Anti Dandruff Oil </h5>
                 <Card.Text>
                   <p className='text-center text-secondary'>Dandruff control | Reduces Hairfall</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 600.00  </p>    
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
                </Card.Body>
             </Card>
            </div>
            <div className="col-md">
              <Card className='p-2' style={{border:'none'}}>
                <Card.Img variant="top" src={twooil3} />
                <Card.Body>
                  <h5 className='fw-bold text-center'>Hair Care Combo</h5>
                  <Card.Text>
                   <p className='text-center text-secondary'>One solution to all your Hair problems</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 1,299.00    <span className='text-secondary' style={{textDecoration:'line-through',fontSize:'15px'}}> ₹ 1,880.00  </span>  </p>
                     <p className='text-center'><em>You'll save ₹581.00 </em></p>    
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
                </Card.Body>
             </Card>
            </div>
          </div> <br /> <br />
          <p id='SkinCare' className='text-center fs-3' data-aos="zoom-y-out" data-aos-delay="50">Skin Care</p> <br />
          <div className="row">
           <div className="col-md">
             <Card className='p-2' style={{border:'none'}}>
               <Card.Img variant="top" style={{height:'310px'}} src={skin1} />
               <Card.Body>
                 <h5 className='fw-bold text-center'>Beetroot Lip Balm</h5>
                 <Card.Text>
                   <p className='text-center text-secondary'>Hydrate | Smile | Repeat</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 350.00     </p> 
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
               </Card.Body>
             </Card>
           </div>
           <div className="col-md">
             <Card className='p-2' style={{border:'none'}}>
               <Card.Img variant="top" src={skin2} />
               <Card.Body>
                 <h5 className='fw-bold text-center'>Aleo Vera Gel</h5>
                 <Card.Text>
                   <p className='text-center text-secondary'>Hydrates | Controls Acne & Dandruff</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 390.00  </p>   
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
               </Card.Body>
             </Card>
           </div>
           <div className="col-md">
             <Card className='p-2' style={{border:'none'}}>
               <Card.Img variant="top" src={skin3} />
               <Card.Body>
                 <h5 className='fw-bold text-center'>Beautifying Serum</h5>
                 <Card.Text>
                   <p className='text-center text-secondary'>Treats Pigmentation | Blemishes</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 730.00  </p>    
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
                </Card.Body>
             </Card>
            </div>
            <div className="col-md">
              <Card className='p-2' style={{border:'none'}}>
                <Card.Img variant="top" style={{height:'310px'}} src={skin4} />
                <Card.Body>
                  <h5 className='fw-bold text-center'>Orange & Almond Face Pack</h5>
                  <Card.Text>
                   <p className='text-center text-secondary'>Tan Removal | Even Skin Tone | Brightens</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 690.00    <span className='text-secondary' style={{textDecoration:'line-through',fontSize:'15px'}}> ₹ 750.00  </span>  </p>
                     <p className='text-center'><em>You'll save ₹60.00 </em></p>    
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
                </Card.Body>
             </Card>
            </div>
          </div>
       </div>
      </div> <br /> <br />

      {/* buy more save more card-2 */}
      <div className="set2 container">
       <div id='Buymore' className='text-center'>  <h2 className='fw-bolder fs-1' data-aos="zoom-y-out" >Buy More Save More </h2>  </div> <br /> <br />
       <div className="row buy">
          <div className="col-md-6">
            <img className='buy1' style={{width:'400px', height:'400px'}} src={setmore} alt="" />
          </div>
          <div className="col-md-6">
            <img className='twoo' style={{width:'400px', height:'400px'}} src={setmore1} alt="" />
          </div>
        </div>
      </div> <br /> <br />

      {/* combo card-3 */}
      <div className="set1 container">
        <div id='lots' className='text-center'>  <h2 className='fw-bolder fs-1' data-aos="zoom-y-out">Combo's</h2>   </div> <br /> <br />
        <div className="row">
        <div className="col-md">
             <Card className='p-2' style={{border:'none'}}>
               <Card.Img variant="top" style={{height:'310px'}} src={comb1} />
               <Card.Body>
                 <h5 className='fw-bold text-center'>Hair Strengthening Combo</h5>
                 <Card.Text>
                   <p className='text-center text-secondary'>Strengths | Conditions Hair</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 1,199.00   <span className='text-secondary' style={{textDecoration:'line-through',fontSize:'15px'}}> ₹ 1,330.00  </span>   </p>
                     <p className='text-center'><em>You'll save ₹131.00 </em></p> 
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
               </Card.Body>
             </Card>
           </div>
           <div className="col-md">
             <Card className='p-2' style={{border:'none'}}>
               <Card.Img variant="top" src={comb2} />
               <Card.Body>
                 <h5 className='fw-bold text-center'>Healthy Glow Combo</h5>
                 <Card.Text>
                   <p className='text-center text-secondary'>Brightens | Refreshs | Boots Glow</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 980.00   <span className='text-secondary' style={{textDecoration:'line-through',fontSize:'15px'}}> ₹ 1,040.00  </span>   </p>   
                     <p className='text-center'><em>You'll save ₹60.00 </em></p>
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
               </Card.Body>
             </Card>
           </div>
           <div className="col-md">
             <Card className='p-2' style={{border:'none'}}>
               <Card.Img variant="top" src={comb3} />
               <Card.Body>
                 <h5 className='fw-bold text-center'>Hair Care Combo</h5>
                 <Card.Text>
                   <p className='text-center text-secondary'>One Solution to all your Hair Problems</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 1,299.00   <span className='text-secondary' style={{textDecoration:'line-through',fontSize:'15px'}}> ₹ 1,880.00  </span>  </p>  
                     <p className='text-center'><em>You'll save ₹581.00 </em></p>  
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
                </Card.Body>
             </Card>
            </div>
            <div className="col-md">
              <Card className='p-2' style={{border:'none'}}>
                <Card.Img variant="top" style={{height:'310px'}} src={comb4} />
                <Card.Body>
                  <h5 className='fw-bold text-center'>De-Tan & Anti-Pigmentation Combo</h5>
                  <Card.Text>
                   <p className='text-center text-secondary'>Controls Pigmentation | Reduces Tan</p>
                   <div> 
                     <p  className='text-center fw-bold' style={{fontSize:'20px'}} > ₹ 749.00    <span className='text-secondary' style={{textDecoration:'line-through',fontSize:'15px'}}> ₹ 860.00  </span>  </p>
                     <p className='text-center'><em>You'll save ₹111.00 </em></p>    
                   </div>
                 </Card.Text>
                 <Button className='center' variant="success">+ Add to Cart</Button>
                </Card.Body>
             </Card>
            </div>
        </div>
      </div> <br /> <br />
      <hr />
      {/* press feature */}
      <div className="press container newy">
        <div className='text-center'> <h2 className='fw-bolder fs-1' data-aos="zoom-y-out"> Press Features</h2> </div> <br /> <br />
        <div className="row">
          <div className="col-md">
            <img style={{width:'150px'}} src={new1} alt="" />
          </div>
          <div className="col-md">
            <img style={{width:'150px'}} src={new2} alt="" />
          </div>
          <div className="col-md">
            <img style={{width:'150px'}} src={new3} alt="" />
          </div>
          <div className="col-md">
            <img style={{width:'150px'}} src={new4} alt="" />
          </div>
          <div className="col-md">
            <img style={{width:'150px'}} src={new5} alt="" />
          </div>
          <div className="col-md">
            <img style={{width:'150px'}} src={new6} alt="" />
          </div>
        </div>
        <div className="row">
        <div className="col-md">
            <img style={{width:'150px'}} src={new7} alt="" />
          </div>
          <div className="col-md">
            <img style={{width:'150px'}} src={new8} alt="" />
          </div>
          <div className="col-md">
            <img style={{width:'150px'}} src={new9} alt="" />
          </div>
          <div className="col-md">
            <img style={{width:'150px'}} src={new10} alt="" />
          </div>
          <div className="col-md">
            <img style={{width:'150px'}} src={new11} alt="" />
          </div>
          <div className="col-md">
            <img style={{width:'150px'}} src={new12} alt="" />
          </div>
        </div>
      </div> <br /> <br />
      <hr />

      {/* awards */}
      <div className="good container">
        <div className='text-center'> <h2 className='fw-bolder fs-1' data-aos="zoom-y-out"> Awards</h2> </div> <br /> <br />
        <div className="row">
          <div className="col-md-4">
            <img style={{width:'300px'}} src={trophy1} alt="" />
          </div>
          <div className="col-md-4">
            <img style={{width:'300px'}} src={trophy2} alt="" />
          </div>
          <div className="col-md-4">
            <img style={{width:'300px'}} src={trophy3} alt="" />
          </div>
        </div>
      </div> <br /> <br /> <br /> <br />

      {/* direction card */}
      <div className="route container-fluid bg-body-tertiary "> <br /> <br /> <br />
       <div className='text-center'> <h2 className='fw-bolder fs-1' data-aos="zoom-y-out" > Store Locations</h2> </div> <br /> <br /> <br />
       <div className="row direccard">
         <div className="col-lg-4">
           <Card >
              <Card.Img variant="top" src={sto1} />
              <Card.Body>
               <Card.Title>Chennai</Card.Title>
               <Card.Text>
               <p><i className='fa-solid fa-location-dot fa-lg' style={{color:'black'}}></i> 114,St.Cathedral Rd,opp.Stell Mary's College, Gopalapiram, Chennai - 600086 </p>
               <p> <i className='fa-solid fa-phone fa-lg' style={{color:'black'}}></i> <span style={{textDecoration:'underline'}}>9514375599 </span></p>
              </Card.Text>
               <Button className='direc'> <i className='fa-solid fa-location-dot fa-sm' style={{color:'black'}}></i> Get Direction</Button>
             </Card.Body>
           </Card>
         </div>
         <div className="col-lg-4">
           <Card >
             <Card.Img variant="top" src={sto2} />
             <Card.Body>
               <Card.Title>Coimbatore</Card.Title>
               <Card.Text>
                 <p><i className='fa-solid fa-location-dot fa-lg' style={{color:'black'}}></i> Deyga Organics SF 468, Avinash Road, Peelemedu, Coimbatore - 641004 </p>
                 <p> <i className='fa-solid fa-phone fa-lg' style={{color:'black'}}></i> <span style={{textDecoration:'underline'}}>9514375599 </span></p>
               </Card.Text>
               <Button className='direc'> <i className='fa-solid fa-location-dot fa-sm' style={{color:'black'}}></i> Get Direction</Button>
             </Card.Body>
           </Card>
         </div>
         <div className="col-lg-4">
           <Card >
             <Card.Img variant="top" src={sto3} />
             <Card.Body>
               <Card.Title>Erode</Card.Title>
               <Card.Text>
                 <p><i className='fa-solid fa-location-dot fa-lg' style={{color:'black'}}></i> 59, Mosuvanna St, Erode, Tamil Nadu - 638009   </p>
                 <p> <i className='fa-solid fa-phone fa-lg' style={{color:'black'}}></i> <span style={{textDecoration:'underline'}}>9514375599 </span></p>
               </Card.Text>
               <Button className='direc'> <i className='fa-solid fa-location-dot fa-sm' style={{color:'black'}}></i> Get Direction</Button>
             </Card.Body>
           </Card>
         </div>
       </div> <br /> <br />
      </div> <br /> <br /> <br /> 


      {/* footer */}
      <div className="container-fluid" style={{backgroundColor:'forestgreen'}}> <br /> <br />
        <h3 className='text-center text-light'>We <i className='fa-solid fa-heart fa-xl' style={{color:'red'}}></i>  Being Friends !!</h3> <br /> <br /> 
        <div className='icons text-center'>
          <i className='fa-brands fa-facebook fa-2xl icon' style={{color:'white'}}></i>
          <i className='fa-brands fa-square-x-twitter fa-2xl icon' style={{color:'white'}}></i>
          <i className='fa-brands fa-square-instagram fa-2xl icon' style={{color:'white'}}></i>
          <i className='fa-brands fa-pinterest fa-2xl icon' style={{color:'white'}}></i>
          <i className='fa-brands fa-youtube fa-2xl icon' style={{color:'red'}}></i>
        </div> <br /> <br /> 
        <div className='text-center'>
         <h3 className='text-light'>Choose Pure !! Choose Deyga !!</h3>
        </div> <br /> <br />
        <footer>
          <div className="row">
            <div className="col-md-4">
              <p className='fw-bolder fs-4'>Contact</p>
              <p>+91 9159305599</p>
              <p>enquiry@deyga.in</p>
              <p>Contact us</p>
              <p className='fs-5'>FOR CORPORATE ORDERS:</p>
             <p> business@deyga.in</p>
            </div>
            <div className="col-md-4">
              <p className='fw-bolder fs-4'>Support</p>
              <p>About us</p>
              <p>FAQs</p>
              <p>Privacy policy</p>
              <p>Terms and Conditions</p>
              <p>Shipping & Returns</p>
            </div>
            <div className="col-md-4">
              <p className='fw-bolder fs-4'>Sign-up to get closer</p>
              <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
              <div className="d-flex">
               <input placeholder='Enter your email here' type="text" className='form-control' />
               <button className='btn btn-info ms-1'> <i className='fa-solid fa-arrow-right'></i> </button>
              </div>
            </div>
          </div> 
        </footer> <br /> <br />
      </div> <br /> 


    </>
  )
}

export default App
