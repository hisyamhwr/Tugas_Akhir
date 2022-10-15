import { arr2, help, logo, done } from "../assets/img";
import { Link } from 'react-router-dom'

const Ktiga = () => {
    return (
        <>
            <div className="sidebar">
                <img src={logo} alt="logo" className="lfix" />
                <Link to="/" className="back-page">
                    <img src={arr2} className='arrv2' /> 
                    Kembali ke halaman awal
                </Link>
                <span className="step-text">Tahap pengiriman</span>
                <ul className="step-by">
                    <li><span><img src={done} width="15px" /></span><span className="done-step">Pilih mitra pengelola sampah</span></li>
                    <li><span><img src={done} width="15px" /></span><span className="done-step">Pilih mitra pengelola sampah</span></li>
                    <li className="on-step"><span>3.</span><span>Pilih mitra pengelola sampah</span></li>
                </ul>
            </div>
            <div className="main-fix">
                <h2 className="tfk">Pengiriman Sampah</h2>
                <div className="card-fix lofsmac">                    
                    <span className="t-cms dfc"><b>Detail Transaksi sampah</b></span>
                    <div className="main-cms dfmc">
                        <div className="scalefix">
                            <div className='tahap-t'>
                                <span>
                                Segera kirimkan paket anda ke agen ekspedisi terdekat di wilayah Anda.
                                <br/>
                                Ikuti petunjuk cara pengemasan dan pastikan kode transaksi telah dicantumkan pada paket.
                                </span>
                                <span>Tanggal Transaksi: 30 Juni 2022</span>
                                </div>
                                <br/>
                                <div className="grid">
                                <div className="gkiri">
                                    <div className='gkotak g-spec'>
                                    <div>
                                        <span className="ip">
                                        Kode Transaksi
                                        </span>
                                        <br/>
                                        <span className='dkode'>
                                        SYW12345
                                        </span>
                                    </div>
                                    <div className="almjattl">
                                    <span className="gahajggln">
                                    Unduh Label Kemasan  
                                    </span>
                                    <span className="bstatusp" style={{backgroundColor: '#F0AC0E'}}>
                                        Menunggu Pengiriman
                                    </span>
                                    </div>
                                    </div>
                                    <br/>
                                    <div className='gkotak'>
                                    <span className="tbiru">
                                        Pengirim
                                    </span>
                                    <span className='ip'>
                                        Rumah
                                    </span>
                                    <p className='txt'>082931237492</p>
                                    <p className='txt'>Jl Kartini no.12 RT 01 RW 02 Kelurahan Manisrejo Kecamatan Karangrejo Kabupaten Magetan Jawa Timur 63395</p><div class="bjd"></div>  
                                    <span className="tbiru">
                                        Penerima
                                    </span>
                                    <span className='ip'>
                                        Waste4change Bekasi
                                    </span>
                                    <p className='txt'>082111100170</p>
                                    <p className='txt'>Komplek Vida Bumipala, Jl. Alun Alun Utara, RT.003/RW.005, Padurenan, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17156</p>
                                    </div>
                                </div>
                                <div className="gkanan">
                                    <div className='gkotak'>
                                    <span className="tbiru">
                                        Sampah yang dikirim
                                    </span>
                                    <span className='ip'>
                                        Jenis sampah:
                                    </span>
                                    <p className='txt'>Kertas koran, Kemasan Plastik, Kemasan Botol, Alumunium Voil, Kemasan Skincare</p>
                                    <span className='ip'>
                                        Lainnya:
                                    </span>
                                    <p className='txt'>Plastik ember udah hancur, Plastik Gayung, Kantong Kresek</p>
                                    </div><br/>
                                    <div className='gkotak'>
                                    <span className='tbiru'>Pengiriman Sampah</span>
                                    <span className='ip'>Kurir</span>
                                    <input type="text" className='form-profil-input' placeholder='Jnt Express'/>
                                    <span className='ip'>Nomer Resi</span>
                                    <div class="fixin">
                                        <input type="text" className='form-profil-input' placeholder='Masukan nomer resi pengiriman sampah'/>
                                        <button className='btn-resi'>Simpan resi</button>
                                    </div>
                                    </div>
                                </div>
                                </div><br/>
                                <div className='tahap-t'>
                                <span className='dager'>Batalkan transaksi</span>
                                <span className='rapi'>
                                <Link to={'/sampah'}><button className='btn'>Cek status sampah</button></Link>
                                <button className='btn-out'>Hubungi kami</button>
                                </span>
                                </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-fix">
                    <center>2021 &copy; Waste4Change</center>
                </footer>
            </div>
        </>
    )
}

export default Ktiga;   