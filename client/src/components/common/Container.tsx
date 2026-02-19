const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[2100px] mx-auto  border min-h-screen flex flex-col">
      {children}
    </div>
  );
};

export default Container;
