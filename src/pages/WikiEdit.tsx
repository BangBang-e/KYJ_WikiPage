import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import { onChangeEditor } from "../utils/utils";
import FormEdit from "../components/FormEdit";
import WikiBottom from "../components/WikiBottom";

function WikiEdit() {
  const editorRef = useRef<Editor>(null);
  const location = useLocation();
  const [updateData, setUpdateData] = useState(location.state?.item || {});

  const onChangeConvert = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      onChangeEditor(editorInstance, setUpdateData);
    }
  };

  return (
    <Container>
      <FormEdit updateData={updateData} setUpdateData={setUpdateData} />
      <EditorContainer>
        <Editor
          initialValue={updateData.content || " "}
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
      <WikiBottom pageType="editPage" updateData={updateData} setUpdateData={setUpdateData} />
    </Container>
  );
}

export default WikiEdit;

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
