import React from 'react'
import { Link } from 'react-router-dom'
import API from '../axios/Api'

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'


function DataTable({ mhs, refresh }) {
    async function deleteMhs() {
        await API.delete('deletemhs.php?id=' + mhs.id)

        return refresh()
    }

    function deleteConfirm() {
        confirmAlert({
            title: 'Data Mahasiswa',
            message: "Apakah anda ingin menghapus NIM: " + mhs.nim + " ? ",
            buttons: [
                {
                    label: 'OKE DELETE',
                    onClick: () => deleteMhs()
                },
                {
                    label: 'NO',
                    onClick: () => { }
                },
            ]
        })
    }

    return (
        <tr>
            <td>{mhs.nim}</td>
            <td>{mhs.nama}</td>
            <td>{mhs.fakultas}</td>
            <td>
                <Link to={"/edit/" + mhs.id}>
                    <i className="fa fa-pencil-square-o"></i>
                </Link> 
                || 
                <Link>
                    <i className="fa fa-trash"onClick={deleteConfirm}></i>
                </Link>
                 
            </td>
        </tr>
    )
}

export default DataTable
