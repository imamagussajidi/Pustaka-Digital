import books from "@/core/assets/buku1.png";
import Card from "../components/Card";

const PopulerBooks = () => {
  return (
    <div
      className="flex flex-col items-center py-16 justify-center gap-16"
      id="popular"
    >
      <h1 className="text-3xl font-bold">Buku Terpopuler</h1>
      <div className="flex flex-wrap items-center justify-center w-full">
        {Array.from({ length: 8 }, (_, index) => (
          <Card
            key={index}
            src={books}
            pembuat={"Imam Sajordi"}
          >
            Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopulerBooks;
