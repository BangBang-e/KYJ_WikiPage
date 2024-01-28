import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WikiData } from "../utils/types";
import Sidebar from "../components/Sidebar";
import WikiList from "../components/WikiList";
import Footer from "../components/Footer";
import MockApi from "../utils/mockApi";
const mockApi = new MockApi();

const ITEMS_PER_PAGE = 5;

function WikiHome() {
  const [jsonData, setJsonData] = useState<WikiData[]>([]);
  const [page, setPage] = useState(1);
  const [selectedWikis, setSelectedWikis] = useState<number[]>([]);
  const [selectedTag, setSelectedTag] = useState("전체 위키");

  const filteredData = selectedTag === "전체 위키" ? jsonData : jsonData.filter((item) => item.tag === selectedTag);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await mockApi.get();
      if (response.data) {
        const reversedData = [...response.data].reverse();
        const formattedData = formatDate(reversedData);
        setJsonData(formattedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatDate = (data: WikiData[] | null) => {
    if (!data) {
      return [];
    }

    const formattedData = data.map((wiki) => {
      const dateParts = wiki.date.split(/[-T:Z]/);
      const formattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]} ${dateParts[3]}:${dateParts[4]}`;

      const editDateParts = wiki.editDate.split(/[-T:Z]/);
      const formattedEditDate = `${editDateParts[0]}-${editDateParts[1]}-${editDateParts[2]} ${editDateParts[3]}:${editDateParts[4]}`;
      return {
        ...wiki,
        date: formattedDate,
        editDate: formattedEditDate,
      };
    });
    return formattedData;
  };

  return (
    <Container>
      <ContentsContainer>
        <Sidebar setPage={setPage} setSelectedTag={setSelectedTag} />
        <WikiList
          filteredData={filteredData}
          currentData={currentData}
          selectedWikis={selectedWikis}
          setSelectedWikis={setSelectedWikis}
          selectedTag={selectedTag}
        />
      </ContentsContainer>
      <Footer
        filteredData={filteredData}
        setJsonData={setJsonData}
        page={page}
        setPage={setPage}
        selectedWikis={selectedWikis}
        setSelectedWikis={setSelectedWikis}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
      />
    </Container>
  );
}

export default WikiHome;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 130px;
  height: 100%;
  overflow-y: scroll;
  transition: 0.2s;
  @media (max-width: 768px) {
    flex-direction: column;
    transition: 0.2s;
  }
`;
