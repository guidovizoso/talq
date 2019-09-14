import React from "react";
import styled from "styled-components";
import media from "../../styles/media";
import Container from "../Container";

const Achievements = styled.div`
  margin-bottom: 56px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
`;

const List = styled.ul`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(1, 1fr);
  padding: 0;

  ${media.medium`
  grid-gap: 56px;
  grid-template-columns: repeat(4, 1fr);
  `}
`;

const Item = styled.li`
  list-style: none;
  font-family: "Whitney", sans-serif;
  font-size: 36px;
  font-weight: 300;
  text-align: left;
`;

const Text = styled.span`
  border-left: 2px solid #ee2527;
  padding-left: 14px;
  display: block;
`;

interface Props {
  title?: string;
  items: Array<string>;
}

const Component: React.FC<Props> = (props: Props) => {
  return (
    <Achievements>
      <Container padded={true}>
        <Title>{props.title}</Title>
        <List>
          {props.items.map((item, index) => (
            <Item key={index}>
              <Text>{item}</Text>
            </Item>
          ))}
        </List>
      </Container>
    </Achievements>
  );
};

export default Component;
