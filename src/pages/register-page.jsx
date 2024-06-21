import React, {useEffect, useState} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import AuthLayout from "@/layouts/auth-layout";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { Toast } from "@/components/ui/toast";


const SideAuth = () => {
  return (
    <div className="relative lg:col-span-2">
      <div className="absolute inset-0 bg-[rgba(0,_163,_232,_0.55)] opacity-0"></div>
      <img src="public\images\site.png" alt="Image" className="h-full object-cover " />
    </div>
  );
};


const RegisterPage = () => {
 
  const [namadepan, setNamaDepan] = useState("");
  const [namabelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("member");
  const [aktif, setAktif] = useState("Y");
  const [password, setPassword] = useState("");
  const [msgerror, setError] = useState([]);
  const navigate = useNavigate();
  

  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const saveRegister = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    //append data to formData
    formData.append('email', email);
    formData.append('password', password);
    formData.append('namadepan', namadepan);
    formData.append('namabelakang', namabelakang);
    formData.append('aktif', aktif);
    formData.append('level', role);

    await axios.post(`http://202.10.41.84:5000/api/admin/register`,formData)
    .then(response => {
      if(response.status == 201){
        navigate('/login');
      }
      
    })
    .catch(error => {
        setError(error.response.data.message)
        console.log(error.response.data.message);
    });
 }
  return (
    <AuthLayout className="w-screen overflow-hidden lg:grid lg:min-h-[600px] lg:grid-cols-5 lg:h-screen">
      <SideAuth />
      
      <div className="flex border-l-8 border-[rgba(0,_163,_232,_1)] overflow-y-auto overflow-x-hidden justify-center  lg:col-span-3 ">
        <div className="mx-auto  w-full max-w-[600px] pt-[100px] ">
           <form onSubmit={saveRegister} className="mx-auto  w-full max-w-[600px] pt-[100px] ">
           
          <div className="gap-6 grid pb-10">
            <div className="grid gap-2 ">
              <h1 className="text-3xl font-bold">Daftar</h1>
            </div>
            {
          msgerror && (
              <div className="alert alert-danger">
                  {msgerror}
              </div>
          )
      }
            <div className="grid gap-5">
              <div className="flex items-center  gap-5">
                <div className="grid gap-2  w-full">
                  <Label htmlFor="firstName" className="text-text16_24 text-slate-500">
                    Nama Depan
                  </Label>
                  <Input id="firstName" type="text" placeholder="Masukan Nama Depan Anda" required
                        onChange={(e)=> setNamaDepan(e.target.value)}/>
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="lastName" className="text-text16_24 text-slate-500">
                    Nama Belakang
                  </Label>
                  <Input id="lastName" type="text" placeholder="Masukan Nama Belakang Anda"
                        onChange={(e)=> setNamaBelakang(e.target.value)} required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-text16_24 text-slate-500">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="Masukan Email Anda" required  onChange={(e)=> setEmail(e.target.value)}  />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-text16_24 text-slate-500">
                    Kata Sandi
                  </Label>
                </div>
                <Input id="password" type="password" placeholder="Masukan Kata Sandi" required  onChange={(e)=> setPassword(e.target.value)} />
              </div>
              <div className="w-full space-y-3">
                <Button type="submit" onClick={saveRegister} className="w-full h-[50px] text-[16px] leading-[24px] bg-[rgba(0,_132,_214,_1)] ">
                  Daftar
                </Button>
                <span className="text-text16_24 block text-slate-500">
                  Sudah punya akun?{" "}
                  <Link to={"/login"} className="text-color-1 hover:underline hover:underline-offset-4  font-semibold">
                    Masuk
                  </Link>
                </span>
                <div className="flex items-center gap-2 max-w-[600px]">
                  <Separator className="w-[270px]" />
                  <span className="text-[16px] leading-[24px] text-slate-500">Atau</span>
                  <Separator className="w-[270px]" />
                </div>

                <div className=" flex justify-center ">
                  <Link
                    to={"/google"}
                    className=" rounded-[10px] border border-color-1 hover:bg-opacity-60 group hover:bg-[#0084D6] flex w-[280px] justify-center items-center gap-4 p-3 "
                  >
                    <FcGoogle className="w-[32px] h-[32px]" />{" "}
                    <span className="text-text16_24 block text-slate-500 group-hover:text-white">Masuk dengan Google</span>
                  </Link>
                </div>
                <div className="pt-1">
                  <div className="flex items-center flex-col">
                    <span className="text-slate-500">Download Aplikasi</span>
                    <img src="/images/get-in-google-play.svg" alt="Image" className="h-[62px] w-[206px] object-cover " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>
    </div>
    </AuthLayout>
  );
};

export default RegisterPage;
