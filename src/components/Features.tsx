import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Dashboard",
    description:
      "The current system at railway stations lacks a structured approach to handle passengers' luggage.",
    features: [
      "Passengers can request porter services through a mobile app or web port",
      "eliminating the need to search for assistance physically.",
      
    ],
    image: "/images/features/dashboard.svg",
    order: false,
  },
  {
    title: "Products",
    description:
      "The purpose of the train porter service project is to address the challenges faced by passengers in handling their luggage while traveling by train.",
    features: [
      "Porters will provide information and assistance regarding train schedules",
      "Porters will be trained in safety protocols and emergency procedures",
      
    ],
    image: "/images/features/product.svg",
    order: true,
  },
  {
    title: "Inventory",
    description:
      "Many travelers struggle with heavy or bulky bags, making it difficult for them to navigate crowded platforms and board trains.",
    features: [
      "The project aims to provide a dedicated service that alleviates this burden",
      // "Quis autem vel eum iure reprehenderit",
     
    ],
    image: "/images/features/inventory.svg",
    order: false,
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          the problem statement for this project is to create an efficient 
          and reliable porter service that addresses these issues.
 .
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
