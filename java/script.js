console.log("pesan iuni atampil di console browser")

alert("Selamat datang")

document.getElementById("nama").innerHTML="Nama saya ahmad"

let pesan = "Belajar js menyenangkan"
document.getElementById("pesan").innerHTML = pesan

let kompetensi = ['Fullstack','Project-Manajer','UI/UX']
document.getElementById("kompetensi").innerHTML = kompetensi[1]

kompetensi.forEach(element =>{
    document.getElementById("kompetensi").innerHTML += `<li>${element}</li>`
})