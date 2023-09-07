let currntImage = 1;
let imageCount;
let folder;
// When loaded
window.onload = function () {
    // Get service number 
    var url = window.location.href;
    var params = url.split('?');
    var queryString = params[1];
    var keyValue = queryString.split('=');
    var serv = keyValue[1] - 1;
    let countimage = 0;
    // open JSON file
    fetch('../json/services.json')
        .then(
            (response) => response.json()
        )
        .then((json) => {

            // Get each value in JSON file
            var page_title = json[serv].pageTitle,
                main_title = json[serv].mainTitle,
                main_pargraph = json[serv].mainPargraph,
                background_image = json[serv].backgroundImage,
                landing_color = json[serv].landingColor,
                descriptions = json[serv].allDescriptions,
                folderOfImages = json[serv].images,
                numberOfImages = json[serv].imgCount;
            folder = folderOfImages;
            imageCount = numberOfImages;
            // Store all descriptions in array
            let paraCount = descriptions.length;
            let descArr = [];
            for (let i = 0; i < paraCount; i++) {
                descArr[i] = descriptions[i];
            }

            for (let i = 1; i <= numberOfImages; i++){
                document.getElementById("sliderjs").innerHTML += `<a href="../imgs/${folderOfImages}/${i}.png" data-lightbox="models"><img class="diplay-image" src="../imgs/${folderOfImages}/${i}.png" alt="Image ${i}" id="imges${i}"/></a>`;
            }

            // Add all param into HTML document
            document.title = page_title;
            document.getElementById("mainLandingTitle").innerHTML = main_title;
            document.getElementById("mainPara").innerHTML = main_pargraph;
            document.getElementById("landing").style.backgroundImage = "url('../imgs/" + background_image + "')";
            var styleSheet = document.styleSheets[0];
            styleSheet.insertRule(`.landing::before { background-color: ${landing_color} !important; }`, styleSheet.cssRules.length);
            for (let i = 0; i < paraCount; i++) {
                document.getElementById(`para${i + 1}`).innerHTML = descArr[i];
            }

            // Exceptions
            if (serv === 0) {
                document.getElementById("head2").innerHTML = "تشمل خدمة تصميم الويب لدينا ما يلي:"
            }
            for (let i = 1; i <= numberOfImages; i++){
                if (currntImage === i) {
                    continue
                } else {
                    document.getElementById(`imges${i}`).classList.add("hide-image")
                    document.getElementById(`imges${i}`).classList.remove("display-image")                   
                }
            }
            styleSheet.insertRule(`.slide-container::before {background-image: url(../imgs/${folderOfImages}/${currntImage}.png) !important; }`, styleSheet.cssRules.length);
            
            
            document.getElementById("prev").style.cursor = "auto"
            document.getElementById("prev").style.backgroundColor = "#777"
        });
};


function putImages() {
    let flag = 0;
    for (let i = 1; i <= imageCount; i++){
        document.getElementById("sliderjs").innerHTML += `<a href="../imgs/${folder}/${i}.png" data-lightbox="models"><img class="diplay-image" src="../imgs/${folder}/${i}.png" alt="Image ${i}" id="imges${i}"/></a>`;
    }
    for (let i = 1; i <= imageCount; i++){
        if (currntImage === i && flag === 1) {
            flag++;
            continue
        } else {
            document.getElementById(`imges${i}`).classList.add("hide-image")
            document.getElementById(`imges${i}`).classList.remove("display-image")                   
        }
    }
    styleSheet.insertRule(`.slide-container::before {background-image: url(../imgs/${folder}/${currntImage}.png) !important; }`, styleSheet.cssRules.length);
}


var styleSheet = document.styleSheets[0];
document.getElementById("next").onclick = () => {
    if (currntImage < imageCount) {
        currntImage++;
        document.getElementById("sliderjs").innerHTML = `<a href="../imgs/${folder}/${currntImage}.png" data-lightbox="models"><img class="diplay-image" src="../imgs/${folder}/${currntImage}.png" alt="Image ${currntImage}" id="imges${currntImage}"/></a>`;
        styleSheet.insertRule(`.slide-container::before {background-image: url(../imgs/${folder}/${currntImage}.png) !important; }`, styleSheet.cssRules.length);
        putImages();
        if (currntImage == imageCount) {
            document.getElementById("next").style.cursor = "auto"
            document.getElementById("next").style.backgroundColor = "#777"
        }
        if (currntImage === 2) {
            document.getElementById("prev").style.cursor = "pointer"
            document.getElementById("prev").style.backgroundColor = "#B0DAFF"
        }
    } else {{}}
}

document.getElementById("prev").onclick = () => {
    if (currntImage > 1) {
        currntImage--;
        document.getElementById("sliderjs").innerHTML = `<a href="../imgs/${folder}/${currntImage}.png" data-lightbox="models"><img class="diplay-image" src="../imgs/${folder}/${currntImage}.png" alt="Image ${currntImage}" id="imges${currntImage}"/></a>`;
        styleSheet.insertRule(`.slide-container::before {background-image: url(../imgs/${folder}/${currntImage}.png) !important; }`, styleSheet.cssRules.length);  
        putImages();
        if (currntImage === 1) {
            document.getElementById("prev").style.cursor = "auto"
            document.getElementById("prev").style.backgroundColor = "#777"
        }
    } else { { } }
}