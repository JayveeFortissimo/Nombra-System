import SideBar from "@/components/section/user-folder/SideBar";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
const UserDashboard = () => {
  const { authToken } = useSelector((state: RootState) => state.authentication);
  console.log("UserDashboard authToken: ", authToken);
  return (
    <div>
      <SideBar />
    </div>
  )
}

export default UserDashboard;
