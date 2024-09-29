import React from "react";
import { ArrowLeft, Check } from "lucide-react";
import { useAuth } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  const { userData } = useAuth();
  const Navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    Navigate("/login");
  };

  return (
    <>
      <div className="bg-white w-[30vw] ">
        <div className="bg-primary text-white py-4 text-lg px-4 flex items-center gap-6">
          <button onClick={props.onBack}>
            <ArrowLeft />
          </button>
          <div>Profile</div>
        </div>
        <div className="bg-gray-100 ">
          <div className="h-80 flex items-center justify-center">
            <img
              src={userData.profile_pic}
              alt="profile"
              className="rounded-full h-40 w-40"
            />
          </div>
          <div className="bg-gray-50 p-4 max-w-sm mx-auto rounded-lg">
            <p></p>
            <div className="border-b border-gray-200 py-4 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-primary">Your name</p>
                <p className="text-lg font-medium text-gray-900">
                  {userData.name}
                </p>
              </div>
              <Check className="text-gray-400" />
            </div>

            {/* Status Section */}
            <div className="py-4 flex justify-between items-center">
              <div>
                <p className="text-xs text-primary font-bold">Status</p>
                <p className="text-xs font-small text-gray-400">
                  Update your status...
                </p>
              </div>
              <Check className="text-gray-400" />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleLogout}
              className="py-2 px-6 text-white rounded  bg-primary"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
