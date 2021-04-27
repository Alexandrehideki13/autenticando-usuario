## Autenticando usuário
### Aplicação feita para autenticar um usuário através do json web token
<!-- <div><img src=""></div> -->
O usuário deverá fazer um cadastro na aplicação, inserindo o email e senha,
<br>
se não houver outra conta com os mesmo dados, será criada sem problemas
<br>
<div><img src="https://github.com/Alexandrehideki13/autenticando-usuario/blob/master/imgs/cadastro-created-201.jpeg"></div>
<br>
caso tenha outra conta igual, será mostrada um erro,
<div><img src="https://github.com/Alexandrehideki13/autenticando-usuario/blob/master/imgs/cadastro--conflit-409.jpeg"></div>
<br>
esse cadastro será adicionado ao banco de dados mysql, na tabela usuários
<div><img src="https://github.com/Alexandrehideki13/autenticando-usuario/blob/master/imgs/tabela-usuarios.jpeg"></div>
<br>
Depois do usuário adicionado, poderá ser feito o login, inserindo o email e senha,<br>
se estiverem corretos será retornado uma mensagem de sucesso e o token
<div><img src="https://github.com/Alexandrehideki13/autenticando-usuario/blob/master/imgs/login-ok-200.jpeg"></div>
<br>
caso não esteja igual o email ou a senha será mostrada uma erro,
<div><img src="https://github.com/Alexandrehideki13/autenticando-usuario/blob/master/imgs/login-unauthorized-401.jpeg"><img src="https://github.com/Alexandrehideki13/autenticando-usuario/blob/master/imgs/login-unauthorized-401-2.jpeg"></div>
<br>
Depois de autenticado, e com o token disponibizado, pode ser feita a autenticação através do header na API,<br>
inserindo o "x-access-token" como header e o valor como o token,<br> 
caso o token seja igual e esteja válido, o usuário será autorizado
<div><img src="https://github.com/Alexandrehideki13/autenticando-usuario/blob/master/imgs/autorizacao-ok-200.jpeg"></div>
<br>
caso não seja inserido corretamente o "x-access-token" ou o token, será mostrada um erro,
<div><img src="https://github.com/Alexandrehideki13/autenticando-usuario/blob/master/imgs/autorizacao-forbidden-403-2.jpeg"></div>
<div><img src="https://github.com/Alexandrehideki13/autenticando-usuario/blob/master/imgs/autorizacao-forbidden-403-1.jpeg"></div>
<br>
