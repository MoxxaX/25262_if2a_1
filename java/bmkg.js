fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.Infogempa.gempa)
    
    data.Infogempa.gempa.forEach(element =>{
        document.getElementById("data-gempa").innerHTML += `
        ${element.Tanggal}<br>
        ${element.Wilayah}<hr>
        `
    })
})
fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then(response => response.json())
.then(terbaru => {
    const gempa = terbaru.Infogempa.gempa;
    const imageUrl = "https://static.bmkg.go.id/" + gempa.Shakemap;

    document.getElementById("gempa-terbaru").innerHTML += `
        <img src="${imageUrl}" width="200px"><br>
        ${gempa.Tanggal}<br>
        ${gempa.Jam}<br>
        ${gempa.Wilayah}<hr>
    `;
});
