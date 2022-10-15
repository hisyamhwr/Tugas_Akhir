import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  logo, 
  point, 
  notif, 
  Avatar
} from '../assets/img/index'

const confir = () => {
  document.querySelector('.popuplog').classList.add('popupon')
}

const Navbar = (props) => {

  if(props.coba === 'Login'){
      return (
        <nav className='container nav-bar'>
          <h1><img src={logo} alt="logo"/></h1>
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="pengelola-sampah">Pengelolahan Sampah</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/hubkami">Hubungi Kami</Link></li>
          </ul>
          <div>
            <span className="hover">
              <span className='Link' style={{color:'#282A35'}}>
                <img src={point} alt="poin"/> 
                100 Poin
              </span>
            </span>
            <span className="hover">
              <img src={notif} alt="notif"/>
            </span>
            <span className="hover p-dd">
              <span className='Link' style={{color:'#5C5E6A'}}>
                Hi, Hisyam
                <img src={Avatar} alt="avatar"/>
              </span>
              <ul className='dropdown-profil'>
                <li><Link to={'/setting'} className='link link-drop'>Pengaturan Akun</Link></li>
                <li><Link to={'/poin'} className='link link-drop'>Penukaran Poin</Link></li>
                <li><Link to={'/sampah'} className='link link-drop'>Transaksi Sampah</Link></li>
                <li><Link to={'/kelola'} className='link link-drop'>Kelola Alamat</Link></li>
                <li className='link-drop' onClick={confir}>Keluar</li>
              </ul>
            </span>
          </div>
        </nav>
      )
  }if(props.coba === 'anon') {
    return (
      <nav className='container nav-bar'>
        <h1><img src={logo} alt="logo"/></h1>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="pengelola-sampah">Pengelolahan Sampah</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/hubkami">Hubungi Kami</Link></li>
        </ul>
        <Link to={'/login'}>
        <button className='btn'>Login</button>
        </Link>
      </nav>
    )

  }

}

export default Navbar;