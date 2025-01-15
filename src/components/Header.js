import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getImageURL } from "../utils/assetsPatch";
const Header = () => {
  const logoURL = getImageURL('logo.png');
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch(() => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {user && <div className="flex">
        {user?.photoURL ? (
          <img alt="usericon" src={user?.photoURL} />
        ) : (
          <img alt="defaulticon" src={logoURL}/>
        )}
        <button
          onClick={handleSignOut}
          className="bg-red-800 text-white p-2 rounded"
        >
          SignOut
        </button>
      </div>}
    </div>
  );
};

export default Header;
