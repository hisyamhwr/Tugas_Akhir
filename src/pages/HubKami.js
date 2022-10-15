import '../assets/css/hubkami.css'

const HubKami = () => {
    return (
        <>
            <div className="banner-hk">
                <h2 className="hkh2">
                    Hubungi Kami
                </h2>
            </div><br /><br />  
            <div className="container">
                <h2>Lokasi</h2><br/>
                <p>
                Kantor Waste4Change, Vida Bumipala,<br/>
                Jl. Alun Alun Utara, RT.002/RW.001, Padurenan,<br/> 
                Mustika Jaya, Kota Bekasi, Jawa Barat 17156
                </p>
                <br />
                <h2>Email</h2><br/>
                <p>contact@waste4change.com</p><br />
                <h2>Telepon</h2><br />
                <p>(021) 29372308</p>

                <div className="fmdhk">
                    <from>
                    <table className='form-t-auth'>
                    <tbody className='sub-form-profil'>
                        {/* Email */}
                        <tr>
                        <td><label>Nama</label></td>
                        </tr>
                        <tr>
                        <td className='form-profil-input'><input type="text" style={{color:'gray'}} placeholder={'Masukkan nama'} id="tlp" /></td>
                        </tr>
                        <tr>
                        <td><label>Email</label></td>
                        </tr>
                        <tr>
                        <td className='form-profil-input'><input type="text" style={{color:'gray'}} placeholder={'Masukkan email'} /></td>
                        </tr>
                        <tr>
                        <td><label>Nomor Telepon</label></td>
                        </tr>
                        <tr>
                        <td className='form-profil-input'><input type="text" style={{color:'gray'}} placeholder={'Masukkan nomer telepon'} /></td>
                        </tr>
                        <tr>
                        <td><label>Pesan / Informasi</label></td>
                        </tr>
                        <tr>
                        <td className='form-profil-input neuiy'><textarea className="edita" style={{color:'gray'}} placeholder={'Masukkan informasi'} /></td>
                        </tr>
                        {/* Button */}
                        <tr>
                        <td><button className='btn btn-plus' style={{marginTop:'13px'}}>Kirim</button></td>
                        </tr>
                    </tbody>
                    </table>
                    </from>
                </div>
            </div>     
        </>
    )
}

export default HubKami;