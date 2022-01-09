function UsersList(props) {

    return (
        <tr>
            <td>{props.imie}</td>
            <td>{props.nazwisko}</td>
            <td>{props.email}</td>
            <td>{props.nrtel}</td>
            <td>{props.typ}</td>
        </tr>

    )
}
export default UsersList;