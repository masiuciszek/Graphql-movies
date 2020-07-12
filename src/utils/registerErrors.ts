type T = RegisterData;

function registerErrors(formValues: T) {
  const errors: RegisterValidationType = {
    nameError: '',
    emailError: '',
    passwordError: '',
    password2Error: '',
  };

  if (!formValues.name) {
    errors.nameError = 'Name is required';
  } else if (formValues.name.length < 5) {
    errors.nameError = 'Name need to be at least 5 letters long';
  }
  return errors;
}

export default registerErrors;
