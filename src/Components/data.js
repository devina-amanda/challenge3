import React from 'react'

class Data extends React.Component {
    render () {
        return(
            
            <div  class="shadow-lg p-3 mb-5 bg-dark rounded">
             
                
                <p class="text-white bg-dark"><h2>------- KASUS COVID '19   --------------------------- PETA SEBARAN COVID JAWA TIMUR -------</h2><hr/></p>
                <img src="persebaran.png" class="rounded float-right"></img>
               
            <div  class="card col-sm-4 auto m-6">
                <img src="berita1.jpeg" width="100%"></img>
            <div class="card-body" >
                <h5 class="card-title"><strong>Kasus Positif Covid-19 Menurun, Wali Kota Malang: Masyarakat Mulai Disiplin</strong></h5>
                <p class="card-text">Kasus Positif Covid-19 Menurun, Wali Kota Malang: Masyarakat Mulai Disiplin</p>
                <a href="https://malang.kompas.com/read/2020/10/05/14520191/kasus-positif-covid-19-menurun-wali-kota-malang-masyarakat-mulai-disiplin?page=all" class="btn btn-primary">Baca Selengkapnya</a>
            </div>

            <div class="card-body" >
            <img src="berita2.jpg" width="100%"></img>
                <h5 class="card-title"><strong>Kabupaten Malang dan Jember "Bersaing" di Posisi 10 Besar Kasus Covid-19 Jawa Timur</strong></h5>
                <p class="card-text">Jumlah kasus terkonfirmasi Covid-19 antara Kabupaten Malang dan Kabupaten Jember sama.</p>
                <a href="https://www.malangtimes.com/baca/59004/20201016/095300/kabupaten-malang-dan-jember-bersaing-di-posisi-10-besar-kasus-covid-19-jawa-timur"class="btn btn-primary">Baca Selengkapnya</a>
            </div>

                </div>

                
            </div>
         
        )
    }
}

export default Data;
