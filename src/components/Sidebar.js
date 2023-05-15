import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;

  return (
    <div className="pt-5 mr-12 w-60 leading-9">
      <ul className="shadow-lg p-5">
        <li>
          <Link>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <section></section>
      <ul className="shadow-lg p-5">
        <li>Library</li>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <section></section>
      <div className="shadow-lg p-5">
        <h1 className="font-bold text-lg">Subscriptions</h1>
        <ul>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies & shows</li>
          <li>News</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
