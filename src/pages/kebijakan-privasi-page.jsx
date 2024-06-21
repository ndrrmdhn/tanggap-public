import AppLayout from "@/layouts/app-layout";

const KebijkanPrivasiPage = () => {
  return (
    <AppLayout className={"px-4 md:px-5  z-30 max-w-[1200px] mx-auto "}>
      <div className="pt-[64px] max-w-screen-lg mx-auto  flex items-center flex-col">
        <h1 className="text-4xl font-medium">Kebijakan Privasi</h1>
        <div className="pt-[60px] space-y-10">
          <div className="pt-20px]">
            <h2 className="font-medium">Pengumpulan Informasi dan Penggunaan</h2>
            <p className="pt-[24px]">
              Kami di Quake Alert sangat menghargai privasi pengunjung kami. Dokumen Kebijakan Privasi ini menjelaskan bagaimana
              informasi pribadi Anda dikumpulkan, digunakan, dan diungkapkan saat Anda mengunjungi [https://www.QuakeAlert.com]
            </p>
          </div>
          <div className="pt-20px]">
            <h2 className="font-medium">Terakhir diperbarui: [05/03/2024]</h2>
            <p className="pt-[24px]">
              Kami tidak secara aktif mengumpulkan informasi pribadi dari Anda ketika Anda hanya mengunjungi Situs kami. Namun,
              seperti banyak situs web lainnya, kami menerima dan menyimpan informasi tertentu secara otomatis melalui penggunaan
              cookie dan alat pelacakan yang umum digunakan. Informasi yang dikumpulkan dapat mencakup alamat protokol internet
              (IP), jenis peramban, sistem operasi, tanggal dan waktu kunjungan, serta alamat situs web tempat Anda berasal.{" "}
            </p>
            <p className="pt-5">
              {" "}
              Informasi ini digunakan untuk menganalisis kebiasaan pengguna, mengelola Situs, melacak pergerakan pengguna di
              sekitar Situs, dan mengumpulkan informasi demografis. Data demografis yang dikumpulkan mungkin digunakan dalam
              penargetan iklan yang sesuai dengan kepentingan pengguna.
            </p>
          </div>

          <div className="pt-20px]">
            <h2 className="font-medium">Pengungkapan kepada Pihak Ketiga</h2>
            <p className="pt-[24px]">
              Kami tidak akan menjual, menyewakan, atau memberikan informasi pribadi Anda kepada pihak ketiga kecuali dengan izin
              Anda atau jika diwajibkan oleh hukum.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default KebijkanPrivasiPage;
