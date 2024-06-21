import { Route, Routes } from "react-router-dom";
import OnboardingPage from "@/pages/onboarding-page";
import LoginPage from "@/pages/login-page";
import RegisterPage from "@/pages/register-page";
import NotFoundPage from "@/pages/not-found-page";
import HomePage from "@/pages/home-page";
import NewsPage from "@/pages/news-page";
import PengaduanPage from "@/pages/pengaduan-page";
import CustomerServicePage from "@/pages/customer-service-page";
import KebijkanPrivasiPage from "@/pages/kebijakan-privasi-page";
import ProfilePage from "@/pages/profile-page";
import PengaduanSayaPage from "@/pages/pengaduan-saya-page";
import DetailNewsPage from "@/pages/detail-news-page";
import NotifikasiPage from "@/pages/notifikasi";
import BantuanPage from "@/pages/bantuan-page";
import TentangKamiPage from "@/pages/tentang-kami-page";
import KontakKamiPage from "@/pages/contact-us";
import FaqPage from "@/pages/faq-page";

const AppRoute = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      {/* <Route path='/' element={<OnboardingPage />} /> */}
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/pengaduan' element={<PengaduanPage />} />
      <Route path='/berita' element={<NewsPage />} />
      <Route path='/customer-service' element={<CustomerServicePage />} />
      <Route path='/kebijakan-privasi' element={<KebijkanPrivasiPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/pengaduan-saya' element={<PengaduanSayaPage />} />
      <Route path='/berita/:id' element={<DetailNewsPage />} />
      <Route path='/notifikasi' element={<NotifikasiPage />} />
      <Route path='/bantuan' element={<BantuanPage />} />
      <Route path='/tentang' element={<TentangKamiPage />} />
      <Route path='/kontak' element={<KontakKamiPage />} />
      <Route path='/faq' element={<FaqPage />} />
    </Routes>
  );
};

export default AppRoute;
