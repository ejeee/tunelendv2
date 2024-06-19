import axios from 'axios';

const backendUrl = 'http://localhost:3000';

const getAllTools = async (page, pageSize) => {
    try {
        const response = await axios.get(`${backendUrl}/tools`, {
            params: { page, pageSize }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching tools: ' + error.message);
    }
};

const getToolById = async (id) => {
    try {
        const response = await axios.get(`${backendUrl}/tools/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching tool: ' + error.message);
    }
};

const createTool = async (toolData) => {
    try {
        const response = await axios.post(`${backendUrl}/tools`, toolData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating tool: ' + error.message);
    }
};

const updateTool = async (id, toolData) => {
    try {
        const response = await axios.put(`${backendUrl}/tools/${id}`, toolData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating tool: ' + error.message);
    }
};

const deleteTool = async (id) => {
    try {
        const response = await axios.delete(`${backendUrl}/tools/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting tool: ' + error.message);
    }
};

export { getAllTools, getToolById, createTool, updateTool, deleteTool };