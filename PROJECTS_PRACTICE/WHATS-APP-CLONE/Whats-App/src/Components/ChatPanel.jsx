import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import {
  CircleUserRound,
  MessageSquare,
  SunMoon,
  BadgePlus,
  Search,
} from "lucide-react";
import Profile from "./Profile";
import UserCard from "./UserCard";

function ChatPanel() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showProfile, setshowProfile] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      // getDocs ,db,collection given by firebase just you can pass the  collection then it gives data from passed ex:-users
      const snapShot = await getDocs(collection(db, "users"));
      // console.log(data.docs.length);
      //
      const arrayOfUsers = snapShot.docs.map((doc) => {
        return { userData: doc.data(), id: doc.id };
      });
      setUsers(arrayOfUsers);;
      setLoading(false);
    };
    getUsers();
  }, []);

  const onBack = () => {
    setshowProfile(false);
  };

  if (showProfile == true) {
    return <Profile onBack={onBack} />;
  }

  return (
    <div className="bg-white w-[30vw]">
      <div className="flex justify-between items-center bg-background h-[3rem]">
        <div>
          <button
            onClick={() => {
              setshowProfile(true);
            }}
          >
            <img src={"/user-icon.svg"} alt="User Icon" />
          </button>
        </div>
        <div className="flex space-x-4 ml-auto">
          <MessageSquare />
          <SunMoon />
          <BadgePlus />
          <CircleUserRound />
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none"
          placeholder="Search..."
        />
        <Search className="absolute top-1/2 left-3  -translate-y-1/2 text-gray-500" />
      </div>

      {/* chat list */}
      {isLoading ? (
        <div>....Loading</div>
      ) : (
        <div className="py-3 pb-8 divide-y h-full max-h-[calc(100vh-152px)] overflow-y-scroll">
          {users.map((userObject) => (
            <UserCard key={userObject.id} userObject={userObject} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ChatPanel;
