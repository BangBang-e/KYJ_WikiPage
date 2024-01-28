import React from "react";
import styled from "styled-components";
import { PostData } from "../utils/types";
import { LevelSelect, TagSelect } from "./SelectBox";
import { PiNotePencil } from "react-icons/pi";

interface FormAddProps {
  postData: PostData;
  setPostData: React.Dispatch<React.SetStateAction<PostData>>;
}

function FormAdd({ postData, setPostData }: FormAddProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <AddWikiForm>
      <FormTitle>
        <Label>
          <PiNotePencil style={{ marginRight: "8px" }} />
          위키 작성
        </Label>
        <InputWrapper>
          <Input
            className="title"
            type="text"
            placeholder="제목을 입력해 주세요."
            id="title"
            name="title"
            value={postData.title || ""}
            onChange={handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            className="subTitle"
            type="text"
            placeholder="게시물에 대한 간략한 설명을 입력해 주세요."
            id="subTitle"
            name="subTitle"
            value={postData.subTitle || ""}
            onChange={handleInputChange}
          />
        </InputWrapper>
      </FormTitle>
      <FormSelect>
        <Notice>난이도를 선택해 주세요.</Notice>
        <LevelSelect onChange={handleSelectChange} />
        <Notice>강의 유형을 선택해 주세요.</Notice>
        <TagSelect onChange={handleSelectChange} />
      </FormSelect>
    </AddWikiForm>
  );
}

export default FormAdd;

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
  border-radius: 4px;
  border: 1.4px solid var(--black-075);
`;
const Label = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 1.4rem 1.2rem 1rem 1.2rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--black-600);
  border-radius: 4px 4px 0 0;
  border-bottom: 1.4px solid var(--black-075);
  background-color: var(--add-bg);
`;
const FormSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.2rem 1rem 1.2rem;
  width: 20%;
  height: 180px;
  border-radius: 4px;
  border: 1.4px solid var(--black-075);
`;
const Notice = styled.span`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  padding-left: 0.2rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--black-500);
`;
const InputWrapper = styled.span`
  display: flex;
  align-items: center;
  padding: 0.4rem 1.2rem 0 1.2rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;
const Input = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--black-100);
  background-color: var(--white);
  &.title {
    width: 100%;
    font-size: 1.4rem;
  }
  &.subTitle {
    width: 100%;
    font-size: 1rem;
  }
`;
