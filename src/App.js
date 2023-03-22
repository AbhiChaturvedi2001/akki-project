import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import BrickModal from "./Components/BrickModal";
import Bricks1data from "./Components/Bricks1data";
import Employess from "./Pages/Employess";
import Home from "./Pages/Home";
import Tekedar from "./Pages/Tekedar";

const App = () => {
  const [userName, setuserName] = useState("");
  const [userAmount, setuserAmount] = useState(0);
  const [date, setdate] = useState(0);
  const [addInfo, setaddInfo] = useState("");
  const [deliveryCharges, setdeliveryCharges] = useState(0);
  const [bricksAmt, setbrickAmt] = useState(0);
  const [chooseBricksValue, setchooseBricksValue] = useState("1bricks");

  const [brick1Data, setbrick1Data] = useState([]);
  const [brick2Data, setbrick2Data] = useState([]);
  const [brick3Data, setbrick3Data] = useState([]);
  const addData = () => {
    let calc = Number(eval(bricksAmt)) + Number(deliveryCharges);
    if (chooseBricksValue === "1bricks") {
      brick1Data.push({
        title: userName,
        amount: Number(userAmount),
        date: date,
        info: addInfo,
        expense: Number(deliveryCharges),
        totalAmount: calc,
        category: chooseBricksValue,
      });
     alert(`username ${userName}, amount ${userAmount} data :- ${date} info: ${addInfo} category: ${chooseBricksValue} totalAmount : ${bricksAmt}`)
    } else if (chooseBricksValue === "2bricks") {
      brick2Data.push({
        title: userName,
        amount: Number(userAmount),
        date: date,
        info: addInfo,
        expense: Number(deliveryCharges),
        totalAmount: calc,
        category: setchooseBricksValue(chooseBricksValue),
      });
      console.log(brick1Data);
    } else if (chooseBricksValue === "3bricks") {
      brick3Data.push({
        title: userName,
        amount: Number(userAmount),
        date: date,
        info: addInfo,
        expense: Number(deliveryCharges),
        totalAmount: calc,
        category: chooseBricksValue,
      });
      console.log(brick3Data);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/employess" element={<Employess />} />
          <Route exact path="/tekedar" element={<Tekedar />} />
          <Route
            exact
            path="/brickModal"
            element={
              <BrickModal
                userName={userName}
                setuserName={setuserName}
                userAmount={userAmount}
                setuserAmount={setuserAmount}
                date={date}
                setdate={setdate}
                addInfo={addInfo}
                setaddInfo={setaddInfo}
                deliveryCharges={deliveryCharges}
                setdeliveryCharges={setdeliveryCharges}
                addData={addData}
                bricksAmt={bricksAmt}
                setbrickAmt={setbrickAmt}
                chooseBricksValue={chooseBricksValue}
                setchooseBricksValue={setchooseBricksValue}
              />
            }
          />
          <Route exact path="/bricks1data" element={<Bricks1data />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
