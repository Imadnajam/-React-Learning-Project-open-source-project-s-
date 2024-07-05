import { React, useEffect, useState } from "react";

const MiniCalcule = () => {
  // State variables for the two input numbers, the selected operation, and the result
  const [Z1, setZ1] = useState(0);
  const [Z2, setZ2] = useState(0);
  const [op, setop] = useState("");
  const [resultas, setResultas] = useState(0);

  // State variables for tracking the number of each type of operation
  const [Addition, setAddition] = useState(-1);
  const [Soustraction, setSoustraction] = useState(-1);
  const [Multiplication, setMultiplication] = useState(-1);
  const [Division, setDivision] = useState(-1);
  const [nbOp1, setNbOp1] = useState(-1);
  const [nbOp2, setNbOp2] = useState(-1);
  const [nbOp3, setNbOp3] = useState(-1);
  const [nbOp4, setNbOp4] = useState(-1);
  const [nbOp5, setNbOp5] = useState(-1);

  // useEffect hooks to update operation counts whenever an operation is performed
  useEffect(() => {
    setAddition(Addition + 1);
  }, [nbOp1]);

  useEffect(() => {
    setSoustraction(Soustraction + 1);
  }, [nbOp2]);

  useEffect(() => {
    setMultiplication(Multiplication + 1);
  }, [nbOp3]);

  useEffect(() => {
    setDivision(Division + 1);
  }, [nbOp4]);

  useEffect(() => {
    setNbOp5(nbOp5 + 1);
  }, [resultas]);

  // Function to perform calculations based on the selected operation
  function calcul(e) {
    if (e === "+") {
      if (Z1 >= 1 && Z2 >= 1) {
        setNbOp1(nbOp1 + 1);
        setop(Z1 + "+" + Z2);
        setResultas(Z1 + Z2);
      } else setResultas("error");
    }
    if (e === "-") {
      if (Z1 > Z2) {
        setNbOp2(nbOp2 + 1);
        setResultas(Z1 - Z2);
        setop(Z1 + "-" + Z2);
      } else setResultas("error Z1 < Z2");
    }
    if (e === "*") {
      if (Z1 > 1 && Z2 > 1) {
        setNbOp3(nbOp3 + 1);
        setop(Z1 + "*" + Z2);
        setResultas(Z1 * Z2);
      } else setResultas("error");
    }
    if (e === "/") {
      if (Z1 > 1 && Z2 > 1) {
        setNbOp4(nbOp4 + 1);
        setop(Z1 + "/" + Z2);
        setResultas(Z1 / Z2);
      } else setResultas("error division by 0");
    }
  }

  return (
    <div>
      <div>
        Z1 :
        <input
          type="text"
          value={Z1}
          onChange={(e) => setZ1(Number(e.target.value))}
        />{" "}
        <br />
        Z2 :
        <input
          type="text"
          value={Z2}
          onChange={(e) => setZ2(Number(e.target.value))}
        />{" "}
        <br /><br />
        {/* Buttons for performing operations */}
        <button style={{backgroundColor:'teal' ,color:"white" ,width:'100px',fontSize:'1.3rem'}} onClick={() => calcul("+")}>+</button>
        <button style={{backgroundColor:'teal' ,color:"white" ,width:'100px',fontSize:'1.3rem'}}  onClick={() => calcul("-")}>-</button>
        <button style={{backgroundColor:'teal' ,color:"white" ,width:'100px',fontSize:'1.3rem'}}  onClick={() => calcul("*")}>*</button>
        <button  style={{backgroundColor:'teal' ,color:"white" ,width:'100px' ,fontSize:'1.3rem'}} onClick={() => calcul("/")}>/</button>
        <br />
        <h2 style={{ color: "red" }}>
          {" "}
          {op} = {resultas}
        </h2>
        <br />
        {/* Display operation counts */}
        <label style={{ color: "green" }} htmlFor="">
          Nb Addition {Addition}
        </label>
        <br />
        <label style={{ color: "teal" }} htmlFor="">
          Nb Soustraction {Soustraction}{" "}
        </label>
        <br />
        <label style={{ color: "yellow" }} htmlFor="">
          Nb Multiplication {Multiplication}{" "}
        </label>
        <br />
        <label style={{ color: "blue" }} htmlFor="">
          Nb Division {Division}
        </label>
        <br />
        <h1>number total d'operation {nbOp5}</h1>
      </div>
    </div>
  );
};

export default MiniCalcule; // Exporting the MiniCalcule component as the default export
