import { ApiResponse, WikiData, Database, PostData } from "./types";

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

  #getLocalDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");

    return `${year}-${Number(month) < 10 ? "0" + month : month}-${day}T${hours}:${minutes}:${seconds}Z`;
  }

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
      date: this.#getLocalDate(),
      editDate: this.#getLocalDate(),
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

  //* DELETE api
}

export default MockApi;
