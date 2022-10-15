import {lampu, arr2} from '../assets/img'
import "../assets/css/blog.css"
import { Link } from 'react-router-dom';

const DetailBlog = () => {
    return (
        <>        
            <div className="kreasi">
                <div className="kreasi2">
                    <Link to={'/blog'} className="back2">
                        <img src={arr2} className="panah2" />
                        <h2 className="back3">Kembali ke halaman sebelumnya</h2>
                    </Link>
                    <h1 className="daur">3 Kreasi Unik Daur Ulang Botol</h1>
                    <h5 className="tgl">Apr 20, 2022</h5>
                    <img src={lampu}  className="lampu"/>
                    <h6 classNameName="h6">Source: https://nurdian com/kerajinan-dari-botol-bekas/</h6><br /><br />
                    <p className="pdbsampah">
                            Sampah botol plastik masih bisa digunakan kembali atau didaur ulang seperti dimanfaatkan menjadi kreasi unik bernilai jual.
                            Sampah botol plastik masih dapat digunakan ulang menjadi kreasi unik yang dapat dimanfaatkan untuk kebutuhan seharri-hari. 
                            Selain menghemat uamg karena tidak perlu membeli barang.pengkreasian ulang botol dapat 
                            mencegahnya untuk berakhir di laut
                    </p>
                    <h1 className="daur">Ide Kreasi Daur Ulang Botol Plastik</h1>
                    <p className="pdbsampah">
                            Sampah botol plastik masih dapat digunakan ulang menjadi kreasi unik yang dapat
                            dimanfaatkan untuk kebutuhan sehari-hari. Selain menghemat uang karena tidak perlu membeli barang, pengkreasian
                            ulang botol plastik dapat mencegahnya untuk berakhir di laut.
                    </p>
                    <div className="titik">
                        <div className="titik2"></div>
                        <h3>Kebun Vertikal</h3>
                    </div>
                    <p className="pdbsampah">
                            Kebun Vertikal Dengan menggunakan botol plastik bekas, pot tak lagi diperlukan untuk membuat kebun vertikal. Langkah
                            pertama adalah memisahkan label botol serta bersihkan botol yang akan digunakan. Kemudian, potong bagian tengah botol
                            dengan ukuran 3-5 cm untuk meletakkan tanah serta menanam tanaman. Kawat yang kuat dibutuhkan untuk memasangkan botol sehingga tertempel di dinding.
                    </p>
                    <div className="titik">
                        <div className="titik2"></div>
                        <h3>Tempat Aksesoris</h3>
                    </div>
                    <p className="pdbsampah">
                            Tempat Aksesoris Untuk membuat tempat aksesoris yang cantik, dibutuhkan dua buah botol plastik berukuran dua liter serta satu liter. 
                            Bagian botol yang dibutuhkan adalah bagian bawah sebagai wadah untuk meletakkan aksesoris serta alas untuk membuat tempat aksesoris ini dapat berdiri.
                            Cara pertama adalah membersihkan botol yang telah dikumpulkan. Lalu, memotong bagian bawah botol sekitar dua hingga
                            tiga cm sampai berbentuk piringan. Kemudian, lubangi bagian tengah piringan tersebut dan gunakan kayu atau besi untuk
                            menempelkan piringan-piringan tersebut. Piringan pertama adalah piringan yang berasal dari botol satu liter.
                            Kemudian letakkan piringan tersebut menengadah ke bawah karena akan digunakan sebagai alas. Lalu rekatkan dengan lem.
                            Berikan jarak dua hingga tiga cm untuk merekatkan piringan kedua dan ketiga yang menghadap ke atas supaya dapat digunakan untuk
                            meletakkan aksesori. Tempat aksesoris yang cantik dan unik pun siap digunakan. 
                    </p>
                    <div className="titik">
                        <div className="titik2"></div>
                        <h3>Tempat Pakan Burung</h3>
                    </div>
                    <p className="pdbsampah">
                            Tempat Pakan BurungTidak banyak alat dan bahan yang diperlukan untuk membuat kreasi satu ini. Hanya diperlukan botol, ranting, tali 
                            serta pisau atau gunting untuk membuat lubang.Langkah pertama yang diperlukan adalah membersihkan botol yang akan digunakan lalu mengeringkannya.
                            Botol yang digunakan dapat dalam ukuran apapun tergantung jenis dan besarnya burung yang akan memanfaatkan tempat makan tersebut. Semakin besar burung, 
                            maka semakin besar pula botol yang diperlukan.Setelah dibersihkan, buat dua lubang yang berukuran ranting di sebelah kanan dan kiri botol. Ranting yang
                            digunakan harus lebih panjang dari lebar botol sebagai tempat hinggap di satu sisi dan tempat burung untuk makan di sisi yang lainnya. Selain itu, ranting 
                            juga harus kuat agar pakan yang di dalam botol tidak tumpah saat burung hinggap di ranting tersebut.Setelah lubang dibuat, pasangkan ranting pada lubang tersebut.
                            Lalu langkah berikutnya adalah ikat tali pada bagian atas botol sehingga tali tersebut dapat digunakan untuk menggantung botol. Tempat pakan burung pun selesai
                            dibuat. Pakan burung dapat diisi di botol tersebut dengan biji atau jagung sesuai dengan makanan jenis burung yang akan menggunakannya. 
                    </p>
                    <p className="pdbsampah">
                        Ayo mulai berkreasi dengan botol plastik bekas yang kamu miliki! Jangan biarkan botol plastik ini bermuara di laut!
                    </p>
                </div>
            </div>
        </>
    )
}

export default DetailBlog;