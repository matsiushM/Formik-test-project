import {Form, Formik} from "formik";
import {Box, Button, Tabs} from "@chakra-ui/react";

import {Radio, RadioGroup} from "components/ui/radio";
import {Checkbox} from "components/ui/checkbox";
import {HouseInfoForm} from "entities/house-info-form";
import {FormikFieldWrapper} from "shared/ui/FormikFieldWrapper";

export const App = () => {
    const handleDisplayValuesInAlert = (v: Record<string, unknown>) => {
        alert(JSON.stringify(v, null, 2));
    }

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Tabs.Root
                defaultValue="first"
                variant="plain"
                mt='5'
            >
                <Tabs.List bg="bg.muted" rounded="l3" p="1">
                    <Tabs.Trigger value="first">
                        First task
                    </Tabs.Trigger>
                    <Tabs.Trigger value="second">
                        Second task
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="first">
                    <Formik
                        initialValues={{radio: "1", terms: false, num: 0}}
                        onSubmit={handleDisplayValuesInAlert}
                    >
                        <Form>
                            <Box display='flex' flexDirection='column' gap="4">
                                <FormikFieldWrapper name="radio" label="Выберите опцию">
                                    <RadioGroup display='flex' flexDirection='column' gap="2">
                                        <Radio value="1">Опция 1</Radio>
                                        <Radio value="2">Опция 2</Radio>
                                        <Radio value="3">Опция 3</Radio>
                                    </RadioGroup>
                                </FormikFieldWrapper>
                                <FormikFieldWrapper name="terms">
                                    <Checkbox>Accept terms and conditions</Checkbox>
                                </FormikFieldWrapper>
                                <Button type="submit">display</Button>
                            </Box>
                        </Form>
                    </Formik>
                </Tabs.Content>
                <Tabs.Content value="second">
                    <HouseInfoForm
                        onSubmit={handleDisplayValuesInAlert}
                    />
                </Tabs.Content>
            </Tabs.Root>
        </Box>
    )
}