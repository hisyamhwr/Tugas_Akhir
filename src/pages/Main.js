import { Banner, Proses, Selesai, Batal } from '../components'

const Main = (props) => {
  if(props.choose === 'proses'){
    return (
      <>
        <Banner title="Transaksi Sampah" />
        <div className="b-ts">
          <div className="sb-ts sb-ts-on" onClick={() => props.nav('proses')}>
            Sedang diproses
          </div>
          <div className="sb-ts" onClick={() => props.nav('selesai')}>
            Selesai
          </div>
          <div className="sb-ts" onClick={() => props.nav('batal')}>
            Dibatalkan
          </div>
        </div>
        <Proses/>
        <div class="bj"></div>
      </>
    )
  }else if(props.choose === 'selesai'){
    return (
      <>
        <Banner title="Transaksi Sampah" />
        <div className="b-ts">
          <div className="sb-ts" onClick={() => props.nav('proses')}>
            Sedang diproses
          </div>
          <div className="sb-ts sb-ts-on" onClick={() => props.nav('selesai')}>
            Selesai
          </div>
          <div className="sb-ts" onClick={() => props.nav('batal')}>
            Dibatalkan
          </div>
        </div>
        <Selesai/>
        <div class="bj"></div>
      </>
    )
  }else if(props.choose === 'batal'){
    return (
      <>
        <Banner title="Transaksi Sampah" />
        <div className="b-ts">
          <div className="sb-ts" onClick={() => props.nav('proses')}>
            Sedang diproses
          </div>
          <div className="sb-ts" onClick={() => props.nav('selesai')}>
            Selesai
          </div>
          <div className="sb-ts sb-ts-on" onClick={() => props.nav('batal')}>
            Dibatalkan
          </div>
        </div>
        <Batal/>
        <div class="bj"></div>
      </>
    )
  }
}

export default Main;
