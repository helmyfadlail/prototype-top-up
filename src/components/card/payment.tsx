import Image from "next/image";

interface PaymentProps {
  name: string;
  price: number;
  selectedPayment: boolean;
  onSelectedPayment: (name: string | false) => void;
}

const PaymentCard = ({ name, price, onSelectedPayment, selectedPayment }: PaymentProps) => {
  return (
    <div
      className={`px-4 py-2.5 border border-gray-600 space-y-4 rounded-lg w-full max-w-52 shadow-sm shadow-primary cursor-pointer hover:bg-primary hover:border-primary duration-150 text-light ${
        selectedPayment && "bg-primary border-primary"
      }`}
      onClick={() => onSelectedPayment(name)}
    >
      <Image src="/icons/qris.webp" width={60} height={60} alt="payment icons" />
      <div className="space-y-1">
        <p className="text-xs">Rp. {price}</p>
        <hr className="h-px my-8 bg-gray-400 border-0" />
        <p className="text-xs italic text-[10px]">Proses Otomatis</p>
      </div>
    </div>
  );
};

export default PaymentCard;
