

const showAllData = async () => {
    let usersList = await getAllUsersFomServer()
    displayAllUsersInTable(usersList)
}


const getAllUsersFomServer = () => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest()

        ajax.onreadystatechange = () => {

            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    let usersListFromJason = JSON.parse(ajax.responseText)
                    // console.log(usersList)
                    resolve(usersListFromJason)
                }else {
                    reject('Status is not ok')
                }
            }
        }

        ajax.open('GET', 'https://jsonplaceholder.typicode.com/users')

        ajax.send()

    })

}
const displayAllUsersInTable = (usersList) => {
    let tableBodyElement = document.getElementById('table-body')
    let table = ''
    for (let userElement of usersList) {
        //console.log(userElement)

        table += `
                                <tr>
                                    <td>${userElement.name}</td>
                                    <td>${userElement.username}</td>
                                    <td>${userElement.email}</td>
                                    <td>${userElement.phone}</td>
                                    <td>${userElement.address.city}</td>
                                    <td>${userElement.address.street}</td>
                                    <td>${userElement.address.zipcode}</td>
                                    <td>${userElement.company.name}</td>
                                </tr>
                    
                    `
    }
    tableBodyElement.innerHTML = table

}