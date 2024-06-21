import AppLayout from "@/layouts/app-layout";

const NotifikasiPage = () => {
    return (
    <AppLayout className={"px-4 md:px-5 z-30 max-w-[1200px] mx-auto "}>
        <div className="pt-[64px] max-w-screen-lg mx-auto flex flex-col">
        <h1 className="text-4xl font-medium">Notifikasi</h1>
        {/* <div className="w-full p-3 mt-4 bg-white rounded flex">
                    <div className="w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.30325 12.6667L1.33325 15V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V12C14.6666 12.1768 14.5963 12.3464 14.4713 12.4714C14.3463 12.5964 14.1767 12.6667 13.9999 12.6667H4.30325ZM5.33325 6.66667V8H10.6666V6.66667H5.33325Z" fill="#00a3e8" />
                        </svg>
                    </div>
                    <div className="pl-3">
                        <p className="text-sm leading-none">
                            <span className="text-color-2">Kamu</span> telah membuat pengaduan: <span className="text-color-2">Pengaduan selesai</span>
                        </p>
                        <p className="text-xs leading-3 pt-1 text-gray-500">05 Mei 2024</p>
                    </div>
                </div>
                <h2 className="text-sm leading-normal pt-8 border-b pb-2 border-gray-300 text-gray-600">BARU</h2>
                <div className="w-full p-3 mt-6 bg-white rounded flex">
                    <div className="w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.30325 12.6667L1.33325 15V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V12C14.6666 12.1768 14.5963 12.3464 14.4713 12.4714C14.3463 12.5964 14.1767 12.6667 13.9999 12.6667H4.30325ZM5.33325 6.66667V8H10.6666V6.66667H5.33325Z" fill="#00a3e8" />
                        </svg>
                    </div>
                    <div className="pl-3">
                        <p className="text-sm leading-none">
                            <span className="text-color-2">Kamu</span> telah membuat pengaduan: <span className="text-color-2">Pengaduan dalam proses</span>
                        </p>
                        <p className="text-xs leading-3 pt-1 text-gray-500">05 Mei 2024</p>
                    </div>
                </div>
                <div className="w-full p-3 mt-8 bg-green-100 rounded flex items-center">
                    <div className="w-8 h-8 border rounded-full border-green-200 flex flex-shrink-0 items-center justify-center">
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#047857" />
                        </svg>
                    </div>
                    <div className="pl-3 w-full">
                        <div className="flex items-center justify-between">
                            <p className="text-sm leading-none text-green-700">Tandai telah dibaca</p>
                            <p className="text-xs leading-3 underline cursor-pointer text-green-700">Lihat</p>
                        </div>
                    </div>
                </div> */}
            <div className="bg-red-400 text-white mt-[10px]">
                <div className="px-[64px] py-6">
                    <h1 className="font-medium text-sm">Tidak ada notifikasi</h1>
                </div>
            </div>
        </div>
    </AppLayout>
    );
}

export default NotifikasiPage