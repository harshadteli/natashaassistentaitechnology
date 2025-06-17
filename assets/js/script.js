const scanbtn = document.getElementById("scan");
const downloadbtn = document.getElementById("download");
const scanaud = document.getElementById("scana");
const downloadaud = document.getElementById("downloada");
const Licensebtn = document.getElementById("Licenseb");
const Licenseaud = document.getElementById("Licensea");

scanbtn.addEventListener('click', () => {
    scanaud.play();
    setTimeout(() => {
        window.location.href = './pages/scaning.html';
    }, scanaud.duration * 1000);
});

downloadbtn.addEventListener('click', () => {
    downloadaud.play();
    setTimeout(() => {
        window.location.href = './pages/commands.txt';
    }, downloadaud.duration * 1000);

    var text = "Commands list running successfully....";
    var blob = new Blob([text], { type: 'text/plain' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = './pages/commands.txt';
    link.click();
});


Licensebtn.addEventListener("click", () => {
    Licenseaud.play();
    setTimeout(() => {
        window.location.href = "./pages/license.txt";
    }, Licenseaud.duration * 1000);

    var text = "Your License is Verified for your device by HarshTech Organization."
    var blob = new Blob([text], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = './pages/license.txt';
    link.click();
});

