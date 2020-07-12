function registerErrors(formValues: FormValuesType) {
  const errors: RegisterValidationType = {
    nameError: '',
    emailError: '',
    passwordError: '',
    password2Error: '',
  };

  let emailRegex = /[^0-9][a-z]+/gi;

  if (!formValues.name) {
    errors.nameError = 'Name is required';
  } else if (formValues.name.length < 5) {
    errors.nameError = 'Name need to be at least 5 letters long';
  }

  if (!formValues.email) {
    errors.emailError = 'Email is required';
  } else if (!formValues.email.match(emailRegex)) {
    errors.emailError = 'Email need to be valid';
  }
  if (!formValues.password) {
    errors.passwordError = 'Password is required';
  } else if (formValues.password.length < 5) {
    errors.passwordError = 'Password is need to be at least 5 chars';
  }
  if (!formValues.password2) {
    errors.password2Error = 'Repeat password!!';
  } else if (formValues.password !== formValues.password2) {
    errors.password2Error = 'Password does not match!';
  }

  return errors;
}

export default registerErrors;
