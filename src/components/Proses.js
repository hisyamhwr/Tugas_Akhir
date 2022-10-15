import { Link } from 'react-router-dom'

const Proses = () => {
  return (
    <>
      <div className="card-iii">
        <div className="ts-top">
          <div className="sicontainer">
            <div className="panel">
              <span className="tp">Kode Transaksi</span><br/>
              <span className="ip">SYW12345</span>
            </div>
            <div className="panel">
              <span className="tp">Dikirim tanggal</span><br/>
              <span className="ip">20 Juni 2022</span>
            </div>
            <div className="panel">
              <span className="tp">Status</span><br/>
              <span className="ip">
                <span className="bstatusp" style={{backgroundColor: '#F0AC0E'}}>
                  Menunggu Pengiriman
                </span>
              </span>
            </div>
          </div>
          <Link to="/detail" className='Link'>
          <div className="btn-ds">Lihat Detail</div>
          </Link>
        </div>
        <div className="ts-bottom">
        <div className="sicontainer-ii">
            <div className="panel">
              <span className="tp">Jenis Pengiriman</span><br/>
              <span className="ip">Menggirimkan sampah ke pihak ekspedisi</span>
            </div>
            <div className="panel">
              <span className="tp">Expedisi Pengiriman</span><br/>
              <span className="ip">J&T Express</span>
            </div>
            <div className="panel">
              <span className="tp">No Resi</span><br/>
              <span className="ip">
                -
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-iii">
        <div className="ts-top">
          <div className="sicontainer">
            <div className="panel">
              <span className="tp">Kode Transaksi</span><br/>
              <span className="ip">SYW12345</span>
            </div>
            <div className="panel">
              <span className="tp">Dikirim tanggal</span><br/>
              <span className="ip">20 Juni 2022</span>
            </div>
            <div className="panel">
              <span className="tp">Status</span><br/>
              <span className="ip">
                <span className="bstatusp" style={{backgroundColor: '#44A8E1'}}>
                  Dalam Perjalanan
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="ts-bottom">
        <div className="sicontainer-ii">
            <div className="panel">
              <span className="tp">Jenis Pengiriman</span><br/>
              <span className="ip">Menggirimkan sampah ke pihak ekspedisi</span>
            </div>
            <div className="panel">
              <span className="tp">Expedisi Pengiriman</span><br/>
              <span className="ip">J&T Express</span>
            </div>
            <div className="panel">
              <span className="tp">No Resi</span><br/>
              <span className="ip">
                -
              </span>
            </div>
          </div>
        </div>
          <div className="btn-ds">Lihat Detail</div>
      </div>
    </>
  )
}

export default Proses;