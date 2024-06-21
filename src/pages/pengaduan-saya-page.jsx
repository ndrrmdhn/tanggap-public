import AppLayout from "@/layouts/app-layout";
import { FaRegUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/tailwind-utils";
import ProfileLayout from "@/layouts/profile-layout";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { FaHourglassHalf, FaCircleCheck } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatDate } from "date-fns";

const PENGADUAN_STEPS = [
  {
    name: "Pengaduan Diajukan",
    desc: "Pengaduan kamu diterima pada jam 15.30",
  },
  {
    name: "Pengaduan Diajukan",
    desc: "Pengaduan kamu diterima pada jam 17.30",
  },
  {
    name: "Pengaduan Diajukan",
    desc: "Pengaduan kamu diterima pada jam 20.30",
  },
  {
    name: "Pengaduan Selesai",
  },
];

const PengaduanStepper = ({ stepsConfig = [], currentStep = 1, isComplete = false, className }) => {
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetHeight / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetHeight / 2,
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
      <div className={cn("stepper-horizontal flex-shrink-0  w-full", className)}>
        {stepsConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step-horizontal ${currentStep > index + 1 || isComplete ? "complete-horizontal" : ""} ${
                currentStep === index + 1 ? "active-horizontal" : ""
              } `}
            >
              <div className="step-number-horizontal ">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : currentStep === index + 1 ? (
                  <FaHourglassHalf className="w-5 h-5 " />
                ) : (
                  ""
                )}
              </div>
              <div>
                <div className="text-text16_20 font-light font-medium">{step.name}</div>
                <div className="step-name-horizontal text-sm text-slate-500">{step.desc}</div>
              </div>
            </div>
          );
        })}

        <div
          className="progress-bar-horizontal"
          style={{
            height: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
          }}
        >
          <div className="progress-horizontal" style={{ height: `${calculateProgressBarWidth()}%` }}></div>
        </div>
      </div>
    </>
  );
};

export const PengaduanSayaPage = () => {
  return (
    <div className="space-y-[24px]">
      <div className="flex items-center gap-x-[24px]">
        <img src="/images/hana.png" className="w-[60px] h-[60px]" />
        <div>
          <h1 className="text-lg font-medium">Hana Mardini</h1>
          <p className="text-sm">Perempuan</p>
        </div>
      </div>
      <div className="border rounded-[20px] p-5 space-y-5">
        <div className=" cursor-pointer flex rounded-[10px] items-center justify-between border py-2 px-4 ">
          <div className="gap-x-2 flex items-center">
            <div className="flex items-center justify-center w-12 h-12  bg-color-1 text-white rounded-full">
              <FaRegUser className="w-6 h-6 flex-shrink-0" />
            </div>
            <h1>Profil Saya</h1>
          </div>
          <FaChevronRight className="w-6 h-6" />
        </div>
        <div className="flex cursor-pointer items-center justify-between rounded-[10px] border py-2 px-4 ">
          <div className="gap-x-2 flex items-center">
            <div className="flex items-center justify-center w-12 h-12  bg-color-1 text-white rounded-full">
              <FaRegUser className="w-6 h-6 flex-shrink-0" />
            </div>
            <h1>Pengaduan Saya</h1>
          </div>
          <FaChevronRight className="w-6 h-6" />
        </div>
        <div className="flex rounded-[10px] cursor-pointer items-center justify-between border py-2 px-4 " onClick={logout()}>
          <div className="gap-x-2 flex items-center">
            <div className="flex items-center justify-center w-12 h-12  bg-color-1 text-white rounded-full">
              <TbLogout2 className="w-6 h-6 flex-shrink-0" />
            </div>
            <h1>Keluar Sistem</h1>
          </div>
          <FaChevronRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [isComplete, setIsComplete] = useState(false);
  const [isNextForm, setIsNextForm] = useState(false);
  const [tinjauId, setTinjauId] = useState(null); //pengaduan
  const [isState, setIsState] = useState(false);
  const [choosedLayananAduan, setChoosedLayananAduan] = useState({
    name: "",
    code: "",
  });
  const navigate = useNavigate();

  const [aduan, setAduan] = useState([]);
  const [msgsuccess, setMessage] = useState([]);

  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const id = localStorage.getItem('iduser');
  const formData = new FormData();

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
    setCurrentStep(1);
    setIsComplete(false);
    setIsNextForm(false);
  };

  const handleAduan = (layananAduan) => {
    setChoosedLayananAduan({
      name: layananAduan?.name,
      code: layananAduan?.code,
    });
    handleStep();
  };

  const batalkanHandler = async(idaduan) => {
    
    if(confirm('Apakah yakin akan membatalkan Pengaduan anda?')){
      formData.append('status','batal');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.put(`http://202.10.41.84:5000/api/aduan/update/${idaduan}`,formData);
        getAduan();
        setMessage({message:'Data pengaduan berhasil dibatalkan'});
    }
  }

  const bukaHandler = async(idaduan) => {
    if(confirm('Apakah yakin akan membuka kembali Pengaduan anda?')){
      formData.append('status','baru');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.put(`http://202.10.41.84:5000/api/aduan/update/${idaduan}`,formData);
        getAduan();
        setMessage({message:'Data pengaduan berhasil dibuka kembali'});
    }
  }

  

  const getAduan = async()=>{

  //append data to formData
  formData.append('iduser', id);
    await axios.post('http://202.10.41.84:5000/api/aduan/listuser',formData)
      .then(response => {
        setAduan(response.data.data);
      })
      .error(error => {
        console.log(error);
      })
  }

  // const authCheck = async() => {
  //   if(!id || id === null){
  //     navigate('/login');
  //   }
  // }

  

  //hook useEffect
useEffect(() => {
      
  // authCheck();
  //call method "fetchDetailPost"
  getAduan();
}, []);


  return (
    <ProfileLayout>
      <div className="px-[64px] ">
        <h1 className="font-bold text-2xl">Pengaduan Saya</h1>
      </div>

      {
        msgsuccess.message && (
          <div className="bg-green-400 text-white mt-[10px]">
            <div className="px-[64px] py-6">
              <h1 className="font-medium text-sm">{msgsuccess.message}</h1>
            </div>
          </div>
        )
      }

      <div className="pt-[22px] px-[64px] space-y-10">
      {
                    aduan.length > 0
                        ? aduan.map((row, index) => (
<div className=" space-y-5 flex flex-col items-end">
          <div className="space-y-5 w-full">
            <div className="flex justify-between items-center">
            {row.status === 'baru' && (
            <div className="flex items-center gap-3 text-[rgba(0,_163,_232,_1)]">
                {" "}
                
                <span>Menunggu Ditinjau</span>
              </div>
            )}
            {row.status === 'proses' && (
            <div className="flex items-center gap-3 text-[rgba(0,_163,_232,_1)]">
                {" "}
                <FaHourglassHalf className="w-6 h-6" />
                <span>Pengaduan dalam proses</span>
              </div>
            )}
            

              {row.status === 'selesai' && (
              <div className="flex items-center gap-3 text-[rgba(76,_175,_80,_1)]">
              
              <FaCircleCheck className="w-6 h-6" />
              <span>Pengaduan selesai</span>
              </div>
              )}

              {row.status === 'batal' && (
              <div className="flex items-center gap-3 text-red-500">
              
             
              <span>X Pengaduan Dibatalkan</span>
              </div>
              )}
              <span className="text-slate-500">{formatDate(row.createdAt, 'dd/mm/yyyy')}</span>
            </div>
            <div className="flex items-center gap-x-6">
              <img src={row.foto} className="w-[120px] h-[90px]" />
              <div className="space-y-2">
                <h1 className="text-xl font-bold">{row.judul}</h1>
                <p className="text-sm">{row.uraian}</p>
              </div>
            </div>
            <div className="flex  items-center">
            

            {(row.status === 'selesai' || row.status === 'batal') && (
              <Button className="w-full" onClick={() => bukaHandler((row.id))}>Buka Kembali Pengaduan</Button>
              )}

              {(row.status === 'baru' || row.status === 'proses') && (
              <Button className="w-full" variant="destructive" onClick={() => batalkanHandler((row.id))}>
                Batalkan pengaduan
              </Button>
              )}

              
              

              
            </div>
          </div>
          
        </div>

                        ))
            : (
              <div className="bg-red-400 text-white mt-[10px]">
            <div className="px-[64px] py-6">
              <h1 className="font-medium text-sm">Data Aduan tidak tersedia</h1>
            </div>
          </div>
            ) 
          }                
      </div>
    </ProfileLayout>
  );
};

export default ProfilePage;
