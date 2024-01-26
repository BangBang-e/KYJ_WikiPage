import React from "react";
import styled from "styled-components";
import LevelSelect from "./LevelSelect";
import { WikiData } from "../utils/types";

function FilterController({ jsonData }: { jsonData: WikiData[] }) {
  return (
    <FilterContainer>
      <QuantityWrapper>게시물 수: {jsonData.length}개</QuantityWrapper>
      <DropDownContainer>
        <LevelSelect />
      </DropDownContainer>
    </FilterContainer>
  );
}

export default FilterController;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1.4px solid var(--black-075);
`;
const QuantityWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 400;
`;
const DropDownContainer = styled.span`
  display: flex;
  align-items: center;
`;
