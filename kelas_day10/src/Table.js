function Table() {
    return(
        <table className="">
            <tr>
                <th>Nama</th>
                <th>Umur</th>
                <th>Jenis Kelamin</th>
            </tr>
            <tr>
                <td>Adrian</td>
                <td>22</td>
                <td>Pria</td>
                <td>
                    <button>Hapus</button>
                </td>
            </tr>
            <tr>
                <td>Ria</td>
                <td>19</td>
                <td>Wanita</td>
                <td>
                    <button>Hapus</button>
                </td>
            </tr>
        </table>
    )
}

export default Table;