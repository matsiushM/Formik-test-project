import {Form, Formik, FormikConfig} from "formik";
import {Box, Input} from "@chakra-ui/react";

import {Button} from "components/ui/button.tsx";
import {FormikFieldWrapper} from "shared/ui/FormikFieldWrapper";
import {FORM_INITIAL_VALUES} from "../constants";
import {validationSchema} from "../model/validationSchema";

interface Props {
    onSubmit: FormikConfig<typeof FORM_INITIAL_VALUES>['onSubmit']
}

export const HouseInfoForm = ({onSubmit}: Props) => {
    return (
        <Formik
            initialValues={FORM_INITIAL_VALUES}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <Box display='flex' flexDirection='column' gap="4">
                    <FormikFieldWrapper name="name" label="Название объекта">
                        <Input/>
                    </FormikFieldWrapper>
                    <FormikFieldWrapper name="address" label="Адрес">
                        <Input/>
                    </FormikFieldWrapper>
                    <FormikFieldWrapper name="floor" label="Этаж">
                        <Input type="number"/>
                    </FormikFieldWrapper>
                    <FormikFieldWrapper name="totalFloors" label="Количество этажей в доме">
                        <Input type="number"/>
                    </FormikFieldWrapper>
                    <FormikFieldWrapper name="square" label="Площадь">
                        <Input type="number"/>
                    </FormikFieldWrapper>
                    <FormikFieldWrapper name="livingSquare" label="Жилая площадь">
                        <Input type="number"/>
                    </FormikFieldWrapper>
                    <FormikFieldWrapper name="kitchenSquare" label="Площадь кухни">
                        <Input type="number"/>
                    </FormikFieldWrapper>
                </Box>
                <Box mt="5" display='flex' justifyContent='flex-end'>
                    <Button type="submit">Сохранить</Button>
                </Box>
            </Form>
        </Formik>
    )
}