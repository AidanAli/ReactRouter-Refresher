import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <div>
            <header>
                <h1>RTESTINGROUTING</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="help">Help</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout