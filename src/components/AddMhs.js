import React, { Component } from 'react'
import API from '../axios/Api'

export class AddMhs extends Component {

    state = {
        'nim': '',
        'nama': '',
        'fakultas': ''
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        // console.log(this.state)
        await API.post('/addmhs.php',this.state)
        this.props.history.push('/')

    }

    render() {
        return (
            <div className="container">
                <h2>Tambah Mahasiswa</h2>

                <form onSubmit={this.handlerSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>NIM</td>
                                <td><input type="text" name="nim" onChange={this.handlerChange} /></td>
                            </tr>
                            <tr>
                                <td>Nama Mahasiswa</td>
                                <td><input type="text" name="nama" onChange={this.handlerChange} /></td>
                            </tr>
                            <tr>
                                <td>Fakultas</td>
                                <td><input type="text" name="fakultas" onChange={this.handlerChange} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" value="Add" className="btn btn-primary" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default AddMhs
