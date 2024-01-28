import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PostData, UpdateData } from "../utils/types";
import MockApi from "../utils/mockApi";
import { getCurrentDate } from "../utils/utils";
const mockApi = new MockApi();

interface BottomProps {
  pageType: string;
  postData?: PostData;
  setPostData?: React.Dispatch<React.SetStateAction<PostData>>;
  updateData?: UpdateData;
  setUpdateData?: React.Dispatch<React.SetStateAction<UpdateData>>;
}

function WikiBottom({ pageType, postData, setPostData, updateData, setUpdateData }: BottomProps) {
  const navigate = useNavigate();

  const onClickCancel = () => {
    navigate(-1);
  };

  const handleAddData = async () => {
    if (
      !postData ||
      !postData.title.trim() ||
      !postData.subTitle.trim() ||
      !postData.content.trim() ||
      !postData.tag.trim() ||
      !postData.level.trim()
    ) {
      alert("게시물의 제목과 내용을 모두 작성해 주세요.");
      return;
    }

    try {
      const response = await mockApi.post({
        title: postData.title,
        subTitle: postData.subTitle,
        content: postData.content,
        tag: postData.tag,
        level: postData.level,
      });

      if (response.data && setPostData) {
        setPostData(response.data);
        navigate(-1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUpdateData = async () => {
    if (
      !updateData ||
      !updateData.title.trim() ||
      !updateData.subTitle.trim() ||
      !updateData.content.trim() ||
      !updateData.tag.trim() ||
      !updateData.level.trim()
    ) {
      alert("게시물의 제목과 내용을 모두 작성해 주세요.");
      return;
    }

    const finalData = {
      ...updateData,
      editDate: getCurrentDate(),
    };

    try {
      const response = await mockApi.put(finalData);

      if (response.data && setUpdateData) {
        setUpdateData(response.data);
        navigate("/wikiDetail", { state: { item: response.data } });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <BottomContainer>
      <ButtonContainer>
        {pageType === "addPage" && (
          <Button className="blue" onClick={handleAddData}>
            등록
          </Button>
        )}
        {pageType === "editPage" && (
          <Button className="mint" onClick={handleUpdateData}>
            저장
          </Button>
        )}
        <Button onClick={onClickCancel}>취소</Button>
      </ButtonContainer>
    </BottomContainer>
  );
}

export default WikiBottom;

const BottomContainer = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
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
  &.mint {
    margin-right: 10px;
    padding: 5px 44px;
    color: var(--white);
    border: 1.6px solid var(--mint-btn);
    background-color: var(--mint-btn);
    &:hover {
      background-color: var(--mint-btn-hover);
    }
    &:active {
      background-color: var(--mint-btn-active);
    }
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
