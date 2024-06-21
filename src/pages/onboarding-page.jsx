import SectionWrapper from "@/components/common/section-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";

const OnboardingPage = () => {
  return (
    <div>
      <section className="relative">
        <div className="absolute 2xl:h-[480px]  w-full -z-10"></div>
        <img
          src="/images/wave.svg"
          className="w-screen mt-[0px] z-10 max-w-[1564px] mx-auto object-cover"
          alt=""
          srcSet=""
        />
        <SectionWrapper
          className={
            "absolute  z-30  w-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex justify-between items-start"
          }
        >
          <div className="text-white space-y-3 pt-5">
            <h1 className="text-text50_60 font-bold">AYOO!!</h1>
            <p className="text-text20_30 leading-10">
              Sampaikan suara anda pada kami
            </p>
            <button class="text-white bg-[#5BC7F5] me-6 pt-2 pr-2.5 pb-2 pl-2.5">
              Masuk
            </button>
            <button class="text-white border border-[#5BC7F5] pt-2 pr-2.5 pb-2 pl-2.5">
              Daftar
            </button>
          </div>
          <img
            src="/images/digital-personal.png"
            className="max-w-[360px] max-h-[360px] object-cover"
            alt=""
            srcSet=""
          />
        </SectionWrapper>
      </section>
      <SectionWrapper className={"mt-[100px]"}>
        <section className="p-[50px] w-full text-center flex items-center justify-between">
          <div className="space-y-4">
            <div className="text-white space-y-7">
              <h1
                className="text-[#00A3E8] font-bold"
                style={{ fontSize: "36px", fontWeight: "700" }}
              >
                Tentang Tanggap
              </h1>
              <p className="text-[#000000]">
                Platform digital ini mempermudah masyarakat dalam pengaduan atau
                keluhan terhadap suatu masalah, dimulai dengan pengisian form
                pengaduan dan pelayanan melalui customer service.
              </p>
            </div>
          </div>
        </section>
      </SectionWrapper>
      <SectionWrapper className={"mt-[100px]"}>
        <section className="p-[50px] w-full  bg-color-2 flex items-center   shadow-xl shadow-[rgba(0,_0,_0,_0.25)] rounded-[20px] justify-between ">
          <div className="space-y-4">
            <div className="text-white space-y-7">
              <h1 className="text-text36_40 font-bold">Memberikan Kemudahan</h1>
              <p className="text-text20_30">
                Dengan Tanggap, Anda dapat mengadukan keluhan tentang berbagai
                persoalan masyarakat.
              </p>
            </div>
            <Button variant={"color-shadow"} className=" text-white w-[200px] ">
              Selengkapnya
            </Button>
          </div>
          <img
            src="/images/amico.png"
            className="max-w-[360px] max-h-[360px] object-cover"
            alt=""
            srcSet=""
          />
        </section>
      </SectionWrapper>
      <SectionWrapper className={"mt-[100px]"}>
        <section className="p-[50px] w-full  bg-color-2 flex items-center   shadow-xl shadow-[rgba(0,_0,_0,_0.25)] rounded-[20px] justify-between ">
          <img
            src="/images/dev.png"
            className="max-w-[360px] max-h-[360px] object-cover"
            alt=""
            srcSet=""
          />
          <div className="space-y-4">
            <div className="text-white space-y-7">
              <h1 className="text-text36_40 font-bold">
                Kenapa Memilih Tanggap?
              </h1>
              <p className="text-text20_30">
                Platform digital ini memberikan kemudahan kepada masyarakat
                untuk secara langsung menyampaikan keluhan atau masalah yang
                mereka alami dalam berbagai aspek kehidupan sehari-hari.
              </p>
            </div>
            <Button variant={"color-shadow"} className=" text-white w-[200px] ">
              Selengkapnya
            </Button>
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default OnboardingPage;
