import React from "react";
import { Card, Icon, img } from "semantic-ui-react";
import Cast from "./Cast.js";

const src =
  "https://encrypted-tbn0.gstatic.com/imgs?q=tbn%3AANd9GcSs9LnbQHIpqntBmtLJYT5DcUDQxnT42fHs6lwlQOb0XsFDOlV8&usqp=CAU";

const renderCasts = (props) => {
  return props.casts.map((cast, key) => <Cast key={cast.id} cast={cast} />);
};

const CastContainer = (props) => (
  <div style={{ position: "relative", top: "100px" }}>
    <Card.Group itemsPerRow={4}>{renderCasts(props)}</Card.Group>
  </div>
);

export default CastContainer;
