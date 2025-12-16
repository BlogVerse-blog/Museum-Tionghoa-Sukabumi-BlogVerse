const articleData = {
    id: 1,
    title: "Museum Tionghoa Sukabumi",
    excerpt: "Pengalaman jalan-jalan di Museum Tionghoa Sukabumi untuk mempelajari sejarahnya.",
    category: "Sejarah",
    date: "28 Mei 2025",
    author: {
        name: "Sammy",
        avatar: "./Penulis/Sammy.jpg",
        bio: "Perjalanan di Museum Tionghoa Sukabumi"
    },
    heroImage: "./images/Foto 4.jpeg",
    tags: ["Museum", "Jalan-jalan", "Sejarah"],
    content: [
        {
            type: "section",
            id: "pendahuluan",
            title: "Apa itu Museum Tionghoa Sukabumi?",
            content: `
                <p>Museum Tionghoa adalah museum yang menyimpan barang-barang sejarah peninggalan suku china dan bekas penjajahan belanda di Sukabumi. Museum Tionghoa ini memiliki 4 lantai yang setiap lantainya memiliki isi dan sejarah yang berbeda. Lalu dari lantai paling atas anda bisa melihat pemandangan Sukabumi. Museum Tionghoa ini berada di Jl. Pajagalan, Komplek Ruko Danalaga Square Blok. I, No. 22, Kel. Nyomplong, Kec.Warudoyong, Kab. Sukabumi. Museum ini dibangun atas kerjasama warga Sukabumi dan Dapuran Kipahare. Museum ini dibangun mulai Agustus 2021 dan selesai di Desember 2021. Museum ini diresmikan oleh Walikota Sukabumi H. Achmad Fahmi pada 19 Februari 2022.</p>
            `
        },
        {
            type: "section", 
            id: "koleksi benda",
            title: "Koleksi benda apa saja yang ada?",
            content: `
                <p>Museum tidak akan terpisah dengan yang namanya koleksi benda peninggalan sejarah di temapat itu. Koleksi benda di Museum Tionghoa sebagai berikut;</p>
                
                <h3>1. Senjata</h3>
                <p>Senjata di Museum Tionghoa Sukabumi adalah senjata yang digunakan oleh bangsa Tionghoa saat melawan penjajah di Sukabumi .</p>
                
                <h3>2. Pakaian</h3>
                <p>Pakaian di Museum Tionghoa Sukabumi adalah pakaian yang digunakan oleh pahlawan dan warga Tionghoa saat melawat penjajah di Sukabumi.</p>

                <h3>3. Uang dan Perabotan</h3>
                <h3>4. Buku-buku</h3>
                
            `
        },
        {
            type: "section",
            id: "lokasi terdekat lainnya",
            title: "Tempat makan dekat Museum Tionghoa", 
            content: `

                <img src="./images/Foto 3.jpg" alt="image" class="content-image">

                <p>Setelah dari Museum Tionghoa di seberang museum ada tempat makan. Di tempat makan itu banyak sekali foodcourt makanan khas china atau dari Sukabumi. Tapi di sini makananya juga enak dan memiliki harga yang lumayan terjangkau lohh.</p>
            `
        }
    ]
};

const relatedPosts = [
    {
        id: 2,
        title: "Museum Palagan Bojong Kokosan Sukabumi",
        date: "28 Mei 2025", 
        image: "./images/Foto (1).jpg",
        href : "https://museum-palagan-bojong-kokosan-sukab.vercel.app/"
    }
];
