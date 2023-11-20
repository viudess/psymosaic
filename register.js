/* 
    Faz o registro do usuário no banco de dados.
*/
async function register() {
    // Pega os campos da tela de login (register.html)
    const emailField = document.getElementById('email_field');
    const passwordField = document.getElementById('password_field');

    // faz a request no endpoint de registro na api enviando os dados da tela.
    // retorna o token da autenticação
    await fetch(
        'http://localhost:3000/api/auth/register', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'email': emailField.value,
                'password': passwordField.value, 
            }),
        });
}