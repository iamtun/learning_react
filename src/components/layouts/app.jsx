import { Outlet } from "react-router-dom";
import { Header } from "@/components/ui";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
