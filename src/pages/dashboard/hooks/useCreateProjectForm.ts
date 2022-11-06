import { createProjectValidationFormSchem } from "../utils/createProjectValidationFormSchema"

export const useCreateProjectForm = () => {
    const schema = {
        initialValues: {
            projectName: "",
            people: [],
            description: ""
        },
        validationSchema: createProjectValidationFormSchem
    }
    return schema
}