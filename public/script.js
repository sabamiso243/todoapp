// /api/vi/tasksからタスクを読み込む
const showTasks = async () => {
    try {
        //APIをたたく 
        const {data: tasks} = await axios.get("/api/v1/tasks");
        console.log(tasks);
    } catch(err){
        console.log(err);
    }
};

showTasks();