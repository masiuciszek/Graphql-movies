import * as React from 'react';

// Form values
export function useError<T, K extends keyof T, E>(
  values: T,
  key: K,
  initialErrors: E,
) {
  const [errorsMessage, setErrorsMessage] = React.useState<E>(initialErrors);

  if (!values[key]) {
    setErrorsMessage({ ...errorsMessage, msg: 'Please fill in the value' });
  }

  return { errorsMessage };
}

export default useError;
