/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewRestaurantCreateFormInputValues = {
    name?: string;
    address?: string;
    image?: string;
    adminSub?: string;
};
export declare type NewRestaurantCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    adminSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewRestaurantCreateFormOverridesProps = {
    NewRestaurantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    adminSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewRestaurantCreateFormProps = React.PropsWithChildren<{
    overrides?: NewRestaurantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewRestaurantCreateFormInputValues) => NewRestaurantCreateFormInputValues;
    onSuccess?: (fields: NewRestaurantCreateFormInputValues) => void;
    onError?: (fields: NewRestaurantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewRestaurantCreateFormInputValues) => NewRestaurantCreateFormInputValues;
    onValidate?: NewRestaurantCreateFormValidationValues;
} & React.CSSProperties>;
export default function NewRestaurantCreateForm(props: NewRestaurantCreateFormProps): React.ReactElement;
