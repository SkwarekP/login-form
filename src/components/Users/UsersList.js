function UsersList(props) {

    let {typeUser} = props.typ;

    if(props.typ){
        typeUser = "Administrator"
    }
    else {typeUser = "Użytkownik"}

    return (
        <tr>
            <td>{props.imie}</td>
            <td>{props.nazwisko}</td>
            <td>{props.email}</td>
            <td>{props.nrtel}</td>
            <td>{typeUser}</td>
        </tr>

    )
}
export default UsersList;