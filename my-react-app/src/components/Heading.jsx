import React from 'react';

function Heading() {
  return (
    <div className="flex w-full justify-center items-center py-10 pb-15">
      <h1 className="text-white text-5xl font-extrabold uppercase tracking-widest" style={{ textShadow: "0px 0px 20px #00FFE0" }}>
        STUDENT <span className="text-[#00FFE0]">SCOREBOARD</span>
      </h1>
    </div>
  );
}

export default Heading;