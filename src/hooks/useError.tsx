import * as React from 'react';

// Form values
export function useError(
  values: FormValuesType,
  initialErrors: ValidationType,
) {
  const [state, setState] = React.useState<ValidationType>(initialErrors);

  if (!values['name']) {
    setState({ ...state, nameError: 'please fill in the name' });
  }
  if (!values['email']) {
    setState({ ...state, emailError: 'please fill your email' });
  }

  return { state };
}

export default useError;
