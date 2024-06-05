import { query } from "../database/db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

const getUser = async () => {
    const command = 'SELECT * FROM user'; // Select all users
    const result = await query(command);
    return result;
};

async function signin (email, password) {
    try {
        // Validate input
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        const users = await getUser();

        // Fetch user from database
        const user = users.find(user => user.email === email);

        // Check if user exists and password matches
        if (user && await bcrypt.compare(password, user.password)) {
            return { success: true, message: 'Login successful' };
        } else {
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
async function signup(email, password, confirm_password) {
    try {
        // Validate input
        if (!email || !password) {
            throw new Error('Email dan password anda tidak valid');
        }

        if (confirm_password != password) {
            console.log("password", password)
            console.log("confirm_password", confirm_password)
            throw new Error('Password Anda tidak sama!');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const existingUser = await query('SELECT * FROM user WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            throw new Error('email is already taken');
        }

        // Add new user to the database
        const command = 'INSERT INTO user (email, password) VALUES (?, ?)';
        await query(command, [email, hashedPassword]);

        return { success: true, message: 'Registration successful' };
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
export {signin, signup, getUser};