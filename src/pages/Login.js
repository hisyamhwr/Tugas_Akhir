import { logow, robot } from '../assets/img';
import '../assets/css/auth.css';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className="auth">
          <Link to="/" className='bckta'>Kembali ke halaman awal</Link>
            <div className="banner-auth">
                <img src={logow} className="l-auth" width={'100px'} />
                <span className='sub-t-auth'>
                “Memulai hal kecil namun bermanfaat<br/> 
                selalu lebih lebih baik daripada tidak sama sekali”
                </span>
            </div>
            <div className="form-auth">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <span className="pnp-auth">
                    Selamat Datang di Wasted4Change,
                </span><br />
                <span className="bnb-auth">
                    Silahkan Masuk
                </span>
                <br /><br />
                
        <table className='form-t-auth'>
          <tbody className='sub-form-profil'>
            {/* Email */}
            <tr>
              <td><label>Email</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" style={{color:'gray'}} placeholder={'Masukkan email'} id="tlp" /></td>
            </tr>
            {/* Passsword */}
            <tr>
              <td><label>Password</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="password" style={{color:'gray'}} placeholder="Masukkan password" id="mail" /></td>
            </tr>
            {/* Ingat Saya */}
            <tr className='kucbda-row'>
              <td className='kucbda'><input type="checkbox" /></td>
              <td className='kucbda2'>Ingat Saya</td>
              <td className='kucbda3'>Lupa kata sandi?</td>
            </tr>
            {/* Button */}
            <tr>
              <td>
                <button onClick={()=> document.querySelector('.popup').classList.add('popupon')} className='btn btn-plus' style={{marginTop:'13px'}}>Masuk</button>
              </td>
            </tr>
            {/* Daftar Akun */}
            <tr>
              <td className='dftr'>Belum punya akun?<Link className='dftr2' to="/regis"> Daftar Akun</Link></td>
            </tr>
          </tbody>
        </table>
            </div>


            <div className="popup">
              <div className="norobot" >
                <div className="boxbot">
                  <span className='nfygy'> 
                  <Link to="/" onClick={() => props.auth('Login')}>
                     <input type="checkbox" className='imhuman'/>
                  </Link>
                    <label>I'm not Robot</label>
                  </span>
                  <img src={robot} />
                </div>
              </div>
            </div>
        </div>
    )
}

export default Login;