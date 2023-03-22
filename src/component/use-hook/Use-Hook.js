import { useState } from "react";

function useInputHook(validInput) {
  const [Input, setInput] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const valueIsValid = validInput(Input);

  const hasError = !valueIsValid && isTouch;

  function handleInputValue(event) {
    setInput(event.target.value);
  }

  function onCheckIsFocusFn() {
    setIsTouch(true);
  }

  function clearInput() {
    setInput("");
    setIsTouch(false);
  }

  return {
    value: Input,
    setInput,
    hasError,
    handleInputValueFn: handleInputValue,
    onCheckIsFocusFn,
    clearInput,
  };
}

export default useInputHook;
