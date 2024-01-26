import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import FilterController from "./FilterController";
import { RxRocket } from "react-icons/rx";
import { WikiData } from "../utils/types";

interface WikiListProps {
  jsonData: WikiData[];
  currentData: WikiData[];
  selectedWikis: number[];
  setSelectedWikis: React.Dispatch<React.SetStateAction<number[]>>;
}

function WikiList({ jsonData, currentData, selectedWikis, setSelectedWikis }: WikiListProps) {
  const navigate = useNavigate();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, wikiId: number) => {
    const { checked } = e.target;

    if (checked) {
      setSelectedWikis((prevIds) => [...prevIds, wikiId]);
    } else {
      setSelectedWikis((prevIds) => prevIds.filter((id) => id !== wikiId));
    }
  };

  const onClickContent = (item: WikiData) => {
    navigate(`/wikiDetail`, { state: { item } });
  };

  return (
    <ListContainer>
      <Breadcrumb />
      <FilterController jsonData={jsonData} />
      <List>
        {currentData.length ? (
          <UlItems>
            {currentData.map((item) => (
              <LiItem key={item.id}>
                <Thumbnail onClick={() => onClickContent(item)}>
                  <WikiTitle>{item.title}</WikiTitle>
                  <WikiLevel>
                    <Level>{item.level}</Level>
                  </WikiLevel>
                </Thumbnail>
                <Info>
                  <WikiTag>{item.tag}</WikiTag>
                  <WikiSubTitle>{item.subTitle}</WikiSubTitle>
                  <WikiDate>
                    {item.date}
                    <Checkbox
                      type="checkbox"
                      checked={selectedWikis.includes(item.id)}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e, item.id)}
                    />
                  </WikiDate>
                </Info>
              </LiItem>
            ))}
          </UlItems>
        ) : (
          <NoData>
            <IconWrapper>
              <RxRocket />
            </IconWrapper>
            작성된 게시물이 없습니다.
          </NoData>
        )}
      </List>
    </ListContainer>
  );
}

export default WikiList;

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const List = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 5rem 1rem 2rem;
  width: 100%;
  height: 100%;
  transition: 0.2s;
  @media (max-width: 768px) {
    padding: 0.5rem 2rem 1rem 2rem;
    transition: 0.2s;
  }
`;
const UlItems = styled.ul`
  height: 100%;
  margin-bottom: 30px;
`;
const LiItem = styled.li`
  display: flex;
  margin-bottom: 0.95rem;
  width: 100%;
  height: 18%;
`;
const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  height: 100%;
  border-radius: 8px;
  background-color: var(--black-200);
  cursor: pointer;
`;
const WikiTitle = styled.span`
  display: flex;
  padding: 0.6rem 2.6rem 0 1rem;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.8rem;
  transition: 0.2s;
  @media (max-width: 768px) {
    padding: 0.3rem 1rem 0 0.5rem;
    font-size: 1.2rem;
    line-height: 1.4rem;
    transition: 0.2s;
  }
`;
const WikiLevel = styled.span`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;
const Level = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 60px;
  height: 28px;
  font-size: 1.2rem;
  font-weight: 900;
  color: var(--white);
  border-radius: 8px 0 8px 0;
  background-color: var(--black-400);
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.4rem 1.6rem 0.2rem 1.6rem;
  width: 45%;
  height: 100%;
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
`;
const WikiSubTitle = styled.span`
  margin: 0 0 0.2rem 0.6rem;
  font-size: 1rem;
`;
const WikiDate = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--black-400);
  border-bottom: 1px solid var(--black-050);
`;
const Checkbox = styled.input`
  appearance: none;
  margin-left: 15px;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  border: 1px solid var(--black);
  border-radius: 4px;
  cursor: pointer;
  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 130% 130%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--checkbox);
    border-color: var(--checkbox);
  }
`;
const NoData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  color: var(--black-200);
`;
const IconWrapper = styled.span`
  display: flex;
  margin-bottom: 2rem;
  font-size: 5.5rem;
  color: var(--black-150);
`;
