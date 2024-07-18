import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Input = styled.input`
  border-radius: 0.2rem;
`;

const InputComp = (dataIn: any) => {
  const { name, type } = dataIn.dataIn;
  const { modifyData } = dataIn;
  return (
    <>
      <Wrapper>
        <label htmlFor="name">姓名</label>
        <Input
          id="name"
          placeholder={name}
          onBlur={(e) => {
            modifyData(e.target.value, type);
          }}
        />
        <label htmlFor="type">型号</label>
        <Input
          id="type"
          placeholder={type}
          onBlur={(e) => {
            modifyData(e.target.value);
          }}
        />
      </Wrapper>
    </>
  );
};

export default InputComp;
