import React from "react";
import ReactDOM from "react-dom/client";

const htmlContainer = document.getElementById("root");
const root = ReactDOM.createRoot(htmlContainer);

function ClassList(){
  return(
    <div>
      <h1>Welcome to CTP</h1>
      <p>List of Students</p>
      {studentList.map((student)=> (
        <StudentInfo {...student} key={student.sID}/>
      ))}
    </div>
  )
}

const studentList = [
  {
    firstName: "Misty",
    lastName: "Knight",
    sId: "234",
    school: "Queens College",
    major: "Law",
  },
  {
    firstName: "Jessica",
    lastName: "Jones",
    sId: "434",
    school: "Brooklyn College",
    major: "CS",
  },
  {
    firstName: "Colleen",
    lastName: "Wing",
    sId: "233",
    school: "Queens College",
    major: "CS",
  },
  {
    firstName: "Dare",
    lastName: "Devil",
    sId: "876",
    school: "CCNY",
    major: "Law",
  },
  {
    firstName: "Luke",
    lastName: "Cage",
    sId: "323",
    school: "CCNY",
    major: "Math",
  },
];

function StudentInfo(props){
  return(
    <div>
      <div>
        {props.lastName}, {props.firstName}
      </div>
      <ul>
        <li>
          <strong>ID:</strong> {props.sId}
        </li>
        <li>
          <strong>School:</strong> {props.school}
        </li>
        <li>
          <strong>Major:</strong> {props.major}
        </li>
      </ul>
    </div>
  )
}

root.render(<ClassList />)