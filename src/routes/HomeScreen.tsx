import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div style={{ textAlign: "center"}}>
      <h1>Click One of These Mini Project</h1>
      <ul>
        <li>
          <Link to="/todo">To Do App</Link>
        </li>
        <li>
          <Link to="/bmicalc">BMI Calculator</Link>
        </li>
        {/* <li>
          <Link to="/weather">Weather App</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default HomeScreen;
