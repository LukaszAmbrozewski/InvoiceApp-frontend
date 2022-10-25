import * as yup from "yup";

export const schemaRegister = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Nieprawidłowy email")
      .min(5, "Email musi posiadać przynajmniej 5 znaków")
      .max(255, "Email nie może być dłuższy niż 255 znaków")
      .required("Podaj email"),

    password: yup
      .string()
      .min(1, "Pole nie może być puste")
      .max(255, "Hasło nie może być dłuższe niż 255 znaków")
      .required("Podaj hasło")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
        "Hasło musi zawierać małe i wielkie litery, cyfry oraz znak specjalny."
      ),

    checkPassword: yup
      .string()
      .required("Powtórz swoje hasło dla weryfikacji")
      .oneOf([yup.ref("password"), null], "Podane hasła muszą być takie same"),
  })
  .required();

export const schemaLogin = yup
  .object()
  .shape({
    email: yup.string().email("Nieprawidłowy email").required("Podaj email"),

    password: yup
      .string()
      .min(4, "Podane hasło jest za krótkie")
      .max(255, "Email nie może być dłuższy niż 255 znaków")
      .required("Podaj hasło"),
  })
  .required();
