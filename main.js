let ajaxUsers = [];
$.get({
    url: "https://jsonplaceholder.typicode.com/users",
}).done(function (users) {
    tableHead()
    users.reverse()
    users.forEach((el) => {
        tableString(el, '.table-keys')
    })

})


function tableHead(){
    $('.table').append( `
        <table id="users" >
          <Caption> Table with users data<button id="btn_select_all">Select all</button>  <button id="btn_delete">Delete all selected</button> </Caption>
            <tr class="table-keys">
                <td>Id</td>
                <td>Name</td>
                <td>User name</td>
                <td>Em@il</td>
                <td>Phone number</td>
                <td>Website</td>
                <td></td>
                <td></td>
            </tr>
        </table>
        `)
}

function tableString (user, path){
    $(path).after(` <tr class="content-table">
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td><input type="checkbox"></td>
                    <td><i class="fa-regular fa-trash-can"></i></td>
                </tr>`)
}


