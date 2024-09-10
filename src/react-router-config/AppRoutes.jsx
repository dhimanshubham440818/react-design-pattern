import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from '../react-router-config/AuthRoute/Admin';
import Employee from '../react-router-config/AuthRoute/Employee';
import Manager from '../react-router-config/AuthRoute/Manager';
import Public from '../react-router-config/AuthRoute/Public';
import { allCompoents, userTypes } from './routesConfig';
import Footer from '../Module/Universal/Footer/Footer'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                
                {/* iterate all define route  */}
                {allCompoents.map((ele) => (
                    <Route
                        key={ele.url}
                        path={ele.url}
                        element={
                            ele.type === userTypes.admin ? (
                                // all route for admin 
                                <Admin component={ele.component} />
                            ) : ele.type === userTypes.employee ? (
                                // all route for employee 
                                <Employee component={ele.component} />
                            ) : ele.type === userTypes.manager ? (
                                // all route for manager 
                                <Manager component={ele.component} />
                            ) : (
                                // all route for manager 
                                <Public component={ele.component} />
                            )
                        }
                    />
                ))}

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}