import React, { ChangeEvent, Component } from "react";
import ImageSlice from "./ImageSlice";
import { Form, Grid, Image, InputOnChangeData } from "semantic-ui-react";

export default class SliderDemo extends Component {
  state = { pig: 7, index: 0 };
  handleChange = (
    _e: ChangeEvent<HTMLInputElement>,
    { name, value }: InputOnChangeData
  ) => this.setState({ [name]: value });

  render() {
    const { pig, index } = this.state;
    return (
      <Grid columns={3}>
        <Grid.Column>
          <ImageSlice folder={`../data/images/pig${pig}/images`} index={index} />
        </Grid.Column>
        <Grid.Column as={Form}>
          <Image src={`../data/images/pig${pig}/label_recon.png`} alt={pig} />
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
          <ImageSlice folder={`../data/images/pig${pig}/labels`} index={index} />
        </Grid.Column>
      </Grid>
    );
  }
}
