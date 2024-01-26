import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import WikiList from "../components/WikiList";
import Footer from "../components/Footer";
import { WikiData } from "../utils/types";
import MockApi from "../utils/mockApi";
const mockApi = new MockApi();

const ITEMS_PER_PAGE = 5;

function WikiHome() {
  const [jsonData, setJsonData] = useState<WikiData[]>([]);
  const [page, setPage] = useState(1);
  const [selectedWikis, setSelectedWikis] = useState<number[]>([]);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = jsonData.slice(startIndex, endIndex);

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
      return {
        ...wiki,
        date: formattedDate,
      };
    });
    return formattedData;
  };

  return (
    <Container>
      <ContentsContainer>
        <Sidebar />
        <WikiList
          jsonData={jsonData}
          currentData={currentData}
          selectedWikis={selectedWikis}
          setSelectedWikis={setSelectedWikis}
        />
      </ContentsContainer>
      <Footer
        jsonData={jsonData}
        page={page}
        setPage={setPage}
        ITEMS_PER_PAGE={ITEMS_PER_PAGE}
        selectedWikis={selectedWikis}
        setSelectedWikis={setSelectedWikis}
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
  margin-bottom: 130px;
  height: 100%;
  transition: 0.2s;
  @media (max-width: 768px) {
    flex-direction: column;
    transition: 0.2s;
  }
`;
