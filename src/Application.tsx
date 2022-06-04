import { Route, Routes } from "react-router-dom";
import routes from "./config/routes";

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = props => {
    return <>
        <Routes>
            {
                routes.map((route, index) => {
                    return <Route key={index} element={<route.element/>} path={route.path}/>
                    // return <Route key={index} element={(routeProps: RouteProps<any>) => <route.element {...routeProps} />} path={route.path} />
                })
            }
        </Routes>
    </>
}

export default Application;