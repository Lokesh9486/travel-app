import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CustomLink } from "./CustomLink";

export const Footer = () => {
  return (
    <footer>
      <Link className="copy-rights" to="/">Copyright &copy; 2020 Travelo. All rights reserved</Link>
      <CustomLink />
      <ul>
        {["facebook", "LinkedIn", "Instagram"].map((item,index) => (
          <li key={index}>
            <NavLink to="/">
              <img src={require(`../images/${item}.png`)} alt="" />
            </NavLink>
          </li>
        ))}
      </ul>
    </footer>
  );
};
