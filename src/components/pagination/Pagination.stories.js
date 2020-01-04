import Pagination from "./pagination"
import React from "react"
import { storiesOf } from "@storybook/react"
import { number, withKnobs } from "@storybook/addon-knobs"

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Pagination currentPage="5" numPages="10" basePath="/my/path/"/>
  ))
  .add('Configurable', () => (
    <Pagination
      currentPage={number('Current page', 2, {min: 1, step: 1})}
      numPages={number('Total pages', 5, {min: 1, step: 1})}
    />
  ))
