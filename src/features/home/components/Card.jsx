const Card = ({ children, src, pembuat }) => {
  return (
    <div className="w-1/4 max-lg:w-1/3 max-md:w-1/2 max-xs:w-full p-3">
      <div className="p-5 border bg-[#D9D9D9] border-black flex flex-col gap-4 items-center text-center rounded-md">
        <img src={src} width={200} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="text-lg break-all font-semibold">{children}</h2>
            <p className="text-sm break-all">{pembuat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
