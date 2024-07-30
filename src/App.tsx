import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import { Toaster } from "./components/ui/toaster";
import { LoginDialog } from "./components/login-dialog";
import { useStore } from "./lib/store";
import { LogoutDialog } from "./components/logout-dialog";
import { RegisterDialog } from "./components/register-dialog";

function App() {
  const user = useStore((state) => state.user);

  return (
    <div className="flex justify-center min-h-screen">
      <Sidebar />
      <Feed />
      <div className="flex flex-col gap-2 p-4">
        {user ? <LogoutDialog /> : <LoginDialog />}   
        {!user && <RegisterDialog />}
      </div>
      <Toaster />
    </div>
  );
}
// we are conditionally switching between showing the login or logout button based on whether there is a user object in the store

export default App;
