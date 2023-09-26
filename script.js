var tanya = true;
while ( tanya ) {
var p = prompt('pilih : gajah, semut, orang');



var comp = Math.random();

if( comp < 0.34 ) {
    comp = 'gajah';
} else if( comp >= 0.34 && comp < 0.67 ) {
    comp = 'orang';
} else {
    comp = 'semut';
}

var hasil = '';

if( p == comp ) {
    hasil = 'SERI LAH !';
} else if ( p == 'gajah') {
    // if( comp == 'orang') {
    //     hasil = 'MENANG EUY!';
    // } else {
    //     hasil = 'KALAH MAMPUS';
    // }
    hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!' ;
} else if( p == 'orang') {
    hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
} else if( p == 'semut') {
    hasil = ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
} else {
    hasil = 'Memasukkan pilihan yang salah!!';
}



alert('kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);
    tanya = confirm('lagi?');  
}

alert('terima kasih sudah bermain')