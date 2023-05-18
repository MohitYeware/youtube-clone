import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheSuggestionResults } from "../utils/searchSuggestionSlice";
import { Link } from "react-router-dom";

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
        <img
          className="h-10 cursor-pointer"
          alt="menu"
          onClick={() => toggleMenuHandler()}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <Link to="/">
          <img
            className="bg-cover h-10 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          />
        </Link>
      </div>
      <div className="col-span-10 px-48">
        <div>
          <input
            className="w-96 px-8 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
          />
          <Link to={`/results?search_query=${searchQuery}`}>
            <button
              className="border border-gray-400 bg-gray-100 px-4 py-2 rounded-r-full"
              onClick={() => {
                setShowSuggestions(false);
              }}>
              🔍
            </button>
          </Link>
        </div>
        {showSuggestions && (
          <div className="absolute py-2 px-2 w-96 bg-white shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions?.map((s, index) => (
                <li
                  key={index}
                  value={s}
                  name={s}
                  className="py-2 cursor-pointer shadow-sm hover:bg-gray-100"
                  onClick={() => {
                    setSearchQuery(s);
                    setShowSuggestions(false);
                  }}>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2fmKVxObx6S1S87K3_FwX35IIwAPqgGs0A&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Header;
