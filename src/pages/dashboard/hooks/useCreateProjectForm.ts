import { useFormik } from "formik"
import { createProjectValidationFormSchem } from "../utils/createProjectValidationFormSchema"

export const useCreateProjectForm = () => {
    const formik = useFormik({
        initialValues: {
            projectName: "",
            people: "",
            description: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: createProjectValidationFormSchem
    })
    return formik
}