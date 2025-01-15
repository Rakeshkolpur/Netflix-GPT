import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {

    const unsubcribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe from the listener when the component unmounts
    return ()=>unsubcribe();
  }, [dispatch]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-10 ${
        user ? "" : ""
      }`}
    >
      <a href="/">
        {" "}
        <img
          className="w-32 cursor-pointer text-red-800"
          src={LOGO}
          alt="Netflix Logo"
        />
      </a>
      {user && (
        <div className="flex items-center space-x-4">
          {user.photoURL ? (
            <img
              alt="usericon"
              src={user.photoURL}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white">
              {user.displayName ? user.displayName[0] : "U"}
            </div>
          )}
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
