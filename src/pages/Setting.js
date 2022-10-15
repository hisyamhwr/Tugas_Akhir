import { Banner, ChangePass, SetAkun, SetProfil } from '../components'

const Setting = (props) => {
  if(props.choose === 'akun'){
    return (
      <>
        <Banner title="Pengaturan Akun" />
        <SetAkun subnav={props.nav} />
      </>
    )
  }else if(props.choose === 'pass'){ 
    return (
      <>
        <Banner title="Pengaturan Akun" />
        <ChangePass subnav={props.nav} />
      </>
    )
  }else if(props.choose === 'profil') {
    return (
      <>
        <Banner title="Pengaturan Akun" />
        <SetProfil subnav={props.nav} />
      </>
    )  
  }
}

export default Setting;

