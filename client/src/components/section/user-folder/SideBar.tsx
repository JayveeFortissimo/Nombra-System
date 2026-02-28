import DashboardImg from "@/assets/image/Dashboard.png";
import EngagementImg from "@/assets/image/Engagement.png";
import SalaryImg from "@/assets/image/Salary.png";
import GalleryImg from "@/assets/image/Gallerey.png";
import Logout from "@/assets/image/Logout.png";

const SideBar = () => {
  const btns: { name: string; icon: string; isOpen: boolean }[] = [
    {
      name: "Dashboard",
      icon: DashboardImg,
      isOpen: true,
    },
    {
      name: "Engagement",
      icon: EngagementImg,
      isOpen: false,
    },
    {
      name: "Salary",
      icon: SalaryImg,
      isOpen: false,
    },
    {
      name: "Gallery",
      icon: GalleryImg,
      isOpen: false,
    },
  ];

  return (
    <aside className="min-h-screen w-[18rem] border flex flex-col justify-between">
      <header className="h-[6rem] border-b flex justify-center items-center gap-4 p-4">
        <div className="min-h-[4rem] w-[4rem] rounded-full bg-gray-400"></div>

        {/* <div className="flex flex-col gap-0.5">
          <p className="text-lg">User Name</p>
          <p className="text-sm">Principal Trumpet</p>
          <p className="text-xs">Rank Primera ⭐⭐⭐⭐⭐</p>
        </div> */}
        <p className="text-lg">Nombra System</p>
      </header>

      <section className="p-4 flex flex-col gap-5 flex-1">
        {btns.map((btn) => (
          <div
            key={btn.name}
            className="p-2 min-h-[5rem] text-lg border flex items-center justify-between rounded cursor-pointer bg-gray-100"
          >
            <p>{btn.name}</p>
            <img src={btn.icon} alt="Icons" className="h-auto w-[5rem]" />
          </div>
        ))}
      </section>

      <footer className="min-h-[3rem] border-t flex items-center justify-between p-4 cursor-pointer bg-gray-100">
        <p className="text-center text-lg text-gray-500">Logout</p>
        <img src={Logout} alt="Logout Icon" className="h-auto w-[2rem] ml-2" />
      </footer>
    </aside>
  );
};

export default SideBar;
