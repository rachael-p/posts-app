import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import { Toaster } from "./components/ui/toaster";
import { LoginDialog } from "./components/login-dialog";

function App() {
  return (
    <div className="flex justify-center min-h-screen">
      <Sidebar />
      <Feed />
      <div className="flex flex-col gap-2 p-4">
        <LoginDialog />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
