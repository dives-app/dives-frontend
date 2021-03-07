import styled from "styled-components";

const InputErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.errorRed};
  font-size: 1.4rem;
  padding-top: 0.2rem;
`;

export default InputErrorMessage;
