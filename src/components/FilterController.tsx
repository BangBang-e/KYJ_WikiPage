import React from "react";
import styled from "styled-components";
import LevelFilter from "./LevelFilter";
import { WikiData } from "../utils/types";

interface FilterProps {
  filteredData: WikiData[];
}

function FilterController({ filteredData }: FilterProps) {
  return (
    <FilterContainer>
      <QuantityWrapper>게시물 수: {filteredData.length}개</QuantityWrapper>
      <DropDownContainer>
        <LevelFilter />
      </DropDownContainer>
    </FilterContainer>
  );
}

export default FilterController;

const FilterContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: 80px;
  padding: 1rem 4rem;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1.4px solid var(--black-075);
  background-color: var(--white);
  transition: 0.2s;
  @media (max-width: 768px) {
    margin-top: 40px;
    transition: 0.2s;
  }
`;
const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.9rem;
  font-weight: 400;
`;
const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
`;
