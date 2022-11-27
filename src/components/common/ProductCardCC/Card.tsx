import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import { createContext, useContext } from "react";

const CardContainer = styled.div`
  padding: 12px;
  background: white;
  box-shadow: 0px 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  line-height: 1.5em;
`;

const Text = styled.p`
  line-height: 1.5em;
`;

const CardContext = createContext(false);

const Card = ({ classes, children, ...props }: any) => {
  return (
    <CardContext.Provider value={true}>
      <div className={classNames("card__cc", classes)} {...props}>
        <CardContainer>{children}</CardContainer>
      </div>
    </CardContext.Provider>
  );
};

const CardText = ({ children, ...props }: any) => {
  const context = useCard();
  return <Text {...props}>{children}</Text>;
};

const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("Element must be rendered within Card component");
  }
  return context;
};

Card.Image = Image;
Card.Title = Title;
Card.Text = CardText;

export default Card;
