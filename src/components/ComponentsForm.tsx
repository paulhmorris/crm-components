import { useForm } from "react-hook-form";
import { SelectOptionProps } from "types";
import { sleep } from "utils/helpers";
import { Button } from "./Button";
import { Checkbox } from "./Forms/Checkbox";
import { Radio } from "./Forms/Radio";
import { Select } from "./Forms/Select";
import { TextArea } from "./Forms/TextArea";
import { TextInput } from "./Forms/TextInput";
import { Toggle } from "./Forms/Toggle";
import { Typeahead } from "./Forms/Typeahead";

type FormValues = {
  myInput: string;
  myInput2: string;
  myTextArea: string;
  shouldEmail: boolean;
  shouldText: boolean;
  shouldCall: boolean;
  mySelect: number;
  mySelect2: number;
  myBoolean: boolean;
  myBoolean2: boolean;
  myDisabledBoolean: boolean;
  myDisabledBoolean2: boolean;
  myTypeAhead: number;
  myTypeAheadD: number;
  bestTeam: string;
};

const defaultValues = {
  myInput: "",
  myInput2: "",
  myTextArea: "",
  shouldEmail: true,
  shouldText: true,
  shouldCall: false,
  mySelect: 3,
  mySelect2: 5,
  myBoolean: false,
  myBoolean2: true,
  myDisabledBoolean: true,
  myDisabledBoolean2: false,
  myTypeAhead: 3,
  myTypeAheadD: 5,
  bestTeam: "scarlet",
};

export const ComponentsForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({ defaultValues });

  const onSubmit = async (data: FormValues) => {
    await sleep(1000);
    console.log(data);
  };

  const people: SelectOptionProps[] = [
    { value: 1, label: "Wade Cooper" },
    { value: 2, label: "Arlene Mccoy" },
    { value: 3, label: "Devon Webb" },
    { value: 4, label: "Tom Cook" },
    { value: 5, label: "Tanya Fox" },
    { value: 6, label: "Hellen Schmidt" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4 space-y-4">
        <Select
          control={control}
          label="Select"
          name="mySelect"
          options={people}
          description="I'm a custom select component!"
        />
        <Select
          control={control}
          label="Select"
          name="mySelect2"
          options={people}
          description="I'm a custom select component, but disabled"
          disabled
        />
        <Typeahead
          control={control}
          label="Typeahead"
          name="myTypeAhead"
          options={people}
          description="try me out!"
        />
        <Typeahead
          control={control}
          label="Typeahead"
          name="myTypeAheadD"
          options={people}
          description="try me out!"
          disabled
        />
        <TextInput
          control={control}
          name="myInput"
          label="First name"
          description="Some description about this field"
          disabled
        />
        <TextInput
          control={control}
          name="myInput2"
          label="Last name"
          description="Some description about this field"
        />
        <TextArea
          control={control}
          name="myTextArea"
          label="A long message"
          description="Check it out!"
          defaultValue={""}
        />
        <fieldset>
          <legend>Notification Options</legend>
          <div className="mt-1 space-y-1">
            <Checkbox control={control} name="shouldEmail" label="Email" />
            <Checkbox control={control} name="shouldText" label="Text" />
            <Checkbox control={control} name="shouldCall" label="Call" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Best dev team</legend>
          <div className="mt-1 space-y-1">
            <Radio
              control={control}
              name="bestTeam"
              label="Scarlet"
              value="scarlet"
            />
            <Radio
              control={control}
              name="bestTeam"
              label="Atlas"
              value="atlas"
            />
            <Radio
              control={control}
              name="bestTeam"
              label="Steam"
              value="steam"
            />
          </div>
        </fieldset>
      </div>
      <div className="mt-4 space-y-4">
        <Toggle control={control} name="myBoolean" label="Toggle me!" />
        <Toggle control={control} name="myBoolean2" label="And me!" />
        <Toggle
          control={control}
          name="myDisabledBoolean"
          label="I'm disabled and on 👋🏼"
          disabled
        />
        <Toggle
          control={control}
          name="myDisabledBoolean2"
          label="Disabled and off 🥺"
          disabled
        />
      </div>
      <Button
        variant="primary"
        type="submit"
        className="mt-4"
        disabled={isSubmitting}
      >
        Log Values
      </Button>
    </form>
  );
};
