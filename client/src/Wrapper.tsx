import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

const Wrapper = () => {
  return (
    <div>
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Wrapper;
