import axios from "axios";
import { showSwal } from "@/utils/notification";

export const getOrgData = async () => {
  try {
    const response = await axios.get(
      "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=all"
    );
    return response.data;
  } catch (error) {
    showSwal(false, "API occurs an error");
    throw error;
  }
};
