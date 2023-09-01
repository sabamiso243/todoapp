const Task = require("../models/Task");

const getAllTasks = (req, res) => {
    res.send("タスクをすべて取得しました");
};

const createTask = async (req, res) => {
    try{
       const createTask = await Task.create(req.body);
       res.status(200).json(createTask);
    } catch (err){
       res.status(500).json(err);
    }
};

const getSingleTask = (req, res) => {
    res.send("あるタスクを取得しました");
};

const updateTask = (req, res) => {
    res.send("あるタスクを更新しました");
};

const deleteTask = (req, res) => {
    res.send("あるタスクを削除しました");
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
};