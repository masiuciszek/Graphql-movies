import * as React from 'react';

type InputChangeType = React.ChangeEvent<HTMLInputElement>;
type SubmitFormType = React.FormEvent<HTMLFormElement>;

function useForm(
  initialFormData: FormValuesType,
  initialErrors: RegisterValidationType,
  validate: Function,
  handle: Function,
) {
  const [formData, setFormData] = React.useState(initialFormData);
  const [formErrors, setFormErrors] = React.useState<RegisterValidationType>(
    initialErrors,
  );
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
    setFormErrors(validate(formData));
  };

  React.useEffect(() => {
    console.log(formErrors);
    console.log(isSubmitting);

    if (isSubmitting && Object.values(formErrors).length === 0) {
      handle();
    }
    if (Object.values(formErrors).length < 0) {
      console.log('yaaa');
      Object.values(formErrors);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return {
    formData,
    formErrors,
    handleChange,
    handleSubmit,
    cleanForm: setFormData,
  };
}
export default useForm;
