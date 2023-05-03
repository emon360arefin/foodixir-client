const checkLocalStorage = (id) => {

    const status = localStorage.getItem('recipes');
    if (status) {
        const parseStatus = JSON.parse(status);
        if (parseStatus.includes(id)) {
            return true
        } else {
            return false
        }
    } 

}

export default checkLocalStorage