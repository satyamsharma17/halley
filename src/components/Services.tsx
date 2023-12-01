import Image from "next/image";

const services = [
  {
    title: "Effortless Porter Booking",
    description:
      "Quickly hire porters for seamless luggage assistance at railway stations, ensuring a stress-free travel experience.",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "Trained and Reliable Staff",
    description:
      "Access a network of trained and trustworthy porters, providing reliable handling of your belongings with expertise.",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Real-time Tracking",
    description:
      "Stay informed with real-time tracking of your porter, enhancing transparency and control over the luggage assistance process.",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
  {
    title: "Secure Payment Options
",
    description:
      "Enjoy peace of mind with secure and convenient payment methods, ensuring a hassle-free transaction for porter services..
",
    image: "/images/services/4.svg",
    alt: "Service description",
  },
  {
    title: "24/7 Customer Support
",
    description:
      "Receive prompt assistance with our dedicated 24/7 customer support, addressing any queries or concerns to enhance user satisfaction.
",
    image: "/images/services/5.svg",
    alt: "Service description",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Navigate effortlessly through Kuliseva's intuitive interface, making the porter hiring process simple and accessible for all users..
",
    image: "/images/services/5.svg",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">What is KuliSeva?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
         Kuliseva is a user-friendly web app revolutionizing railway station experiences by facilitating easy and efficient hiring of porters.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
