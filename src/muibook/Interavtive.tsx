
const InteractiveChart = () => {
  const handleClick = (section: string) => {
    console.log("Section:", section);
  };

  return (
    <svg width="400" height="400">
      <circle
        cx="200"
        cy="200"
        r="100"
        fill="lightblue"
        onClick={() => handleClick('circle')}
      />

   <textarea name="" id=""></textarea>
      <rect
        x="150"
        y="150"
        width="100"
        height="100"
        fill="lightgreen"
        onClick={() => handleClick('rectangle')}
      />
    </svg>
  );
};

export default InteractiveChart;