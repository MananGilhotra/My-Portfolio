import "./HeaderTitle.css";
const HeaderTitle = () => {
  return (
    <svg width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
      {/* Removed <rect /> to eliminate background */}
      
      <text className="header__title" x="50" y="100" fontSize="64" fill="#FFFFFF" fontWeight="bold">
        Hey, I am Manan
      </text>
      <text className="header__title" x="50" y="180" fontSize="64" fill="#FFFFFF" fontWeight="bold">
        Gilhotra,
      </text>
      <text className="header__title" x="50" y="260" fontSize="64" fill="#FFFFFF" fontWeight="bold">
        Frontend Developer.
      </text>

      <g className="cursor-motion">
        <g id="cursor">
          <path
            d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
            fill="#373737"
            stroke="white"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  );
};

export default HeaderTitle;
