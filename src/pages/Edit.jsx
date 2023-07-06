import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateStudent } from "../store/studentSlice";
import { Button } from "antd";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";

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
        <Input
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
        <TextArea
          autoComplete="false"
          id="address"
          rows={4}
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></TextArea>
        <br />
        <br />
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </form>
    </>
  );
};

export default Edit;
