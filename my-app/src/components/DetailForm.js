import { useReducer, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const DetailForm = (props) => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = async () => {
    const data = { message: message, email: email };
    console.log(data);
    const respose = await fetch("http://localhost:3005/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataa = await respose.json();
    console.log(dataa);
  };

  const updateMessage = (event) => {
    setMessage(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Form>
      <InputGroup>
        <InputGroup.Text>The Message</InputGroup.Text>
        <Form.Control
          onChange={updateMessage}
          as="textarea"
          aria-label="With textarea"
        />
      </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={updateEmail}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" onClick={submitHandler}>
        Submit
      </Button>
    </Form>
  );
};

export default DetailForm;
