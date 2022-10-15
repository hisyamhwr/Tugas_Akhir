import { logow } from '../assets/img';
import '../assets/css/auth.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="auth">
          <Link to="/" className="bckta">Kembali ke halaman awal</Link>
            <div className="banner-auth">
                <img src={logow} className="l-auth" width={'100px'} />
                <span className='sub-t-auth'>
                “Memulai hal kecil namun bermanfaat<br/> 
                selalu lebih lebih baik daripada tidak sama sekali”
                </span>
            </div>
            <div className="form-auth">
              <br /><br /><br /><br /><br /><br />
                <span className="pnp-auth">
                    Selamat Datang di Wasted4Change
                </span><br />
                <span className="bnb-auth">
                    Silahkan Masuk
                </span>
                <br /><br />
                
        <table className='form-t-auth'>
          <tbody className='sub-form-profil'>
          <tr>
              <td><label>Nomor Telepon</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" style={{color:'gray'}} placeholder={'masukan nomor telepon'} id="tlp" /></td>
            </tr>  
            <tr>
              <td><label>Email</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" style={{color:'gray'}} placeholder={'masukan email'} id="tlp" /></td>
            </tr>    
            <tr>
              <td><label>Tanggal Lahir</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="date" style={{color:'gray'}} placeholder={'masukan Tanggal Lahir'} id="tlp" /></td>
            </tr>    
            <tr>
              <td><label>Kata Sandi</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="password" style={{color:'gray'}} placeholder="masukan Kata sandi" id="mail" /></td>
            </tr>
            <tr>
              <td><label>Konfirmasi Kata Sandi</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="password" style={{color:'gray'}} placeholder="masukan Konfirmasi Kata sandi" id="mail" /></td>
            </tr>
            <td className='snk'>Setelah klik tombol "Daftar", saya setuju dengan<a className='dftr2' href='#'> Syarat & Ketentuan </a></td>
            <tr>
              <td><button className='btn btn-plus' style={{marginTop:'13px'}}><Link className='dftr2' to="/Login">Daftar</Link>Daftar</button></td>
            </tr>
            <td className='dftr'>Sudah punya akun?<Link className='dftr2' to="/Login">Masuk</Link></td>       
          </tbody>
        </table>
            </div>
        </div>
    )
}

export default Login;