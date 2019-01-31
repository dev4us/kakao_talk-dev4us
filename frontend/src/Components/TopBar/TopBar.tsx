import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <NavLink to="/main/friends">
      <button>칭구</button>
    </NavLink>
    <NavLink to="/main/test">
      <button>세컨드</button>
    </NavLink>
  </div>
);

export default Header;
