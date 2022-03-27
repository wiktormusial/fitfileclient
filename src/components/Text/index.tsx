import styled from "styled-components";

interface TextLeadProps {
  center?: boolean;
}

export const TextHeading = styled.h2`
  margin-top: 0;
  color: #808080;
  font-weight: normal;
`;

export const TextLead = styled.h1`
  margin-bottom: 0;
  margin-top: -0.5em;
  font-weight: bolder;
  ${(props: TextLeadProps) => props.center && "text-align: center"}
`;
