import * as yup from 'yup';

export const schemaAddInvoice = yup
    .object()
    .shape({
        place: yup
            .string()
            .min(2, 'Nazwa miejsca wykonania usługi nie może być krótsza niż 2 znaki')
            .max(40, 'Nazwa miejsca wykonania usługi nie może być dłuższa niż 40 znaków')
            .required('Podaj nazwę miejsca wykonania usługi'),

        creationDate: yup
            .string()
            .max(10, 'Nieprawidłowa data')
            .required('Podaj datę utworzenia faktury'),

        dateOfService: yup
            .string()
            .max(10, 'Nieprawidłowa data')
            .required('Podaj datę wykonania usługi'),

        personCreatingInvoice: yup
            .string()
            .min(6, 'Imię i nazwisko musi posiadać conajmniej 6 znaków')
            .max(120, 'Imię i nazwisko nie może być dłuższe niż 120 znaków')
            .required('Podaj imię i nazwisko'),
    })
    .required();

export const schemaAddPayment = yup
    .object()
    .shape({
        dueDate: yup
            .string()
            .max(10, 'Nieprawidłowa data')
            .required('Podaj datę utworzenia faktury'),

        accountNumber: yup
            .number()
            .min(10000000000000000000000000, 'Numer konta musi składać się z 26 cyfr')
            .max(99999999999999999999999999, 'Numer konta musi składać się z 26 cyfr')
    })
    .required();

