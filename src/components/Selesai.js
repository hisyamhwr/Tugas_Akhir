const Selesai = () => {
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
                <span className="bstatusp" style={{backgroundColor: '#2A9836'}}>
                  Selesai
                </span>
              </span>
            </div>
          </div>
          <div className="btn-ds">Lihat Detail</div>
        </div>
        <div className="ts-bottom">
        <div className="sicontainer-ii">
            <div className="panel">
              <span className="tp">Jenis Pengiriman</span><br/>
              <span className="ip">Menggirimkan sampah langsung ke mitra</span>
            </div>
            <div className="panel">
              <span className="tp">Expedisi Pengiriman</span><br/>
              <span className="ip">J&T Express</span>
            </div>
            <div className="panel">
              <span className="tp">No Resi</span><br/>
              <span className="ip">
                JNT29231293289
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Selesai;