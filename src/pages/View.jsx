import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../store/studentSlice";
import { Button, Col, Row } from "antd";

const Home = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const deleteHandel = (id) => {
    dispatch(deleteStudent(id));
  };
  return (
    <Row gutter={16} align={"center"}>
      <Col xs={12}>
        <Link to={"/add"}>
          <Button>Add Student</Button>
        </Link>
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
                      <Button
                        type="default"
                        danger
                        size="small"
                        onClick={() => deleteHandel(id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <br />
      </Col>
    </Row>
  );
};

export default Home;
