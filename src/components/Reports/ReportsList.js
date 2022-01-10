function ReportsList(props) {

    return (
        <tr>
            <td>{props.marka}</td>
            <td>{props.model}</td>
            <td>{props.nr_rej}</td>
            <td>{props.osoba}</td>
            <td>{props.typ}</td>
            <td>{props.data}</td>
        </tr>
    )
}
export default ReportsList;