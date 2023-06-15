import React from "react";
const BASE_URL = "http://localhost:3001/products";
import { useRef } from "react";

export const Del = () => {
  const deleteId = useRef();
  const deleteData = (evt) => {
    evt.preventDefault();
    fetch(`${BASE_URL}/${deleteId.current.value}`, {
      method: "DELETE",
    });
    deleteId.current.value = "";
  };
  return (
    <div className="divBlock">
      <h1>Delete Product</h1>
      <form className="form" onSubmit={deleteData}>
        <input
          className="input"
          name="id"
          ref={deleteId}
          type="text"
          placeholder="Enter the if product to be deleted"
          required
        />
        <button className="postBtn" type="submit">
          <h3>Delete</h3>
        </button>
      </form>
    </div>
  );
};
