import { arr2, call, date, logo, map } from "../assets/img";
import { Link } from 'react-router-dom'

const munculMap = () => {
    document.querySelector('.popup').classList.add('popupon')
}

const Ksatu = (props) => {
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
                    <li className="on-step"><span>1.</span><span>Pilih mitra pengelola sampah</span></li>
                    <li><span>2.</span><span>Pilih mitra pengelola sampah</span></li>
                    <li><span>3.</span><span>Pilih mitra pengelola sampah</span></li>
                </ul>
            </div>
            <div className="main-fix">
                <h2 className="tfk">Pengiriman Sampah</h2>
                <div className="card-fix">
                    <span className="t-cms">Pilih Mitra Pengelola Sampah</span>
                    <div className="main-cms">
                        <div className="kotak-mitra" onClick={munculMap}>
                            <h4 style={{marginBottom:'10px'}}>Waste4Change Bekasi</h4>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={'12px'} src={map} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                Komplek Vida Bumipala, Jl. Alun Alun Utara, RT.003/RW.005, Padurenan, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17156
                                </span>
                            </span>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={'18px'} src={call} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                082111100170
                                </span>
                            </span>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={"17px"} src={date} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                Senin - Sabtu, 09.00 - 17.00 WIB
                                </span>
                            </span>
                        </div>
                        <div className="kotak-mitra" onClick={munculMap}>
                            <h4 style={{marginBottom:'10px'}}>Waste4Change Bekasi</h4>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={'12px'} src={map} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                Komplek Vida Bumipala, Jl. Alun Alun Utara, RT.003/RW.005, Padurenan, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17156
                                </span>
                            </span>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={'18px'} src={call} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                082111100170
                                </span>
                            </span>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={"17px"} src={date} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                Senin - Sabtu, 09.00 - 17.00 WIB
                                </span>
                            </span>
                        </div>
                        <div className="kotak-mitra" onClick={munculMap}>
                            <h4 style={{marginBottom:'10px'}}>Waste4Change Bekasi</h4>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={'12px'} src={map} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                Komplek Vida Bumipala, Jl. Alun Alun Utara, RT.003/RW.005, Padurenan, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17156
                                </span>
                            </span>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={'18px'} src={call} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                082111100170
                                </span>
                            </span>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={"17px"} src={date} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                Senin - Sabtu, 09.00 - 17.00 WIB
                                </span>
                            </span>
                        </div>
                        <div className="kotak-mitra" onClick={munculMap}>
                            <h4 style={{marginBottom:'10px'}}>Waste4Change Bekasi</h4>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={'12px'} src={map} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                Komplek Vida Bumipala, Jl. Alun Alun Utara, RT.003/RW.005, Padurenan, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17156
                                </span>
                            </span>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={'18px'} src={call} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                082111100170
                                </span>
                            </span>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={"17px"} src={date} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                Senin - Sabtu, 09.00 - 17.00 WIB
                                </span>
                            </span>
                        </div>
                        <div className="kotak-mitra" onClick={munculMap}>
                            <h4 style={{marginBottom:'10px'}}>Waste4Change Bekasi</h4>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={'12px'} src={map} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                Komplek Vida Bumipala, Jl. Alun Alun Utara, RT.003/RW.005, Padurenan, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17156
                                </span>
                            </span>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={'18px'} src={call} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                082111100170
                                </span>
                            </span>
                            <span className="consi">
                                <span className="ticon">
                                    <img width={"17px"} src={date} className="ticon-icon" />
                                </span>
                                <span className="tisi">
                                Senin - Sabtu, 09.00 - 17.00 WIB
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="popup">
                        <div className="dmap">
                            <h3>Waste4Change Bekasi</h3><br/>
                            <p>Komplek Vida Bumipala, Jl. Alun Alun Utara, RT.003/RW.005,<br/> Padurenan, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat <br/>17156</p><br/>
                            <p>08985181284</p><br/>
                            <p>Senin - Sabtu, 09.00 - 17.00 WIB</p><br/>
                            <hr /><br/>
                            <h4>Lokasi Mitra</h4><br/>
                            <div className="lokmap">
                            </div><br/>
                            <button className="btn-batal" onClick={()=> document.querySelector('.popup').classList.remove('popupon')}>Batal</button>
                            <button className="btn-pilih" onClick={()=> props.sub('step2')}>Pilih</button>
                        </div>
                    </div>
                    <br/>
                    <center>
                        <span style={
                            {
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                width:'200px'
                            }
                            }>
                        &#60;
                        <span className="cnp">1</span>
                        &#62;
                        </span>
                    </center>
                </div>
                <footer className="footer-fix">
                    <center>2021 &copy; Waste4Change</center>
                </footer>
            </div>
        </>
    )
}

export default Ksatu;