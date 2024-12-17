async function lookupDNS() {
    const domain = document.getElementById("domainInput").value.trim();
    const resultContainer = document.getElementById("result-container");

    if (!domain) {
        alert("⚠ Mohon masukkan nama domain!");
        return;
    }

    const resultDiv = document.createElement("div"); // Membuat elemen hasil baru
    resultDiv.textContent = `🔍 Sedang mencari IP untuk "${domain}"...`;
    resultDiv.style.color = "#555"; // Warna default teks
    resultContainer.appendChild(resultDiv); // Tambahkan ke result-container

    try {
        // API publik untuk mendapatkan alamat IP
        const response = await fetch(`https://api.ipify.org?format=json&domain=${domain}`);
        
        if (!response.ok) {
            throw new Error("Gagal mendapatkan IP");
        }

        const data = await response.json();
        resultDiv.textContent = `✅ Alamat IP untuk "${domain}": ${data.ip}`;
        resultDiv.style.color = "green"; // Warna teks sukses
    } catch (error) {
        resultDiv.textContent = `❌ Terjadi kesalahan untuk "${domain}": ${error.message}`;
        resultDiv.style.color = "red"; // Warna teks error
    }
}
