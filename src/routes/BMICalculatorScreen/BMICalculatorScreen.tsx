import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import ConvertBMINumberToCategory from "../../utilities/BMICategory";

import "./BMICalculatorScreen.scss";

const BMICalculatorScreen = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [weight, setWeight] = useState("65");
  const [height, setHeight] = useState("180");
  const [BMI, setBMI] = useState<null | number>(null);
  const [BMICategory, setBMICategory] = useState<null | string>(null);

  const handleCalculateBMI = () => {
    var heightNum: number = +height;
    var weightNum: number = +weight;

    var bmi = weightNum / Math.pow(heightNum / 100, 2);
    var bmiCategory = ConvertBMINumberToCategory(bmi);

    // create a popup component to replace
    setBMI(bmi);
    setBMICategory(bmiCategory);
    setIsPopupOpen(true);
  };

  return (
    <div className="BMICalculator__wrapper">
      <div className="BMICalculator__title">
        <h1>BMI Calculator</h1>
      </div>
      <div className="BMICalculator__dataWrapper">
        <span>Weight: </span>
        <div className="BMICalculator__inputWrapper weightInput">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>
      <div className="BMICalculator__dataWrapper">
        <span>Height: </span>
        <div className="BMICalculator__inputWrapper heightInput">
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" onClick={handleCalculateBMI}>
        Calculate
      </button>

      <Link to="/">Go back home</Link>
      <Popup show={isPopupOpen} closeFn={() => setIsPopupOpen(false)}>
        <div className="BMICalculator__popupTitle">
          <h1>This is your BMI Result</h1>
        </div>
        <div className="BMICalculator__popupDetails">
          <h2>Your BMI is: <strong><u>{BMI?.toFixed(1)}</u></strong></h2>
        </div>
        <div className="BMICalculator__popupDetails">
          <h2>Your weight and height is on <strong><u>{BMICategory}</u></strong> category</h2>
        </div>
      </Popup>
    </div>
  );
};

export default BMICalculatorScreen;
