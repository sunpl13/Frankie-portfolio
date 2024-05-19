const TwoCircle = () => {
  return (
    <div className="relative border-[1.5px] w-23 h-23 border-[#dcdede]/[.3] rounded-full">
      <div className="w-21 h-21 border-[3px] rounded-full border-[#dcdede]/[.3] border-dotted flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <strong
          style={{ color: 'rgba(240,240,240,0.9)' }}
          className="text-gray-90 font-semibold text-4xl">
          Front-end
        </strong>
        <span className="text-2xl">프론트엔드</span>
      </div>
    </div>
  );
};

export default TwoCircle;
