import '../assets/css/blog.css'
import { Link } from 'react-router-dom';
import { kupu, kupu2, kupu3, kupu4, kupu5, kupu6, kupu7, kupu8 } from '../assets/img';

const Blog = () => {
    return (
        <div className='blog'>
                <div className="body2">
                    <h1 className='blog-h1'>WASTE4CHANGE BLOG</h1>
                </div>
                <div className="AUA"><h2 className='blog-2'>Artikel Untuk Anda</h2></div>
                <div className="artikel">      
                    <Link to="/detailblog" className="KU">
                        <img src={kupu} className="KU2"/>
                        <div className="KU3"><h2 className="apr blog-h2">Apr 20,2022</h2></div>
                        <h1 className="blog-h1 KU4">3 kreasi Unik Daur Ulang Botol</h1>
                        <p className='blog-p'>Sampah botol plastik masih bisa digunakan<br/>kembali atau didaur ulang seperti di manfaatkan<br/> menjadi kreasi unik bernilai jual.
                        Sampah botol plastik masih dapat digunakan ulang menjadi <br/> kreasi unik yang dapat dimanfaatkan untuk... </p>
                    </Link>
                    <div className="KU">
                        <img src={kupu2} className="KU2"/>
                        <div className="KU3"><h2 className="apr blog-h2">Apr 20,2022</h2></div>
                        <h1 className="blog-h1 KU4">Sampah Anorganik dan Mengapa HArus Dipisah</h1>
                        <p className='blog-p'>Sampah anorganik berasal dari benda tak hidup<br/>dan tidak bersifat biodegradable<br/>pengolaannya tidak bisa dicampur dengan <br/>sampah organik </p>
                    </div>
                    <div className="KU">
                        <img src={kupu3} className="KU2"/>
                        <div className="KU3"><h2 className="apr blog-h2">Apr 20,2022</h2></div>
                        <h1 className="blog-h1 KU4">The Impact Of Hong Kong's Zero COVID POlicy On Waste Production</h1>
                        <p className='blog-p'>Hong Kong's Zero Covid Policy is reported  to <br/>spike the number of waste generation in the<br/>country. what to do about the wasted? </p>
                    </div>
                    <div className="KU">
                        <img src={kupu4} className="KU2"/>
                        <div className="KU3"><h2 className="apr blog-h2">Apr 20,2022</h2></div>
                        <h1 className="blog-h1 KU4">Belajar dari Sudut Sidoarjo</h1>
                        <p className='blog-p'>Dalam pelaksanaan program SBH<br/>Kabupaten sidoarjo juga mengalami berbagai<br/>hambatn, baik hambtan yang berasal dari <br/>dalam ataupun dari luar instansi pmerintah<br/>
                        Hambatan internal implementasi program SBH... </p>
                    </div>
                </div>
                <div className="artikel">      
                    <div className="KU">
                        <img src={kupu5} className="KU2"/>
                        <div className="KU3"><h2 className="apr blog-h2">Apr 20,2022</h2></div>
                        <h1 className="blog-h1 KU4">Upaya Berbagi Perusahaan Dalam menangani Sampah Botol Plastik</h1>
                        <p className='blog-p'>Material plastik telah lama hadir dalm kehidupan<br/>manisia. Sudah banyak di terapkan di berbagai<br/>kebutuhan sehari-hari sehhingga beberapa...</p>
                    </div>
                    <div className="KU">
                        <img src={kupu6} className="KU2"/>
                        <div className="KU3"><h2 className="apr blog-h2">Apr 20,2022</h2></div>
                        <h1 className="blog-h1 KU4">Jangan Dibakar! Kenali Cara Aman Mengelola Sampah Kertas</h1>
                        <p className='blog-p'>Dibalik manfaatnya, kertas bekas pakai yang<br/>telah menjadi limbah dapat membahayakan <br/>lingkungan jka tidak di kelola dengan...</p>
                    </div>
                    <div className="KU">
                        <img src={kupu7} className="KU2"/>
                        <div className="KU3"><h2 className="apr blog-h2">Apr 20,2022</h2></div>
                        <h1 className="blog-h1 KU4">Manage electronic Waste in<br/>Indonesia</h1>
                        <p className='blog-p'>E-waste or waste electronic and electrical <br/>equepment (WEEE) is the most rapdly growimg<br/>waste stream in both developed and devolopin... </p>
                    </div>
                    <div className="KU">
                        <img src={kupu8} className="KU2"/>
                        <div className="KU3"><h2 className="apr blog-h2">Apr 20,2022</h2></div>
                        <h1 className="blog-h1 KU4">Penyebab Gas Rumah Kaca dan Pengaruhnya bagi Kehidupan</h1>
                        <p className='blog-p'>Efeh buruk gas rumah kaca cukup besar untuk <br/>linkungan. Itulah kenapa diperlukan cara<br/>penanggulangan sejak dini.</p>
                    </div>
                </div><br /><br />
                <center>
                    <span style={
                        {
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            width:'200px'
                        }
                        }>
                    &#60;
                    <span className="cnp">1</span>
                    &#62;
                    </span>
                </center>
                <br /><br /><br />
        </div>
    )
}

export default Blog;