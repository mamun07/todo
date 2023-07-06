import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../store/studentSlice";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const Add = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const addHandel = (e) => {
    e.preventDefault();
    const newStudent = { id: Math.random(), name, address };
    dispatch(addStudent(newStudent));
    navigator("/");
  };

  return (
    <form onSubmit={addHandel}>
      <label htmlFor="name">Name</label>
      <br />
      <Input
        id="name"
        type="text"
        name="name"
        value={name}
        autoComplete="false"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="address">Address</label>
      <br />
      <TextArea
        autoComplete="false"
        id="address"
        rows={4}
        value={address}
        name="address"
        onChange={(e) => setAddress(e.target.value)}
      ></TextArea>
      <br />
      <br />
      <Button type="default" htmlType="submit">
        Add
      </Button>
    </form>
  );
};

export default Add;
