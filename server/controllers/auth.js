import { query } from "../database/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecretKey = process.env.JWT_SECRET;

const saltRounds = 10;

async function getUser () {
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
        
        // Assume getUser() fetches users from database
        const users = await getUser();
        
        // Fetch user from database based on email
        const user = users.find(user => user.email === email);
        
        // Check if user exists and password matches
        if (user && await bcrypt.compare(password, user.password)) {
            // Generate JWT token
            const token = jwt.sign({
                userId: user.id,
                email: user.email
            }, jwtSecretKey, { expiresIn: '1h' }); // Token expires in 1 hour
            
            return { success: true, message: 'Login successful', token: token };
        } else {
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
async function register(email, password) {
    try {
        // Validate input
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const existingUser = await query('SELECT * FROM user WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            throw new Error('Email is already taken');
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
export  {signin, register, getUser};