
export default function validate (userData, errors, setErrors) {
    const mailVerification = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i

    if(userData.email)
    {
        if (userData.email.length > 35) {
            setErrors({...errors, email: 'The mail is too long, the limit is 35 charachers'})
        }
        else if (!mailVerification.test(userData.email)) {
            setErrors({...errors, email: 'Invalid email'})
        }
        else {
            setErrors({...errors, email: ''})
        }
    }

    if(userData.password)
    {
        if (userData.password.length < 6 || userData.password.length > 10) {
            setErrors({...errors, password: 'The password must be at least 6 characters and a maximum of 10 characters.'})
        }
        else if (!/\d/.test(userData.password)) {
            setErrors({...errors, password: 'The password must contain at least one number and both lower and uppercase letters and special characters'})
        }
        else {
            setErrors({...errors, password: ''})
        }
    }
}