export const isUserEmailValid = (email) => {
    return (email.includes('@') && email.substring(email.length-4) == ".com") ? true : false;
}

export const isUserPasswordsMatch = (password1,password2) => {
    return (password1.length == password2.length && password1.match(password2)) ? true : false
}

export const isUserIsAnAdult = (age) => {
    const today = new Date();
    const userDateOfBirth = new Date(age)
    return today.getFullYear() - userDateOfBirth.getFullYear() > 18;
};

export const isUserDataValid = (user) => {
    return (
        isUserEmailValid(user.email) 
        && isUserIsAnAdult(user.dateOfBirth) 
        && isUserPasswordsMatch(user.password,user.passwordValidation) ?
        true : false
    )
}

{isUserEmailValid, isUserPasswordsMatch,isUserIsAnAdult, isUserDataValid}