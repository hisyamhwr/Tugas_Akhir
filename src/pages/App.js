// config
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages dan Component
import { Setting, Regis, ExchangePoin, Main, Detail, Kirim, PengelolaSampah, Home, Login,Blog, DetailBlog, HubKami, Kelola, KelolaIsi } from '.';
import { Navbar, Footer } from '../components'

// css
import '../assets/css/App.css'
import { useState } from 'react';


function App() {
  const [navigasi, setNavigasi] = useState('profil')
  const [poin, setPoin] = useState('wallet')
  const [sampah, setSampah] = useState('proses')
  const [step, setStep] = useState('step1')
  const [cek, setCek] = useState('anon');
  
  const logout = () => {
    setCek('anon')
    document.querySelector('.popuplog').classList.remove('popupon')
  }

  const close = () => {
    document.querySelector('.popuplog').classList.remove('popupon')
  }


  return (
    <Router>
      <div className='App'>
        <Navbar coba={cek} keluar={setCek}  /><br /><br /><br /><br /><br />
        
        <div className="popuplog">
          <div className="logoutconfrm" >
            <p>Apakah anda yakin <br/> Keluar Dari akun Waste4Change?</p>
          <br />
          <div className='btn-group'>
          <button className="btn-batal" onClick={close}>Batal</button>
          <button className="btn-keluar" onClick={logout}>Keluar</button>
          </div>
          </div>
        </div>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/setting' element={<Setting nav={setNavigasi} choose={navigasi} />} />
            <Route path='/poin' element={<ExchangePoin nav={setPoin} choose={poin} />} />
            <Route path='/sampah' element={<Main nav={setSampah} choose={sampah} />} />
            <Route path='/kirim' element={<Kirim step={step} next={setStep}/>} />
            <Route path='/pengelola-sampah' element={<PengelolaSampah />} />
            <Route path='/login' element={<Login auth={setCek} />} />
            <Route path='/regis' element={<Regis />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/detailblog' element={<DetailBlog/>} />
            <Route path='/hubkami' element={<HubKami />} />
            <Route path='/kelola' element={<Kelola />} />
            <Route path='/kelolaisi' element={<KelolaIsi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
