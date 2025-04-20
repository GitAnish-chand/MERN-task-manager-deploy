
const {createTask, fetchAllTasks, updateTaskById, deleteTaskById} = require('../controllers/taskController')
const router = require('express').Router()

// to get all the task
router.get('/' ,fetchAllTasks)

// to create the task
router.post('/',createTask)

// to update a task
router.put('/:id', updateTaskById)

// to delete a task
router.delete('/:id',deleteTaskById)

module.exports = router