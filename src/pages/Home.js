import '../assets/css/home.css'
import { bg1, bg2, bg3, bg4, frame, ft, Jelantah, wa } from '../assets/img';
import Faq from '../components/Faq';

const close = () => {
    document.querySelector('.popup').classList.remove('popupon')
}

const Home = () => {
    return (
        <div className='hpages'><br /><br/>
            <div className="container">
                <div class="tengah">
                    <div class="tengah2">
                        <h2 class="daur">Daur ulang sampah individual</h2>
                        <p>punya sampah tapi bingung dan ngga tau harus dibuang kemana?</p>
                        <p>Kalau dibakar malah tambah polusi,apalagi dibuang ke sungai bisa bamjir</p>
                        <p>Biar lingkungan kamu bersih, sehat dan terbebas dari sampah</p>
                        <p>Yuk! Kirim sampah </p>
                        <button class="ks">Kirim Sampah </button>
                        <button class="cs">Cara ngolah sampah</button>
                    </div>
                    <img src={frame} class="sampah"/>
                    <img src={bg4} className="ppgi" />
                </div>
                
            </div>
            <br /><br /><br /><br /><br />
            <div className="fupp container">
                <div class="dialog">
                    <h1 class="mbh1p">Masih buang sampah sembarangan?</h1>
                    <p class="stop">Stop mulai dari sekarang!</p>
                </div>
                <div class="contact">
                    <h3>Hubungi kami</h3>
                    <img src={wa} class="wa"/>
                </div>
            </div>
        <div class="peringatan">
            <div>
                <br /><br /><br />
                <h2 class="kw">Kalian wajib tau!</h2>
                <h1 class="sb">Sampah bisa berakibat kematian</h1>
                <div class="tragedi">
                    <h2 class="tpa">Tragedi TPA Leuwigajah</h2>
                    <p>Tragedi LewiGajah salah satu bencana akibat sampah</p>
                    <p>Kejadian pada 21 februari 2005 sekitar jam 2 pagi menewaskan 157 jiwa</p>
                    <p>Tumpukan sampah yang di sertai hujan mengakibatkan ledakan dari reaksi kimia </p>
                    <p>Akibatnya gunung sampah tersebut bocor dan menimpa rumah warga</p>
                </div>
            </div>
            <div>
                <img src={ft} class="korban"/>
            </div>
        </div>
        <div class="keuntungan">
            <h1 class="kirim">Keuntungan kirim sampah</h1>            
            <span className='linegreen mkanb'></span><br/>
            <p class="selain">Selain keuntungan kamu juga membantu mengurangi sampah di sekitarmu</p>
        </div>
        <br /><br />
        <div class="tiga keuntungan">
            <div>
                <img src={bg1} class="buang"/>
                <h2 class="diolah">Sampah diolah secara bertanggung jawab</h2>
                <p class="tb">tak perlu bingung mengolah sampah</p>
                <p class="ksk">kirim sampah kamu tak perlu khawatir</p>
            </div>
            <div>
                <img src={bg2} class="buang"/>
                <h2 class="diolah1">Kirim sampah se-fleksibel itu</h2>
                <p class="tb1">kirim sampah dari rumah? Bisa..</p>
                <p class="ksk1">kirim langsung ke mitra? Bisa..</p>
            </div>
            <div>
                <img src={bg3} class="buang"/>
                <h2 class="diolah2">Operator sampah lebih sejahtera</h2>
                <p class="tb2">terima kasih telah membantu kesejahteraan dan</p>
                <p class="ksk2">kesehatan operator sampah</p>
            </div>
        </div>
        <div class="container program">
        <iframe width="880" height="440" src="https://www.youtube-nocookie.com/embed/4ExqoNCyNbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <img src={maxf} class="bijak"/> */}
            <div class="daur1">
                <h1 class="individu">Program Daur Ulang Sampah Individu</h1>
                <p class="pdu pdusi">Program Daur Ulang Sampah Individu memudahkan anda melakukan<br/>
                daur ulang sampah anoganik secara bertanggung jawab sehingga sehingga<br/>
                tidak berakhir di TPA atau di laut</p><br />
                <button className='csgt'>Kirim Sampah Sekarang</button>
            </div>
        </div>
        <div class="forchange">
            <div class="garis">
                <h1 class="empat">Tentang Waste4Change</h1>
                <span className='linegreen mkanb'></span><br/>
                <p class="waste">feedback dari anda selalu memberi kami semangat untuk berinovasi dan membantu kehidupan yang lebih baik </p>
                <br /><br />
                <div class="waste4">
                    <div class="fitriani">
                        <p class="fitriani2">"Senang bisa bantu mengurangi sampah <br/>
                        yang tadinya cuma numpuk dirumah <br/> terus mama juga ikutan milah juga"</p>
                        <h2 class="fitriani3">Fitriani</h2>
                        <h5 class="fitriani4">Pengguna Waste4change</h5>
                    </div>
                    <div class="fitriani">
                        <p class="fitriani2">"Legaaaa banget<br/>Masih berusaha berkontribusi walau kecil<br/>dengan milah sampah sendiri</p>
                        <h2 class="fitriani3">Tiara</h2>
                        <h5 class="fitriani4">Pengguna Waste4change</h5>
                    </div>
                    <div class="fitriani">
                        <p class="fitriani2">"Beruntung banget ketemu dan bisa tahu <br/>
                        Waste4change,Sampah yang biasanya<br/>tinggal di buang ternyata bisa di olah lagi</p>
                        <h2 class="fitriani3">Mahalini</h2>
                        <h5 class="fitriani4">Pengguna Waste4change</h5>
                    </div>
                </div>
                <center>
                    <div class="span">
                        <div class="span1"></div>
                        <div class="span2"></div>
                        <div class="span2"></div>
                    </div>
                </center>
            </div>
        </div>
       <Faq/>
       
        </div>
    )
}

export default Home;