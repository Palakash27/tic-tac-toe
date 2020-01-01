import React from "react";
import Button from "./Button";

export default function Buttons(props) {
  return (
    <div style={{ textAlign: "center " }}>
      <div>
        <Button
          id={1}
          player={props.player}
          changePlayer={props.changePlayer}
          fillBoxArrayWithIndex={props.fillBoxArrayWithIndex}
          disabled={props.disabled}
        />

        <Button
          id={2}
          player={props.player}
          changePlayer={props.changePlayer}
          fillBoxArrayWithIndex={props.fillBoxArrayWithIndex}
          disabled={props.disabled}
        />
        <Button
          id={3}
          player={props.player}
          changePlayer={props.changePlayer}
          fillBoxArrayWithIndex={props.fillBoxArrayWithIndex}
          disabled={props.disabled}
        />
      </div>
      <div>
        <Button
          id={4}
          player={props.player}
          changePlayer={props.changePlayer}
          fillBoxArrayWithIndex={props.fillBoxArrayWithIndex}
          disabled={props.disabled}
        />
        <Button
          id={5}
          player={props.player}
          changePlayer={props.changePlayer}
          fillBoxArrayWithIndex={props.fillBoxArrayWithIndex}
          disabled={props.disabled}
        />
        <Button
          id={6}
          player={props.player}
          changePlayer={props.changePlayer}
          fillBoxArrayWithIndex={props.fillBoxArrayWithIndex}
          disabled={props.disabled}
        />
      </div>
      <div>
        <Button
          id={7}
          player={props.player}
          changePlayer={props.changePlayer}
          fillBoxArrayWithIndex={props.fillBoxArrayWithIndex}
          disabled={props.disabled}
        />
        <Button
          id={8}
          player={props.player}
          changePlayer={props.changePlayer}
          fillBoxArrayWithIndex={props.fillBoxArrayWithIndex}
          disabled={props.disabled}
        />

        <Button
          id={9}
          player={props.player}
          changePlayer={props.changePlayer}
          fillBoxArrayWithIndex={props.fillBoxArrayWithIndex}
          disabled={props.disabled}
        />
      </div>
    </div>
  );
}
