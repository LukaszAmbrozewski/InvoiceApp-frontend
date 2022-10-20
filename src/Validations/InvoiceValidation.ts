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

