import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNav from "../../Module/Universal/Navbar/AdminNav";
import { url, userTypes } from "../routesConfig";

export default function Admin({ component }) {
    const navigate = useNavigate();
    const [userRole, setUserRole] = React.useState(localStorage.getItem('userRole'));

    useEffect(() => {

        // if user logged in and role is not admin then redirect to home page
        if (userTypes.admin !== userRole) {
            navigate(url.public_url.home);
        }

    }, [userRole, navigate]);

    if (userTypes.admin === userRole) {
        return (
            <React.Fragment>
                <AdminNav />
                {/* show all admin route  */}
                {component}
            </React.Fragment>
        );
    }
    return null;
}
