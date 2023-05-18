import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheSuggestionResults } from "../utils/searchSuggestionSlice";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((state) => state.searchSuggestions);
  const dispatch = useDispatch();

  useEffect(() => {
    // Debouncing used to search the results
    const timer = setTimeout(() => {
      // Check search query in cache otherwise fetch from the server
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // update cache
    dispatch(cacheSuggestionResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <IoMenuOutline
          alt="menu"
          onClick={() => toggleMenuHandler()}
          size={40}
        />
        <Link to="/">
          <img
            className="bg-cover h-8 mx-2 my-1"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          />
        </Link>
      </div>
      <div className="col-span-10 px-48">
        <div className="flex">
          <input
            className="w-96 px-8 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
          />
          <Link to={`/results?search_query=${searchQuery}`}>
            <button
              className="border h-10 border-gray-400 bg-gray-100 px-4 rounded-r-full"
              onClick={() => {
                setShowSuggestions(false);
              }}>
              <CiSearch size={30} />
            </button>
          </Link>
        </div>
        {showSuggestions && (
          <div className="absolute py-2 px-2 w-96 bg-white shadow-lg rounded-lg border border-gray-100">
            {suggestions?.map((s, index) => (
              <span className="flex">
                <CiSearch
                  className="mx-3 my-2"
                  size={25}
                />
                <h4
                  key={index}
                  value={s}
                  name={s}
                  className="py-2 cursor-pointer shadow-sm hover:bg-gray-100"
                  onClick={() => {
                    setSearchQuery(s);
                    setShowSuggestions(false);
                  }}>
                  {s}
                </h4>
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="col-span-1">
        <HiOutlineUserCircle size={40} />
      </div>
    </div>
  );
};

export default Header;
