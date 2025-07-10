import styled from 'styled-components';

const Wrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Input = styled.input`
  border-radius: 0.2rem;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  &:focus {
    border-color: #1976d2;
    box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
  }
  &:hover {
    border-color: #666;
  }
`;

export interface InputCompProps {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  style?: React.CSSProperties;
}

const InputComp = ({
  type,
  value,
  onChange,
  placeholder,
  disabled,
  maxLength,
  style,
}: InputCompProps) => {
  return (
    <Wrapper>
      <Input
        type={type || 'text'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        style={style}
      />
    </Wrapper>
  );
};

export default InputComp;
