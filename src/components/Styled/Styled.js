import styled from "styled-components";

const Button = styled.button`
  float: ${props => (props.left ? "left" : "right")};
  cursor: pointer;
  padding: 10px 15px;
  background: var(--primary);
  border: 2px solid transparent;
  color: white;
  padding: 5px 15px;
  font-size: 1rem;
  border-radius: 3px;
  transition: all 0.3s ease;
  margin-bottom: 10px;
  letter-spacing: 1px;
  &:hover {
    border-color: var(--secondary);
  }
  &:active,
  &:focus {
    outline: none;
    background: var(--secondary);
  }
`;

const Title = styled.h1`
  font-family: "Helvetica Now Display XBold", sans-serif;
  color: var(--primary);
  text-align: left;
  font-size: ${props => (props.size ? `${props.size}rem` : "3rem")};
  & span.tasks-number {
    vertical-align: super;
    font-size: 1rem;
    color: var(--secondary);
  }
`;
const AddTitle = styled(Title)`
  color: var(--white);
  margin: 0.5rem auto;
`;

const AddInput = styled.input`
  flex: 1 1 auto;
  margin-right: 10px;
  padding: 5px 15px;
  height: 46px;
  font-size: 1rem;
  font-family: "Helvetica Now Text Regular", sans-serif;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border: 2px solid var(--secondary);
  }
`;

export default Button;
export { Title, AddInput, AddTitle };
