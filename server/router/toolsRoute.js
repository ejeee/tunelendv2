import express from 'express';
import { getAllTools, getToolById, createTool, updateTool, deleteTool } from '../controllers/tools.js';
import {checkPermission} from '../middleware/rbacMiddleware.js';

const toolsRoute = express.Router();

toolsRoute.get('/tools', checkPermission('read_tool'), async (req, res) => {
    const { page, pageSize } = req.query;
    try {
        const tools = await getAllTools(parseInt(page), parseInt(pageSize));
        res.json(tools);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a tool by ID
toolsRoute.get('/tools/:id', checkPermission('read_tool'), async (req, res) => {
    const { id } = req.params;
    try {
        const tool = await getToolById(id);
        if (tool) {
            res.json(tool);
        } else {
            res.status(404).json({ error: 'Tool not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new tool
toolsRoute.post('/tools', checkPermission('create_tool'), async (req, res) => {
    try {
        const newTool = await createTool(req.body);
        res.status(201).json(newTool);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an existing tool
toolsRoute.put('/tools/:id', checkPermission('update_tool'), async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTool = await updateTool(id, req.body);
        res.json(updatedTool);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a tool
toolsRoute.delete('/tools/:id', checkPermission('delete_tool'), async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteTool(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// toolsRoute.get('/tools', checkPermission('read_tool'), getAllTools);
// toolsRoute.get('/tools/:id', checkPermission('read_tool'), getToolById);
// toolsRoute.post('/tools', checkPermission('create_tool'), createTool);
// toolsRoute.put('/tools/:id', checkPermission('update_tool'), updateTool);
// toolsRoute.delete('/tools/:id', checkPermission('delete_tool'), deleteTool);

export default toolsRoute;
