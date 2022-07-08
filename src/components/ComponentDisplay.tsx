import { Form } from "react-final-form";
import { mustBeAlphanumeric } from "utils/inputValidations";
import { Button } from "./Button";
import { Select } from "./Forms/Select";
import { TextArea } from "./Forms/TextArea";
import { TextInput } from "./Forms/TextInput";

export const ComponentDisplay = () => {
  return (
    <>
      {/* <Datalist /> */}
      {/* <DropdownMenu /> */}
      <Select />
      <div className="flex space-x-4">
        <Button variant="primary" text="primary" />
        <Button variant="primary" text="Disabled" disabled />
      </div>
      <div className="flex space-x-4">
        <Button variant="secondary" text="secondary" />
        <Button variant="secondary" text="Disabled" disabled />
      </div>
      <div className="flex space-x-4">
        <Button variant="tertiary" text="tertiary" />
        <Button variant="tertiary" text="Disabled" disabled />
      </div>
      <Form
        onSubmit={() => console.log("hello")}
        render={() => (
          <>
            <TextInput
              label="Basic field"
              name="firstName"
              type="text"
              required
              validate={mustBeAlphanumeric}
            />
            <TextInput
              label="Disabled field"
              name="lastName"
              type="text"
              disabled
            />
            <TextArea name="textarea" label="regular" />
            <TextArea name="disabled" label="disabled" disabled />
          </>
        )}
      />
    </>
  );
};
