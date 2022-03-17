import { Page404 } from "./pages/404";
import LoginPage from "./pages/loginPage/login";
import Fruits from "./pages/tables/fruits";

const routes = [    
    { path: '/', exact: true, name: 'Home' },
    { path: '/login', name: 'LoginPage', element: LoginPage },
    { path: '/fruits', name: 'LoginPage', element: Fruits },
    {path: '*', name: "404", element: Page404}
]

export default routes;