const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`p-6 shadow-md hover:shadow-lg bg-white dark:bg-zinc-500 rounded-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
