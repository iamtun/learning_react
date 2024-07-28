import { Outlet } from "react-router-dom";
import { Header } from "@/components/ui";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
