const StoreData = (id) => {
    let array = [];

    const status = localStorage.getItem('recipes');
    if (status) {
        const parseStatus = JSON.parse(status);
        if (parseStatus.includes(id)) {

        } else {
            parseStatus.push(id);
            const stringArray = JSON.stringify(parseStatus);
            localStorage.setItem('recipes', stringArray)
        }

    } else {
        array.push(id);
        const stringArray = JSON.stringify(array);
        localStorage.setItem('recipes', stringArray)
    }
    return true


}

export default StoreData