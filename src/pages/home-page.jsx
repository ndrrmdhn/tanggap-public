import SectionWrapper from "@/components/common/section-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/tailwind-utils";
import { formatDotString } from "@/lib/strings";

const daftarLayanan = [
  {
    id: 1,
    image: "/images/customer-service.svg",
    title: "Customer Service",
    desc: "Jika masyarakat ingin menyampaikan keluhannya, bisa menghubungi customer service kami",
    link: "/customer-service",
  },
  {
    id: 2,
    image: "/images/pengaduan.svg",
    title: "Pengaduan",
    desc: "Kami menyediakan layanan pengaduan bagi seluruh masyarakat untuk menemukan solusi yang efektif dan efisien",
    link: "/pengaduan",
  },
  {
    id: 3,
    image: "/images/berita.svg",
    title: "Berita",
    desc: "Platform kami juga memberi layanan berita terupdate utnuk setiap harinya untuk bagi setiap masyarakat",
    link: "/berita",
  },
];

const HomePage = () => {
  return (
    <AppLayout>
      <section className="relative">
        <div className="absolute 2xl:h-[480px] bg-color-2 w-full -z-10"></div>
        <img
          src="/images/hero.svg"
          className="w-screen mt-[-30px] z-10 max-w-[1564px] mx-auto object-cover"
          alt=""
          srcSet=""
        />
        <SectionWrapper
          className={
            "absolute  z-30  w-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex justify-between items-start"
          }
        >
          <div className="text-white space-y-3 pt-5">
            <h1 className="text-text50_60 font-bold">TANGGAP</h1>
            <p className="text-text20_30 leading-10 w-4/6">
              Tanggap adalah sarana pengaduan masyarakat terhadap suatu masalah.
            </p>
          </div>
          <img
            src="/images/home-laptop.svg"
            className="max-w-[360px] max-h-[360px] object-cover"
            alt=""
            srcSet=""
          />
        </SectionWrapper>
      </section>
      <SectionWrapper className="mt-[100px]">
        <section className="p-[50px] w-full  bg-color-2 flex items-center   shadow-xl shadow-[rgba(0,_0,_0,_0.25)] rounded-[20px] justify-between ">
          <div className="space-y-4">
            <div className="text-white space-y-7">
              <h1 className="text-text36_40 font-bold">
                Sampaikan suara Anda pada <br /> kami.
              </h1>
              <p className="text-text20_30">
                Laporan Anda membawa perbaikan. <br /> Mari bersama wujudkan
                perubahan yang lebih <br /> baik untuk masyarakat.
              </p>
            </div>
            <Link to="/pengaduan">
              <Button
                variant={"color-shadow"}
                className=" text-white w-[200px]"
              >
                Selengkapnya
              </Button>
            </Link>
          </div>
          <img
            src="/images/device.svg"
            className="max-w-[360px] max-h-[360px] object-cover"
            alt=""
            srcSet=""
          />
        </section>
      </SectionWrapper>
      <SectionWrapper className="mt-[100px]">
        <h1 className="text-center text-text40_60 font-bold">Layanan</h1>
        <div className="grid grid-cols-3 gap-10 pt-[50px]">
          {daftarLayanan.map((layanan) => {
            return (
              <Card
                key={layanan.id}
                className="px-[16px] group hover:bg-color-1 cursor-pointer hover:text-white pb-[24px] shadow-medium w-full rounded-[20px]"
              >
                <CardHeader className="items-center h-[220px] ">
                  <img
                    src={layanan.image}
                    className="max-h-[200px] h-full  max-w-[200px] w-full"
                  />
                </CardHeader>
                <CardContent className="space-y-[20px]">
                  <h1 className="text-2xl font-bold text-center">
                    {layanan.title}
                  </h1>
                  <p className="text-sm">{formatDotString(layanan.desc, 90)}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    to={layanan.link}
                    className={cn(
                      "w-full ",
                      buttonVariants({
                        variant: "variant1",
                      })
                    )}
                  >
                    Baca Selengkapnya
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>
    </AppLayout>
  );
};

export default HomePage;
