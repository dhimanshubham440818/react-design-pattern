import axios from "axios";
import { getAuthTokenFromCookies } from "../Utils/authTokenUtils";
import { globalVarible } from "../Utils/identitySettings";

// Global auth header
const authHeader = {
    headers: {
        Authorization: getAuthTokenFromCookies(globalVarible.authToken) // Replace with your actual token
    }
};

// GET request
async function getRequest(url) {
    try {
        const response = await axios.get(url, authHeader);
        return response; // Return the full response object
    } catch (error) {
        return error.response ? error.response : { message: error.message }; // Return the full error response or message
    }
}

// POST request
async function postRequest(url, model) {
    try {
        const response = await axios.post(url, model, authHeader);
        return response; // Return the full response object
    } catch (error) {
        return error.response ? error.response : { message: error.message }; // Return the full error response or message
    }
}

// PUT request
async function putRequest(url, model) {
    try {
        const response = await axios.put(url, model, authHeader);
        return response; // Return the full response object
    } catch (error) {
        return error.response ? error.response : { message: error.message }; // Return the full error response or message
    }
}

// PATCH request
async function patchRequest(url, model) {
    try {
        const response = await axios.patch(url, model, authHeader);
        return response; // Return the full response object
    } catch (error) {
        return error.response ? error.response : { message: error.message }; // Return the full error response or message
    }
}

// DELETE request
async function deleteRequest(url, model) {
    try {
        const response = await axios.delete(url, {
            data: model, // Include model in the body for DELETE, if needed
            ...authHeader
        });
        return response; // Return the full response object
    } catch (error) {
        return error.response ? error.response : { message: error.message }; // Return the full error response or message
    }
}

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
