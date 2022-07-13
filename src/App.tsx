import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoScreen from "./routes/Todo_screen";
import HomeScreen from "./routes/HomeScreen";
import BMICalculatorScreen from "./routes/BMICalculatorScreen";

import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/todo" element={<TodoScreen />} />
          <Route path="/bmicalc" element={<BMICalculatorScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
