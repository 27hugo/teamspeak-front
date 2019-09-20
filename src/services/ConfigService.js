const config = {
    apiurl: 'http://ts3.owc.cl/buildapi/index.php',
    //apiurl: 'https://owc.cl/buildapi/index.php',
    axios: {
        headers: {
            "Accept":"application/json",
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
        }
    }
}
export { config }
