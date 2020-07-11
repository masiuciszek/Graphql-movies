import * as React from 'react';

type InputChangeType = React.ChangeEvent<HTMLInputElement>;
type SubmitFormType = React.FormEvent<HTMLFormElement>;

function useForm<T, E>(initialFormData: T, initialErrors: E) {
  const [formData, setFormData] = React.useState<T>(initialFormData);
  const [formErrors, setFormErrors] = React.useState<E>(initialErrors);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleChange = (event: InputChangeType): void => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: SubmitFormType): void => {
    event.preventDefault();
    // toggle
    // setIsSubmitting((prev) => !prev);
    setIsSubmitting(true);
    console.log('submitting');
    console.log(isSubmitting);
  };

  React.useEffect(() => {}, [formErrors]);

  return {
    formData,
    formErrors,
    handleChange,
    handleSubmit,
  };
}
export default useForm;
