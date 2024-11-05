import React, { useState } from "react";
import { useEffect } from "react";

function User() {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const userDataHandler = async () => {
      try {
        const userResponce = await fetch("https://dummyjson.com/users/1");
        const user = await userResponce.json();
        setUser(user)
        setLoading(false);
        console.log(user);
      } catch (err) {
        console.log(err.message);
        seterror(true);
        setLoading(false)
      }
    };
    userDataHandler();
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
