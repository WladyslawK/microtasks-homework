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
    const addTask = (listID: string, title: string) => setTasks({...tasks, [listID]: [...tasks[listID], {id: v1(), title, isDone: false}]})
    const changeStatus = (listID: string, taskId: string, isDone: boolean) => setTasks({...tasks, [listID]: tasks[listID].map(task => task.id === taskId ? {...task, isDone} : task)})


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

    const changeFilter = (listID: string, value: FilterValuesType) => setTodolists(todolists.map(list => list.id === listID ? {...list, filter: value} : list))
    const removeTodoList = (todoListID: string) => setTodolists(todolists.filter(list => list.id !== todoListID))

    return (
        <div className="App">

            {
                todolists.map((list => <Todolist key={list.id} id={list.id} title={list.title} tasks={filteredTasks(list.filter, tasks[list.id])} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask} changeTaskStatus={changeStatus} filter={list.filter} removeList={removeTodoList}/>))
            }

        </div>
    );
}

export default App;
