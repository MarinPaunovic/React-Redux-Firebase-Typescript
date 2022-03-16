const FormInput = ({ handleChange, ...props }: any) => {
  return (
    <div>
      <input onChange={(e) => handleChange(e.target.value)} {...props} />
    </div>
  );
};
export default FormInput;
