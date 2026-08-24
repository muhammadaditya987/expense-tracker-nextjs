export default function formatCurrency(amount: number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0, //jangan tampilkan angka desimal. con Rp. 1.000 bukan Rp. 1.000.00
    }).format(amount);
    
}