function validate() {
    const btnSubmit = document.getElementById('submit');
    const userInfo = Array.from(document.querySelectorAll('#userInfo div input'));
    const [username, email, password, confirmPassword, company] = userInfo;
    const companyNumber = document.getElementById('companyNumber');
    const companyInfo = document.getElementById('companyInfo');
    const divValid = document.getElementById('valid');
    
    company.addEventListener('change', () => {
        companyInfo.style.display = company.checked ? 'block' : 'none';

    })

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        
        const validUsername = /^[A-Za-z0-9]{3,20}$/.test(username.value);
        const validEmail = /@(\w)*\./.test(email.value);
        const validPassword = /^\w{5,15}$/.test(password.value);
        const validConfirmPassord = /^\w{5,15}$/.test(confirmPassword.value);
        const matchPasswords = password.value == confirmPassword.value;
        const validCompanyNumber = Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999;
        const validCompanyInfo = (companyInfo.style.display == 'block' && validCompanyNumber) || (companyInfo.style.display == 'none');
        const allValid = validUsername && validEmail && validPassword && validConfirmPassord && matchPasswords && validCompanyInfo;
        
        username.style.borderColor = validUsername ? 'none' : 'red';
        email.style.borderColor = validEmail ? 'none': 'red';
        password.style.borderColor = validPassword ? 'none': 'red';
        confirmPassword.style.borderColor = validConfirmPassord ? 'none': 'red';
        divValid.style.display = allValid ? 'block' : 'none';

        if (matchPasswords) {
            password.style.borderColor = 'none';
            confirmPassword.style.borderColor = 'none';
        } else {
            password.style.border = 'red';
            confirmPassword.style.border = 'red';
        }
     
        if (company.checked) {
            companyNumber.style.borderColor = validCompanyNumber ? 'none': 'red';
        }
    })
}
