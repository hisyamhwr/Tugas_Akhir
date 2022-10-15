const ChangePass = (props) => {
  return (
    <>
      <div className="card">
        <ul className='menu'>
          <li className="list-menu" onClick={()=> props.subnav('profil')}>Edit Profil</li>
          <li className="list-menu on-menu" onClick={()=> props.subnav('pass')}>Ubah Kata Sandi</li>
          <li className="list-menu" onClick={()=> props.subnav('akun')}>Pengaturan Akun</li>
          <li className="list-menu danger">Hapus Akun</li>
        </ul>
        <table className='form-profil'>
          <tbody className='sub-form-profil'>
            <tr>
              <td><label>Kata Sandi Lama</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" placeholder='Masukan Kata Sandi Lama' /></td>
            </tr>      
            <tr>
              <td><label>Kata Sandi Baru</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" placeholder='Masukan Kata Sandi Baru' /></td>
            </tr>   
            <tr>
              <td><label>Konfirmasi Kata Sand Baru</label></td>
            </tr>
            <tr>
              <td className='form-profil-input'><input type="text" placeholder='Konfirmasi Kata Sandi Lama' /></td>
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

export default ChangePass;
