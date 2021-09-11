import './App.css';
import { useState } from 'react';
import StudentTable from './StudentTable';
import MyForm from './MyForm';
import { generate } from "shortid";

function App() {

  const [rows, setRows] = useState([
    {
      id: "45",
      firstName: "Hrishi",
      lastName: "Mane",
      email: "hrishi.mane26@gmail.com"
    }
  ]);

  function deleteRow(id) {
    console.log(id)
    let newRows= rows.filter(function(element){ 
        return element.id != id; 
    });
    setRows(newRows)
  }

  return (
    <div style={{ textAlign: "center", marginTop: 30 }}>
      <h1 style={{color:"blue"}}>Student Form</h1>
      <MyForm
        onSubmit={data => {
          setRows(currentRows => [
            {
              id: generate(),
              ...data
            },
            ...currentRows
          ]);
        }}
      />
      <StudentTable
        rows={rows}
        deleteRow={deleteRow}
      />
    </div>
  );
}

export default App;
;