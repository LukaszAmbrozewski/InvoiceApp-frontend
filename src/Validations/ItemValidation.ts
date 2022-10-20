import * as yup from 'yup';

export const schemaAddItem = yup
    .object()
    .shape({
        name: yup
            .string()
            .min(2, 'Nazwa produktu lub usługi nie może być krótsza niż 2 znaki')
            .max(255, 'Nazwa produktu lub usługi nie może być dłuższa niż 255 znaków')
            .required('Podaj nazwę produktu lub usługi'),

        quantity: yup
            .number()
            .max(999999, 'Podano zbyt dużą ilość')
            .required('Podaj ilość'),

        netValue: yup
            .number()
            .max(999999999999, 'Cena nie zawierać więcej niż 12 cyfr')
            .required('Cena nie może być pusta'),

        taxRate: yup
            .number()
            .max(999999, 'Podatek nie może zawierać więcej niż')
            .required('Podaj wartość podatku VAT'),
    })
    .required();