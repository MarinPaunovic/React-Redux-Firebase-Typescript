const CustomButton = ({ children, ...props }: any) => {
  return <button {...props}>{children}</button>;
};

export default CustomButton;
