import React from "react";
import donation2 from "@/core/assets/coba.png";

const Team = () => {
  return (
    <div className="flex justify-center py-20 items-center">
      <div className="flex flex-col gap-10 text-center">
        <h1 className="text-5xl font-bold">Team Kami</h1>
        <div className="flex flex-wrap justify-center py-10 gap-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className="flex flex-col justify-items-center mb-10 items-center max-w-[250px]"
              key={index}
            >
              <img
                draggable="false"
                src={donation2}
                alt="Dapat dipercaya"
                className="rounded-full w-full h-[250px] object-cover mb-4"
              />
              <h3 className="text-xl text-center font-bold break-all leading-4 line-clamp-2">
                Kocsssssssssssssssssssssssssssssssak
              </h3>
              <p className="text-center">Sosmed...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
