import styled from "styled-components";

const InputErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.errorRed};
  font-size: 0.875rem;
  padding-top: 0.125rem;
`;

export default InputErrorMessage;
