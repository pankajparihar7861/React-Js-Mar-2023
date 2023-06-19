import './App.css';
//functional component
import Header from "./components/Header"
import Footer from "./components/Footer"
import GreetMe from './components/GreetMe';
let comps = ["HCL" , "CAPGEMINI" , "INFY"]
function App(props) {
  return (
    <div className="App">
      <Header companyName = {comps} topic = "react js" cn ="CG" />
      <GreetMe/>
      <Footer cn ="CG"/>
    </div>
  );
}

export default App;
