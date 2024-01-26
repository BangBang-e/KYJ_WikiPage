import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { WikiData } from "../utils/types";

interface FooterProps {
  jsonData: WikiData[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  ITEMS_PER_PAGE: number;
  selectedWikis: number[];
  setSelectedWikis: React.Dispatch<React.SetStateAction<number[]>>;
}

function Footer({ jsonData, page, setPage, ITEMS_PER_PAGE, selectedWikis, setSelectedWikis }: FooterProps) {
  const navigate = useNavigate();

  const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    setSelectedWikis([]);
  };

  const onClickAdd = () => {
    navigate(`/WikiAdd`);
  };

  return (
    <FooterContainer>
      <ButtonContainer>
        <Button className="blue" onClick={onClickAdd}>
          작성
        </Button>
        <Button
          // onClick={}
          disabled={selectedWikis.length ? false : true}
        >
          삭제
        </Button>
      </ButtonContainer>
      <PaginationContainer>
        <Stack>
          <Pagination
            count={Math.ceil(jsonData.length / ITEMS_PER_PAGE)}
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
  background-color: var(--black-050);
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
