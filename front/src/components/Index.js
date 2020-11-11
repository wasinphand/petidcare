import React from "react";
import FormInputRow, { INPUT_TYPE } from "./FormInputRow";

export default Index;

function Index() {
  return (
    <div>
      <FormInputRow inputType={INPUT_TYPE.TEXT} name="test1" title="test1"/>
    </div>
  );
}
