import React from "react";
import styled from "styled-components";

function LevelSelect() {
  return (
    <SelectContainer>
      <option key="none" value="">
        선택안함
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
    </SelectContainer>
  );
}

export default LevelSelect;

const SelectContainer = styled.select`
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
