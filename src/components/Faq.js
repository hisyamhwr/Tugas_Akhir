import { ig, lin, mail, segitiga, tw, wa } from "../assets/img";

const Faq = () => {
    return (
        <div>
         <div class="container opini">
            <div class="faq-1">
                <h1 class="faq">F.A.Q</h1>
                <span className='linegreen mkanb'></span><br/>
                <h3 class="faq2">Pertayaan yang paling sering ditanyakan</h3>
            </div><br />    <br />
            <div class="opini1">
                <div>
                    <div class="Q-1"><h3 class="QE">Jenis sampah apa yang dapat saya kirimkan</h3> <button class="plus">+</button></div>
                    <div class="Q-1"><h3 class="QE">Apa yang di perlukan untuk pengiriman sampah?</h3> <button class="plus">+</button></div>
                </div>
                <div>
                    <div class="Q-1"><h3 class="QE">Apa keuntungan yang didapatkan dari pengiriman sampah?</h3> <button class="plus">+</button></div>
                    <div class="Q-1"><h3 class="QE">Apakah ada reward dari pengiriman sampah?</h3> <button class="plus">+</button></div>
                </div>
            </div>
        </div>
        <div class="bg-1">
            <div>
                <p class="kb">Kalau bukan kita siapa lagi?<br/>Kalau bukan sekarang kapan Lagi?</p>
                <p class="db">Dapatkan berbagai kemudahan dan keuntungan dalam mendaur ulang sampah Anda bersama Waste4Change.<br/>
                Tersedia berbagi reward menarik yang bisa anda dpatkan dengan menukar sampah anda melalui <br/>
                program-program khusus daur ulang. jangan lupa sebarkan berita baik ini ya!!</p>
            </div>
            <button class="ks1">Kirim sampah sekarang</button>
        <img src={segitiga} class="segitiga"/>         
        </div>
        <div>
            <div class="info">
                <div class="pusat">
                    <h1 class="pb">Pusat Bantuan</h1>
                    
                <span className='linegreen'></span><br/>
                    <p class="pb1">Mengalami masalah atau membutuhkan informasi lebih lanjut?<br/>Hubungi pusat bantuan kami<br/>Kami siap melayani anda</p>
                </div>
                <div class="cont">
                    <div class="cont1">
                        <div class="mail">
                            <img src={mail}  class="mail1"/>
                        </div>
                        <h2 class="mail2">Email</h2>
                        <h5 class="mail3">contact@waste4change.com</h5>
                    </div>
                    <div>
                        <div class="mail">
                            <img src={wa}  class="mail1"/>
                        </div>
                        <h2 class="mail2">Whatsapp</h2>
                        <h5 class="mail3">0821-1110-0170</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="alamat">
            <div>
                <h2 class="sc">Our Social Media</h2>
                <div class="sosmed">
                    <img src={wa} class="sosmed2"/>
                    <img src={tw} class="sosmed2" />
                    <img src={lin} class="sosmed2"/>
                    <img src={ig} class="sosmed2"/>
                    <img src={ig} class="sosmed2"/>
                </div>
            </div>
            <div class="alamat2">
            <h3 class="nomor">(021) 29372308</h3>
                <p class="vida">Vida Bumipala, JL.Alun-alun Utara,Padaurenan</p>
                <p class="jaya">Mustika Jaya, Kota Bekasi</p>
                <p class="barat">Jawa Barat 17156</p>
            </div>
        </div>

        </div>
    )
}

export default Faq;