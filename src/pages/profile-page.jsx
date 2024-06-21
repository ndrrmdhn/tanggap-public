import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ProfileLayout from "@/layouts/profile-layout";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [namadepan, setNamaDepan] = useState("");
  const [namabelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [tanggallahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telp, setTelp] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [jenkel, setJenkel] = useState("");
  const [role, setRole] = useState("member");
  const [aktif, setAktif] = useState("Y");

  const [msgerror, setError] = useState([]);
  const [msgsuccess, setSuccess] = useState([]);
  const navigate = useNavigate

  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const id = localStorage.getItem('iduser');

  const getUserDetail = async(req, res) => {

    try {
      await axios.get(`http://202.10.41.84:5000/api/users/edit/${id}`)
      .then(response => {
        setNamaDepan(response.data.data.nama_depan);
        setNamaBelakang(response.data.data.nama_belakang);
        setEmail(response.data.data.email);
        setJenkel(response.data.data.jenkel);
        setTanggalLahir(response.data.data.tgllahir);
        setAlamat(response.data.data.alamat);
        setTelp(response.data.data.telp);
        setDeskripsi(response.data.data.deskripsi);
        // console.log(response.data.data);
      })
      
    } catch (error) {
      setError(error);
    }
  }


  const saveUpdate = async(e)=> {
    e.preventDefault();
     //initialize formData
     const formData = new FormData();

     //append data to formData
     formData.append('email', email);
     formData.append('alamat', alamat);
     formData.append('namadepan', namadepan);
     formData.append('namabelakang', namabelakang);
     formData.append('telp', telp);
     formData.append('tgllahir', tanggallahir);
     formData.append('jenkel', jenkel);
     formData.append('role', role);
     formData.append('aktif', aktif);
     formData.append('deskripsi', deskripsi);
     formData.append('password',null);
     
    
        await axios.post(`http://202.10.41.84:5000/api/users/update/${id}`,formData)
        .then(response => {
          setSuccess({message:'Data berhasil disimpan'});
          navigate('/profile');
          
        })
        .catch(error => {
            setError(error)
        });
}

//hook useEffect
useEffect(() => {
      
  //call method "fetchDetailPost"
  getUserDetail();

}, []);


  return (
    <ProfileLayout className={"px-4 md:px-5  z-30 max-w-[1200px] mx-auto "}>
      <div className="px-[64px] ">
        <h1 className="font-bold text-2xl">Profile Saya</h1>
      </div>
      <div className="bg-color-2 text-white mt-[10px]">
        <div className="px-[64px] py-6">
          <h1 className="font-medium text-sm">Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</h1>
        </div>
      </div>
      {
        msgsuccess.message && (
          <div className="bg-green-600 text-white mt-[10px]">
            <div className="px-[64px] py-6">
              <h1 className="font-medium text-sm">{msgsuccess.message}</h1>
            </div>
          </div>
        )
      }
      <div className="pt-5 px-[64px]">
        <form className="space-y-6" onSubmit={saveUpdate}>
          <div className="grid gap-2">
            <Label>Nama Depan</Label>
            <Input id="firstName" type="text" placeholder="Masukan Nama Depan Anda" required value={namadepan}
                        onChange={(e)=> setNamaDepan(e.target.value)}/>
          </div>
          <div className="grid gap-2">
            <Label>Nama Belakang</Label>
            <Input id="lastName" type="text" placeholder="Masukan Nama Belakang Anda" required value={namabelakang}
                        onChange={(e)=> setNamaBelakang(e.target.value)}/>
          </div>
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input id="email" type="email" placeholder="Masukan Email Anda" required  value={email} onChange={(e)=> setEmail(e.target.value)}  />
          </div>
          <div className="grid gap-2">
            <Label>Alamat</Label>
            <Textarea className="border-slate-400 focus-visible:ring-color-2 focus-visible:border-color-2 text-text16_24" value={alamat} onChange={(e)=> setAlamat(e.target.value)}/>
          </div>
          <div className="grid gap-2">
            <Label>Nomor Telepon</Label>
            <Input id="lastName" type="text" placeholder="No. Telp" required value={telp}
                        onChange={(e)=> setTelp(e.target.value)}/>
          </div>
          <div className="grid gap-4">
            <Label>Jenis Kelamin</Label>
            <RadioGroup defaultValue="option-one" className="flex gap-x-12">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="L" name="jenkel" id="option-one" onChange={(e)=> setJenkel(e.target.value)}/>
                <Label htmlFor="option-one">Laki-laki</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="P" id="option-two" name="jenkel" onChange={(e)=> setJenkel(e.target.value)} />
                <Label htmlFor="option-two">Perempuan</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label>Tanggal lahir</Label>
            <Input type="date" onChange={(e)=> setTanggalLahir(e.target.value)} value={tanggallahir}/>
          </div>
          <div className="grid gap-2">
            <Label>Dekripsi</Label>
            <Textarea className="border-slate-400 focus-visible:ring-color-2 focus-visible:border-color-2 text-text16_24" onChange={(e)=> setDeskripsi(e.target.value)} value={deskripsi}/>
          </div>
          <div className="flex items-center w-full gap-x-5">
            <Button className="w-full max-w-[100px] h-[40px]">Edit</Button>
            <Button className="w-full max-w-[100px] h-[40px]">Simpan</Button>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
};

export default ProfilePage;
