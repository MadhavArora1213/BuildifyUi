import React from 'react';

const DownloadButton = () => {
  return (
    <button className="cursor-pointer group/download relative flex gap-1 px-8 py-4 bg-[#5c5fe9] text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 font-semibold shadow-xl active:shadow-inner transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
        <g strokeWidth={0} id="SVGRepo_bgCarrier" />
        <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
        <g id="SVGRepo_iconCarrier">
          <g id="Interface / Download">
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector" />
          </g>
        </g>
      </svg>
      Download
      <div className="absolute text-xs uppercase scale-0 rounded-md py-2 px-2 bg-[#5c5fe9] left-2/4 mb-3 bottom-full group-hover/download:scale-100 origin-bottom transition-all duration-300 shadow-lg before:content-[''] before:absolute before:top-full before:left-2/4 before:w-3 before:h-3 before:border-solid before:bg-[#5c5fe9] before:rotate-45 before:-translate-y-2/4 before:-translate-x-2/4">
        30mb
      </div>
    </button>
  );
}

export default DownloadButton;
