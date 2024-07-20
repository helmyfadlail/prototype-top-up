import Image from "next/image";

import formatCurrency from "@/utils/currency";

import { FaCheck } from "react-icons/fa6";

interface DiamondCardProps {
  index: string;
  title: string;
  selected: boolean;
  onSelect: (index: string | false) => void;
  price: number;
  img: number;
}

const DiamondCard = ({ index, title, price, selected, onSelect, img }: DiamondCardProps) => {
  return (
    <div
      className={`relative overflow-hidden px-4 py-2.5 border border-gray-600 space-y-2 max-w-full sm:max-w-60 rounded-lg shadow-sm shadow-primary cursor-pointer hover:bg-primary hover:border-primary duration-150 ${
        selected && "bg-primary border-primary"
      }`}
      onClick={() => onSelect(index)}
    >
      <p className="text-xs font-bold whitespace-nowrap">{title}</p>
      <div className="flex items-center justify-between h-9">
        <p className="text-xs">{formatCurrency(price)}</p>
        <Image
          src={img === 1 ? "/diamond-1.webp" : img === 2 ? "/diamond-2.webp" : "/diamond-3.webp"}
          width={img === 1 ? 32 : img === 2 ? 28 : 24}
          height={img === 1 ? 32 : img === 2 ? 28 : 24}
          alt="mobile legends - diamond"
        />
      </div>
      {selected && (
        <span className="absolute -top-2 right-0 p-1 bg-light rounded-es-xl duration-300">
          <FaCheck className="text-primary" size={12} />
        </span>
      )}
    </div>
  );
};

export default DiamondCard;
