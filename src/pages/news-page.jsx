import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { news } from "@/data/dummyData";
import AppLayout from "@/layouts/app-layout";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "date-fns";

const NewsPage = () => {

  const [berita, setBerita] = useState([]);
  const [beritahl, setBeritaHL] = useState([]);
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
  const getBerita = async() => {
    await axios.get(`http://202.10.41.84:5000/api/berita/get`)
    .then(response => {
      setBerita(response.data.data);
    })
    .error(error => {
      console.log(error);
    });
  }

  const getBeritaHeadline = async() => {
    await axios.get(`http://202.10.41.84:5000/api/berita/getheadline`)
    .then(response => {
      setBeritaHL(response.data.data);
    })
    .error(error => {
      console.log(error);
    });
  }

  //hook useEffect
useEffect(() => {
      
  //call method "fetchDetailPost"
  getBerita();
  getBeritaHeadline();

}, []);

  return (
    <AppLayout className={"px-4 md:px-6 space-y-10 z-30 max-w-screen-xl mx-auto "}>
      <section className="mt-[20px]">
        <Carousel className="w-full hover:cursor-pointer ">
          <CarouselContent>
            {beritahl.map((hl, index) => {
              return (
                <CarouselItem key={index + 1}>
                  <Link to={`/berita/${hl.id}`} className="block relative">
                    <img
                      src={hl.foto}
                      alt={hl.judul}
                      className="w-full brightness-[70%] h-full max-h-[560px] rounded-[20px]"
                    />
                    <p className="absolute bottom-10 left-10 text-[40px] leading-[60px] text-white">
                      {hl.judul}
                    </p>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="grid grid-cols-4 gap-5">
        {berita.map((item) => (
          <div
            className="rounded-[12px] border hover:bg-color-1 group hover:text-white shadow-lg px-3 py-[24px] hover:cursor-pointer"
            key={item.id}
          >
            <div className="flex flex-col gap-4">
              <Link to={`/berita/${item.id}`} className="space-y-4">
                <img src={item.img} alt={item.title} className="h-full max-h-[144px] object-cover" />
                <h3 className="text-text16_24 font-medium">{item.judul}</h3>
                <p className="text-[#818181] group-hover:text-white text-[12px]">{formatDate(item.createdAt,'dd/mm/yyyy HH:mm')} WIB</p>
                <div className="flex items-center gap-2 ">
                  <img src={item.foto} alt="clock" />
                  
                </div>
                <p className="text-[16px]">
                  {item.isi.length > 250 ? `${item.isi.substring(0, 50)}...` : item.isi}</p>
                
              </Link>
            </div>
          </div>
        ))}
      </section>
    </AppLayout>
  );
};

export default NewsPage;
