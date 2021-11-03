import './App.css';
import Header from "./components/header"
import Body from "./components/body"

function App() {
  return (
    <div className="d-flex justify-content-center App">
      <div>
        <Header/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
