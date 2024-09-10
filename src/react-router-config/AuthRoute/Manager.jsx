import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ManagerNav from "../../Module/Universal/Navbar/ManagerNav";
import { url, userTypes } from "../routesConfig";

export default function Manager({ component }) {
    const navigate = useNavigate();
    const [userRole, setUserRole] = React.useState(localStorage.getItem('userRole'));

    useEffect(() => {

        // if user logged in and role is not manage then redirect to home page
        if (userTypes.manager !== userRole) {
            navigate(url.public_url.home);
        }
    }, [userRole, navigate]);

    if (userTypes.manager === userRole) {
        return (
            <React.Fragment>
                <ManagerNav />
                {/* show all manage route  */}
                {component}
            </React.Fragment>
        );
    }
    return null;
}
