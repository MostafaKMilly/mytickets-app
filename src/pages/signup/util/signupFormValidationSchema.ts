import * as Yup from "yup"

export const signupFormValidationSchema = Yup.object({
    username: Yup.string()
        .max(20, "Username must be 20 characters or less")
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
        }),
    email: Yup.string().required("Email is required").email("Email is not valid")
},

)