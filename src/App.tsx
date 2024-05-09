import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/login/LoginPage";
import Providers from "./layouts/Providers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Providers />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            }
        ]
    }
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App