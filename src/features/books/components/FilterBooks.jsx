import { useState } from "react";

const FilterBooks = () => {
  const [isActive, setIsActive] = useState("semua");
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-1 items-center">
        <input
          placeholder="Cari..."
          className="px-3 rounded-l-xl outline-none w-full py-2 shadow-lg border border-black"
          type="text"
        />
        <button className="bg-default hover:opacity-80 hover:scale-105 rounded-r-xl text-black px-5 py-2 shadow-lg border border-black">
          Search
        </button>
      </div>
      <div className="flex gap-1">
        <button className={`hover:opacity-80 hover:scale-105 rounded-xl text-black px-5 py-1 shadow-lg border border-black ${isActive === "semua" ? "bg-default" : "bg-white"}`} onClick={() => setIsActive("semua")}>Semua</button>
        <button className={`hover:opacity-80 hover:scale-105 rounded-xl text-black px-5 py-1 shadow-lg border border-black ${isActive === "pop" ? "bg-default" : "bg-white"}`} onClick={() => setIsActive("pop")}>Terpopuler</button>
        <button className={`hover:opacity-80 hover:scale-105 rounded-xl text-black px-5 py-1 shadow-lg border border-black ${isActive === "new" ? "bg-default" : "bg-white"}`} onClick={() => setIsActive("new")}>Terbaru</button>
      </div>
    </div>
  );
};

export default FilterBooks;
