import { NotesSVG } from "@/assets/svg/notes-svg";
import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa6";

const CustomerServicePage = () => {
  const [isState, setState] = useState(false);

  return (
    <AppLayout>
      <section className="relative ">
        <div className="absolute 2xl:h-[480px] bg-color-2 w-full -z-10"></div>
        <img src="/images/bd-customer-service.svg" className="w-screen mt-[-110px] z-10 max-w-[1564px] mx-auto object-cover" />

        <div className="absolute px-4 md:px-5 z-30 max-w-[1200px]  w-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-40%] flex justify-between items-start">
          <img src="/images/icon-customer-service.svg" className="max-w-[500px] max-h-[300px] object-cover" />
          <div className="text-white space-y-10 pt-5 flex flex-col items-end">
            <h1 className="text-6xl font-bold">Customer Support</h1>
            <Link to="/kontak">
            <button className="bg-[#5BC7F5] rounded-[20px] text-xl hover:bg-color-4 font-semibold w-[280px] h-[50px]">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-col items-center space-y-4 pt-[40px] py-[60px]">
        <h1 className="font-bold text-2xl ">Jangan ragu untuk menghubungi Kami!</h1>
        <p>kami akan merespons dengan cepat segala bentuk pertanyaan Anda!</p>
      </section>
    </AppLayout>
  );
};

export default CustomerServicePage;