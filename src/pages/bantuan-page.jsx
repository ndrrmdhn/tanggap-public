import AppLayout from "@/layouts/app-layout";

const BantuanPage = () => {
    return (
        <AppLayout className={"px-4 md:px-5  z-30 max-w-[1200px] mx-auto "}>
            <div className="pt-[64px] max-w-screen-lg mx-auto flex items-center flex-col">
        <h1 className="text-4xl font-medium">Bantuan</h1>
        <div className="pt-[60px] space-y-10">
            <div className="pt-20px]">
                <h2 className="font-medium">Menemukan Jawaban</h2>
                <p className="pt-[24px]">
                    Kami disini ingin memastikan Anda mendapatkan pengalaman terbaik saat menggunakan layanan kami.
                    Jika Anda memiliki pertanyaan atau membutuhkan bantuan, kami menyediakan berbagai sumber daya untuk membantu Anda:
                </p>
                <ul className="list-disc pt-[16px]">
                    <li>
                        Kontak Kami: Halaman ini menyediakan berbagai informasi untuk membantu Anda terhubung dengan kami dan mendapatkan bantuan. 
                        Anda dapat menemukan informasi tentang cara menghubungi kami melalui telepon, email, atau formulir kontak online. 
                        Kami juga menyediakan informasi tentang lokasi kantor kami dan jam buka.
                    </li>
                    <li>
                        FAQ: Lihat daftar Pertanyaan Umum (FAQ) kami untuk jawaban cepat atas pertanyaan umum tentang layanan kami.
                    </li>
                    <li>
                        Customer Service: Jika Anda tidak dapat menemukan jawaban atas pertanyaan Anda di FAQ,
                        Anda dapat menghubungi kami melalui email atau chat.
                    </li>
                </ul>
        </div>
        <div className="pt-20px]">
            <h2 className="font-medium">Masih Ada Pertanyaan?</h2>
            <p className="pt-[24px]">
                Jika Anda masih memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi tim Customer Service kami.
            </p>
        </div>
        </div>
        </div>
        </AppLayout>
        );
    }

export default BantuanPage