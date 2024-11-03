import { NavLink, Outlet } from "react-router-dom"


export const HelpLayout = () => {
    return (
        <div>HelpLayout

            <h2>Website Help</h2>
            <p>Helpful links and information for your websit Lorem, ipsum.</p>

            <nav>
                <NavLink to="faq">FAQMFKER</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
