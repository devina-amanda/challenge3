import React from 'react';
import Orang from '../Image/Orang.jpg';

class Information extends React.Component {
    render() {
        return(
            <div className="top-wrapper" class="alert alert-info" role="alert">
                <div className="containe">
                    <div className="top-txt">
                            <br></br><br></br>
                            <span class="badge badge-primary"><h5>Virus Corona</h5></span>
                            <p>Penyakit virus corona (COVID-19) adalah penyakit menular yang disebabkan oleh virus corona yang baru-baru ini ditemukan.</p>
                            <br></br>
                            <span class="badge badge-primary"><h5>Gejala Virus Corona</h5></span>
                            <p>Secara umum:</p>
                            <p>-Demam (suhu tubuh di atas 38 derajat Celsius)</p>
                            <p>-Sesak napas</p>
                            <p>-Kelelahan</p>
                            <br></br>
                            <br></br>
                            <span class="badge badge-primary"><h5>Penyebab Virus Corona</h5></span>
                            <p>Penyebab Corona virus merupakan virus single stranded RNA yang berasal dari kelompok Coronaviridae. Dinamakan coronavirus karena permukaannya yang berbentuk seperti mahkota (crown/corona).</p>
                            <p>Virus corona umumnya ditemukan pada hewan –seperti unta, ular, hewan ternak, kucing, dan kelelawar. Manusia dapat tertular virus apabila terdapat riwayat kontak dengan hewan tersebut, misalnya pada peternak atau pedagang di pasar hewan.</p>
                            <br></br>
                            <span class="badge badge-primary"><h5>Tingkat Kematian Akibat Virus Corona</h5></span>
                            <p>Tingkat kematian akibat Virus Corona di China mencapai 5,47 persen, selanjutnya ada Jepang dengan 5,23 persen, kemudian Indonesia dengan 5,1 persen. </p>
                            <p>Untuk jumlah kematian per 1 juta kasus, kematian di Indonesia mencapai 10,27. Angka itu lebih tinggi dari Jepang, tetapi masih lebih rendah dari India dan Filipina. </p>
                            <center>
                            <img src={Orang} alt="Orang"></img>
                            </center>
                            <center>
                            <h6>Kompas.com, alodokter.com, liputan6.com</h6>
                            </center>
                        </div>
                    </div>
                 </div>
            )
        }
    }

export default Information;