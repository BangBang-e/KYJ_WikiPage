import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { WikiData } from "../utils/types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MockApi from "../utils/mockApi";
const mockApi = new MockApi();

interface FooterProps {
  filteredData: WikiData[];
  jsonData: WikiData[];
  setJsonData: React.Dispatch<React.SetStateAction<WikiData[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  selectedWikis: number[];
  setSelectedWikis: React.Dispatch<React.SetStateAction<number[]>>;
  ITEMS_PER_PAGE: number;
}

function Footer({
  filteredData,
  jsonData,
  setJsonData,
  page,
  setPage,
  selectedWikis,
  setSelectedWikis,
  ITEMS_PER_PAGE,
}: FooterProps) {
  const navigate = useNavigate();

  const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    setSelectedWikis([]);
  };

  const onClickMoveToAdd = () => {
    navigate(`/wikiAdd`);
    setSelectedWikis([]);
  };

  const handleDeleteData = async () => {
    try {
      await mockApi.delete({ idList: selectedWikis });
      setSelectedWikis([]);

      const refreshData = jsonData.filter((wiki) => !selectedWikis.includes(wiki.id));
      setJsonData(refreshData);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <FooterContainer>
      <ButtonContainer>
        <Button className="blue" onClick={onClickMoveToAdd}>
          작성
        </Button>
        <Button onClick={handleDeleteData} disabled={selectedWikis.length ? false : true}>
          삭제
        </Button>
      </ButtonContainer>
      <PaginationContainer>
        <Stack>
          <Pagination
            count={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
            size="large"
            showFirstButton
            showLastButton
          />
        </Stack>
      </PaginationContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 130px;
  border-top: 1.4px solid var(--black-075);
  background-color: var(--black-025);
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
  background-color: var(--black-025);
  cursor: pointer;
  &:hover {
    background-color: var(--black-050);
  }
  &:active {
    background-color: var(--black-075);
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
const PaginationContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;
