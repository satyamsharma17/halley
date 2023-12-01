import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Smart Porter Matching",
    description:
      "Kuliseva employs advanced algorithms to match you with the most suitable and available porters based on your specific needs.",
    features: [
      "Enhances efficiency by minimizing waiting time",
      "Ensures you receive specialized assistance tailored to your requirements.",
    ],
    image: "/images/features/dashboard.svg",
    order: false,
  },
  {
    title: "Contactless Payments",
    description:
      "Enjoy a secure and convenient payment experience with Kuliseva's contactless payment options, including credit/debit cards and digital wallets.",
    features: [
      "Promotes a seamless transaction process, reducing the need for cash and providing a hygienic payment solution for users.",
      "Porters will instantly receive money in their accounts",
    ],
    image: "/images/features/product.svg",
    order: true,
  },
  {
    title: "Real-Time Service Tracking",
    description:
      "Track the location and progress of your assigned porter in real-time, providing transparency and control over the luggage assistance process.",
    features: [
      "Offers peace of mind, allowing users to stay informed",
      "Plan their schedule accordingly, ensuring a smooth and reliable service experience.",
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
          Experience the power of Kuliseva&rsquo;s innovative features, from smart porter matching to real-time service tracking and secure contactless payments, ensuring a seamless and efficient railway station assistance every time.
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${content.order ? "order-1 md:order-2" : "order-1"
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
              className={`order-1 pt-8 md:pt-16 ${content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
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