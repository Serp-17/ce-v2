import Home from './pages/Home';
import Check from './pages/Сheck';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';

import {
    HOME_ROUTE,
    CHECK_ROUTE,
    SIGNUP_ROUTE,
    SIGNIN_ROUTE,
    RESET_PASSWORD_ROUTER
} from './data/consts';

export const authRouter = [
    // { path: ADMIN_ROUTE, Component: <Admin/> },
    // { path: BASKET_ROUTE, Component: <Basket/> },
];

export const publicRouter = [
    { path: HOME_ROUTE, Component: Home },
    { path: CHECK_ROUTE, Component: Check },
    { path: SIGNUP_ROUTE, Component: SignUp },
    { path: SIGNIN_ROUTE, Component: SignIn },
    { path: RESET_PASSWORD_ROUTER, Component: ResetPassword },
];