    const taskModel = require("../models/taskModel");

    const createTask = async (req, res) => {
        const data = req.body;
        try {

            const model = new taskModel(data);
            await model.save()
            res.status(201)
                .json({ message: 'task is created', success: "true" })

        } catch (err) {
            res.status(500).json({ message: 'failed to create task', success: false,err });
        }
    }

    
    const updateTaskById = async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const obj = {$set:{...body}};
            const data = await  taskModel.findByIdAndUpdate(id,obj);
            res.status(200)
                .json({ message: 'All tasks', success: "true",data })

        } catch (err) {
            res.status(500).json({ message: 'failed to update task', success: false });
        }
    }

    const deleteTaskById = async (req, res) => {
        try {
            const id = req.params.id;
            await  taskModel.findByIdAndDelete(id);
            res.status(200)
                .json({ message: 'task is deleted', success: "true" })

        } catch (err) {
            res.status(500).json({ message: 'failed to delete task', success: false });
        }
    }

    const fetchAllTasks = async (req, res) => {
        try {

            const data = await  taskModel.find({});
            res.status(200)
                .json({ message: 'All tasks', success: "true",data })

        } catch (err) {
            res.status(500).json({ message: 'failed to fetch all task', success: false });
        }
    }
    module.exports  = {
        createTask,
        fetchAllTasks,
        updateTaskById,
        deleteTaskById
    };