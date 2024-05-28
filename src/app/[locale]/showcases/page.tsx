import Image from "next/image";

import Layout from "@/components/layout";
// import Maintenance from "@/components/page/maintenance";

import { metadata as meta } from "@/data/profile";

export const metadata = { ...meta, title: `${meta.title} | Showcases` };

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = [
    {
      image: {
        src: "/imgs/showcases/map-screenshot.png",
        alt: "my 2d-portfolio-game",
      },
    },
  ];

  return (
    <Layout lang={locale}>
      <main className="self-container">
        {data.map((ele, id) => (
          <div
            key={id}
            className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl max-w-96"
          >
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                className={"main-avatar-image"}
                width={100}
                height={100}
                priority
                {...ele.image}
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                UI/UX Review Check
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to "Naviglio" where you can enjoy the main
                night life in Barcelona.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </main>
      {/* <Maintenance /> */}
    </Layout>
  );
}
