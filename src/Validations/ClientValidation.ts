import * as yup from 'yup';

export const schemaAddClient = yup
    .object()
    .shape({
        companyName: yup
            .string()
            .max(255, 'Nazwa firmy nie może być dłuższa niż 255 znaków')
            .required('Podaj nazwę firmy'),

        streetAddress: yup
            .string()
            .min(4, 'Adres musi posiadać przynajmniej 4 znaki')
            .max(80, 'Adres nie może posiadać więcej niż 80 znaków')
            .required('Podaj ulice i numer'),

        cityAndCode: yup
            .string()
            .min(9, 'Miasto i kod musi posiadać przynajmniej 9 znaków')
            .max(50, 'Miasto i kod nie może posiadać więcej niż 50 znaków')
            .required('Podaj miasto i kod pocztowy'),

        nip: yup
            .string()
            .min(10, 'Numer NIP musi składać się z 10 cyfr')
            .max(10, 'Podany numer NIP jest za długi.')
            .required('Podaj numer NIP'),

        regon: yup
            .string()
            .min(9, 'Numer REGON musi składać się z 9 lub 14 cyfr')
            .max(14, 'Podano za długi numer REGON')
            .required('Podaj numer REGON'),

        email: yup
            .string()
            .email('Nieprawidłowy email')
            .min(5, 'Email musi posiadać przynajmniej 5 znaków')
            .max(255, 'Email nie może być dłuższy niż 255 znaków')
            .required('Podaj email'),

        phoneNumber: yup
            .string()
            .min(9, 'Numer telefonu musi zawierać przynajmniej 9 liczb')
            .max(22, 'Numer telefonu nie może być dłuższy niż 22 liczby')
            .required('Podaj numer telefonu'),
    })
    .required();

