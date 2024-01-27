import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface BottomDetailProps {
  pageType: string;
}

function BottomDetail({ pageType }: BottomDetailProps) {
  const navigate = useNavigate();

  const onClickCancle = () => {
    navigate(-1);
  };

  return (
    <BottomContainer>
      <ButtonContainer>
        {pageType === "addPage" && (
          <Button className="blue" onClick={onClickCancle}>
            등록
          </Button>
        )}
        {pageType === "updatePage" && (
          <Button className="mint" onClick={onClickCancle}>
            저장
          </Button>
        )}
        <Button onClick={onClickCancle}>취소</Button>
      </ButtonContainer>
    </BottomContainer>
  );
}

export default BottomDetail;

const BottomContainer = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  border-top: 1.4px solid var(--black-075);
  background-color: var(--black-050);
  z-index: 20;
`;
const ButtonContainer = styled.div`
  margin-bottom: 15px;
  overflow: hidden;
  white-space: nowrap;
`;
const Button = styled.button`
  padding: 5px 40px;
  font-size: 1.1rem;
  border-radius: 4px;
  border: 1.6px solid var(--black-150);
  background-color: var(--black-050);
  cursor: pointer;
  &:hover {
    background-color: var(--black-075);
  }
  &:active {
    background-color: var(--black-100);
  }
  &.mint {
    margin-right: 10px;
    padding: 5px 44px;
    color: var(--white);
    border: 1.6px solid var(--mint-btn);
    background-color: var(--mint-btn);
    &:hover {
      background-color: var(--mint-btn-hover);
    }
    &:active {
      background-color: var(--mint-btn-active);
    }
  }
  &.blue {
    margin-right: 10px;
    padding: 5px 44px;
    color: var(--white);
    border: 1.6px solid var(--blue-btn);
    background-color: var(--blue-btn);
    &:hover {
      background-color: var(--blue-btn-hover);
    }
    &:active {
      background-color: var(--blue-btn-active);
    }
  }
`;
