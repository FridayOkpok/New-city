import React from "react";
import { useDispatch } from "react-redux";
import upper from "./up.png";
import down from "./down.png";
import useInputHook from "../use-hook/Use-Hook";
import "./appartment.css";
import { QuoteAction } from "../../store/QuoteStore";

function Apartment() {
  const dispatch = useDispatch();
  const valid = (value) => value.type !== "number";

  const {
    value: apartmentType1,
    setInput: setapartmentType1,
    hasError: apartmentType1HasError,
    handleInputValueFn: onChangeapartmentType1HandelerFn,
    onCheckIsFocusFn: onapartmentType1IsFocused,
    clearInput: onClearapartmentType1,
  } = useInputHook(valid);

  const {
    value: apartmentBed1,
    setInput: setApartmentBed1,
    hasError: apartmentBed1HasError,
    handleInputValueFn: onChangeapartmentBed1HandelerFn,
    onCheckIsFocusFn: onapartmentBed1IsFocused,
    clearInput: onClearapartmentBed1,
  } = useInputHook(valid);

  const {
    value: apartmentFloor1,
    setInput: setApartmentFloor1,
    hasError: apartmentFloor1HasError,
    handleInputValueFn: onChangeapartmentFloor1HandelerFn,
    onCheckIsFocusFn: onapartmentFloor1IsFocused,
    clearInput: onClearapartmentFloor1,
  } = useInputHook(valid);

  // ? this will be for the second input at
  const {
    value: apartmentType2,
    setInput: setapartmentType2,
    hasError: apartmentType2HasError,
    handleInputValueFn: onChangeapartmentType2HandelerFn,
    onCheckIsFocusFn: onapartmentType2IsFocused,
    clearInput: onClearapartmentType2,
  } = useInputHook(valid);

  const {
    value: apartmentBed2,
    setInput: setapartmentBed2,
    hasError: apartmentBed2HasError,
    handleInputValueFn: onChangeapartmentBed2HandelerFn,
    onCheckIsFocusFn: onapartmentBed2IsFocused,
    clearInput: onClearapartmentBed2,
  } = useInputHook(valid);

  const {
    value: apartmentFloor2,
    setInput: setapartmentFloor2,
    hasError: apartmentFloor2HasError,
    handleInputValueFn: onChangeapartmentFloor2HandelerFn,
    onCheckIsFocusFn: onapartmentFloor2IsFocused,
    clearInput: onClearapartmentFloor2,
  } = useInputHook(valid);

  const appartmentHasError =
    !apartmentType1HasError ||
    !apartmentBed1HasError ||
    !apartmentFloor1HasError ||
    !apartmentType2HasError ||
    !apartmentBed2HasError ||
    !apartmentFloor2HasError;

  const appartmentInfo = [
    { apartmentType1, apartmentBed1, apartmentFloor1 },
    { apartmentType2, apartmentBed2, apartmentFloor2 },
  ];

  dispatch(QuoteAction.getAppartmentInput(appartmentInfo));

  return (
    <div className="apartment2">
      <div className="apartment-listOne">
        <div className="inputsection">
          <input
            value={+apartmentType1}
            onChange={onChangeapartmentType1HandelerFn}
            onBlur={onapartmentType1IsFocused}
            placeholder="type"
          />
          <div className="arrow-container">
            <img
              src={upper}
              alt="arrow-up"
              onClick={() => setapartmentType1(+apartmentType1 + 1)}
            />
            <img
              src={down}
              alt="down-arrow"
              onClick={() =>
                setapartmentType1(
                  +apartmentType1 !== 0 ? +apartmentType1 - 1 : ``
                )
              }
            />
          </div>
        </div>
        <div className="inputsection">
          <input
            placeholder="bad"
            value={+apartmentBed1}
            onChange={onChangeapartmentBed1HandelerFn}
            onBlur={onapartmentBed1IsFocused}
          />
          <div className="arrow-container">
            <img
              src={upper}
              alt="arrow-up"
              onClick={() => setApartmentBed1(+apartmentBed1 + 1)}
            />
            <img
              src={down}
              alt="down-arrow"
              onClick={() =>
                setApartmentBed1(
                  +apartmentBed1 === 0 ? +apartmentBed1 : +apartmentBed1 - 1
                )
              }
            />
          </div>
        </div>
        <div className="inputsection">
          <input
            placeholder="floor"
            value={+apartmentFloor1}
            onChange={onChangeapartmentFloor1HandelerFn}
            onBlur={onapartmentFloor1IsFocused}
          />
          <div className="arrow-container">
            <img
              src={upper}
              alt="arrow-up"
              onClick={() => setApartmentFloor1(+apartmentFloor1 + 1)}
            />
            <img
              src={down}
              alt="down-arrow"
              onClick={() =>
                setApartmentFloor1(
                  +apartmentFloor1 === 0
                    ? +apartmentFloor1
                    : +apartmentFloor1 - 1
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="apartment-listTwo">
        <div className="inputsection">
          <input
            placeholder="type"
            value={+apartmentType2}
            onChange={onChangeapartmentType2HandelerFn}
            onBlur={onapartmentType2IsFocused}
          />
          <div className="arrow-container">
            <img
              src={upper}
              alt="arrow-up"
              onClick={() => setapartmentType2(+apartmentType2 + 1)}
            />
            <img
              src={down}
              alt="down-arrow"
              onClick={() =>
                setapartmentType2(
                  +apartmentType2 === 0 ? +apartmentType2 : +apartmentType2 - 1
                )
              }
            />
          </div>
        </div>
        <div className="inputsection">
          <input
            placeholder="bad"
            value={+apartmentBed2}
            onChange={onChangeapartmentBed2HandelerFn}
            onBlur={onapartmentBed2IsFocused}
          />
          <div className="arrow-container">
            <img
              src={upper}
              alt="arrow-up"
              onClick={() => setapartmentBed2(+apartmentBed2 + 1)}
            />
            <img
              src={down}
              alt="down-arrow"
              onClick={() =>
                setapartmentBed2(
                  +apartmentBed2 === 0 ? +apartmentBed2 : +apartmentBed2 - 1
                )
              }
            />
          </div>
        </div>
        <div className="inputsection">
          <input
            placeholder="floor"
            value={+apartmentFloor2}
            onChange={onChangeapartmentFloor2HandelerFn}
            onBlur={onapartmentFloor2IsFocused}
          />
          <div className="arrow-container">
            <img
              src={upper}
              alt="arrow-up"
              onClick={() => setapartmentFloor2(+apartmentFloor2 + 1)}
            />
            <img
              src={down}
              alt="down-arrow"
              onClick={() =>
                setapartmentFloor2(
                  +apartmentFloor2 === 0
                    ? +apartmentFloor2
                    : +apartmentFloor2 - 1
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apartment;
