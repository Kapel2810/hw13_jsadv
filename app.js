
/////////////////////////////
//------------ex1--------
// const showAllData = async () => {
//     let usersList = await getAllUsersFomServer()
//     displayAllUsersInTable(usersList)
// }
// const getAllUsersFomServer = () => {
//     return new Promise((resolve, reject) => {
//         const ajax = new XMLHttpRequest()

//         ajax.onreadystatechange = () => {

//             if (ajax.readyState === 4) {
//                 if (ajax.status === 200) {
//                     let usersListFromJason = JSON.parse(ajax.responseText)
//                     // console.log(usersList)
//                     resolve(usersListFromJason)
//                 }else {
//                     reject('Status is not ok')
//                 }
//             }
//         }

//         ajax.open('GET', 'https://jsonplaceholder.typicode.com/users')

//         ajax.send()

//     })

// }
// const displayAllUsersInTable = (usersList) => {
//     let tableBodyElement = document.getElementById('table-body')
//     let table = ''
//     for (let userElement of usersList) {
//         //console.log(userElement)

//         table += `
//                                 <tr>
//                                     <td>${userElement.name}</td>
//                                     <td>${userElement.username}</td>
//                                     <td>${userElement.email}</td>
//                                     <td>${userElement.phone}</td>
//                                     <td>${userElement.address.city}</td>
//                                     <td>${userElement.address.street}</td>
//                                     <td>${userElement.address.zipcode}</td>
//                                     <td>${userElement.company.name}</td>
//                                 </tr>

//                     `
//     }
//     tableBodyElement.innerHTML = table

// }


/////////////////////////////////////
//------ex 2------

let inputElement = document.getElementById('input-id')
let displayElement = document.getElementById('display')

const showAllData = async () => {
    let usersList = await getAllUsersFomServer()
    displayUsersInList(usersList)

}

const getAllUsersFomServer = () => {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest()

        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    let usersList = JSON.parse(ajax.responseText)
                    resolve(usersList)
                }else {
                    reject()
                }
            }
        }
        ajax.open('GET', 'https://jsonplaceholder.typicode.com/users')
        ajax.send()

    })
}
const displayUsersInList = (usersList) => {
    
    let list = ''
    for (let userElement of usersList) {
        if (inputElement.value >= 1 && inputElement.value <= 10) {

            list += `
                        
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"> <b>name</b>: ${userElement.name} 
                                    <b>username</b>: ${userElement.username}  
                                    <b>phone number </b>: ${userElement.email} 
                                    <b>city</b>: ${userElement.address.city} 
                                    <b>street</b>: ${userElement.address.street} 
                                    <b>zipcode</b>: ${userElement.address.zipcode} 
                                    <b>company</b>: ${userElement.company.name}</li>
                                </ul>
                        `
        }else {
            // alert( 'the number is out of range')
        }
           displayElement.innerHTML = list
          
    }
    
}