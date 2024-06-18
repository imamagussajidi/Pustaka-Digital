import Card from "@/features/global/components/Card";
import books from "@/core/assets/buku1.png";

const ListBooks = ({ list }) => {
  return (
    <div className="grid py-3 max-sm:grid-cols-2 max-lg:grid-cols-3 max-2xl:grid-cols-4 grid-cols-5 gap-5 items-center justify-center">
      {list.map((_, index) => (
        <Card key={index} src={books} penulis={"Imam Sajordisdddddddddddadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"}>
          Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        </Card>
      ))}
    </div>
  );
};

export default ListBooks;
