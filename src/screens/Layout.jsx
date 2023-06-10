import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const Layout = () => {
  return (
    <section className="layout">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </section>
  )
}
