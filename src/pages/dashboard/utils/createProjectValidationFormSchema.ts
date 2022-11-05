import * as Yup from "yup"

export const createProjectValidationFormSchem = Yup.object({
    projectName: Yup.string().required("ProjectName is required "),
    people: Yup.array().required("People are required"),
    description: Yup.string()
})