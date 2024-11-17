import React, {PropsWithChildren} from "react";
import {FieldHookConfig, useField} from "formik";

import {Field, FieldProps} from "components/ui/field";

type Props = { label?: FieldProps['label'] } & FieldHookConfig<unknown>

export const FormikFieldWrapper = (
    {children, label, ...props}: PropsWithChildren<Props>
) => {
    const [field, meta] = useField(props);

    return <Field
        invalid={Boolean(meta.error) && meta.touched}
        errorText={meta.error}
        label={label}
    >
        {React.cloneElement(children as React.ReactElement, {...field, ...props})}
    </Field>
}