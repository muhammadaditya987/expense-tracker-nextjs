// Interface digunakan untuk menentukan bentuk data yang diterima komponen.
// Artinya
// Button hanya boleh menerima data sesuai aturan yang kita buat.
// children adalah properti yang digunakan untuk menampilkan konten di dalam komponen Button. con/ Login dsb.
// React.ReactNode mengapa tidak string? karena isi button tidak selalu string, 
// dibawah ini adalah sebuah tipe, bukan sebuah objek atau variabel

export interface BaseProps {
    children: React.ReactNode;
}