import { NavLink } from "react-router-dom";

export const CustomLink = () => {
    const navLink = [
        {
            path:'/',
            label:"Home"
        },
        {
            path:'/about',
            label:"About"
        },
        {
            path:'/places',
            label:"Places"
        },
        {
            path:'/carrers',
            label:"Carrers"
        },
        {
            path:'/blog',
            label:"Blog"
        },
      ]; 
  return (
    <ul className="link-container">
        {navLink.map(({path,label},index) => (
          <li key={index}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
  )
}
