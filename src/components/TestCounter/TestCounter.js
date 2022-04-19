import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

const TestCounter = () => {
  const [number, setNumber] = useState();
  const dispatch = useDispatch();
  function setValue(e) {
    let number = e.target.value;
    if (number.length) {
      setNumber(number);
    }
  }
  return (
    <div>
      <InputGroup className="mb-3 test_counter">
        <FormControl
          onBlur={(e) => setValue(e)}
          placeholder="Input value"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="number"
        />
        <Button
          onClick={() => dispatch({ type: "UPDATE", payload: number })}
          variant="outline-secondary"
          id="button-addon2"
        >
          Update
        </Button>
        <Button
          onClick={() => dispatch({ type: "INCREMENT", payload: number })}
          variant="outline-secondary"
          id="button-addon2"
        >
          Inc specific value
        </Button>
      </InputGroup>
    </div>
  );
};

export default TestCounter;
