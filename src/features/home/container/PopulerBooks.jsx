import books from "@/core/assets/buku1.png";
import Card from "@/features/global/components/Card";
import ListBooks from "@/features/global/container/ListBooks";

const PopulerBooks = () => {
  return (
    <div
      className="flex flex-col items-center py-16 justify-center gap-16"
      id="popular"
    >
      <h1 className="text-3xl font-bold">Buku Terpopuler</h1>
      <ListBooks list={Array.from({ length: 8 })} />
    </div>
  );
};

export default PopulerBooks;
