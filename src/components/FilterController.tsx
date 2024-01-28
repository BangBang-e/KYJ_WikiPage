import React from "react";
import styled from "styled-components";
import { WikiData } from "../utils/types";

interface FilterProps {
  filteredData: WikiData[];
  selectedLevel: string;
  setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
}

function FilterController({ filteredData, selectedLevel, setSelectedLevel }: FilterProps) {
  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(event.target.value);
  };

  return (
    <FilterContainer>
      <QuantityWrapper>게시물 수: {filteredData.length}개</QuantityWrapper>
      <SelectContainer>
        <LevelFilter onChange={handleLevelChange} value={selectedLevel}>
          <option key="all" value="">
            모든 레벨
          </option>
          <option key="easy" value="초급">
            초급
          </option>
          <option key="normal" value="중급">
            중급
          </option>
          <option key="hard" value="고급">
            고급
          </option>
        </LevelFilter>
      </SelectContainer>
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
const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LevelFilter = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid var(--black-100);
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    border-color: var(--black-200);
  }
`;
