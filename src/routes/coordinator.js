export const goToHome = (navigate) => {
    navigate('/')
}

export const goToProfile = (navigate, name) => {
    navigate(`/profile/${name}`)
}

/* Pagina para guardar as funções 
de navegação. Elas estão sendo exportadas
 e importadas no local do componente. */