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
                numberOfImages = json[serv].imgCount,
                phoneNumber = json[serv].phone;
            folder = folderOfImages;
            imageCount = numberOfImages;
            // Store all descriptions in array
            let paraCount = descriptions.length;
            let descArr = [];
            for (let i = 0; i < paraCount; i++) {
                descArr[i] = descriptions[i];
            }
            let imageType;
            if ((serv + 1) === 1 || (serv + 1) === 5) {
                imageType = ".png";
            } else if ((serv + 1) === 2 || (serv + 1) === 3 || (serv + 1) === 6 || (serv + 1) === 9) {
                imageType = ".jpg";
            }
            if ((serv + 1) === 1 || (serv + 1) === 2 || (serv + 1) === 3 || (serv + 1) === 5 || (serv + 1) === 6 || (serv + 1) === 9) {
                for (let i = 1; i <= numberOfImages; i++){
                    document.getElementById("video-container-gallery").style.display = "none";
                    document.getElementById("gallery").innerHTML += `
                                                                    <div class="gallery-box" id="gallery-box">
                                                                        <a href="../imgs/${folderOfImages}/${i}${imageType}" data-lightbox="models"><img class="diplay-image" src="../imgs/${folderOfImages}/${i}${imageType}" alt="Image ${i}" id="imges${i}"/></a>
                                                                    </div>`;
                }
            } 
            else {
                document.getElementById("image-containe").style.display = "none";
                for (let i = 1; i <= numberOfImages; i++){
                    document.getElementById("video-gallery").innerHTML += `
                                                                            <div class="video">
                                                                                <video src="../imgs/${folderOfImages}/${i}.mp4" controls></video>
                                                                            </div>`;
                }
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
            document.getElementById("contact").innerHTML = `
                                                            <div class="contact-image">
                                                                <a href="https://wa.me/+20${phoneNumber}" target="_blank"><img src="../imgs/whatsapp_logo.png" alt="vecteezy.com"></a>
                                                                <h2>  تواصل معنا عبر الواتساب لطلب الخدمة أو الاستفسارات</h2>
                                                            </div>`;
            // Exceptions
            if (serv === 0) {
                document.getElementById("head2").innerHTML = "تشمل خدمة تصميم الويب لدينا ما يلي:"
            } else if (serv === 2) {
                document.getElementById("big-video-container").innerHTML = `
                                                                            <h2 class="main-title main-title-video"> بعض من أعمالنا الأخرى <br>المتعلقه بالاسكريبتات</h2>
                                                                            <div class="container video-container" id="video-container">
                                                                                <iframe frameborder="0" src="https://www.youtube.com/embed/tKt_tMNeehc?start=464"></iframe>
                                                                                <iframe frameborder="0" src="https://www.youtube.com/embed/aZL4Y2-Fe0c?start=14"></iframe>
                                                                                <iframe frameborder="0" src="https://www.youtube.com/embed/YYtXv7QcJoY?start=14"></iframe>
                                                                                <iframe frameborder="0" src="https://www.youtube.com/embed/41UGmLnBCqM?start=0"></iframe>
                                                                            </div>`;
            }
        });
    
    
    
    let flag = 0;
    document.getElementById("show").onclick = () => {
        if (flag === 0) {
            document.getElementById("gallery").style.overflow = "visible";
            document.getElementById("gallery").style.height = "auto";
            document.getElementById("show").innerHTML = "شاهد أقل";
            flag = 1;
            document.getElementById("title-gallery").scrollIntoView();
        } else {
            document.getElementById("gallery").style.overflow = "hidden";
            if (window.matchMedia(' (max-width: 767px)')) {
                document.getElementById("gallery").style.height = "1150px";
            } else {
                document.getElementById("gallery").style.height = "870px";
            }
            document.getElementById("show").innerHTML = "شاهد أكثر"
            flag = 0;
        }
    }

};
