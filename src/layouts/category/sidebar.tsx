import Background from "@/components/background";

const SidebarTopUp = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="sticky flex flex-col items-center gap-8 top-24">
        <Background src="/mobile-legends.webp" containerClassName="w-52 h-52 rounded-2xl overflow-hidden bg-dark/40" className="items-end h-full">
          <h4 className="w-full py-2 font-semibold text-center">Mobile Legends</h4>
        </Background>
        <div className="p-6 space-y-2 text-sm rounded-lg shadow-lg bg-dark shadow-primary/80 text-light">
          <h4>Top up ML diamond Mobile Legends harga paling murah. Cara topup MLBB termurah :</h4>
          <ol className="list-decimal ms-6">
            <li>Masukkan ID & server</li>
            <li>Pilih Nominal</li>
            <li>Masukkan jumlah</li>
            <li>Pilih Pembayaran</li>
            <li>Masukkan Email</li>
            <li>Klik Order Now & lakukan Pembayaran</li>
            <li>Diamonds otomatis masuk ke akun game</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SidebarTopUp;
