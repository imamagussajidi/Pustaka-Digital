const Card = ({ children, src, penulis }) => {
  return (
    <div className="w-full h-full">
      <div className="p-5 h-full max-xs:p-2 border bg-[#D9D9D9] border-black flex flex-col gap-4 items-center text-center rounded-md">
        <img src={src} width={200} draggable="false" />
        <div className="flex flex-col gap-3 h-full justify-between">
          <h2 className="text-lg break-all leading-4 line-clamp-2 font-semibold">
            {children}
          </h2>
          <p className="text-sm line-clamp-1 break-all">Penulis: {penulis}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
