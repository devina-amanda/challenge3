import React from 'react'

class Protokol extends React.Component {
    render() {
        return(
            
            <div class="p-3 mb-2 bg-dark text-white">

            <div className="card col-sm-10 mx-auto m-5"  class="alert alert-danger" role="alert">
                
                <h5><p><strong>Jaga kebersihan tangan</strong></p>
                Bersihkan tangan dengan cairan pencuci tangan atau hand sanitizer, apabila permukaan tangan tidak terlihat kotor. 
                Namun, apabila tangan kotor maka bersihkan menggunakan sabun dan air mengalir. 
                Cara mencucinya pun harus sesuai dengan standar yang ada, yakni meliputi bagian dalam, punggung, sela-sela, dan ujung-ujung jari.</h5>

            </div>

            <div className="card col-sm-10 mx-auto m-5"  class="alert alert-danger" role="alert">
                <h5><p><strong>Jangan menyentuh wajah</strong></p>
                Dalam kondisi tangan yang belum bersih, sebisa mungkin hindari menyentuh area wajah, khususnya mata, hidung, dan mulut.</h5>
            </div>

            <div className="card col-sm-10 mx-auto m-5"  class="alert alert-danger" role="alert">
                <h5><p><strong>Pakai masker</strong></p>
                Bagi Anda yang memiliki gejala gangguan pernapasan, kenakanlah masker medis ke mana pun saat Anda keluar 
                rumah atau berinteraksi dengan orang lain. Setelah digunakan (masker medis hanya bisa digunakan 1 kali dan 
                harus segera diganti), jangan lupa buang masker di tempat sampah yang tertutup dan cuci tangan setelah itu. 
                Namun, bagi Anda yang tidak memiliki gejala apapun, cukup gunakan masker non-medis, karena masker medis jumlahnya 
                lebih terbatas dan diprioritaskan untuk mereka yang membutuhkan.</h5>
            </div>

            <div className="card col-sm-10 mx-auto m-5"  class="alert alert-danger" role="alert">
                <h5><p><strong>Jaga jarak</strong></p>
                Untuk menghindari terjadinya paparan virus dari orang ke orang lain, kita harus senantiasa menjaga jarak dengan 
                orang lain minimal 1 meter.</h5>
            </div>

            <div className="card col-sm-10 mx-auto m-5"  class="alert alert-danger" role="alert">
                <h5><p><strong>Isolasi mandiri</strong></p>
                Bagi Anda yang merasa tidak sehat, seperti mengalami demam, batuk/pilek/nyeri tenggorokan/sesak napas, 
                diminta untuk secara sadar dan sukarela melakukan isolasi mandiri di dalam rumah.</h5>
            </div>

            </div>
        )
    }
}

export default Protokol;
