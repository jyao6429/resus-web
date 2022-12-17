import React, { ChangeEvent, Component } from "react";
import ImageSlice from "./ImageSlice";
import { Form, Grid, InputOnChangeData } from "semantic-ui-react";

export default class SliderDemo extends Component {
  state = { pig: "pig1", index: 0 };
  handleChange = (_e: ChangeEvent<HTMLInputElement>, { name, value }: InputOnChangeData) =>
    this.setState({ [name]: value });

  render() {
    const { pig, index } = this.state;
    return (
      <Grid columns={3}>
        <Grid.Column>
          <ImageSlice folder={`${pig}/images`} index={index} />
        </Grid.Column>
        <Grid.Column as={Form}>
          <Form.Input
            label={`index: ${index}`}
            min={0}
            max={99}
            name="index"
            onChange={this.handleChange}
            step={1}
            type="range"
            value={index}
          />
        </Grid.Column>
        <Grid.Column>
          <ImageSlice
            folder={`${this.state.pig}/labels`}
            index={this.state.index}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
