const Button = ({ children, variant = "primary", className }) => {
  const styles = {
    primary: "bg-white border border-black/20 hover:bg-secondary/20",
    secondary: "bg-secondary/80 hover:bg-secondary/50 text-white",
    tertiary: "bg-neutral hover:bg-neutral/50 text-black",
  };
  return (
    <button
      className={`shadow-xl flex gap-2 items-center cursor-pointer transition-colors px-2 py-1 text-sm rounded-lg font-semibold ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
