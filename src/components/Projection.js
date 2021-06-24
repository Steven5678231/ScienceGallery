import React from "react";
import io from "socket.io-client";
import P5Wrapper from "react-p5-wrapper";
import { sketch } from "./ProjectionSunset";
import { surveyJSON } from "./Survey_JSON";
import * as Survey from "survey-react";

function Projection(props) {
  //console.log("survey", props);
  //const socket = io.connect();
  //socket.emit("survey-connect", { room: props.match.params.room });
  // socket.join(props.match.params.room);

  return (
    <div className="Projection">
      <P5Wrapper sketch={sketch} />
      <p>Projections</p>

      <a href={"/projection/"}> </a>
    </div>
  );
}
export default Projection;
