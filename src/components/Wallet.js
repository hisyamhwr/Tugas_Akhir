import { poff, wallet } from '../assets/img'

const onWallet = (e) => {
  let wicon = document.querySelectorAll('.btn-wallet')
  for(let i=0;i < wicon.length; i++){
    wicon[i].classList.remove('on-btn-wallet')
  }

  e.target.classList.add('on-btn-wallet')
}

const onPoin = () => {
  let picon = document.querySelectorAll('.card-poin')
  for(let i=0;i < picon.length; i++){
    picon[i].classList.remove('cpdcy-on')
  }
  picon[0].classList.add('cpdcy-on')

}
const onPoin2 = () => {
  let picon = document.querySelectorAll('.card-poin')
  for(let i=0;i < picon.length; i++){
    picon[i].classList.remove('cpdcy-on')
  }
  picon[1].classList.add('cpdcy-on')

}
const onPoin3 = () => {
  let picon = document.querySelectorAll('.card-poin')
  for(let i=0;i < picon.length; i++){
    picon[i].classList.remove('cpdcy-on')
  }
  picon[2].classList.add('cpdcy-on')

}
const onPoin4 = () => {
  let picon = document.querySelectorAll('.card-poin')
  for(let i=0;i < picon.length; i++){
    picon[i].classList.remove('cpdcy-on')
  }
  picon[3].classList.add('cpdcy-on')

}
const onPoin5 = () => {
  let picon = document.querySelectorAll('.card-poin')
  for(let i=0;i < picon.length; i++){
    picon[i].classList.remove('cpdcy-on')
  }
  picon[4].classList.add('cpdcy-on')

}
const onPoin6 = () => {
  let picon = document.querySelectorAll('.card-poin')
  for(let i=0;i < picon.length; i++){
    picon[i].classList.remove('cpdcy-on')
  }
  picon[5].classList.add('cpdcy-on')

}

const onType = () => {
  let picon = document.querySelectorAll('.card-poin')
  for(let i=0;i < picon.length; i++){
    picon[i].classList.remove('cpdcy-on')
  }
  document.querySelector('.card-poin').classList.add('cpdcy-on')
  document.querySelector('.btn-w').style.backgroundColor = 'rgba(0, 161, 190, 1)';
}



const Wallet = (props) => {
  return (
    <>
      <div className="cpoin">
        <div className='cp cp-on' onClick={()=> props.sub('wallet')}>
          <img src={wallet} width="25px" />
          <span className='label label-on'>E-Wallet</span>
        </div>
        <div className='cp' onClick={() => props.sub('pulsa')}>
          <img src={poff} width="18px" />
          <span className='label'>Pulsa</span>
        </div>
      </div>
      <br /><br />
      <div className='card-ii'>
      <span className='exppul'>Pengumuman: Gunakan poin anda sampai tanggal 31 Desember 2022</span>
      <h3>E-Wallet</h3>
        <br/>
        <span className="btn-wallet" onClick={onWallet}>
          Gopay
        </span>
        <span className="btn-wallet" onClick={onWallet}>
          Ovo
        </span>
        <span className="btn-wallet" onClick={onWallet}>
          Dana
        </span>
        <br/><br/><br/>
        <form>
          <label className='wl'>Nomor E-Wallet</label><br/><br/>
          <input onInput={onType} type="text" className='iw' placeholder='Masukan Nomer E-Wallet'/><br/><br/>
          <div className="conin">
            <div className="card-poin" onClick={onPoin}>
              <h5>5.000</h5>
              <p>100 Poin</p>
            </div> 
            <div className="card-poin" onClick={onPoin2}>
              <h5>10.000</h5>
              <p>200 Poin</p>
            </div> 
            <div className="card-poin" onClick={onPoin3}>
              <h5>20.000</h5>
              <p>350 Poin</p>
            </div> 
            <div className="card-poin" onClick={onPoin4}>
              <h5>40.000</h5>
              <p>500 Poin</p>
            </div> 
            <div className="card-poin" onClick={onPoin5}>
              <h5>50.000</h5>
              <p>650 Poin</p>
            </div> 
            <div className="card-poin" onClick={onPoin6}>
              <h5>100.000</h5>
              <p>1000 Poin</p>
            </div> 
          </div>
          <br/>
          <button className='btn-w'>Tukar</button>
        </form>
      </div>
    </>
  )
}

export default Wallet;