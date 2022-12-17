import React, { ChangeEvent, Component, SyntheticEvent } from "react";
import { DropdownProps, Form, Grid, Image, InputOnChangeData } from "semantic-ui-react";

const pigs = [
  3,
  4,
  7
]

const options = pigs.map((p) => ({
  key: p,
  text: `Pig ${p}`,
  value: p
}))

export default class SliderDemo extends Component {
  state = { pig: 7, index: 0 };
  handleChange = (
    _e: ChangeEvent<HTMLInputElement> | SyntheticEvent<HTMLElement, Event>,
    { name, value }: InputOnChangeData | DropdownProps
  ) => this.setState({ [name]: value });

  render() {
    const { pig, index } = this.state;
    const pig_path = `${process.env.PUBLIC_URL}/data/images/pig${pig}`;

    return (
      <Grid centered columns={3}>
        <Grid.Column textAlign="center">
          <Image src={`${pig_path}/images/${index}.png`} centered />
          <p>Sliced ultrasound image from reconstructed volume</p>
        </Grid.Column>
        <Grid.Column textAlign="center" as={Form}>
          <Image src={`${pig_path}/label_recon.png`} alt={pig} centered />
          <p>Top-down view of reconstructed label volume</p>
          <Form.Input
            min={0}
            max={99}
            name="index"
            onChange={this.handleChange}
            step={1}
            type="range"
            value={index}
          />
          <Form.Dropdown
            label="Select a pig ultrasound reconstruction:"
            name="pig"
            onChange={this.handleChange}
            options={options}
            value={pig}
          />
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Image src={`${pig_path}/labels/${index}.png`} centered />
          <p>Sliced label from reconstructed volume</p>
        </Grid.Column>
      </Grid>
    );
  }
}
