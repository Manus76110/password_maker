const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const dataNumbers = "01234567989";
const dataSymbols = "&é'(-è_çà)=§/.?#{[|`";
const rangeValue = document.getElementById('password-length')
const passwordOutput = document.getElementById("password-output")

const generatePassword = () => {
    let data = [];
    let password = "";

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (number.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);
    

    if (data.length === 0) {
        alert("Veuillez séléctionner des critères avant de générer");
        return;
    }

    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)]
    }

    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "Mot de passe copié !"

    setTimeout(() => {
        generateButton.textContent = "Générer le mot de passe";
    }, 2000);   
};

generateButton.addEventListener("click", generatePassword);