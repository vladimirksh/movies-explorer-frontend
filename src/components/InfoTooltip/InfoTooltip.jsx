import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import union from "../../images/Union.svg";
import unionError from "../../images/UnionError.svg";

function InfoTooltip({ isOpen, message, onClose }) {
  return (
    <PopupWithForm
      name="_response"
      title={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      {message ? (
        <>
          <div
            className="popup__union"
            style={{ backgroundImage: `url(${union})` }}
          ></div>
          <h4 className="popup__response-text">Операция выполнена успешно!</h4>
        </>
      ) : (
        <>
          <div
            className="popup__union"
            style={{ backgroundImage: `url(${unionError})` }}
          ></div>
          <h4 className="popup__response-text">
            Что-то пошло не так! Попробуйте еще раз.
          </h4>
        </>
      )}
    </PopupWithForm>
  );
}

export default InfoTooltip;
