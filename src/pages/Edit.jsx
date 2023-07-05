import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateStudent } from "../store/studentSlice";

const Edit = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const id = location.state.id;
  const [name, setName] = useState(location.state.name);
  const [address, setAddress] = useState(location.state.address);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateStudent({ id, name, address }));
    navigator("/", { replace: true });
  };

  return (
    <>
      <form onSubmit={handleUpdate}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="false"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="address">Address</label>
        <br />
        <textarea
          autoComplete="false"
          id="address"
          rows={4}
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Edit;
