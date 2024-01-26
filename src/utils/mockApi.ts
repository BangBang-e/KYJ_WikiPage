import { ApiResponse, WikiData, Database } from "./types";

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

  #setResultSuccess(result: ApiResponse<WikiData[]>, wikiData: WikiData[]) {
    result.data = wikiData || Object.assign([], this.#db.wikiData);
    result.status = 200;
  }

  #setResultFail(result: ApiResponse<WikiData[]>) {
    if (!result.status) {
      result.status = 400;
    }
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
}

export default MockApi;
