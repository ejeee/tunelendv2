// api.js

import axios from 'axios';

const backendUrl = 'http://localhost:3000'; // Ganti dengan alamat dan port backend Anda

// Fungsi untuk login
const signin = async (email, password) => {
    try {
        const response = await axios.post(`${backendUrl}/signin`, { email, password });
        return { success: true, message: response.message };
    } catch (error) {
        return { success: false, message: error.response.data.message };
    }
};

// Fungsi untuk registrasi
const signup = async (email, password, confirm_password) => {
    try {
        const response = await axios.post(`${backendUrl}/signup`, { email, password, confirm_password });
        return { success: true, message: response.message };
    } catch (error) {
        return { success: false, message: error.response.data.message };
    }
};

export { signin, signup };