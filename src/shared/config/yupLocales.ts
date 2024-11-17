import * as Yup from 'yup';

Yup.setLocale({
    mixed: {
        required: 'Поле обязательно для заполнения',
    },
    number: {
        min: 'Значение не может быть меньше ${min}',
        max: 'Значение не может быть больше ${max}',
    },
});

export default Yup;