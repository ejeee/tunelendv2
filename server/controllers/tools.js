import { query } from '../database/db.js';

// Get all tools with pagination
export async function getAllTools(page = 1, pageSize = 10) {
    try {
        const offset = (page - 1) * pageSize;
        const tools = await query(`SELECT * FROM tools LIMIT ? OFFSET ?`, [pageSize, offset]);
        return tools;
    } catch (error) {
        throw new Error('Error fetching tools: ' + error.message);
    }
}

// Get a single tool by ID
export async function getToolById(id) {
    try {
        const tool = await query(`SELECT * FROM tools WHERE id = ?`, [id]);
        return tool.length ? tool[0] : null;
    } catch (error) {
        throw new Error('Error fetching tool: ' + error.message);
    }
}

// Create a new tool
export async function createTool(toolData) {
    const { users_id, title, description, rate, images, price, period, specs } = toolData;
    try {
        const result = await query(
            `INSERT INTO tools (users_id, title, description, rate, images, price, period, specs)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [users_id, title, description, rate, images, price, period, specs]
        );
        return { id: result.insertId, ...toolData };
    } catch (error) {
        throw new Error('Error creating tool: ' + error.message);
    }
}

// Update an existing tool
export async function updateTool(id, toolData) {
    const { users_id, title, description, rate, images, price, period, specs } = toolData;
    const toolId = parseInt(id, 10); // Convert id to an integer
    if (isNaN(toolId)) {
        throw new Error('Invalid tool ID');
    }
    try {
        const result = await query(
            `UPDATE tools
            SET users_id = ?, title = ?, description = ?, rate = ?, images = ?, price = ?, period = ?, specs = ?
            WHERE id = ?`,
            [users_id, title, description, rate, images, price, period, specs, toolId]
        );

        if (result.changedRows === 0) {
            throw new Error(`Tool with ID ${toolId} not found or no changes were made`);
        }

        return { id: toolId, ...toolData };
    } catch (error) {
        throw new Error('Error updating tool: ' + error.message);
    }
}

// Delete a tool
export async function deleteTool(id) {
    try {
        await query(`DELETE FROM tools WHERE id = ?`, [id]);
        return { success: true, message: 'Tool deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting tool: ' + error.message);
    }
}
