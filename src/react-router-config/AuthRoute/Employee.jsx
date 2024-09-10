import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeNav from "../../Module/Universal/Navbar/EmployeeNav";
import { url, userTypes } from "../routesConfig";

export default function Employee({ component }) {
    const navigate = useNavigate();
    const [userRole, setUserRole] = React.useState(localStorage.getItem('userRole'));

    useEffect(() => {

        // if user logged in and role is not employee then redirect to home page
        if (userTypes.employee !== userRole) {
            navigate(url.public_url.home);
        }

    }, [userRole, navigate]);

    if (userTypes.employee === userRole) {
        return (
            <React.Fragment>
                <EmployeeNav />
                {/* show all employee route  */}
                {component}
            </React.Fragment>
        );
    }
    return null;
}
