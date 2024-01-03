import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
export const Alert = ({ msg, type, setError }) => {
  const [msgType, setMsgType] = useState("alert alert-info");
  useEffect(() => {
    switch (type) {
      case "error":
        setMsgType("alert-danger");
        break;
      case "warning":
        setMsgType("alert-warning");
        break;
      case "success":
        setMsgType("alert-success");
        break;
      default:
        setMsgType("alert-info");
        break;
    }
  }, [type]);

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [msg]);
  return (
    msg &&
    createPortal(
      <div className={`row alert-msg alert ${msgType}`} role="alert">
        <div className="col-10 text-uppercase ">{type}</div>
        <div className="col-2">
          <FontAwesomeIcon icon={faClose} onClick={() => setError("")} />
        </div>
        <div className="col12">{msg}</div>
      </div>,
      document.getElementById("alert-msg-container")
    )
  );
};
