import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type todolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<todolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'completed'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });



    const removeTask = (listID: string, id: string) => setTasks({...tasks, [listID]: tasks[listID].filter(task => task.id !== id)})


       /*const filteredTasks = tasks[listID].filter(t => t.id != id)
        setTasks({...tasks, [listID]: filteredTasks})*/


    const addTask = (listID: string, title: string) => setTasks({...tasks, [listID]: [...tasks[listID], {id: v1(), title, isDone: false}]})


       /*let task = {id: v1(), title, isDone: false}
        tasks[listID].push(task)
        setTasks({...tasks})*/


    const changeStatus = (listID: string, taskId: string, isDone: boolean) => setTasks({...tasks, [listID]: tasks[listID].map(task => task.id === taskId ? {...task, isDone} : task)})


        /*let task = tasks[listID].find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone
            }

       setTasks({...tasks})*/



/*    let tasksForTodolist = tasks;*/

    const filteredTasks = (filter: FilterValuesType, tasks: TaskType[]) => {
        switch (filter){
            case "active":
                return tasks.filter(task => !task.isDone)
            case "completed":
                return tasks.filter(task => task.isDone)
            default:
                return tasks
        }
    }

   /* if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }*/

    const changeFilter = (listID: string, value: FilterValuesType) => setTodolists(todolists.map(list => list.id === listID ? {...list, filter: value} : list))

        /*const list = todolists.find(list => list.id === listID)
        if(list)
            list.filter = value
        setTodolists([...todolists])*/

    //additional remove the todoList

    const removeTodoList = (todoListID: string) => setTodolists(todolists.filter(list => list.id !== todoListID))

    return (
        <div className="App">

            {
                todolists.map((list => <Todolist key={list.id} id={list.id} title={list.title} tasks={filteredTasks(list.filter, tasks[list.id])} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask} changeTaskStatus={changeStatus} filter={list.filter} removeList={removeTodoList}/>))
            }


            {/*<Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />*/}
        </div>
    );
}

export default App;
