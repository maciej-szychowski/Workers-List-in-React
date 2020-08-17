import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({
  tag: Tag,
  type,
  placeholder,
  maxLength,
  name,
  id,
  onChange,
  ...props
}) => (
  <Tag
    type={type}
    placeholder={placeholder}
    maxLength={maxLength}
    name={name}
    className={type !== "radio" ? styles.input : null}
    onChange={onChange}
    id={id}
    {...props}
  />
);

Input.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
};

Input.defaultProps = {
  tag: "input",
  type: "text",
  maxLength: 20,
};

export default Input;
