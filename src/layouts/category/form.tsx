"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { useGetAPI } from "@/hooks";

import Button from "@/components/button";
import Input from "@/components/input";
import Number from "@/components/number";

import DiamondCard from "@/components/card/diamond";
import AccordionCard from "@/components/card/accordion";

import { DataProducts } from "@/types/globals";
import API from "@/utils/api";
import Modal from "@/components/modal";

type InputType = {
  id: number;
  server: number;
  email: string;
};

const FormTopUp = () => {
  const [input, setInput] = useState<InputType>({ id: 0, server: 0, email: "" });

  // const [openModal, setOpenModal] = useState<boolean>(false);

  const [selectedNominal, setSelectedNominal] = useState<string | false>(false);
  const [selectedPayment, setSelectedPayment] = useState<string | false>(false);

  const [isLoading, setLoading] = useState<boolean>(false);

  const { data: datas } = useGetAPI<DataProducts>("/products");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const numValue = parseInt(value);
    if (e.type === "number") {
      // Allow only empty input or numbers that are not negative
      if (value === "" || (!isNaN(numValue) && numValue >= 0)) {
        setInput((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, server, email } = input;
    setLoading(true);

    try {
      const response = await API.post("/orders", { gameId: `${id}${server}`, product: selectedNominal, email });
      const w = window.open(response.data.paymentUrl, "_blank");
      if (w) w.focus();
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-8">
      {/* input game id */}
      <div className="p-4 space-y-4 shadow-md shadow-primary/50 bg-dark rounded-xl text-light">
        <div className="flex items-center gap-4 ">
          <Number value="1" />
          <p className="font-semibold">Masukkan Data Tujuan</p>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Input placeholder="Masukkan User ID" name="id" type="number" handleChange={handleChange} />
          <Input placeholder="Masukkan Server ID" name="server" type="number" handleChange={handleChange} />
        </div>
        <p className="text-xs italic text-gray-300">
          Untuk menemukan ID & Server akun Anda, klik avatar Anda di pojok kiri atas layar dan buka tab Info Umum. Contoh: 12345678 (9864), maka ID
          adalah 12345678 dan Server adalah 9864
        </p>
      </div>

      {/* choose diamond */}
      <div className="p-4 space-y-8 shadow-md shadow-primary/50 bg-dark rounded-xl text-light">
        <div className="flex items-center gap-4">
          <Number value="2" />
          <p className="font-semibold">Pilih Layanan</p>
        </div>
        <div className="space-y-4">
          <p className="font-bold">Top Up Instant</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {datas?.data?.map((item) => {
              return (
                <DiamondCard
                  selected={selectedNominal === item._id}
                  onSelect={() => setSelectedNominal(item._id)}
                  key={item._id}
                  title={item.name}
                  price={item.price}
                  img={item.total < 100 ? 1 : item.total < 1000 ? 2 : 3}
                  index={item._id}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* choose payment */}
      <div className="p-4 space-y-4 shadow-md shadow-primary/50 bg-dark rounded-xl text-light">
        <div className="relative flex items-center gap-4">
          <Number value="3" />
          <p className="font-semibold">Pilih Pembayaran</p>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0" />
        <div className="space-y-8">
          <AccordionCard
            title="QRIS OVO DANA GOPAY SHOPEEPAY"
            price={90000}
            onSelectedPayment={() => setSelectedPayment("qris")}
            selectedPayment={selectedPayment === "qris"}
          />
        </div>
      </div>

      {/* input email */}
      <div className="p-4 space-y-4 shadow-md shadow-primary/50 bg-dark rounded-xl text-light">
        <div className="relative flex items-center gap-4">
          <Number value="4" />
          <p className="font-semibold">Masukkan Email</p>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0" />
        <div className="flex gap-4">
          <Input placeholder="Masukkan Email Anda" name="email" type="email" handleChange={handleChange} />
        </div>
        <Button
          className={`uppercase bg-primary hover:bg-primary/70 ${isLoading && "animate-pulse bg-primary/60"}`}
          // onClick={() => setOpenModal(!openModal)}
          type="submit"
        >
          beli sekarang
        </Button>
        {/* <Modal setOpen={() => setOpenModal(!openModal)} isOpen={openModal} /> */}
      </div>
    </form>
  );
};

export default FormTopUp;
