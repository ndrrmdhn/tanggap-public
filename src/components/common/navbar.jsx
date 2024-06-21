import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, Package2 } from "lucide-react";
import { MdNotifications, MdAccountCircle } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaRegUser } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/tailwind-utils";


const Notification = () => {
  return (
    <div className="relative ">
      <div className="flex justify-center top-2 right-1 absolute items-center text-black w-5 h-5 text-[12px]  font-medium bg-white rounded-full">
        2
      </div>
      <Link to={"/notifikasi"} className=" cursor-pointer">
        <MdNotifications className="h-12 w-12 text-yellow-500" />
      </Link>
    </div>
  );
};

const NavlinkItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "text-white text-text16_24 transition-colors hover:underline hover:underline-offset-4",
          isActive ? "font-semibold" : "font-normal"
        )
      }
    >
      {label}
    </NavLink>
  );
};

const Navbar = ({ className }) => {
  const username = localStorage.getItem('username');
  const namadepan = localStorage.getItem('namadepan');
  const namabelakang = localStorage.getItem('namabelakang');

  const navigate = useNavigate();
  const logoutHandler = (e) => {
  e.preventDefault();

  if(confirm('Apakah yakin akan keluar?')){
    localStorage.clear();
  navigate('/');
  }


  }

  const navitem = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/pengaduan",
      label: "Pengaduan",
    },
    {
      to: "/berita",
      label: "Berita",
    },
    {
      to: "/customer-service",
      label: "Customer Service",
    },
  ];

  return (
    <div className={cn("w-screen z-40 fixed top-0  bg-color-2", className)}>
      <header className=" max-w-screen-xl  justify-between mx-auto w-full flex h-16 items-center gap-4 px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-14">
          <Link
            to={"/"}
            className="flex items-center gap-2  font-semibold md:text-xl"
          >
            <img
              src="/images/brand-logo.svg"
              alt=""
              srcSet=""
              className="h-10 w-10"
            />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="flex flex-row gap-10 text-white">
            {navitem.map((item, i) => (
              <NavlinkItem key={i} {...item} />
            ))}

            {!username && (
              <NavlinkItem
                to={"/login"}
                className="text-muted-foreground hover:text-foreground"
                label='Login Member'
              />
              
              )}
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                to={"/"}
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                to={"/pengaduan"}
                className="text-muted-foreground hover:text-foreground"
              >
                Pengaduan
              </Link>
              <Link
                to={"/berita"}
                className="text-muted-foreground hover:text-foreground"
              >
                Berita
              </Link>
              <Link
                to={"/customer-service"}
                className="text-muted-foreground hover:text-foreground"
              >
                Customers Service
              </Link>

              
            </nav>
          </SheetContent>
        </Sheet>
        {
          username && (
       
        <div className="flex w-max items-center gap-4  md:gap-2 lg:gap-6">
          <Notification />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <MdAccountCircle className="h-9 w-9 text-color-2" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={"/profile"} className="w-full">
                  Profile Saya
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button className="w-full" onClick={logoutHandler}>
                  Keluar
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
          )
 }
      </header>
    </div>
  );
};

export default Navbar;
