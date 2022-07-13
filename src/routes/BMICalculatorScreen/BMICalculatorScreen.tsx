import { useState } from "react";
import { Link } from "react-router-dom";
import BMICategory from "../../utilities/BMICategory";

import "./BMICalculatorScreen.scss";

const BMICalculatorScreen = () => {
  const [weight, setWeight] = useState("65");
  const [height, setHeight] = useState("180");

  const handleCalculateBMI = () => {
    var heightNum: number = +height;
    var weightNum: number = +weight;

    var bmi = weightNum / Math.pow(heightNum / 100, 2);
    var bmiCategory = BMICategory(bmi);

    // create a popup component to replace
    console.log(`Your BMI is: ${bmi.toFixed(1)}`);
    console.log(`Your weight and height is on ${bmiCategory} category`);
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
    </div>
  );
};

export default BMICalculatorScreen;
