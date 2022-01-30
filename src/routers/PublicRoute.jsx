import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Redirect to="/home" /> )
                    : ( <Component { ...props } /> )
            )}  
        />
    );
};