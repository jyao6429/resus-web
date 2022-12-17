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
    const pig_path = `${process.env.PUBLIC_URL}/data/images/pig${pig}`

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <ImageSlice folder={`${pig_path}/images`} index={index} />
        </Grid.Column>
        <Grid.Column as={Form}>
          <Image src={`${pig_path}/label_recon.png`} alt={pig} centered/>
          <Form.Input
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
          <ImageSlice folder={`${pig_path}/labels`} index={index} />
        </Grid.Column>
      </Grid>
    );
  }
}
