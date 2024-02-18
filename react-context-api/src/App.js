import React from "react";
import StudentList from "./components/StudentList";
import StudentProvider from "./components/StudentProvider";

function App() {
  return (
    <StudentProvider>
      <div className="App">
        <h1>Student List</h1>
        <StudentList />
      </div>
    </StudentProvider>
  );
}

export default App;
