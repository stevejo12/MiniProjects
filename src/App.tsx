import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoScreen from './routes/Todo_screen';
import HomeScreen from "./routes/HomeScreen";

import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/todo" element={<TodoScreen />} />
          {/* <Route path="/weather" element={<WeatherScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
