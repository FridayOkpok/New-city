import React from "react";
import { useDispatch } from "react-redux";
import "./getstartedform.css";
import Apartment from "./appartment";
import { useNavigate } from "react-router-dom";
import useInputHook from "../use-hook/Use-Hook";
import { QuoteAction } from "../../store/QuoteStore";

function GetStartedForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const valid = (value) => value.trim() === " ";
  const {
    value: selectedOption,
    hasError: selectOptionHasError,
    handleInputValueFn: handleSelectChange,
    onCheckIsFocusFn: selectOptionIsFocusFn,
    clearInput: clearSelectOptionfn,
  } = useInputHook(valid);

  const {
    value: fromInput,
    hasError: fromHasError,
    handleInputValueFn: onGetFromHandelerFn,
    onCheckIsFocusFn: onCheckFromIsFocusFn,
    clearInput: fromClearInput,
  } = useInputHook(valid);

  const {
    value: toInput,
    hasError: toHasError,
    handleInputValueFn: onGetToHandelerFn,
    onCheckIsFocusFn: onCheckToIsFocusFn,
    clearInput: toClearInput,
  } = useInputHook(valid);

  const getStartedFormHasError =
    !selectOptionHasError || !fromHasError || !toHasError;

  function onSubmmitFormHandelerFn() {
    if (getStartedFormHasError) {
      return;
    }

    const userQuoteInputValue = {
      selectedOption,
      fromInput,
      toInput,
    };

    dispatch(QuoteAction.getFromToInput(userQuoteInputValue));
    dispatch(QuoteAction.storeUserInput());

    fromClearInput();
    toClearInput();
    clearSelectOptionfn();

    navigate("quote-inventory");
  }

  return (
    <div className="startedform-container">
      <div className="form-col1 col">
        <span>MOVING</span>
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          onBlur={selectOptionIsFocusFn}
          className="state"
          name="city"
        >
          <option value=" ">Select your state </option>
          <option value="Lagos "> Lagos </option>
          <option value=" Abia"> Abia </option>
          <option value="Akwa-ibom"> Akwa-ibom</option>
        </select>
      </div>
      <div className="form-col1 col">
        <div className="form-from">
          <label> FROM </label>
          <input
            placeholder="Address"
            value={fromInput}
            onChange={onGetFromHandelerFn}
            onBlur={onCheckFromIsFocusFn}
          />
        </div>
        <div className="form-to">
          <label> TO </label>
          <input
            placeholder="Address"
            value={toInput}
            onChange={onGetToHandelerFn}
            onBlur={onCheckToIsFocusFn}
          />
        </div>
      </div>
      <span className="apartment"> TYPE OF APARTMENT </span>
      <Apartment />
      <div className="form-btn">
        <span onClick={onSubmmitFormHandelerFn}>NEXT</span>
      </div>
    </div>
  );
}

export default GetStartedForm;
