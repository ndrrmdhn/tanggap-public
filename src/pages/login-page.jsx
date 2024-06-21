import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import AuthLayout from "@/layouts/auth-layout";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import { Badge } from "lucide-react";
import axios from "axios";

const SideAuth = () => {
  return (
    <div className="relative lg:col-span-2 overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(0,_163,_232,_0.55)] opacity-0"></div>
      <img src="public\images\site.png" alt="Image" className="h-full object-cover " />
    </div>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //define state validation
  const [validation, setValidation] = useState([]);
  const [errormsg, setError] = useState([]);

  //define history
  const navigate = useNavigate();

  const loginHandler = async(e) => {
    e.preventDefault();
    
    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append('email', email);
    formData.append('password', password);

    //send data to server
    await axios.post('http://202.10.41.84:5000/api/admin/login', formData,{})
    .then((response) => {

      if(response.data.data.level == "member"){
        //set token on localStorage
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('iduser', response.data.data.id);
        localStorage.setItem('username', response.data.data.username);
        localStorage.setItem('namadepan', response.data.data.nama_depan);
        localStorage.setItem('namabelakang', response.data.data.nama_belakang);
        localStorage.setItem('alamat', response.data.data.alamat);
        localStorage.setItem('role', response.data.data.level);
        navigate('/');
     } else {
       setError({message : 'Login Gagal! Anda bukan member. Silahkan coba kembali'});
     }
    })
    .catch((error) => {

        setError({message :error.response.data.message});
        console.log(error.response.data.message);
    })

        // navigate('/home');

}

  return (
    <div className="flex border-l-8 border-[rgba(0,_163,_232,_1)]  overflow-y-auto overflow-x-hidden justify-center  lg:col-span-3 ">
      <div className="mx-auto  w-full max-w-[600px] pt-[100px]">
        <form onSubmit={loginHandler}>
        <div className="gap-6 grid pb-10">
          <div className="grid gap-2 ">
            <h1 className="text-3xl font-bold">Masuk</h1>
          </div>
          <div className="grid gap-9">
          {
            errormsg.message && (
              <div className="bg-red-600 text-white mt-[10px]">
              <div className="px-[64px] py-6">
                <h1 className="font-medium text-sm">{ errormsg.message}</h1>
              </div>
            </div>
            )
        }
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-text16_24 text-slate-500">
                Email
              </Label>
              <Input id="email" type="email" placeholder="Masukan Email Anda" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-text16_24 text-slate-500">
                  Kata Sandi
                </Label>
              </div>
              <Input id="password" type="password" placeholder="Masukan Kata Sandi" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="w-full space-y-3">
            <Button type="submit" className="w-full h-[50px] text-[16px] leading-[24px] bg-[rgba(0,_132,_214,_1)] ">
                  Masuk
                </Button>

              <span className="text-text16_24 block text-slate-500">
                Belum punya akun?{" "}
                <Link to={"/register"} className="text-color-1 hover:underline hover:underline-offset-4  font-semibold">
                  Daftar
                </Link>
              </span>
              <div className="flex items-center gap-2 max-w-[600px]">
                <Separator className="w-[270px]" />
                <span className="text-text16_24 text-slate-500">Atau</span>
                <Separator className="w-[270px]" />
              </div>
              <div className=" flex justify-center ">
                <Link
                  to={"/google"}
                  className=" rounded-[10px] border border-color-1 hover:bg-opacity-60 group hover:bg-[#0084D6] flex w-[280px] justify-center items-center gap-4 p-3 "
                >
                  <FcGoogle className="w-[32px] h-[32px]" />{" "}
                  <span className="text-text16_24 block text-slate-500 group-hover:text-white">Daftar dengan Google</span>
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
  );
};

const LoginPage = () => {
  return (
    <AuthLayout className="  w-screen  overflow-hidden lg:grid lg:min-h-[600px] lg:grid-cols-5 lg:h-screen">
      <SideAuth />
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
