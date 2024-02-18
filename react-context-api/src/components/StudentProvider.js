import React, { createContext, useState } from "react";
import students from "../data";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [studentList, setStudentList] = useState(students);

  return (
    <StudentContext.Provider value={{ studentList, setStudentList }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
