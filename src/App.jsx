import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [task, setTask] = useState("")
  const [list, setList] = useState([])
  const [completed, setCompleted] = useState([])
  const [time, setTime] = useState(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds())


  let d = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()


  setInterval(() => {
    setTime(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds())
  }, 990)


  function addTask() {
    if (task.trim() != '' && task.trim().length >= 4) {
      setList([...list, task])
      setTask('')
    }
    else {
      alert("Please write a proper task")
      setTask('')
    }
  }

  function deleteTask(ind) {
    let updated = list.filter((item, index) => index != ind)
    setList(updated)
  }

  function completeTask(ind) {
    setCompleted([...completed, list[ind]])
    let updated = list.filter((item, index) => index != ind)
    setList(updated)
  }


  return (
    <>
      <p id='date'>Date: {d}, Time: {time}</p>
      <hr />

      <div id="main">
        <h1>To-Do App</h1>

        <input
          id="inp"
          type="text"
          value={task}
          onChange={(event) => { setTask(event.target.value) }}
        />



        <button id='add-btn' onClick={addTask}>Add Task</button>

        <div id="parent">
          {list.length != 0 && <div id="child1">
            <h1>Ongoing Tasks:-</h1>
            {list.map((item, index) =>

              <div className='task-list' key={index}>
                <p>{item}</p>

                <div id='btns'>
                  <img src="check-mark.png" onClick={() => completeTask(index)} />
                  <img src="bin.png" onClick={() => deleteTask(index)} />
                </div>
              </div>

            )}
          </div>}

          {completed.length != 0 && <div id="child2">
            <h1>Completed tasks:-</h1>

            {completed.map((item, index) =>

              <div className='task-list' key={index}>
                <p className='completed-para'>{item}</p>
              </div>

            )}

          </div>}

        </div>
      </div>
    </>
  )
}

export default App