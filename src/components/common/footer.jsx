import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import SectionWrapper from "./section-wrapper";

const Footer = () => {
  return (
    <div className="bg-color-2 w-full z-30 ">
      <SectionWrapper className={"py-[60px]"}>
        <div className="grid grid-cols-5 text-white">
          <div className="text-white flex  flex-col justify-center items-center w-max">
            <img src="/images/brand-logo.svg" alt="" srcSet="" className="h-[120px] w-[120px]" />
            <h1 className="text-text30_40 font-bold ">TANGGAP</h1>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold text-text16_24">Layanan Kami</h1>
            <div className="flex flex-col gap-y-2 w-max">
              <Link to={"/bantuan"} className="text-text16_20 hover:underline hover:underline-offset-4">
                Bantuan
              </Link>
              <Link to={"/notifikasi"} className="text-text16_20 hover:underline hover:underline-offset-4">
                Notifikasi
              </Link>
              <Link to={"/kontak"} className="text-text16_20 hover:underline hover:underline-offset-4">
                Kontak Kami
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold text-text16_24">Informasi</h1>
            <div>
              <Link to={"/faq"} className="text-text16_20 hover:underline hover:underline-offset-4">
                FAQ
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold text-text16_24">Fitur</h1>
            <div className="flex flex-col gap-y-2 w-max">
              <Link to={"/pengaduan"} className="text-text16_20 hover:underline hover:underline-offset-4">
                Pengaduan
              </Link>
              <Link to={"/berita"} className="text-text16_20 hover:underline hover:underline-offset-4">
                Berita
              </Link>
              <Link to={"/profile"} className="text-text16_20 hover:underline hover:underline-offset-4">
                Profile
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold text-text16_24">Cari</h1>
            <div>
              <Input placeholder="Cari" className="text-black" />
            </div>
          </div>
          <div className="col-start-2">
            <Link to={"/tentang"} className="text-text16_20 hover:underline hover:underline-offset-4">
              Tentang Aplikasi
            </Link>
          </div>
          <div className="">
            <Link to={"/customer-service"} className="text-text16_20 hover:underline hover:underline-offset-4">
              Hubungi Kami
            </Link>
          </div>
          <div className="">
            <Link to={"/kebijakan-privasi"} className="text-text16_20 hover:underline hover:underline-offset-4">
              Kebijakan Privasi
            </Link>
          </div>
          <div className="col-start-2 mt-[30px] col-span-3  flex justify-center">
            <h1>© 2024 Jenderal Soedirman. All Rights Reserved</h1>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Footer;
