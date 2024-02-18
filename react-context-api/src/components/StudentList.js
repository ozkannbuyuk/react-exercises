import { StudentContext } from "./StudentProvider";
import React, { useContext } from "react";

const StudentList = () => {
  const { studentList } = useContext(StudentContext);

  return (
    <ul>
      {studentList.map((student) => (
        <li key={student.id}>
          <h3>{student.name}</h3>
          <p>Age: {student.age}</p>
          <p>Major: {student.major}</p>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
