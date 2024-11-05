import { userActions } from "../UserSlice";

const userDataHandlerMiddleware = (params) => {
  return async function (dispatch) {
    try {
      dispatch(userActions.onPending());
      const userResponce = await fetch(`https://dummyjson.com/users/${params}`);
      const userData = await userResponce.json();
      // setUser(user);
      // setLoading(false);
      // console.log(user);
      dispatch(userActions.onFullfilled(userData));
    } catch (error) {
      dispatch(userActions.onRejected(error));
      console.log(err.message);
      // seterror(true);
      // setLoading(false);
    }
  };
};

export default userDataHandlerMiddleware;
