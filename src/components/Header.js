import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
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
    return () => unsubcribe();
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

  const handleGPTSearch = () => {
    // toggle GPT Search Button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChnage = (e) => {
    dispatch(changLanguage(e.target.value));
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
          {showGptSearch && (
            <select
              className="p-2 bg-gray-800 text-white rounded-lg"
              name="language"
              id="language"
              onChange={handleLanguageChnage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearch}
            className="text-lg text-white bg-purple-800 rounded-lg p-2"
          >
           {showGptSearch ? "HomePage" : "GPT-Search"}
          </button>
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
