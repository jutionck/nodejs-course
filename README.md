## NodeJS Fundamental

### Pengenalan
- JavaScript berjalan di sebuah browser menggunakan engine bernama V8
- Oleh karena itu untuk menjalankan JavaScript di sisi server kita membutuhkan sebuah NodeJS
- NodeJS sendiri baru diperkenalkan pada tahun 2009 dan sampai dengan saat ini bersifat Free & Open Source
- NodeJS bisa berjalan secara Server Side dengan bahasa pemrograman yang digunakan adalah JavaScript

### Materi
#### Concurrency & Parallel
- Program biasanya berjalan pada 1 waktu
- Karena 1 waktu maka proses untuk yang lain tidak bisa di lakukan
- Saat ini sistem operasi sudah memiliki sebuah proses dimana program berjalan beriringan dan tidak saling kebergantungan yang lain
- Istilah itu disebut dengaan `Thread`
- `Thread` itu sendiri merupakan proses yang ringan jadi tidak memerlukan memori yang banyak
- Proses yang berjalan itu bisa secara `Asynchronous` maupun `Paralel`
- Lalu apa perbedaan `Concurrency` dan `Paralel` ? Concurrency artinya mengerjakan pekerjaan satu persatu, tetapi jika Paralel beberapa aplikasi berjalan berbarengan
- Contoh Concurrency adalah misalnya ada beberapa pekerjaan A dan B, pekerjaan A dan B tidak bisa berjalan bareng tetapi konsep nya adalah kita mengerjakan Pekerjaan A terlebih dahulu kemudian Pekerjaan B, dan bisa kebalikannya. Contoh lain: Saat membuka sebuah web browser: `request` - kemudian `response` dengan balikan sebuah `html-css-javascript` (tampilan web).
- Contoh Paralel adalah masih di Pekerjaan A dan B, keduanya bisa berjalan bareng. Contoh lain masih di browser satu waktu yang bersamaan kita dapat browsing, kemudian mendengerkan musik atau mendownload beberapa file.
- Konsep ini masuk ke topik JavaScript yaitu `Synchronous` & `Asynchronous`

#### Thread pool
- Digunakan untuk management sebuah `Thread`
- Reusable `Thread` yang dimana semua Thread berada pada `Threadpoll`, [Thread 1 - Thread 2 - Thread 3 ...n]
- Bersifat `Queue` artinya jika kita Thread 1 sedang berjalan dan kita ingin menggunakan Thread 1 maka kita harus menunggu proses Thread 1 selesai terlebih dahulu.

#### Blocking & Non-Blocking
- Konsep Blocking atau Synchronous artinya program berjalan sesuai urutan
- Konsep Non-Blocking atau Asynchronous artinya program dapat berjalan tanpa harus menunggu program lain selesai ada proses `Callback`
- Hampir disemua fitur NodeJS mendukung Non-Blocking
- Contoh Non-Blocking: `AJAX`, `FETCH API`

#### Architecture
![!alt](https://i.pinimg.com/736x/9b/bc/b6/9bbcb654127681271306dd514a493c77.jpg)

### Instalasi
- Instalasi NodeJs bisa kunjungi di web https://nodejs.org/en/ dan menggunakan yang `LTS`
- Cek Versi `node --version`


