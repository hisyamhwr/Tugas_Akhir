import { arr2, help, logo, done } from "../assets/img";
import { Link } from 'react-router-dom'

const btnPopOn = () => {
    document.querySelector('.btn-pop').classList.add('onpopbtn')
}

const btnOn = () => {
    document.querySelector('.popup').classList.add('popupon')
}

const close = () => {
    document.querySelector('.popup').classList.remove('popupon')
}

const Kdua = (props) => {
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
                <li className="on-step"><span>2.</span><span>Pilih mitra pengelola sampah</span></li>
                <li><span>3.</span><span>Pilih mitra pengelola sampah</span></li>
            </ul>
        </div>
        <div className="main-fix">
            <h2 className="tfk">Pengiriman Sampah</h2>
            <div className="card-fix lofsmac">                    
                <span className="t-cms dfc"><b>Formulir Pengiriman Sampah</b><img src={help} width="16px" /></span>
                <div className="main-cms dfmc">
                    <div className="kirif">
                        <h3>Pengiriman</h3>
                        <div className="panel-fix pkf">
                            <h3>Alamat Anda</h3>
                            <div><span className="cab cab-hov" onClick={btnOn}>
                                + Tambah alamat baru    
                            </span></div>
                        </div>
                        <h3>Pengiriman</h3>
                        <div className="panel-fix pnrma">
                            <h3 className="mitra">Alamat Mitra</h3>
                            <span className="fganti">Ganti</span>
                            <p className="fpage">
                               <b>Waste4Change Bekasi</b> 
                            </p>
                            <p className="ntf">082111100170</p>
                            <p className="ntf">Komplek Vida Bumipala, Jl. Alun Alun Utara, RT.003/RW.005, Padurenan, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17156</p>
                        </div>
                    </div>
                    <div className="kananf">
                        <h3>Detail Sampah</h3>
                        <div className="panel-fix fhp">
                            <h3>Jenis Pengiriman Sampah</h3>
                            <from>
                                <div className="pudf">
                                    <span className="flni">
                                        <input type="radio" className="radio" name="satu"/>
                                        <label className="lrf">Mengirimkan sampah langsung ke mitra</label>
                                    </span>
                                    <span className="flni">
                                        <input type="radio" className="radio" name="satu"/>
                                        <label className="lrf">Mengirimkan sampah ke pihak ekspedisi</label>
                                    </span>
                                </div>
                            </from> 
                            <span className="mtfskp"></span>
                            <h3 className="dfc">Pihak Ekspedisi <img src={help} width="16px" style={{marginLeft:'5px'}}/></h3> 
                            <div className="panel-fix fref">
                             <span className="textrf">Pilihan Jasa</span>
                             <span className="textrf">&#62;</span>
                            </div>  
                            <small className="ongkos">Ongkos kirim ditanggung oleh pengirim sampah*</small>  
                            <span className="mtfskp"></span>  
                            <h3 className="jns">Jenis sampah yang dikirim</h3>  
                            <small>Pilih Jenis sampah yang akan anda kirim. Dapat dipilih lebih dari 1*</small>
                            <div className="kcheck">
                                <br /><br />
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Kertas/HVS/Koran</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Karton/Kardus</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Gelas/PiringKaca</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Cermin/Vas</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Kemasan Botol</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Kemasan Skincare</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Kaleng Bekas</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Besi/Seng</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Kemasan Plastik</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Alumunium foil</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Minyak Jelantah</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Barang Bahan Metal</span>
                                </span>
                                <span className="dfc wof">
                                    <input type="checkbox" className="checks" />
                                    <span className="lsof">Lainnya</span>
                                </span>
                            </div>                   
                            <span className="llainnya">
                            Masukkan Jenis sampah yang tidak tertera diatas
                            </span>
                        </div>

                    </div>
                </div>
                <button className="btn btn-fix-s" onClick={()=>props.sub('step3')}>Selanjutnya</button>
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


                <button className='btn-pop' style={{marginTop:'13px'}} onClick={()=>props.sub('step2isi')}>Masuk</button>
                </div>
            </div>

            <footer className="footer-fix">
                <center>2021 &copy; Waste4Change</center>
            </footer>
        </div>        
        </>
    )
}

export default Kdua;