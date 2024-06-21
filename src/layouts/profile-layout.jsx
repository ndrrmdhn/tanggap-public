import AppLayout from "@/layouts/app-layout";
import { FaRegUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  return (
    <div className="space-y-[24px]">
      <div className="flex items-center gap-x-[24px]">
        <img src="public\images\user.png" className="w-[60px] h-[60px]" srcSet="" alt="" /> 
        <div>
          <h1 className="text-lg font-medium">User</h1>
          <p className="text-sm">Jenis Kelamin</p>
        </div>
      </div>
      <div className="border rounded-[20px] p-5 space-y-5">
        <Link
          to={"/profile"}
          className=" hover:bg-color-4 cursor-pointer flex rounded-[10px] items-center justify-between border py-2 px-4 "
        >
          <div className="gap-x-3 flex items-center">
            <div className="flex items-center justify-center w-10 h-10  bg-color-1 text-white rounded-full">
              <FaRegUser className="w-5 h-5 flex-shrink-0" />
            </div>
            <h1>Profil Saya</h1>
          </div>
          <FaChevronRight className="w-5 h-5" />
        </Link>
        <Link
          to={"/pengaduan-saya"}
          className="flex cursor-pointer hover:bg-color-4 items-center justify-between rounded-[10px] border py-2 px-4 "
        >
          <div className="gap-x-2 flex items-center">
            <div className="flex items-center justify-center w-10 h-10  bg-color-1 text-white rounded-full">
              <FaRegUser className="w-5 h-5 flex-shrink-0" />
            </div>
            <h1>Pengaduan Saya</h1>
          </div>
          <FaChevronRight className="w-5 h-5" />
        </Link>
        <Link
          to={"/login"}
          className="flex hover:bg-color-4 rounded-[10px] cursor-pointer items-center justify-between border py-2 px-4 "
        >
          <div className="gap-x-2 flex items-center">
            <div className="flex items-center justify-center w-10 h-10  bg-color-1 text-white rounded-full">
              <TbLogout2 className="w-5 h-5 flex-shrink-0" />
            </div>
            <h1>Keluar</h1>
          </div>
          <FaChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

const ProfileLayout = ({ children }) => {
  return (
    <AppLayout className={"px-4 md:px-5  z-30 max-w-[1200px] mx-auto "}>
      <div className="pt-[60px] grid grid-cols-3 gap-x-[64px]">
        <div className="col-span-1 ">
          <UserProfile />
        </div>
        <div className="col-span-2 border rounded-[20px] py-[40px]">{children}</div>
      </div>
    </AppLayout>
  );
};

export default ProfileLayout;
