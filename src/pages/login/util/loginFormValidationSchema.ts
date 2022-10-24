import * as Yup from "yup"

export const loginFormValidationSchema = Yup.object({
    username: Yup.string()
        .max(15, "Username must be 15 characters or less")
        .required("Username is required"),
    password: Yup.string()
        .required("Please enter a password")
        .min(8, "Password too short")
        .test("Is valid password", "Is not valid password", (value) => {
            if (!value) {
                return false
            }
            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            let validConditions = 0;
            const numberOfMustBeValidConditions = 2;
            const conditions = [hasLowerCase, hasUpperCase];
            conditions.forEach((condition) =>
                condition ? validConditions++ : null
            );
            if (validConditions === numberOfMustBeValidConditions) {
                return true;
            }
            return false;
        })
})