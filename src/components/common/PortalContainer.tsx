import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const StyledPortalContainer = styled.div`
  position: fixed;
  ${(props: any) =>
    props.left &&
    props.top &&
    css`
      left: ${props.left}px;
      top: ${props.top}px;
    `}
`;

const PortalContainer = ({ children, left, top }: any) => {
  const isSSR = typeof window === "undefined";

  useEffect(() => {
    if (!isSSR) {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflow = "hidden";
        return () => {
          body.removeAttribute("style");
        };
      }
    }
  }, [isSSR]);
  return (
    <StyledPortalContainer left={left} top={top}>
      {children}
    </StyledPortalContainer>
  );
};

export default PortalContainer;
