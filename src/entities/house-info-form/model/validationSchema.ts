import Yup from "shared/config/yupLocales"

const MORE_THAN_SUM_OF_FIELDS_LOCALE = 'Общая площадь должна быть больше суммы жилой площади и площади кухни'

Yup.addMethod(Yup.number, 'moreThanSumOfFields', function (fields: string[]) {
    return this.test('moreThanSumOfFields', MORE_THAN_SUM_OF_FIELDS_LOCALE, (value, context) => {
        const fieldsSum = fields.reduce((accum, field) => {
            return accum + (context.parent[field] || 0)
        }, 0)

        return value && value > fieldsSum || context.createError({
            path: context.path,
            message: MORE_THAN_SUM_OF_FIELDS_LOCALE
        })
    })
})

export const validationSchema = Yup.object({
    name: Yup.string().required(),
    address: Yup.string().required(),
    floor: Yup.number().min(-1).max(Yup.ref('totalFloors')).required(),
    totalFloors: Yup.number().min(3).max(200).required(),
    square: Yup.number().min(0).max(400).required().moreThanSumOfFields(['livingSquare', 'kitchenSquare']),
    livingSquare: Yup.number().min(0).required(),
    kitchenSquare: Yup.number().min(0).required(),
});