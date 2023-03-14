import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Context } from '../';
import { authRouter, publicRouter } from '../routers';

const AppRouter = () => {
    // const { user } = false;
    return (
        <Routes>
            {/*{user.isAuth && authRouter.map(({ path, Component }) =>*/}
            {/*    <Route key={path} path={path} element={Component} />*/}
            {/*)}*/}
            { publicRouter.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} />
            ) }
            <Route
                path="/*"
                element={<Navigate to='/' />}
            />
        </Routes>
    )
};

export default AppRouter;
