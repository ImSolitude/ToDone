import React, { useState, useEffect } from "react";

import AddTask from "./AddTask";
import Checkbox from "./Checkbox/Checkbox";
import { Title } from "./Styled/Styled";
import Credit from "./Credit";
import { isEmpty } from "../utils";
import "./App.scss";

const App = props => {
  const [tasks, setTasks] = useState([
    { task: "NodeJS Homework", done: false },
    { task: "Practicing React", done: false },
    { task: "Pay Taxes Today", done: false }
  ]);
  const [tasksNumber, setTasksNumber] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
    return () => {
      localStorage.clear();
    };
  }, []);

  const handleCheck = (checkValue, taskIndex) => {
    let cloneTasks = tasks.map((task, i) =>
      i === taskIndex
        ? Object.assign({}, { task: tasks[taskIndex].task, done: checkValue })
        : task
    );
    setTasks(cloneTasks);
    localStorage.setItem("tasks", JSON.stringify(cloneTasks));
  };

  useEffect(() => {
    setTasksNumber(tasks.filter(task => !task.done).length);
  }, [tasks]);

  const myInput = React.createRef();

  const handleAdd = () => {
    if (!isEmpty(myInput.current.value.trim())) {
      setTasks([...tasks, { task: myInput.current.value.trim(), done: false }]);
    } else {
      return;
    }
    localStorage.setItem(
      "tasks",
      JSON.stringify([
        ...tasks,
        { task: myInput.current.value.trim(), done: false }
      ])
    );
    myInput.current.value = "";
  };

  return (
    <>
      <div className="overlay">
        <div className="container">
          <Title>
            ToDone
            <span className="tasks-number">{tasksNumber}</span>
            <span role="img" aria-label="pushpin">
              📌
            </span>
            <span />
          </Title>
          <ul className="checkbox">
            {tasks.map((task, i) => (
              <Checkbox
                key={i}
                index={i}
                task={task.task}
                done={task.done}
                handleCheck={handleCheck}
              />
            ))}
          </ul>

          <AddTask handleAdd={handleAdd} ref={myInput} />
        </div>
      </div>
      <Credit href="http://github.com/ImSolitude/ToDone" />
    </>
  );
};

export default App;
