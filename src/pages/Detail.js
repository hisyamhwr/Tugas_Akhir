import { Link } from 'react-router-dom'
import { arr } from "../assets/img"

const Detail = () => {
  return (
    <>
      <header className="container">
        <Link to='/' className='Link' style={{color:'white'}}>
          <h5><img src={arr} alt="arrow"/>Kembali Ke Halaman Awal</h5>
        </Link>
      </header>
      <div class="card-iv">
        <div className='tahap-t'>
          <h4>Detail Transaksi Sampah</h4>
          <span>
            <a href="#">Cara pengemasan sampah</a>
            <a href="#">Unduh label kemasan</a>
          </span>
        </div>
        <br/><br/>
        <div className='tahap-t'>
          <p>
          Segera kirimkan paket anda ke agen ekspedisi terdekat di wilayah Anda.
          <br/>
          Ikuti petunjuk cara pengemasan dan pastikan kode transaksi telah dicantumkan pada paket.
          </p>
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
              <span className="bstatusp" style={{backgroundColor: '#F0AC0E'}}>
                Menunggu Pengiriman
              </span>
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
          <button className='btn'>Cek status sampah</button>
          <button className='btn-out'>Hubungi kami</button>
          </span>
        </div>
      </div>
    </>
  )
}

export default Detail