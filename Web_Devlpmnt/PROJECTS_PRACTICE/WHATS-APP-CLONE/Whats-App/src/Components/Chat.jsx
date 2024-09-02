import React from "react";
import { useParams } from "react-router-dom";

function Chat() {
  const params = useParams();
  console.log(params);
  
  return (
    <div>Chat: {params.uniqueChat}</div>
  );
}
// 
export default Chat;
