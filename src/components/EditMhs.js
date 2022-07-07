import React, { Component } from 'react'
import API from '../axios/Api'

export class EditMhs extends Component {

    state = {
        id: '',
        nim: '',
        nama: '',
        fakultas: ''
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const res = await API.get('getmhs.php?id=' + id)

        this.setState({
            id: res.data.id,
            nim: res.data.nim,
            nama: res.data.nama,
            fakultas: res.data.fakultas
        })
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlerSubmit = async (event) => {
        event.preventDefault()
        // console.log(this.state)
        await API.put('editmhs.php', this.state)
        this.props.history.push('/')
    }

    render() {

        const { nim, nama, fakultas} = this.state

        return (
            <div className="container">
                <h2>Edit Mahasiswa</h2>

                <form onSubmit={this.handlerSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>NIM</td>
                                <td>
                                    <input type="text" className="form-control" value={nim} name="nim" onChange={this.handlerChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Nama Mahasiswa</td>
                                <td>
                                    <input type="text" className="form-control" value={nama} name="nama" onChange={this.handlerChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td>Fakultas</td>
                                <td>
                                    <input type="text" className="form-control" value={fakultas} name="fakultas" onChange={this.handlerChange} required />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" value="Edit" className="btn btn-primary" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default EditMhs;