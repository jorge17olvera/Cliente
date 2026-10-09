function pedirDatosJSONAlServidorYEjecutar(lista,url, funcionALlamar) {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datosJSON) => {
      lista.push(...datosJSON);
        funcionALlamar(lista);
    })
}

function pedirDatosJSONAlServidor(lista,url) {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datosJSON) => {
      lista.push(...datosJSON);
    })
}

