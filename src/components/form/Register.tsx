import * as React from 'react';
import { Form, Label, Input, Select } from '../styles/FormElements';
import { Button } from '../styles/Buttons';
import { ComponentWrapper } from '../styles/Wrappers';
import useForm from '../../hooks/useForm';

interface Props {}

const Register: React.FC<Props> = () => {
  const [registerData, setRegisterData] = React.useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  let testErrors = {};
  const { formData, formErrors, handleChange, handleSubmit } = useForm(
    registerData,
    testErrors,
  );

  return (
    <ComponentWrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          <span>Name:</span>
          <Input
            type='text'
            placeholder='name'
            name='name'
            onChange={handleChange}
            value={formData.name}
          />
        </Label>
        <Label>
          <span>Email:</span>
          <Input
            type='email'
            placeholder='email'
            name='email'
            onChange={handleChange}
            value={formData.email}
          />
        </Label>
        <Label>
          <span>Password:</span>
          <Input
            type='password'
            placeholder='password'
            name='password'
            onChange={handleChange}
            value={formData.password}
          />
        </Label>
        <Label>
          <span>Repeat Password:</span>
          <Input
            type='password'
            placeholder='repeat password'
            name='password2'
            onChange={handleChange}
            value={formData.password2}
          />
        </Label>

        <Button type='submit'>Register</Button>
      </Form>
    </ComponentWrapper>
  );
};
export default Register;
