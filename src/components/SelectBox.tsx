import React from "react";
import styled from "styled-components";

interface SelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

function LevelSelect({ onChange, value }: SelectProps & { value?: string }) {
  return (
    <SelectContainer name="level" onChange={onChange} value={value}>
      <option key="none" value="">
        레벨 선택
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

function TagSelect({ onChange, value }: SelectProps & { value?: string }) {
  return (
    <SelectContainer name="tag" onChange={onChange} value={value}>
      <option key="none" value="">
        태그 선택
      </option>
      <option key="programming" value="프로그래밍">
        프로그래밍
      </option>
      <option key="cloud" value="클라우드">
        클라우드
      </option>
      <option key="data" value="데이터 분석">
        데이터 분석
      </option>
      <option key="ai" value="인공지능">
        인공지능
      </option>
    </SelectContainer>
  );
}

export { LevelSelect, TagSelect };

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
