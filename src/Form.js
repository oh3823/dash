import { memo } from 'react';

const Form = ({ placeholder, onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <input placeholder={placeholder} onChange={onChange} value={value} />
    </form>
  );
};

export default memo(Form);
