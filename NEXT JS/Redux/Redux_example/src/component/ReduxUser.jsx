import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import userDataHandlerMiddleware from "../ReduxCounter/middleware/fetchMiddleware";

function User() {
  const { isLoading, user, error } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDataHandlerMiddleware(10));
  }, []);

  if (isLoading) {
    return (
      <>
        <div>......Loading</div>
      </>
    );
  }
  if (error) {
    return <div>error while collecting userdata</div>;
  }

  return (
    <>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.maidenName}</p>
      <p>{user.age}</p>
    </>
  );
}

export default User;
