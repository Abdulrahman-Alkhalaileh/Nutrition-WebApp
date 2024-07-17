import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import MuiThemeProvider from "./theme/MuiThemeProvider";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact-us",
        element: <h1>contact us</h1>,
      },
      {
        path: "/recipes",
        element: <h1>Recipes</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <RouterProvider router={router} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
