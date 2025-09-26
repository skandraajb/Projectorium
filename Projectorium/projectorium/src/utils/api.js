// src/utils/api.js
import axios from "axios";

export const fetchDataFromApi = async (url, params = {}) => {
    try {
        const { data } = await axios.get("http://localhost:4000" + url, { params });
        return data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const postDataToApi = async (url, formdata) => {
    try {
        console.log("Sending data:", formdata);
        const response = await axios.post("http://localhost:4000" + url, formdata);
        console.log("API Response:", response);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const editData = async (url, updatedData) => {
    try {
        const { data: res } = await axios.put("http://localhost:4000" + url, updatedData);
        return res;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const DelData = async (url) => {
    try {
        const response = await axios.delete("http://localhost:4000" + url);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};