import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { LuMonitor, LuBrainCog } from "react-icons/lu";
import { IoIosCloudOutline } from "react-icons/io";
import { GoDatabase } from "react-icons/go";

interface SidebarProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setSelectedTag: (tag: string) => void;
  setSelectedWikis: React.Dispatch<React.SetStateAction<number[]>>;
}

function Sidebar({ setPage, setSelectedTag, setSelectedWikis }: SidebarProps) {
  const [activeTag, setActiveTag] = useState("전체 위키");

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    setSelectedTag(tag);
    setPage(1);
    setSelectedWikis([]);
  };

  return (
    <SidebarContainer>
      <TagContainer active={activeTag === "전체 위키"} onClick={() => handleTagClick("전체 위키")}>
        <IconWrapper className="sm">
          <AiOutlineMenu />
        </IconWrapper>
        <TagWrapper>전체 위키</TagWrapper>
      </TagContainer>
      <TagContainer active={activeTag === "프로그래밍"} onClick={() => handleTagClick("프로그래밍")}>
        <IconWrapper className="md">
          <LuMonitor />
        </IconWrapper>
        <TagWrapper>프로그래밍</TagWrapper>
      </TagContainer>
      <TagContainer active={activeTag === "클라우드"} onClick={() => handleTagClick("클라우드")}>
        <IconWrapper className="lg">
          <IoIosCloudOutline />
        </IconWrapper>
        <TagWrapper>클라우드</TagWrapper>
      </TagContainer>
      <TagContainer active={activeTag === "데이터 분석"} onClick={() => handleTagClick("데이터 분석")}>
        <IconWrapper className="md">
          <GoDatabase />
        </IconWrapper>
        <TagWrapper>데이터 분석</TagWrapper>
      </TagContainer>
      <TagContainer active={activeTag === "인공지능"} onClick={() => handleTagClick("인공지능")}>
        <IconWrapper className="lg">
          <LuBrainCog />
        </IconWrapper>
        <TagWrapper>인공지능</TagWrapper>
      </TagContainer>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 70px;
  top: 0;
  left: 0;
  padding: 2rem 1rem 0 3rem;
  width: 17rem;
  height: 100%;
  border-right: 1.4px solid var(--black-075);
  background-color: var(--white);
  z-index: 10;
  transition: 0.2s;
  @media (max-width: 768px) {
    flex-direction: row;
    padding: 0.5rem 1rem;
    width: 100%;
    height: 3.5rem;
    border-right: 0;
    border-bottom: 1.4px solid var(--black-075);
    transition: 0.2s;
  }
`;
const TagContainer = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  padding: 8px 15px;
  border-radius: 6px;
  background-color: ${(props) => (props.active ? "var(--black-050)" : "")};
  cursor: pointer;
  &:hover {
    background-color: var(--black-025);
  }
  &:active {
    background-color: var(--black-050);
  }
`;
const TagWrapper = styled.span`
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  transition: 0.2s;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    transition: 0.2s;
  }
`;
const IconWrapper = styled.span`
  display: flex;
  margin-right: 0.6rem;
  transition: 0.2s;
  &.sm {
    font-size: 1.3rem;
  }
  &.md {
    font-size: 1.4rem;
  }
  &.lg {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    margin-right: 0.2rem;
    transition: 0.2s;
  }
`;
