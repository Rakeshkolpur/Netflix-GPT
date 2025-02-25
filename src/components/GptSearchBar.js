import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const handlesubmit =(e)=>e.preventDefault();
  const langKey = useSelector((store)=>store.config.lang)
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form onClick={handlesubmit} typeof='submit' className="w-full max-w-lg bg-black bg-opacity-80 p-8 rounded-lg shadow-lg flex items-center">
        <input
          type="text"
          className="flex-grow p-4 text-white bg-transparent border border-gray-600 rounded-l-lg focus:outline-none focus:border-red-600"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-4 px-6 bg-red-600 text-white font-bold rounded-r-lg hover:bg-red-700 transition duration-300">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;