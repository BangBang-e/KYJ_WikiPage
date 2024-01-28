import { ApiResponse, WikiData, Database, PostData, UpdateData } from "./types";
import { getCurrentDate } from "./utils";

declare global {
  interface Window {
    db?: Database;
  }
}

class MockApi {
  #db: Database;

  constructor() {
    if (!window.db) {
      window.db = require("./db.json");
    }
    this.#db = window.db as Database;
  }

  #setResultSuccess<T>(result: ApiResponse<T>, wikiData: T) {
    result.data = wikiData;
    result.status = 200;
  }

  #setResultFail<T>(result: ApiResponse<T>) {
    if (!result.status) {
      result.status = 400;
    }
  }

  // #getLocalDate() {
  //   const currentDate = new Date();
  //   const year = currentDate.getFullYear();
  //   const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  //   const day = currentDate.getDate().toString().padStart(2, "0");
  //   const hours = currentDate.getHours().toString().padStart(2, "0");
  //   const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  //   const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  //   return `${year}-${Number(month) < 10 ? "0" + month : month}-${day}T${hours}:${minutes}:${seconds}Z`;
  // }

  //* CREATE api
  async post({ title, subTitle, content, tag, level }: PostData): Promise<ApiResponse<WikiData>> {
    const result: ApiResponse<WikiData> = {
      data: null,
      status: null,
    };

    const tempData = {
      id: this.#db.wikiData.length + 1,
      title: title,
      subTitle: subTitle,
      content: content,
      date: getCurrentDate(),
      editDate: getCurrentDate(),
      tag: tag,
      level: level,
    };

    try {
      this.#db.wikiData.push(tempData);
      this.#setResultSuccess(result, tempData);
    } catch (error) {
      console.error(error);
      this.#setResultFail(result);
      return result;
    }
    return result;
  }

  //* READ api
  async get(): Promise<ApiResponse<WikiData[]>> {
    const result: ApiResponse<WikiData[]> = {
      data: null,
      status: null,
    };

    try {
      const tempResult = this.#db.wikiData;
      this.#setResultSuccess(result, tempResult);
      return result;
    } catch (error) {
      console.error(error);
      this.#setResultFail(result);
      return result;
    }
  }

  //* UPDATE api
  async put({ id, title, subTitle, content, editDate, tag, level }: UpdateData): Promise<ApiResponse<WikiData>> {
    const result: ApiResponse<WikiData> = {
      data: null,
      status: null,
    };

    try {
      if (isNaN(id)) {
        result.status = 500;
        throw new Error(`Invalid input id: ${id}`);
      }
      const dataIndex = this.#db.wikiData.findIndex((v) => v.id === id);

      const tempData = {
        id: id,
        title: title || this.#db.wikiData[dataIndex].title,
        subTitle: subTitle || this.#db.wikiData[dataIndex].subTitle,
        content: content || this.#db.wikiData[dataIndex].content,
        date: this.#db.wikiData[dataIndex].date, //! 기존 날짜 사용
        editDate: editDate || this.#db.wikiData[dataIndex].editDate,
        tag: tag || this.#db.wikiData[dataIndex].tag,
        level: level || this.#db.wikiData[dataIndex].level,
      };

      this.#db.wikiData.splice(dataIndex, 1, tempData);
      this.#setResultSuccess(result, tempData);
    } catch (error) {
      console.error(error);
      this.#setResultFail(result);
      return result;
    }
    return result;
  }

  //* DELETE api
  async delete({ idList = [] }: { idList: number[] | number }) {
    const result: ApiResponse<WikiData[]> = {
      data: null,
      status: null,
    };

    try {
      const tempArray = Array.isArray(idList) ? idList : [idList];
      const filteredData = this.#db.wikiData.filter((v) => !tempArray.includes(v.id));
      if (filteredData.length === this.#db.wikiData.length) {
        result.status = 500;
        throw new Error(`Cannot read id: ${tempArray.join(", ")}`);
      }
      this.#db.wikiData = filteredData;
      this.#setResultSuccess(result, this.#db.wikiData);
    } catch (error) {
      console.error(error);
      this.#setResultFail(result);
      return result;
    }
    return result;
  }
}

export default MockApi;
