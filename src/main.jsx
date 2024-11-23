

import App from './App.jsx'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import UserPage from './pages/user.jsx'
import ReactDOM from 'react-dom/client'
import ErrorPage from './pages/error.jsx'
import IntroPage from './pages/intro.jsx'
import { AuthWrapper } from './components/context/auth_context.jsx'
import "./styles/global.css"

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/users",
        element: <UserPage />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/intro",
    element: <IntroPage />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
)
