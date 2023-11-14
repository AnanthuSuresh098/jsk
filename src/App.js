import logo from './logo.svg';
import './App.css';
import { MainRoutes } from "./Routes/MainRoutes";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Rightbar } from "./Components/Rightbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Rightbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
