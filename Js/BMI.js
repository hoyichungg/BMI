
var list = document.querySelector('.list');
var sendData = document.querySelector('.bmi-result');
var dataShow = document.querySelector('.bmi-data-area');
var content = document.querySelector('.bmi-banner-content');
var data = JSON.parse(localStorage.getItem('listData')) || [];



sendData.addEventListener('click', addData, false);
list.addEventListener('click', toggleDone, false);
content.addEventListener('click', goRe, false);
updateList(data);
updateResult(data);


function addData() {
    var height = document.querySelector('.height').value;
    var weight = document.querySelector('.weight').value;
    // console.log(height)

    var HWdata = {
        heightContent: height,
        weightContent: weight
    };
    // console.log(HWdata)

    data.push(HWdata);
    updateList(data);
    updateResult(data);
    localStorage.setItem('listData', JSON.stringify(data))
}

function updateResult() {
    var h = parseInt(document.querySelector('.height').value) / 100;
    var w = parseInt(document.querySelector('.weight').value);
    // console.log(h)
    var bmi = parseInt(w / (h * h));
    // console.log(bmi)
    if (bmi < 18.5) {
        sendData.style.display = "none";
        var str = document.createElement('div');
        str.classList.add('bmi-data-area');
        content.appendChild(str);
        var bmiBtn = '';
        bmiBtn += '<div class="tooLight-area"><div class="bmi-result-tooLight"><div class="icon-area"><img src="./img/icons_loop.png" alt="" class="icon"></div><div class="text-area"><span class="bmi">' + bmi + '<div class="unit">BMI</div></span></div></div><div class="bmi-result-tooLight-title"><span>過輕</span></div></div>'
        str.innerHTML = bmiBtn;

    } else if (bmi >= 18.5 && bmi < 24) {
        sendData.style.display = "none";
        var str = document.createElement('div');
        str.classList.add('bmi-data-area');
        content.appendChild(str);
        var bmiBtn = '';
        bmiBtn += '<div class="great-area"><div class="bmi-result-great"><div class="icon-area"><img src="./img/icons_loop.png" alt="" class="icon"></div><div class="text-area"><span class="bmi">' + bmi + '<div class="unit">BMI</div> </span></div></div><div class="bmi-result-great-title"><span>理想</span></div></div>'
        str.innerHTML = bmiBtn;
    } else if (bmi >= 24 && bmi < 27) {
        sendData.style.display = "none";
        var str = document.createElement('div');
        str.classList.add('bmi-data-area');
        content.appendChild(str);
        var bmiBtn = '';
        bmiBtn += '<div class="tooHeavy-area"><div class="bmi-result-tooHeavy"><div class="icon-area"><img src="./img/icons_loop.png" alt="" class="icon"></div><div class="text-area"><span class="bmi">' + bmi + '<div class="unit">BMI</div></span></div></div><div class="bmi-result-tooHeavy-title"><span>過重</span></div></div>'
        str.innerHTML = bmiBtn;
    } else if (bmi >= 27 && bmi < 30) {
        sendData.style.display = "none";
        var str = document.createElement('div');
        str.classList.add('bmi-data-area');
        content.appendChild(str);
        var bmiBtn = '';
        bmiBtn += '<div class="mildObesity-area"><div class="bmi-result-mildObesity"><div class="icon-area"><img src="./img/icons_loop.png" alt="" class="icon"></div><div class="text-area"><span class="bmi">' + bmi + '<div class="unit">BMI</div></span></div></div><div class="bmi-result-mildObesity-title"><span>輕度肥胖</span></div></div>'
        str.innerHTML = bmiBtn;
    } else if (bmi >= 30 && bmi < 35) {
        sendData.style.display = "none";
        var str = document.createElement('div');
        str.classList.add('bmi-data-area');
        content.appendChild(str);
        var bmiBtn = '';
        bmiBtn += '<div class="moderateObesity-area"><div class="bmi-result-moderateObesity"><div class="icon-area"><img src="./img/icons_loop.png" alt="" class="icon"></div><div class="text-area"> <span class="bmi">' + bmi + '<div class="unit">BMI</div></span></div></div><div class="bmi-result-moderateObesity-title"><span>中度肥胖</span></div></div>'
        str.innerHTML = bmiBtn;
    } else if (bmi >= 35) {
        sendData.style.display = "none";
        var str = document.createElement('div');
        str.classList.add('bmi-data-area');
        content.appendChild(str);
        var bmiBtn = '';
        bmiBtn += ' <div class="severeObesity-area"><div class="bmi-result-severeObesity"><div class="icon-area"><img src="./img/icons_loop.png" alt="" class="icon"></div><div class="text-area"><span class="bmi">' + bmi + '<div class="unit">BMI</div></span></div></div><div class="bmi-result-severeObesity-title"><span>重度肥胖</span></div></div>'
        str.innerHTML = bmiBtn;
    };

}

function updateList(items) {
    if (items.length == 0) {
        list.innerHTML = ""
    }

    str = '';
    for (var i = 0; i < items.length; i++) {
        // console.log(items[i].heightContent)
        var h = parseInt(items[i].heightContent) / 100;
        var w = parseInt(items[i].weightContent);
        var bmi = parseInt(w / (h * h));
        var Today = new Date();
        var yaer = Today.getFullYear();
        var month = Today.getMonth() + 1;
        var day = Today.getDate();
        // console.log(bmi)

        if (bmi < 18.5) {
            str += '<li  class="tooLight"> <div class="tooLight-content"><span>過輕</span><div class="bmi-area"><span class="bmi-tit">BMI</span><span class="bmi-num">' + bmi + '</span></div><div class="weight-area"><span class="weight-tit">weight</span><span class="weight-num">' + items[i].weightContent + 'kg' + '</span></div><div class="height-area"><span class="height-tit">height</span><span class="height-num">' + items[i].heightContent + 'cm' + '</span></div><div class="time-area">' + month + '-' + day + '-' + yaer + '</div><i class="fas fa-trash-alt" data-index=' + i + '></i></div></li>'
            list.innerHTML = str;
        } else if (bmi >= 18.5 && bmi < 24) {
            str += '<li class="great"><div class="great-content"><span>理想</span ><div class="bmi-area"><span class="bmi-tit">BMI</span><span class="bmi-num">' + bmi + '</span></div> <div class="weight-area"><span class="weight-tit">weight</span><span class="weight-num">' + items[i].weightContent + 'kg' + '</span></div><div class="height-area"> <span class="height-tit">height</span> <span class="height-num">' + items[i].heightContent + 'cm' + '</span></div><div class="time-area">' + month + '-' + day + '-' + yaer + '</div><i class="fas fa-trash-alt" data-index=' + i + '></i></div></li> '
            list.innerHTML = str;
        } else if (bmi >= 24 && bmi < 27) {
            str += '<li class="tooHeavy"><div div class="tooHeavy-content" ><span>過重</span><div class="bmi-area"><span class="bmi-tit">BMI</span><span class="bmi-num">' + bmi + '</span></div><div class="weight-area"><span class="weight-tit">weight</span><span class="weight-num">' + items[i].weightContent + 'kg' + '</span></div><div class="height-area"><span class="height-tit">height</span><span class="height-num">' + items[i].heightContent + 'cm' + '</span></div><div class="time-area"> ' + month + '-' + day + '-' + yaer + '</div><i class="fas fa-trash-alt" data-index=' + i + '></i></div></li>'
            list.innerHTML = str;
        } else if (bmi >= 27 && bmi < 30) {
            str += '<li class="mildObesity"><div class="mildObesity-content"><span>輕度肥胖</span><div class="bmi-area"><span class="bmi-tit">BMI</span><span class="bmi-num">' + bmi + '</span></div><div class="weight-area"><span class="weight-tit">weight</span><span class="weight-num">' + items[i].weightContent + 'kg' + '</span></div><div class="height-area"><span class="height-tit">height</span><span class="height-num">' + items[i].heightContent + 'cm' + '</span></div><div class="time-area">' + month + '-' + day + '-' + yaer + '</div><i class="fas fa-trash-alt" data-index=' + i + '></i></div></li>'
            list.innerHTML = str;
        } else if (bmi >= 30 && bmi < 35) {
            str += '<li class="moderateObesity"><div class="moderateObesity-content"><span> 中度肥胖</span><div class="bmi-area"><span class="bmi-tit">BMI</span><span class="bmi-num">' + bmi + '</span></div><div class="weight-area"><span class="weight-tit">weight</span><span class="weight-num">' + items[i].weightContent + 'kg' + '</span></div><div class="height-area"><span class="height-tit">height</span><span class="height-num">' + items[i].heightContent + 'cm' + '</span></div><div class="time-area">' + month + '-' + day + '-' + yaer + '</div><i class="fas fa-trash-alt" data-index=' + i + '></i></div></li>'
            list.innerHTML = str;
        } else if (bmi >= 35) {
            str += '<li class="severeObesity"><div class="severeObesity-content"><span>重度肥胖</span><div class="bmi-area"><span class="bmi-tit">BMI</span><span class="bmi-num">' + bmi + '</span></div><div class="weight-area"><span class="weight-tit">weight</span><span class="weight-num">' + items[i].weightContent + 'kg' + '</span></div><div class="height-area"><span class="height-tit">height</span><span class="height-num">' + items[i].heightContent + 'cm' + '</span></div><div class="time-area">' + month + '-' + day + '-' + yaer + '</div><i class="fas fa-trash-alt" data-index=' + i + '></i></div></li>'
            list.innerHTML = str;
        }
    }
}

function toggleDone(e) {
    // console.log(e.target.nodeName)
    if (e.target.nodeName !== 'I') { return };
    // console.log(e.target.dataset.index)
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(data));
    updateList(data);
}

function goRe(e) {
    // console.log(e.srcElement.className)
    if (e.srcElement.className == 'icon-area' || e.srcElement.className == 'icon') {
        document.querySelector('.height').value = '';
        document.querySelector('.weight').value = '';
        // console.log(h)
        sendData.style.display = "block";
        var d = document.querySelector('.bmi-banner-content');
        var d_nested = document.querySelector(".bmi-data-area");
        d.removeChild(d_nested);
    }
}
