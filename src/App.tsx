import { Toaster } from "./components/ui/toaster";
import ErrorPage from "./views/error-page";
import MainView from "./views/main-view";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostView from "./views/post-view";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainView />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/posts/:postId",
      element: <PostView />,
      errorElement: <ErrorPage />,
    },
  ]);
  

  return (
    <div className="flex justify-center min-h-screen">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}
// we are conditionally switching between showing the login or logout button based on whether there is a user object in the store

export default App;
