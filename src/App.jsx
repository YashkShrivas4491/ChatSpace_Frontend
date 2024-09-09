import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landingPage";
import ChatPage from "./components/ChatPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
