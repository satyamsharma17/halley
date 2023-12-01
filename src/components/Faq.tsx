import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "How do I book a porter using Kuliseva?",
    response:
      "Booking a porter is easy! Simply log in to the Kuliseva app, choose your location, select the services you need, and proceed to payment. Your porter will be assigned, and you can track their arrival in real time.",
  },
  {
    question: "Are the porters on Kuliseva trustworthy?",
    response:
      "Absolutely! We ensure all our porters undergo thorough training and background checks. Kuliseva is committed to providing reliable and trustworthy personnel for your luggage assistance.",
  },
  {
    question: "Can I track the location of my assigned porter?",
    response:
      "Yes, you can! Kuliseva offers real-time tracking, allowing you to monitor your porter's location from the moment they are assigned until the completion of the service.",
  },
  {
    question: "What payment options are available on Kuliseva?",
    response:
      "We provide secure payment options, including credit/debit cards and digital wallets, ensuring a safe and convenient transaction process for our users.",
  },
  {
    question: "How can I get in touch with Kuliseva's customer support?",
    response:
      "For any assistance, our 24/7 customer support team is ready to help. Reach out through the Contact section in the app, and we'll promptly address your queries and concerns.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Explore our Frequently Asked Questions to find solutions and gain insights into using Kuliseva effortlessly for your railway station porter needs.
      </p>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
