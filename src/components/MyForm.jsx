import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MyForm = ({ submitHandler }) => {
  const [newName, setNewName] = useState("");
  const [newSurname, setNewSurname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newBirthPlace, setNewBirthPlace] = useState("");
  const [newBirthYear, setNewBirthYear] = useState("");

  const newNameHandler = (e) => setNewName(e.target.value);
  const newSurnameHandler = (e) => setNewSurname(e.target.value);
  const newEmailHandler = (e) => setNewEmail(e.target.value);
  const newBirthPlaceHandler = (e) => setNewBirthPlace(e.target.value);
  const newBirthYearHandler = (e) => setNewBirthYear(e.target.value);

  return (
    <div style={{width:500}}>
    
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={newName}
            onChange={newNameHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="surname"
            placeholder="Enter Surname"
            value={newSurname}
            onChange={newSurnameHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            value={newEmail}
            onChange={newEmailHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your birth year</Form.Label>
          <Form.Control
            type="year"
            placeholder="Enter your Birth Year"
            value={newBirthYear}
            onChange={newBirthYearHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your birth place</Form.Label>
          <Form.Control
            type="birth-place"
            placeholder="Enter your Birth Place"
            value={newBirthPlace}
            onChange={newBirthPlaceHandler}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            submitHandler({
              newName,
              newSurname,
              newEmail,
              newBirthYear,
              newBirthPlace,

            });
            setNewName('')
            setNewBirthPlace('')
            setNewEmail('')
            setNewSurname('')
            setNewBirthYear('')
          }}
        >
          Submit
        </Button>
      
    </div>
  );
};

export default MyForm;
