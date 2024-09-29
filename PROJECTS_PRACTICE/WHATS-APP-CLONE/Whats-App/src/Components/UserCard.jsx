import React from "react";
import { Link } from "react-router-dom";

function UserCard({ userObject }) {
  return (
    <Link key={userObject.id} className="flex border-3 pt-2" to={`/${userObject.id}`}>
    <img
      src={userObject.userData.profile_pic}
      alt=""
      className="rounded-full h-10 w-10"
    />
    <h2>{userObject.userData.name}</h2>
  </Link>
  );
}

export default UserCard;