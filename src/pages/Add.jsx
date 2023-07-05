import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../store/studentSlice";

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
      <input
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
      <textarea
        autoComplete="false"
        id="address"
        rows={4}
        value={address}
        name="address"
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default Add;
