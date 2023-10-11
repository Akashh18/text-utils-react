import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


export default function AboutUs() {
    // const [mystyle, newstyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // });

    return (
      <>
         
        <div /* style={mystyle} */ className='container my-3'>
          <h2>About US....</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Motive</Accordion.Header>
              <Accordion.Body /* style={mystyle} */>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Achievement</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </>
    );
}