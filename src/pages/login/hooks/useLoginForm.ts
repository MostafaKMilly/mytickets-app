import { useFormik } from "formik"
import { loginFormValidationSchema } from "../util/loginFormValidationSchema"

export const useLoginForm = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: loginFormValidationSchema
    })
    return formik
}