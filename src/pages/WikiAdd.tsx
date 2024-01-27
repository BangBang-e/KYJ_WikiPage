import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import FormAdd from "../components/FormAdd";
import BottomDetail from "../components/BottomDetail";

const initialData = {
  title: "",
  subTitle: "",
  content: "",
  tag: "",
  level: "",
};

function WikiAdd() {
  const editorRef = useRef<Editor>(null);
  const [postData, setPostData] = useState(initialData);

  const onChangeConvert = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (!editorInstance) return;

    const isWysiwygMode = editorInstance.isViewer() && editorInstance.isMarkdownMode();

    let data: string;
    if (isWysiwygMode) {
      //* 위지웍으로 작성 시
      data = editorInstance.getHTML();
    } else {
      //* 마크다운으로 작성 시
      data = editorInstance.getMarkdown();
    }
    setPostData((prevData) => ({
      ...prevData,
      content: data,
    }));
  };

  return (
    <Container>
      <FormAdd postData={postData} setPostData={setPostData} />
      <EditorContainer>
        <Editor
          initialValue={postData.content || " "}
          previewStyle="tab"
          height="80%"
          initialEditType="wysiwyg"
          useCommandShortcut={false}
          language="ko-KR"
          ref={editorRef}
          onChange={onChangeConvert}
          plugins={[colorSyntax]}
        />
      </EditorContainer>
      <BottomDetail pageType="addPage" postData={postData} setPostData={setPostData} />
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
const EditorContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 100%;
`;
