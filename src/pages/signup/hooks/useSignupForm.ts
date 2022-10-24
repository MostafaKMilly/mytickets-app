import { useFormik } from "formik"
import { signupFormValidationSchema } from "../util/signupFormValidationSchema"

export const useSignupForm = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: signupFormValidationSchema
    })
    return formik
}