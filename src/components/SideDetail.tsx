import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { WikiData } from "../utils/types";
import { formatISODate } from "../utils/utils";
import { PiLinkSimpleHorizontal } from "react-icons/pi";
import { TbArrowBack } from "react-icons/tb";
import { IoMdReturnRight } from "react-icons/io";

interface SideProps {
  wikiData: WikiData;
}

function SideDetail({ wikiData }: SideProps) {
  const navigate = useNavigate();
  const isoPattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/;

  const formattedDate = isoPattern.test(wikiData.date) ? formatISODate(wikiData.date) : wikiData.date;
  const formattedEditDate = isoPattern.test(wikiData.editDate) ? formatISODate(wikiData.editDate) : wikiData.editDate;

  const onClickShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("링크가 클립보드에 복사되었습니다.");
      })
      .catch((err) => {
        console.error("클립보드 복사 실패:", err);
      });
  };

  const onClickCancel = () => {
    navigate("/");
  };

  const onClickMoveToUpdate = () => {
    navigate("/wikiEdit", { state: { item: wikiData } });
  };

  return (
    <SideContainer>
      <WikiTag>{wikiData.tag}</WikiTag>
      <WikiTitle>{wikiData.title}</WikiTitle>
      <WikiDate>{`${formattedDate} 에 작성됨`}</WikiDate>
      {wikiData.date !== wikiData.editDate ? (
        <WikiDate className="editDate">
          <IoMdReturnRight />
          {` ${formattedEditDate} 에 수정됨`}
        </WikiDate>
      ) : null}
      <ButtonContainer>
        <ButtonRow>
          <Button onClick={onClickShare}>
            <IconWrapper>
              <PiLinkSimpleHorizontal />
            </IconWrapper>
            공유
          </Button>
          <Button className="black" onClick={onClickCancel}>
            <IconWrapper>
              <TbArrowBack />
            </IconWrapper>
            취소
          </Button>
        </ButtonRow>
        <ButtonRow>
          <Button className="mint" onClick={onClickMoveToUpdate}>
            수정하기
          </Button>
        </ButtonRow>
      </ButtonContainer>
    </SideContainer>
  );
}

export default SideDetail;

const SideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  border-radius: 10px;
  border: 1.4px solid var(--black-075);
  background-color: var(--white);
  z-index: 20;
  transition: 0.2s;
  @media (max-width: 768px) {
    padding: 1rem 6rem;
    width: 100%;
    height: 120px;
    transition: 0.2s;
  }
  @media (max-width: 480px) {
    padding: 1rem;
    transition: 0.2s;
  }
`;
const WikiTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  width: 5rem;
  font-size: 0.8rem;
  color: var(--black-600);
  border-radius: 4px;
  border: 1px solid var(--black-150);
  background-color: var(--black-050);
  transition: 0.2s;
  @media (max-width: 768px) {
    display: none;
    transition: 0.2s;
  }
`;
const WikiTitle = styled.span`
  margin: 1.4rem 0 2rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.8rem;
  overflow-y: hidden;
  white-space: normal;
  word-break: keep-all;
  transition: 0.2s;
  @media (max-width: 768px) {
    display: none;
    transition: 0.2s;
  }
`;
const WikiDate = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  font-weight: 500;
  transition: 0.2s;
  @media (max-width: 768px) {
    display: none;
    transition: 0.2s;
  }
  &.editDate {
    color: var(--black-300);
    font-weight: 400;
  }
`;
const ButtonContainer = styled.div`
  margin-top: 1.8rem;
  overflow: hidden;
  white-space: nowrap;
  transition: 0.2s;
  @media (max-width: 768px) {
    margin-top: 0;
    transition: 0.2s;
  }
`;
const ButtonRow = styled.span`
  display: flex;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  width: 100%;
  font-size: 1.1rem;
  border-radius: 4px;
  border: 1.6px solid var(--black-075);
  background-color: var(--white);
  cursor: pointer;
  &:hover {
    background-color: var(--black-050);
  }
  &:active {
    background-color: var(--black-075);
  }
  &.black {
    margin-left: 0.6rem;
    color: var(--white);
    border: 1.6px solid var(--black-500);
    background-color: var(--black-500);
    &:hover {
      background-color: var(--black-700);
    }
    &:active {
      background-color: var(--black-900);
    }
  }
  &.mint {
    margin-top: 0.6rem;
    color: var(--white);
    font-weight: 600;
    border: 1.6px solid var(--mint-btn);
    background-color: var(--mint-btn);
    &:hover {
      background-color: var(--mint-btn-hover);
    }
    &:active {
      background-color: var(--mint-btn-active);
    }
  }
`;
const IconWrapper = styled.span`
  margin-right: 0.4rem;
`;
