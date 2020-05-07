import styled, { css } from "styled-components";
import { colors } from "./utils";

// Buttons
export const Button = styled.button`
  padding: 9px 40px;
  font-size: 14px;
  border-radius: 40px;
  color: #fff;
  cursor: pointer;
  border: none;
  margin-right: 10px;
  &:hover {
    opacity: 0.8;
  }
  background: ${(props) =>
    (props.type === "primary" && `${colors.action.primary}`) ||
    (props.type === "secondary" && `${colors.action.secondary}`) ||
    (props.type === "danger" && `${colors.action.danger}`)};
  ${(props) =>
    props.type === "disabled" &&
    css`
      background: #dedede;
      pointer-events: none;
    `}
`;
