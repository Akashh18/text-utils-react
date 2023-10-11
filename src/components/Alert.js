import React from 'react'
import Alert from "react-bootstrap/Alert";

export default function Alertmsg(props) {
  
  return (
    props.alert && (
      <div className="alertt">
        <Alert variant={props.alert.type}>
          <strong>{props.alert.msg}</strong>
        </Alert>
      </div>
    )
  );
}
