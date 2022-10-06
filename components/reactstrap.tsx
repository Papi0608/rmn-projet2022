import React from "react";

// reactstrap components
import { FormGroup, Form, Input } from "reactstrap";

function Example() {
  return (
    <>
      <Form>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-text-input">
            Text
          </label>
          <Input
            defaultValue="John Snow"
            id="example-text-input"
            type="text"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-search-input">
            Search
          </label>
          <Input
            defaultValue="Tell me your secret ..."
            id="example-search-input"
            type="search"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-email-input">
            Email
          </label>
          <Input
            defaultValue="@example.com"
            id="example-email-input"
            type="email"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-url-input">
            URL
          </label>
          <Input
            defaultValue=""
            id="example-url-input"
            type="url"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-tel-input">
            Phone
          </label>
          <Input
            defaultValue="40-(770)-888-444"
            id="example-tel-input"
            type="tel"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label
            className=" form-control-label"
            htmlFor="example-password-input"
          >
            Password
          </label>
          <Input
            defaultValue="password"
            id="example-password-input"
            type="password"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-number-input">
            Number
          </label>
          <Input
            defaultValue="23"
            id="example-number-input"
            type="number"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label
            className=" form-control-label"
            htmlFor="example-datetime-local-input"
          >
            Datetime
          </label>
          <Input
            defaultValue="2018-11-23T10:30:00"
            id="example-datetime-local-input"
            type="datetime-local"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-date-input">
            Date
          </label>
          <Input
            defaultValue="2018-11-23"
            id="example-date-input"
            type="date"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-month-input">
            Month
          </label>
          <Input
            defaultValue="2018-11"
            id="example-month-input"
            type="month"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-week-input">
            Week
          </label>
          <Input
            defaultValue="2018-W23"
            id="example-week-input"
            type="week"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-time-input">
            Time
          </label>
          <Input
            defaultValue="10:30:00"
            id="example-time-input"
            type="time"
          ></Input>
        </FormGroup>
        <FormGroup>
          <label className=" form-control-label" htmlFor="example-color-input">
            Color
          </label>
          <Input
            defaultValue="#5e72e4"
            id="example-color-input"
            type="color"
          ></Input>
        </FormGroup>
      </Form>
    </>
  );
}

export default Example;