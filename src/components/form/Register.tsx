import * as React from 'react';
import { Form, Label, Input, Select, ErrorMsg } from '../styles/FormElements';
import { Button } from '../styles/Buttons';
import { ComponentWrapper } from '../styles/Wrappers';
import useForm from '../../hooks/useForm';
import registerErrors from '../../utils/registerErrors';

interface Props {}

const Register: React.FC<Props> = () => {
  const [registerData, setRegisterData] = React.useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const errors: RegisterValidationType = {
    nameError: '',
    emailError: '',
    passwordError: '',
    password2Error: '',
  };

  const {
    formData,
    formErrors,
    handleChange,
    handleSubmit,
    cleanForm,
  } = useForm(registerData, errors, registerErrors, cb);

  // React.Dispatch<React.SetStateAction<RegisterData>>
  function cb() {
    console.log('Resisted!!!');
    cleanForm({
      name: '',
      email: '',
      password: '',
      password2: '',
    });
  }

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
          {formErrors.nameError && <ErrorMsg>{formErrors.nameError}</ErrorMsg>}
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
          {formErrors.emailError && (
            <ErrorMsg>{formErrors.emailError}</ErrorMsg>
          )}
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
          {formErrors.passwordError && (
            <ErrorMsg>{formErrors.passwordError}</ErrorMsg>
          )}
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
          {formErrors.password2Error && (
            <ErrorMsg>{formErrors.password2Error}</ErrorMsg>
          )}
        </Label>

        <Button type='submit'>Register</Button>
      </Form>
    </ComponentWrapper>
  );
};
export default Register;
