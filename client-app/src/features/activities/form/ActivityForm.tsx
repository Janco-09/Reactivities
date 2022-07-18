import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm(props: Props) {
  const initialState = props.activity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venu: "",
  };

  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    props.createOrEdit(activity);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          vlaue={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Description"
          vlaue={activity.category}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          vlaue={activity.description}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Date"
          vlaue={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          vlaue={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          vlaue={activity.venu}
          name="venu"
          onChange={handleInputChange}
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={props.closeForm}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
