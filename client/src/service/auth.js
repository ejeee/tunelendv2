// api.js

import axios from 'axios';

const backendUrl = 'http://localhost:3000';

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
// const signup = async (email, password, confirm_password) => {
//     try {
//         const response = await axios.post(`${backendUrl}/signup`, { email, password, confirm_password });
//         return { success: true, message: response.message };
//     } catch (error) {
//         return { success: false, message: error.response.data.message };
//     }
// };

// Function for user signup
const signup = async (email, password) => {
    try {
        const response = await axios.post(`${backendUrl}/signup`, { email, password });
        console.log('Signup API Response:', response.data); // Log the response data
        return { success: true, message: response.data.message };
    } catch (error) {
        console.error('Signup API Error:', error.response.data); // Log the error response data
        return { success: false, message: error.response.data.message };
    }
};

export { signin, signup };