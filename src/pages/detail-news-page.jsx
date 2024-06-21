import { news } from "@/data/dummyData";
import AppLayout from "@/layouts/app-layout";
import axios from "axios";
import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { formatDate } from "date-fns";

function DetailNewsPage() {
  const { id } = useParams();
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');
  const [image,setImage] = useState('');
  const [beritahl, setBeritaHL] = useState([]);

  const newsId = parseInt(id, 10);

  const otherNews = news.filter((item) => item.id !== newsId);
  const randomNews = otherNews.sort(() => 0.5 - Math.random()).slice(0, 3);

  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
  const getDetailBerita = async() =>{
    await axios.get(`http://202.10.41.84:5000/api/berita/detail/${id}`).then(response => {
      setJudul(response.data.data.judul);
      setIsi(response.data.data.isi);
      setImage(response.data.data.foto);

    }).error(error => {
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

  useEffect(() => {
      
    //call method "fetchDetailPost"
    getDetailBerita();
    getBeritaHeadline();
  
  }, []);

  return (
    <AppLayout className={"px-4 md:px-6 space-y-10 z-30 max-w-screen-xl mx-auto "}>
      <section className="mt-[20px]">
        <Link className="block relative">
          <img
            src={image}
            alt={judul}
            className="w-full brightness-[70%] h-full max-h-[560px] rounded-[20px]"
          />
          <p className="absolute bottom-10 left-10 text-[40px] leading-[60px] text-white">
           {judul}
          </p>
        </Link>
      </section>
      <section>
        
              <div>
                <h2 className="text-[15px] font-bold mb-3">Penulis: Administrator</h2>
                {/* <p className="text-[14px] text-justify" dangerouslySetInnerHTML={{ __html: isi }} /> */}
                <p className="text-[14px] text-justify">{isi}</p>
              </div>
           
      </section>

      <section className="space-y-10">
        <h1 className="text-[40px] font-bold">Rekomendasi Berita</h1>
        <section className="grid grid-cols-3 gap-5">
          {beritahl.map((item) => (
            <div
              className="rounded-[12px] border hover:bg-color-1 group hover:text-white shadow-lg px-3 py-[24px] hover:cursor-pointer"
              key={item.id}
            >
              <div className="flex flex-col gap-5">
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
      </section>
    </AppLayout>
  );
}

export default DetailNewsPage;
