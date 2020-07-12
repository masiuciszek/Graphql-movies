interface RegisterData {
  name: string;
  email: string;
  password: string;
  password2: string;
}

interface ErrorMsg {
  nameError: string;
  emailError: string;
}

type ErrorKey = keyof ErrorMsg;
type RegisterKey = keyof RegisterData;

interface RegisterErrors {
  nameError: string;
  emailError: string;
  passwordError: string;
  password2Error: string;
}

type RegisterValidationType = RegisterErrors;
