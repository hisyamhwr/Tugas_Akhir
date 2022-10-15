import { guide, Pencucian, Remas, Lipat } from "../assets/img"

const Flow = (props) => {
    if(props.ways === 'ways1'){
        return (
            <div className="container container-cuts">
                <img src={guide} width="45%" />
                <div className="tabsda">
                <br /><br />
                    <span className="tbay">Hal yang perlu diperhatikan</span>
                    <h2>Perlakuan sampah secara umum</h2>
                    <br /><br /><br />
                    <h4>Cara memilah sampah untuk dikirim:</h4>
                    <ul className='naagpp'>
                        <li className='bajah'>Pastikan sampah dalam keadaan kering, tidak lembab dan juga tidak dalam keadaan basah. </li>
                        <li className='bajah'>Pisahkan berdasarkan jenis sampah yang akan di kirim.</li>
                        <li className='bajah'>Apabila sampah yang dikirimkan jenisnya berbeda namun dalam kuantitas sedikit dapat disatukan dengan sampah jenis lain.</li>
                        <li className='bajah'>Pastikan sampah yang Anda kirim telah sesuai dengan jenis sampah yang didaur ulang oleh Waste4Change</li>
                    </ul>
                </div>
            </div>
        )
    }else if(props.ways === 'ways2'){
        return (
            <div className="container container-cuts">
                <img src={Pencucian} width="45%" />
                <div className="tabsda">
                <br /><br />
                    <span className="tbay">Hal yang perlu diperhatikan</span>
                    <h2>Perlakuan sampah sebelum dikemas</h2>
                    <br /><br /><br />
                    <h4>Cara memilah sampah untuk dikirim:</h4>
                    <ul className='naagpp'>
                        <li className='bajah'>Apabila sampah tersebut merupakan bekas pakai skincare atau kosmetik hendaknya dibersihkan dahulu sebelum dikemas </li>
                        <li className='bajah'>Apabila sampah tersebut merupakan bekas makanan, kemasan atau skincare, lebih baik dibilas dengan air terlebih dahulu lalu di keringkan</li>
                        <li className='bajah'>Tujuan dari pencucian bekas kemasan agar pada saat pengiriman sampah tidak menimbulkan bau dan tidak menimbulkan reaksi senyawa lain yang mungkin bisa berbahaya</li>
                    </ul>
                </div>
            </div>
        )
    }else if(props.ways === 'ways3'){
        return (
            <div className="container container-cuts">
                <img src={Remas} width="45%" />
                <div className="tabsda">
                <br /><br />
                    <span className="tbay">Hal yang perlu diperhatikan</span>
                    <h2>Perlakuan sampah botol plastik</h2>
                    <br /><br /><br />
                    <h4>Berikut cara mengemas botol plastik:</h4>
                    <ul className='naagpp'>
                        <li className='bajah'>Pastikan botol dalam keadaan kering</li>
                        <li className='bajah'>Lalu pisahkan tutup botol dengan botol agar mudah untuk di remas</li>
                        <li className='bajah'>Kemudian remas botol hingga seperti pada ilustrasi disamping</li>
                        <li className='bajah'>Lalu tutup kembali botol dengan penutup botol</li>
                        <li className='bajah'>Tujuan dari pengeremukan botol supaya botol yang telah diremukkan tidak dapat di pakai kembali oleh pihak yang tidak bertanggung jawab dan lebih memudahkan untuk diolah oleh pihak Waste4Change</li>
                    </ul>
                </div>
            </div>
        )
    }else if(props.ways === 'ways4'){
        return (
            <div className="container container-cuts">
            <img src={Lipat} width="45%" />
            <div className="tabsda">
            <br /><br />
                <span className="tbay">Hal yang perlu diperhatikan</span>
                <h2>Perlakuan sampah secara umum</h2>
                <br /><br /><br />
                <h4>Cara memilah sampah untuk dikirim:</h4>
                <ul className='naagpp'>
                    <li className='bajah'>Pastikan kertas dalam keadaan kering</li>
                    <li className='bajah'>Lalu lipat kertas menjadi bagian bagian kecil</li>
                    <li className='bajah'>Apabila kertas karton susah untuk di lipat cukup lipat sesuai dengan kemasan sampah yang akan dikirim</li>
                    <li className='bajah'>Apabila sampah tersebut berbentuk file, buku, atau tugas tidak ada perlakuan khusus untuk sampah tersebut</li>
                    <li className='bajah'>Tujuan melipat sampah kertas tersebut agar ruang pada kemasan dapat maksimal, sehingga ruang pada kemasan tersebut lebih banyak menampung sampah</li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Flow;