import React,{useState} from 'react'
import Form from "react-bootstrap/Form";


export default function Textform(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('COnverted TO UPpperCAse','danger')
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("COnverted TO LowerCase", "danger");

    };

    const handleOnChange = (event) => {
        setText(event.target.value)
        console.log('Onchange..>')
    }

    const [text, setText] = useState("Enter Your Text Here");

     
    return (
      <>
        <div
          className="container"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{props.heading} </h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={5}
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            />
          </Form.Group>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            {" "}
            TO UpperCAse
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            {" "}
            To LoweCaseCAse
          </button>
        </div>
        <div
          className="container my-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h3>Your Text Summary</h3>
          <p>
            {text.trim() === "" ? 0 : text.trim().split(" ").length} words and{" "}
            {text.length} characters
          </p>
          <h3>Text Preview</h3>
          <p>{text}</p>
        </div>
      </>
    );
}
