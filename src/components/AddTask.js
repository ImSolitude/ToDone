import React from "react";
import Button, { AddTitle, AddInput } from "./Styled/Styled";

const AddTask = React.forwardRef((props, ref) => {
  const addButtonRef = React.createRef();
  const handleAdd = () => {
    props.handleAdd();
  };

  const handleEnterPress = e => {
    if ((e.charCode || e.which) === 13) {
      addButtonRef.current.click();
    }
  };

  return (
    <div className="add-task">
      <AddInput
        type="text"
        name="task"
        ref={ref}
        autoComplete="off"
        onKeyPress={handleEnterPress}
      />
      <Button onClick={handleAdd} ref={addButtonRef}>
        <AddTitle size={1}>Add Task</AddTitle>
      </Button>
    </div>
  );
});

export default AddTask;
