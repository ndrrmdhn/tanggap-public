import { AdministrasiSVG } from "@/assets/svg/administrasi-svg";
import { InfrastrukturSVG } from "@/assets/svg/infrastuktur-svg";
import { KesehatanSVG } from "@/assets/svg/kesehatan-svg";
import { KorupsiSVG } from "@/assets/svg/korupsi-svg";
import { KriminalSVG } from "@/assets/svg/kriminal-svg";
import { LainnyaSVG } from "@/assets/svg/lainnya-svg";
import { PendidikanSVG } from "@/assets/svg/pendidikan-svg";
import { PertanianSVG } from "@/assets/svg/pertanian-svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AppLayout from "@/layouts/app-layout";
import { cn } from "@/lib/tailwind-utils";
import { useEffect, useRef, useState } from "react";
import { HiStar } from "react-icons/hi";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const daftarLayananAduan = [
  {
    id: 1,
    name: "Kesehatan",
    code: "kesehatan",
    icon: KesehatanSVG,
  },
  {
    id: 2,
    name: "Pendidikan",
    code: "pendidikan",
    icon: PendidikanSVG,
  },
  {
    id: 3,
    name: "Administrasi",
    code: "administrasi",
    icon: AdministrasiSVG,
  },
  {
    id: 4,
    name: "Pertanian",
    code: "pertanian",
    icon: PertanianSVG,
  },
  {
    id: 5,
    name: "Infrastruktur",
    code: "infrastruktur",
    icon: InfrastrukturSVG,
  },
  {
    id: 6,
    name: "Korupsi",
    code: "korupsi",
    icon: KorupsiSVG,
  },
  {
    id: 7,
    name: "Kriminal",
    code: "kriminal",
    icon: KriminalSVG,
  },
  {
    id: 8,
    name: "Lainnya",
    code: "lainnya",
    icon: LainnyaSVG,
  },
];

const PENGADUAN_STEPS = [
  {
    name: "Tulis Pengaduan",
  },
  {
    name: "Cantumkan Foto (Opsional)",
  },
  {
    name: "Pratinjau",
  },
];

const PengaduanStepper = ({
  stepsConfig = [],
  currentStep = 1,
  isComplete = false,
  className,
}) => {
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef, stepsConfig.length]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  return (
    <>
      <div className={cn("stepper flex-shrink-0  w-full", className)}>
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""} `}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}

        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

const PengaduanAlert = ({ isState, handleState }) => {
  return (
    <div className="fixed inset-0 bg-black pb-5 pt-[88px] lg:pr-5   bg-opacity-50 z-30 flex justify-center items-center">
      <div className="bg-white max-w-[500px] w-full rounded-[10px] pb-[40px]  flex flex-col items-center">
        <img
          src="/images/pengaduan-selesai.svg"
          className="h-full w-full max-w-[300px] max-h-[300px] object-cover"
        />
        <div className="space-y-5">
          <div className=" flex flex-col items-center space-y-5">
            <h1 className="text-2xl font-semibold">Pengaduan Berhasil</h1>
            <p className="text-center text-slate-500">
              Selamat! Pengaduan kamu telah dikirimkan kepada <br /> pemerintah
              setempat.
            </p>
          </div>
          
          <Button onClick={() => handleState(!isState)} className="w-full">
            Selesai{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

const PengaduanPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [isNextForm, setIsNextForm] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [isState, setIsState] = useState(false);
  const [choosedLayananAduan, setChoosedLayananAduan] = useState({
    name: "",
    code: "",
  });

  const [judul, setJudul] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [uraian, setUraian] = useState('');
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState("");

  const [errormsg, setError] = useState([]);

  const nama_depan = localStorage.getItem('namadepan');
  const nama_belakang = localStorage.getItem('namabelakang');
  const alamat = localStorage.getItem('alamat');
  const userId = localStorage.getItem('iduser');

  const navigate = useNavigate();
  
  const validasi = ()=>{


    if(judul === ""){
      setError({message:'Judul tidak boleh kosong'});
    }

    if(lokasi === ""){
      setError({message:'Lokasi tidak boleh kosong'});
    }

    if(uraian === ""){
      setError({message:'Uraian tidak boleh kosong'});
    }

  }

   //method handle file change
   const handleFileChange = (e) => {
      setImage(e.target.files[0]);
  }

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleStep = () => {
    setCurrentStep((prevStep) => {
      if (choosedLayananAduan?.name) {
        return prevStep;
      }
      if (prevStep === 3) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
    
  };

  const handleIsState = (isState) => {
    setIsState(isState);
    setChoosedLayananAduan({
      name: "",
      code: "",
    });
    setIsComplete(false);
    setIsNextForm(false);
    navigate('/pengaduan-saya');
  };

  const handleAduan = (layananAduan) => {
    setChoosedLayananAduan({
      name: layananAduan?.name,
      code: layananAduan?.code,
    });
    handleStep();
  };

  const savePengaduan = async(e) =>{
    // e.preventDefault();
    
    //initialize formData
    const formData = new FormData();

    //append data
    formData.append('foto', image);
    formData.append('judul', judul);
    formData.append('uraian', uraian);
    formData.append('lokasi', lokasi);
    formData.append('userId',userId);


    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //send data with API
    await axios.post('http://202.10.41.84:5000/api/aduan/create', formData,{
      headers: {
        "Content-type": "multipart/form-data",
      },
    }).then(() => {
            
            //redirect to posts index
            navigate('/pengaduan-saya');

        })
        .catch(error => {
            
            //set errors response to state "errors"
            setError(error.response.data);
        })

  }

  return (
    <AppLayout className={"px-4 md:px-6  z-30 max-w-screen-xl mx-auto "}>
      <div className="max-w-[1200px] mx-auto py-[60px]">
        <h1 className="text-3xl font-bold">Pengaduan</h1>

        <div
          id="section-parent"
          className="grid grid-cols-3 gap-x-5 min-h-screen"
        >
          <div
            className={cn(
              "mt-[23px] rounded-[20px] flex-col  col-span-3 shadow-high py-[26px]  h-[100px] flex items-center ",
              {
                "col-span-1 ": choosedLayananAduan?.name,
              }
            )}
          >
            <div
              className={cn("px-[48px] w-full", {
                " px-[24px]": choosedLayananAduan?.name,
              })}
            >
              <PengaduanStepper
                stepsConfig={PENGADUAN_STEPS}
                currentStep={currentStep}
                isComplete={isComplete}
              />
            </div>

            <div
              className={cn("pt-[32px] col-span-3 w-full", {
                "col-span-1 ": choosedLayananAduan?.name,
              })}
            >
              <div className="border w-full rounded-[10px] p-6 space-y-6">
              {
                  errormsg.message && (
                    <div className="bg-red-600 text-white mt-[10px]">
                    <div className="px-[64px] py-6">
                      <h1 className="font-medium text-sm">{ errormsg.message}</h1>
                    </div>
                  </div>
                  )
              }
                <form className="space-y-10 flex flex-col" onSubmit={savePengaduan}>
                  {currentStep === 1 ? (
                    <div className="w-full space-y-10">
                      <div className="grid gap-2">
                        <Label className="flex text-text16_24">
                          Judul <HiStar className="h-2 w-2 text-red-600" />
                        </Label>
                        <Input
                          type="text"
                          className="border-slate-400 focus-visible:ring-color-2 focus-visible:border-color-2 text-text16_24" 
                          value={judul} onChange={(e) => setJudul(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label className="flex text-text16_24">
                          Uraian <HiStar className="h-2 w-2 text-red-600" />
                        </Label>
                        <Textarea className="border-slate-400 focus-visible:ring-color-2 focus-visible:border-color-2 text-text16_24" value={uraian} onChange={(e) => setUraian(e.target.value)}/>
                      </div>
                      <div className="grid gap-2">
                        <Label className="flex text-text16_24">
                          Lokasi Pengaduan{" "}
                          <HiStar className="h-2 w-2 text-red-600" />
                        </Label>
                        <Input
                          type="text"
                          className="border-slate-400 focus-visible:ring-color-2 focus-visible:border-color-2 text-text16_24"
                          value={lokasi} onChange={(e) => setLokasi(e.target.value)}
                        />
                      </div>
                    </div>
                  ) : currentStep === 2 ? (
                    <div className="w-full space-y-10">
                      <div className="grid gap-2">
                        <Label className="flex text-text16_24">
                          Tambahan Foto{" "}
                          <HiStar className="h-2 w-2 text-red-600" />
                        </Label>
                        <span className="text-sm text-slate-500 py-1">
                        Gunakan foto untuk membuat pengaduan Anda agar lebih mudah dan cepat teratasi!
                        </span>
                        <Input
                          type="file"
                          className="items-center justify-center flex"
                          onChange={loadImage}
                        />
                      </div>
                    </div>
                  ) : currentStep === 3 ? (
                    <div className="w-full space-y-5">
                      <div className="flex items-center gap-3">
                        <img
                          src="/images/man.svg"
                          className="w-[60px] h-[60px]"
                        />
                        <div>
                          <h1 className="text-text16_24 font-semibold">
                            {nama_depan} {nama_belakang}
                          </h1>
                          <p className="text-sm text-slate-500">
                            {alamat}
                          </p>
                        </div>
                      </div>

                      {preview ? (
                        <img
                        src={preview}
                        className="w-full h-full max-w-[500px]"
                      /> 
                      ) : (
                        ""
                      )}
                      {/* <img
                        src="/images/foto_aduan.svg"
                        className="w-full h-full max-h-[300px]"
                      /> */}
                      <div>
                        <h1 className="text-text16_24 font-semibold">
                          {judul}
                        </h1>
                        <p className="text-sm text-slate-700">
                          {uraian}
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {currentStep === 1 ? (
                    <Button
                      type="button"
                      className="w-full "
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentStep(2);
                      }}
                    >
                      Lanjutkan
                    </Button>
                  ) : currentStep === 2 ? (
                    <Button
                      type="button"
                      className="w-full"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentStep(3);
                        setIsPreview(true);
                      }}
                    >
                      Lanjutkan
                    </Button>
                  ) : (
                    <div className="flex gap-6 w-full justify-end">
                      <Button
                        className="w-full max-w-[324px]"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentStep(1);
                          setIsPreview(false);
                        }}
                      >
                        Ubah Pengaduan
                      </Button>
                      <Button
                        className="w-full max-w-[324px]"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsState(true);
                          savePengaduan();
                        }}
                      >
                        Kirim
                      </Button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        {isState && (
          <PengaduanAlert isState={isState} handleState={handleIsState} />
        )}
      </div>
    </AppLayout>
  );
};

export default PengaduanPage;
