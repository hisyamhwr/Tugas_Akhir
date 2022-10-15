const SetProfil = (props) => {
  return (
    <>
      <div className="card">
        <ul className='menu'>
          <li className="list-menu on-menu" onClick={()=> props.subnav('profil')}>Edit Profil</li>
          <li className="list-menu" onClick={()=> props.subnav('pass')}>Ubah Kata Sandi</li>
          <li className="list-menu" onClick={()=> props.subnav('akun')}>Pengaturan Akun</li>
          <li className="list-menu danger">Hapus Akun</li>
        </ul>
        <table className='form-profil'>
          <tbody className='sub-form-profil'>
            <tr>
              <td><label>Nama</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" style={{color:'gray'}} value='Hisyam Hawari' /></td>
            </tr>      
            <tr>
              <td><label>Jenis Kelamin</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" style={{color:'gray'}} value='Laki-Laki' /></td>
            </tr>   
            <tr>
              <td><label>Tanggal Lahir</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" style={{color:'gray'}} value='1 Agustus 2000' /></td>
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

export default SetProfil;
