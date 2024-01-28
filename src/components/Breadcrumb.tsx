import React from "react";
import styled from "styled-components";
import { SlArrowRight } from "react-icons/sl";

interface BreadcrumbProps {
  selectedTag: string;
}

function Breadcrumb({ selectedTag }: BreadcrumbProps) {
  return (
    <BreadcrumbContainer>
      <ItemContainer>
        <ItemWrapper className="wiki">위키</ItemWrapper>
        <IconWrapper>
          <SlArrowRight />
        </IconWrapper>
        <ItemWrapper>{selectedTag}</ItemWrapper>
      </ItemContainer>
    </BreadcrumbContainer>
  );
}

export default Breadcrumb;

const BreadcrumbContainer = styled.article`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  border-bottom: 1.4px solid var(--black-075);
  background-color: var(--black-025);
  transition: 0.2s;
  @media (max-width: 768px) {
    height: 40px;
    transition: 0.2s;
  }
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
  white-space: nowrap;
  overflow: hidden;
  font-size: 2rem;
  font-weight: 500;
  transition: 0.2s;
  &.wiki {
    color: var(--black-500);
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    transition: 0.2s;
  }
`;
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  padding-bottom: 0.2rem;
  font-size: 1rem;
`;
