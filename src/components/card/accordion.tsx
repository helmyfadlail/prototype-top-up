import { AnimatePresence, motion } from "framer-motion";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

import PaymentCard from "./payment";
import Images from "../images";

import { IoIosArrowDown } from "react-icons/io";

interface AccordionCardProps {
  title: string;
  price: number;
  selectedPayment: boolean;
  onSelectedPayment: (index: string | false) => void;
}

const AccordionCard = ({ title, price, selectedPayment, onSelectedPayment }: AccordionCardProps) => {
  return (
    <div className="w-full h-auto overflow-hidden border rounded-xl">
      <Disclosure as="div" className="w-full h-auto overflow-hidden border rounded-xl">
        {({ open }) => (
          <>
            <DisclosureButton className="flex items-center justify-between w-full px-4 py-2 bg-secondary cursor-pointer">
              <p className="text-sm font-semibold duration-300">{title}</p>
              <i className={`duration-300 ${open ? "rotate-180" : "rotate-0"}`}>
                <IoIosArrowDown size={24} />
              </i>
            </DisclosureButton>
            <div className="overflow-hidden py-2">
              <AnimatePresence>
                {open && (
                  <DisclosurePanel
                    static
                    as={motion.div}
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    className="flex justify-between w-full px-4 py-6 overflow-hidden origin-top"
                  >
                    <PaymentCard price={price} onSelectedPayment={onSelectedPayment} selectedPayment={selectedPayment} name="qris" />
                  </DisclosurePanel>
                )}
              </AnimatePresence>
            </div>
            {!open && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="flex items-center justify-end w-full p-4"
              >
                <Images src="/icons/qris.webp" width={50} height={50} description="qris icons" />
              </motion.div>
            )}
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default AccordionCard;
