import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../store/studentSlice";

const Home = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const deleteHandel = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <>
      <Link to={"/add"}>
        <button>Add Student</button>
      </Link>
      <table style={{ marginBottom: "30px" }}>
        <thead>
          <tr>
            <th style={{ minWidth: "50px", textAlign: "left" }}>ID</th>
            <th style={{ minWidth: "200px", textAlign: "left" }}>Name</th>
            <th style={{ minWidth: "200px", textAlign: "left" }}>Address</th>
            <th style={{ minWidth: "200px", textAlign: "left" }}>Action</th>
          </tr>
        </thead>
        <thead>
          {students &&
            students.map((student, i) => {
              const { id, name, address } = student;
              return (
                <tr key={i}>
                  <td>{i < 9 ? "0" + (i + 1) : i + 1}</td>
                  <td>
                    <Link to={"/edit"} state={{ id, name, address }}>
                      {name}
                    </Link>
                  </td>
                  <td>{address}</td>
                  <td>
                    <button onClick={() => deleteHandel(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </thead>
      </table>
    </>
  );
};

export default Home;
