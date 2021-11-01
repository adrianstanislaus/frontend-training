import './App.css';
import Table from "./Table.js";

function App() {
  return (
    <div className="d-flex justify-content-center App">
      <div className="">
        <header className="text-center App-header">
          Daftar Pengunjung
        </header>
        <span className="d-flex justify-content-center">Stasiun Gubeng</span>
        <Table/>
      </div>
    </div>
  );
}

export default App;
