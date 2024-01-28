import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WikiData } from "../utils/types";
import { formatDate } from "../utils/utils";
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
  const [selectedLevel, setSelectedLevel] = useState("");

  const filteredData = jsonData.filter((item) => {
    const tagMatch = selectedTag === "전체 위키" || item.tag === selectedTag;
    const levelMatch = !selectedLevel || item.level === selectedLevel;
    return tagMatch && levelMatch;
  });

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
      console.error("Error fetch data:", error);
    }
  };

  return (
    <Container>
      <ContentsContainer>
        <Sidebar setPage={setPage} setSelectedTag={setSelectedTag} setSelectedWikis={setSelectedWikis} />
        <WikiList
          filteredData={filteredData}
          currentData={currentData}
          selectedWikis={selectedWikis}
          setSelectedWikis={setSelectedWikis}
          selectedTag={selectedTag}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
        />
      </ContentsContainer>
      <Footer
        filteredData={filteredData}
        jsonData={jsonData}
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
