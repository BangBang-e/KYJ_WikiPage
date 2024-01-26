import React from "react";
import styled from "styled-components";
import { SlArrowRight } from "react-icons/sl";

function Breadcrumb() {
  return (
    <BreadcrumbContainer>
      <ItemContainer>
        <ItemWrapper className="wiki">위키</ItemWrapper>
        <IconWrapper>
          <SlArrowRight />
        </IconWrapper>
        <ItemWrapper>Here!</ItemWrapper>
      </ItemContainer>
    </BreadcrumbContainer>
  );
}

export default Breadcrumb;

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  border-bottom: 1.4px solid var(--black-075);
  background-color: var(--black-025);
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3.2rem;
`;
const ItemWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 2rem;
  font-weight: 500;
  &.wiki {
    color: var(--black-500);
  }
`;
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  padding-bottom: 0.2rem;
  font-size: 1rem;
`;
