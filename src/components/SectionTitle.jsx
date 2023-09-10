const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-400 pb-5">
      <h2 className="text-3xl font-semibold tracking-wider capitalize">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
