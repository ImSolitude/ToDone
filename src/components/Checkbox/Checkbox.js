import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Checkbox.scss";

const Checkbox = props => {
  const [check, setCheck] = useState(false);
  const handleCheck = e => {
    setCheck(e.target.checked);
    props.handleCheck(e.target.checked, props.index);
  };

  useEffect(() => {
    setCheck(props.done);
  }, [props.done]);

  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);

    return () => {
      setInProp(false);
    };
  }, []);
  return (
    <CSSTransition in={inProp} timeout={200} classNames="todo">
      <li className="checkbox-item todo">
        <input
          type="checkbox"
          id={`checkbox-${props.index}`}
          checked={check}
          onChange={handleCheck}
        />
        <label htmlFor={`checkbox-${props.index}`}>
          <span className="checkbox-label">{props.task}</span>
          <span className="styled-checkbox" />
        </label>
      </li>
    </CSSTransition>
  );
};

export default Checkbox;
