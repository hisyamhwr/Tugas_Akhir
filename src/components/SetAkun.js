const SetAkun = (props) => {
  return (
    <>
      <div className="card">
        <ul className='menu'>
          <li className="list-menu" onClick={()=> props.subnav('profil')}>Edit Profil</li>
          <li className="list-menu" onClick={()=> props.subnav('pass')}>Ubah Kata Sandi</li>
          <li className="list-menu on-menu" onClick={()=> props.subnav('akun')}>Pengaturan Akun</li>
          <li className="list-menu danger">Hapus Akun</li>
        </ul>
        <table className='form-profil'>
          <tbody className='sub-form-profil'>
            <tr>
              <td><label>Nomor Telepon</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" style={{color:'gray'}} value={'088888888888'} id="tlp" /></td>
            </tr>      
            <tr>
              <td><label>Email</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" style={{color:'gray'}} value={'hawari.hisyam1@gmail.com'} id="mail" /></td>
            </tr>
            <tr>
              <td><button className='btn' style={{marginTop:'13px'}}>Edit</button></td>
            </tr>       
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SetAkun;
