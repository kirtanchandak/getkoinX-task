import React from "react";

function Page() {
  return (
    <>
      <div className="text-center pt-20">
        <h1 className="text-4xl font-bold">Hellon KoinX!👋</h1>
        <p className="text-xl font-semibold mt-4">
          I've completed the optional task, head over to - "/solana"
        </p>
        <a href="/solana">
          <button className="p-2 bg-green-300 rounded-lg mt-4">
            Click Here
          </button>
        </a>
      </div>
    </>
  );
}

export default Page;
