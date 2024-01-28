import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { TagProps } from "../utils/types";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import SideDetail from "../components/SideDetail";

function WikiDetail() {
  const location = useLocation();
  const wikiData = location.state?.item;

  return (
    <Container>
      <LabelContainer $tag={wikiData.tag}>
        <WikiLevel $tag={wikiData.tag}>{wikiData.level}</WikiLevel>
        <WikiTitle>{wikiData.title}</WikiTitle>
      </LabelContainer>
      <ContentsContainer>
        <TextContainer>
          <WikiSubTitle>{wikiData.subTitle}</WikiSubTitle>
          <EditorContainer>
            <Viewer initialValue={wikiData.content} />
          </EditorContainer>
        </TextContainer>
        <SideContainer>
          <SideDetail wikiData={wikiData} />
        </SideContainer>
      </ContentsContainer>
    </Container>
  );
}

export default WikiDetail;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem 3.5rem 0 3.5rem;
  height: 100%;
  overflow-y: scroll;
  transition: 0.2s;
  @media (max-width: 768px) {
    padding: 2rem 1.5rem 0 1.5rem;
    transition: 0.2s;
  }
`;
const LabelContainer = styled.article<TagProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  width: 100%;
  height: 180px;
  border-radius: 16px;
  background: ${(props) => getThumbnailColor(props.$tag)};
  transition: 0.2s;
  @media (max-width: 768px) {
    padding-bottom: 1rem;
    height: 140px;
    transition: 0.2s;
  }
`;
const getThumbnailColor = (tag: string) => {
  switch (tag) {
    case "프로그래밍":
      return "var(--thumbnail-bg-1)";
    case "클라우드":
      return "var(--thumbnail-bg-2)";
    case "데이터 분석":
      return "var(--thumbnail-bg-3)";
    case "인공지능":
      return "var(--thumbnail-bg-4)";
  }
};
const WikiLevel = styled.span<TagProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 60px;
  height: 24px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--white);
  border-radius: 6px;
  background-color: ${(props) => getLevelColor(props.$tag)};
  transition: 0.2s;
  @media (max-width: 768px) {
    width: 50px;
    height: 22px;
    font-size: 0.9rem;
    transition: 0.2s;
  }
`;
const getLevelColor = (tag: string) => {
  switch (tag) {
    case "프로그래밍":
      return "var(--level-bg-1)";
    case "클라우드":
      return "var(--level-bg-2)";
    case "데이터 분석":
      return "var(--level-bg-3)";
    case "인공지능":
      return "var(--level-bg-4)";
  }
};
const WikiTitle = styled.span`
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.4rem;
  text-align: center;
  overflow-y: hidden;
  white-space: normal;
  word-break: keep-all;
  transition: 0.2s;
  @media (max-width: 768px) {
    padding: 0.3rem 1rem 0 0.5rem;
    font-size: 1.6rem;
    line-height: 2rem;
    transition: 0.2s;
  }
`;
const ContentsContainer = styled.div`
  display: flex;
  position: relative;
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  transition: 0.2s;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0 2rem 0;
    transition: 0.2s;
  }
`;
const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  width: 70%;
  height: 100%;
  overflow-y: scroll;
  border-radius: 10px;
  border: 1.4px solid var(--black-075);
  background-color: var(--white);
  transition: 0.2s;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    width: 100%;
    transition: 0.2s;
  }
`;
const SideContainer = styled.article`
  width: 30%;
  transition: 0.2s;
  @media (max-width: 768px) {
    width: 100%;
    transition: 0.2s;
  }
`;
const WikiSubTitle = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  padding: 2rem 1.2rem 1rem 1.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1.4px solid var(--black-075);
  transition: 0.2s;
  @media (max-width: 768px) {
    padding: 1.4rem 1rem 1rem 1rem;
    transition: 0.2s;
  }
`;
const EditorContainer = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
`;
