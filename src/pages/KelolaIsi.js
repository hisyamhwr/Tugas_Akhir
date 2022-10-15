import '../assets/css/kelola.css'
import {Link} from 'react-router-dom'
import { map, editAja, deleteAja } from '../assets/img'

const btnPopOn = () => {
    document.querySelector('.btn-pop').classList.add('onpopbtn')
}

const btnOn = () => {
    document.querySelector('.popup').classList.add('popupon')
}

const close = () => {
    document.querySelector('.popup').classList.remove('popupon')
}

const KelolaIsi = () => {
    return (
        <div className="container">
            <br/>
            <br/>
            <div className="cdck">
            <div className="cuka">
                <h1>Kelola Alamat</h1>
                <button className="btn" onClick={btnOn}>+ Tambah Alamat</button>
            </div>
            <br /><br />
            <div className="empty2">
                <div className="lclist">
                    <span>
                        <h3 className='mbgtah'>Rumah</h3>
                        <img src={map}/>
                        <span className='mlgtah'> Jl. Kartini 12 RT. 01 RW.02 Kec. Karangrejo Kab. Magetan Jawa timur 63395</span>
                    </span>
                    <span>
                        <img src={editAja} />
                        <img src={deleteAja} className="mlgtahi" />
                    </span>
                </div>
            </div>
            </div>
            <div className="popup">
                <div className="mainpop">
                <h2>Tambah Alamat</h2>
                <br />
                <div className="dipleksem">
                <table>
                <tbody className='sub-form-profil'>
                    <tr>
                    <td><label>Nama Alamat</label></td>
                    </tr>
                    <tr>
                    <td className='form-profil-input'><input onInput={btnPopOn} type="text" style={{color:'gray'}} placeholder={'Rumah'} id="tlp" /></td>
                    </tr>
                    <tr>
                    <td><label>Kabupaten/kota</label></td>
                    </tr>
                    <tr>
                    <td className='form-profil-input'><input onInput={btnPopOn} type="password" style={{color:'gray'}} placeholder="Madiun,Jawa Timur" id="mail" /></td>
                    </tr>
                    <tr>
                    <td><label>Kecamatan</label></td>
                    </tr>
                    <tr>
                    <td className='form-profil-input'><input onInput={btnPopOn} type="password" style={{color:'gray'}} placeholder="Manisrejo" id="mail" /></td>
                    </tr>
                </tbody>
                </table>
                <table>
                <tbody className='sub-form-profil'>
                    <tr>
                    <td><label>Alamat Lengkap</label></td>
                    </tr>
                    <tr>
                    <td className='form-profil-input ftbgtl'><input onInput={btnPopOn} type="text" style={{color:'gray'}} placeholder={'Jl Kartini no.12 RT 01 RW 02 Manisrejo Madiun Jawa Timur 63395 '} id="tlp" /></td>
                    </tr>
                </tbody>
                </table>
                    
                </div>

                <span className='close-exit' onClick={close}>x</span>

                <Link to="/">
                <button onClick={''} className='btn-pop' style={{marginTop:'13px'}}>Masuk</button>
                </Link>
                </div>
            </div>
        </div> 
    )
}

export default KelolaIsi;