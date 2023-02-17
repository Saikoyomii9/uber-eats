/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NewRestaurant } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewRestaurantUpdateFormInputValues = {
    name?: string;
    address?: string;
    image?: string;
    adminSub?: string;
};
export declare type NewRestaurantUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    adminSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewRestaurantUpdateFormOverridesProps = {
    NewRestaurantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    adminSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewRestaurantUpdateFormProps = React.PropsWithChildren<{
    overrides?: NewRestaurantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    newRestaurant?: NewRestaurant;
    onSubmit?: (fields: NewRestaurantUpdateFormInputValues) => NewRestaurantUpdateFormInputValues;
    onSuccess?: (fields: NewRestaurantUpdateFormInputValues) => void;
    onError?: (fields: NewRestaurantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewRestaurantUpdateFormInputValues) => NewRestaurantUpdateFormInputValues;
    onValidate?: NewRestaurantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NewRestaurantUpdateForm(props: NewRestaurantUpdateFormProps): React.ReactElement;
