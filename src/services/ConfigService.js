const config = {
    apiurl: 'http://localhost/teamspeak-api/index.php',
    headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
    }
}

export default config;