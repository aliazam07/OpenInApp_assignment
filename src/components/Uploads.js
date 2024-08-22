import React from 'react'


const Uploads = () => {
  return (
    <div className="w-[1153px] h-[1271.93px] p-[46px_20px_53px_25px] opacity-0">
      {/* Inner Container */}
      <div className="w-[1065px] h-[419px] bg-white border border-gray-300 rounded-tl-[8px] relative opacity-0 mt-[799.93px] ml-[46.5px] flex flex-col gap-4 p-4">
        {/* Header Row */}
        <div className="flex justify-between text-lg font-semibold mb-2">
          <span className="flex-1 text-left">S.no</span>
          <span className="flex-2 text-left">Links</span>
          <span className="flex-1 text-center">Prefix</span>
          <span className="flex-1 text-center">AddTags</span>
          <span className="flex-1 text-center">SelectedTags</span>
        </div>

        {/* Content Rows (Add rows as needed) */}
        <div className="flex flex-col gap-2">
          {/* Example Row */}
          <div className="flex justify-between text-sm">
            <span className="flex-1">1</span>
            <span className="flex-2">example-link.com</span>
            <span className="flex-1 text-center">Pre</span>
            <span className="flex-1 text-center">Tag1</span>
            <span className="flex-1 text-center">TagA</span>
          </div>
          {/* Add more rows here */}
        </div>
      </div>
    </div>
  );
};


export default Uploads;