import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PublicNav from "../../Module/Universal/Navbar/PublicNav";
import { url, userTypes } from "../routesConfig";

export default function Public({ component }) {
    const navigate = useNavigate();
    const [userRole, setUserRole] = React.useState(localStorage.getItem('userRole'));

    useEffect(() => {

        // if login and user role is employee then redirect to employee dashboard 
        if (userRole === userTypes.employee) {
            navigate(url.employee_url.dashboard);
        }
        // if login and user role is admin then redirect to admin dashboard 
        else if (userRole === userTypes.admin) {
            navigate(url.admin_url.dashboard);
        }
        // if login and user role is manager then redirect to manager dashboard 
        else if (userRole === userTypes.manager) {
            navigate(url.manager_url.dashboard);
        }

    }, [userRole, navigate]);
    return (
        <React.Fragment>
            <PublicNav />
            {/* show all public route  */}
            {component}
        </React.Fragment>
    );
}
