import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext' 

function AdminRoute({component: Component, ...rest }) {
    const { currentUser } = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser !== null && (currentUser.uid).includes('k2X74xCuZKUUOu88JAiWlk4sRPI2')
                ? <Component {...props}  /> 
                : <Redirect to="/patient" />
            }}
        >

        </Route>
    )
}

export default AdminRoute
