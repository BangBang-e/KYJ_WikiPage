import { WikiData, EditorData, EditorMethods } from "../utils/types";

//* 날짜 초기 포맷
export const formatDate = (data: WikiData[] | null) => {
  if (!data) {
    return [];
  }

  return data.map((wiki) => {
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
};

//* 현재 날짜 및 시간
export const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
};

//* 날짜 형식 변환
export const formatISODate = (dateTimeStr: string) => {
  const dateParts = dateTimeStr.split(/[-T:Z]/);

  return `${dateParts[0]}-${dateParts[1]}-${dateParts[2]} ${dateParts[3]}:${dateParts[4]}`;
};

//* Editor로 작성한 content 변환
export const onChangeEditor = (
  editorInstance: EditorMethods | undefined,
  setState: React.Dispatch<React.SetStateAction<EditorData>>,
) => {
  if (!editorInstance) return;

  const isWysiwygMode = editorInstance.isViewer() && editorInstance.isMarkdownMode();
  let data: string;

  //! if:위지웍으로 작성 시
  //! else:마크다운으로 작성 시
  if (isWysiwygMode) {
    data = editorInstance.getHTML();
  } else {
    data = editorInstance.getMarkdown();
  }
  setState((prevData) => ({
    ...prevData,
    content: data,
  }));
};
