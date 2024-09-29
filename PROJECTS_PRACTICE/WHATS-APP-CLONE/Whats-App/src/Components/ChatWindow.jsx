import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageSquareText, Smile, Plus, SendHorizontal } from "lucide-react";
import { doc, getDoc } from 'firebase/firestore'; 
import {db} from "../../Firebase"


function ChatWindow() {
  const [message, setMessage] = useState("");
  const params = useParams();
  const [secondUser, setsecondUser] = useState();

  const recieverId = params.chatid;

  const selectMessage = (obj) => {
    setMessage(obj.target.value);
  };

  const handleSendMessage = () => {
    setMessage("");
  };

  useEffect(() => {
    // Function to request and fetch data
    const getUser = async () => {
      const docRef = doc(db, "users", recieverId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("second user",docSnap.data());
        setsecondUser(docSnap.data()); 
      }
    };
  
    if (recieverId) {
      getUser(); 
    }
  }, [recieverId]);

  // send message function for "ENTER KEY"
  const sendwithEnter = (Event) => {
    if (Event.key === "Enter") {
      handleSendMessage();
    }
    return;
  };

  if (!recieverId) {
    return (
      <>
        {/* Empty screen code */}
        <section className="w-[70%] h-full flex flex-col gap-4 items-center justify-center">
          <MessageSquareText
            className="w-28 h-28 text-gray-400"
            strokeWidth={1.2}
          />
          <p className="text-sm text-center text-gray-400">
            select any contact to
            <br />
            start a chat with.
          </p>
        </section>
      </>
    );
  }

  return (
    <section className="w-[70%] h-full flex flex-col gap-4 items-center justify-center">
      <div className="h-full w-full bg-chat-bg flex flex-col">
        {/* top bar */}
        <div className="bg-background py-2 px-4 flex items-center gap-2 shadow-sm">
          <img
            src={secondUser?.profile_pic||"/user-icon.svg"}
            alt="User Icon"
            className="w-9 h-9 rounded-full object-cover"
          />
          <h3>{secondUser?.name}</h3>
        </div>

        {/* message list */}
        <div className="flex-grow flex flex-col gap-12 p-6"></div>

        {/* chat input */}
        <div className="flex shadow pl-2 bg-chat-bg items-center gap-6">
          <Smile size={16} strokeWidth={1} />
          <Plus size={16} strokeWidth={1.5} />
          <input
            type="text"
            onChange={selectMessage}
            value={message}
            placeholder="Type a message.."
            className="flex-grow border-0 focus:outline-none focus:ring-0 bg-gray-100 p-2"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button onClick={handleSendMessage}>
            <SendHorizontal size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChatWindow;
