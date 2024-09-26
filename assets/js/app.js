const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//el nombre de las constantes no deve iniciar con caracteres especiales
const n = document.querySelector('name'); 
//el nombre de las constantes no deve iniciar con caracteres especiales 
const b = document.querySelector('#blog');
 //el nombre de las constantes no deve iniciar con caracteres especiales    
const l = document.querySelector('.location');     



async function displayUser(username) {
  //se elimino el caracter especial al nombre de la variable
  n.textContent = 'cargando...'; 
  //marca en rojo la palabra reservada await ya que debe estar relacionada a una funcion async   
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
    //se elimino el caracter especial al nombre de la variable
  n.textContent = '${data.name}';
    //se elimino el caracter especial al nombre de la variable
  b.textContent = '${data.blog}';
    //se elimino el caracter especial al nombre de la variable
  l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);