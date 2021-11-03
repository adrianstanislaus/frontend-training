import './App.css';
import Header from "./component/header"
import List from "./component/list"

function App() {
  const data = ([ 

    {
  
      id: 1,
  
      title: "Membuat Komponen",
  
      completed: true,
  
    },
  
    {
  
      id: 2,
  
      title: "Unit Testing",
  
      completed: false,
  
    },
  
    {
  
      id: 3,
  
      title: "Setup Development Environment",
  
      completed: true,
  
    },
  
    {
  
      id: 4,
  
      title: "Deploy ke server",
  
      completed: false,
  
    },
  
  ]);

  return (
    <div>
    <Header/>
    <List list={data}/>
    </div>
  );
}

export default App;
