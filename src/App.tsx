import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import MuiThemeProvider from "./theme/MuiThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
