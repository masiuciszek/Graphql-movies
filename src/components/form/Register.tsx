import * as React from 'react';
import { Form, Label, Input, Select } from '../styles/FormElements';
import { Button } from '../styles/Buttons';

interface Props {}

const Register: React.FC<Props> = () => {
  return (
    <Form>
      <Label>
        <span>Name:</span>
        <Input type='text' placeholder='name' name='name' />
      </Label>
      <Label>
        <span>Email:</span>
        <Input type='email' placeholder='email' name='email' />
      </Label>
      <Label>
        <span>Password:</span>
        <Input type='password' placeholder='password' name='password' />
      </Label>
      <Label>
        <span>Repeat Password:</span>
        <Input type='password' placeholder='repeat password' name='password2' />
      </Label>

      <Button type='submit'>Register</Button>
    </Form>
  );
};
export default Register;
