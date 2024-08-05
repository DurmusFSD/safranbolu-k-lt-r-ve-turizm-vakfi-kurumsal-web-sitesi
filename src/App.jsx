import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Activity from "./routes/Activity";
import Tourism from "./routes/Tourism";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkımızda" element={<About />} />
        <Route path="/faliyetler" element={<Activity />} />
        <Route path="/turizm" element={<Tourism />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    </div>
  );
}
