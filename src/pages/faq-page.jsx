import AppLayout from "@/layouts/app-layout";

const FaqPage = () => {
    return (
        <AppLayout className={"px-4 md:px-5  z-30 max-w-[1200px] mx-auto "}>
            <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
  <div className="mx-auto px-5">
    <div className="flex flex-col items-center">
      <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
        FAQ
      </h2>
      <p className="mt-3 text-lg text-neutral-500 md:text-xl">
        Frequenty asked questions
      </p>
    </div>
    <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Bagaimana cara membuat akun di Tanggap?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Amet molestiae aliquid eligendi! 
            Repudiandae recusandae beatae accusamus ratione quibusdam quas. Consequatur.
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Bagaimana cara membuat laporan baru?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia eius alias iste, 
            autem accusantium praesentium molestiae officiis voluptatibus, 
            necessitatibus voluptatem! Quas excepturi sed eveniet?
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Bagaimana cara melacak status laporan?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet vero, rem repellat eligendi ratione voluptates minus itaque quod laborum eum sapiente, 
            doloribus velit illum laudantium!
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Bagaimana cara memastikan bahwa pengaduan saya ditindaklanjuti?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Labore, nemo ipsum. Architecto tenetur cupiditate saepe odio iste repudiandae a deleniti natus ab voluptatibus, 
            voluptas ut sequi veniam enim. Nisi, error!
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Apa yang bisa saya lakukan jika saya tidak puas dengan tanggapan yang saya terima?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Natus dignissimos voluptate, voluptates quis sit quae.
          </p>
        </details>
      </div>
      <div className="py-5">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span> Jenis pengaduan apa saja yang bisa saya laporkan?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quaerat aut pariatur quasi aliquam porro unde molestiae vitae odit quibusdam. Nam?
          </p>
        </details>
      </div>
    </div>
  </div>
</div>

        </AppLayout>
    )
}

export default FaqPage;