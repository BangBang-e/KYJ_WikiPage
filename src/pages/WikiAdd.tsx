import React from "react";
import styled from "styled-components";
import BottomDetail from "../components/BottomDetail";

function WikiAdd() {
  return (
    <Container>
      <AddWikiForm>
        <FormTitle>
          <WikiTitle></WikiTitle>
          <WikiSubTitle></WikiSubTitle>
        </FormTitle>
        <FormSelect></FormSelect>
      </AddWikiForm>
      <ContentsContainer>
        <TextContainer>
          <WikiExplain>위키 작성</WikiExplain>
          <WikiContent></WikiContent>
        </TextContainer>
      </ContentsContainer>
      <BottomDetail pageType="addPage" />
    </Container>
  );
}

export default WikiAdd;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem 10rem 0 10rem;
  height: 100%;
  overflow-y: scroll;
  transition: 0.2s;
  @media (max-width: 768px) {
    padding: 2rem 1.5rem 0 1.5rem;
    transition: 0.2s;
  }
`;
const AddWikiForm = styled.article`
  display: flex;
  width: 100%;
  height: 180px;
`;
const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  width: 80%;
  height: 180px;
  border-radius: 16px;
  border: 1.4px solid var(--black-075);
`;
const FormSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 180px;
  border-radius: 16px;
  border: 1.4px solid var(--black-075);
`;
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
  padding: 2rem 0 2rem 1rem;
  height: 100%;
  overflow-y: scroll;
  transition: 0.2s;
  @media (max-width: 768px) {
    flex-direction: column;
    transition: 0.2s;
  }
`;
const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  height: 100%;
  overflow-y: scroll;
`;
const WikiSubTitle = styled.span`
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem;
  height: 40px;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: 1.4px solid var(--black-075);
`;
const WikiExplain = styled.span`
  margin-bottom: 1rem;
  padding: 0.6rem;
  font-size: 1.6rem;
  font-weight: 600;
  transition: 0.2s;
  @media (max-width: 768px) {
    padding: 0.2rem;
    font-size: 1.2rem;
    font-weight: 800;
    transition: 0.2s;
  }
`;
const WikiContent = styled.span`
  display: flex;
  padding: 0.8rem;
  line-height: 1.8rem;
  white-space: normal;
  word-break: keep-all;
`;
