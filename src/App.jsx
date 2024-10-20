import "./App.css";
import Customer from "./Customer";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className=" mt-4">
        <Dashboard />
      </div>
      <div className="mt-5">
        <Customer />
      </div>
    </>
  );
}

export default App;
