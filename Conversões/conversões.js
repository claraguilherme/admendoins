function contartp() {
    let tpres = document.getElementById('tpres')
    let tpnm = document.getElementById('tpnum')
    let tempo1 = document.getElementById('tp1')
    let tempo2 = document.getElementById('tp2')
    let tp = Number(tpnm.value)

    if (tp == 0) {
        alert('Dados insuficientes!')
    } else {
        if (tempo1[0].selected && tempo2[1].selected) {
            tpres.innerHTML = `O resultado é ${tp*60} minutos!`
        } else if (tempo1[0].selected && tempo2[2].selected) {
            tpres.innerHTML = `O resultado é ${tp*3600} segundos!`
        } else if (tempo1[1].selected && tempo2[2].selected) {
            tpres.innerHTML = `O resultado é ${tp*60} segundos!`
        } else if (tempo1[1].selected && tempo2[0].selected) {
            tpres.innerHTML = `O resultado é ${tp/60} horas!`
        } else if (tempo1[2].selected && tempo2[1].selected) {
            tpres.innerHTML = `O resultado é ${tp/60}`
        } else if (tempo1[2].selected && tempo2[0].selected) {
            tpres.innerHTML = `O resultado é ${tp/3600} horas!`
        } else {
            alert('[ERRO] Verifique as opções selecionadas e tente novamente!')
        }
    }
}

function contarvel() {
    let velres = document.getElementById('velres')
    let vel1 = document.getElementById('vel1')
    let vel2 = document.getElementById('vel2')
    let vlnum = document.getElementById('vel')
    let vlnm = Number(vlnum.value)

    if (vlnm == 0) {
        alert('Dados insuficientes!')
    } else {
        if (vel1[0].selected && vel2[1].selected) {
            velres.innerHTML = `O resultado é ${vlnm/3.6} m/s!`
        } else if (vel1[1].selected && vel2[0].selected) {
            velres.innerHTML = `O resultado é ${vlnm*3.6} Km/h!`
        } else {
            alert('[ERRO] Verifique as opções seleciodadas e tente novamente!')
        }
    }
}

function contarcom() {
    let comres = document.getElementById('comres')
    let num = document.getElementById('comnum')
    let com1 = document.getElementById('comsel1')
    let com2 = document.getElementById('comsel2')
    let cmnm = Number(num.value)

    if (cmnm == 0) {
        alert('Dados insuficientes')
    } else {
        if (com1[0].selected && com2[1].selected) {
            comres.innerHTML = `O resultado é ${cmnm*100000} cm!`
        } else if (com1[0].selected && com2[2].selected) {
            comres.innerHTML = `O resultado é ${cmnm*1000} m!`
        } else if (com1[1].selected && com2[0].selected) {
            comres.innerHTML = `O resultado é ${cmnm/100000} Km!`
        } else if (com1[1].selected && com2[2].selected) {
            comres.innerHTML = `O resultado é ${cmnm/100} m!`
        } else if (com1[2].selected && com2[0].selected) {
            comres.innerHTML = `O resultado é ${cmnm/1000} Km!`
        } else if (com1[2].selected && com2[1].selected) {
            comres.innerHTML = `O resulatdo é ${cmnm*100} cm!`
        } else {
            alert('[ERRO] Verifique as opções selecionadas e tente novamente!')
        }
    }
}

function contartem() {
    let temres = document.getElementById('temres')
    let temnum = document.getElementById('temnum')
    let tem1 = document.getElementById('tem1')
    let tem2 = document.getElementById('tem2')
    let tmnm = Number(temnum.value)

    if (tmnm == 0) {
        alert('[ERRO] Dados insuficientes!')
    } else {
        if (tem1[0].selected && tem2[1].selected) {
            temres.innerHTML = `O resultado é ${(tmnm * 1.8) + 32}ºF!`
        } else if (tem1[1].selected && tem2[0].selected) {
            temres.innerHTML = `O resultado é ${(tmnm - 32) / 1.8}ºC!`
        } else if (tem1[2].selected && tem2[0].selected) {
            temres.innerHTML = `O resultado é ${tmnm + 273}ºK!`
        } else if (tem1[2].selected && tem2[1].selected) {
            temres.innerHTML = `O resultado é ${(tmnm - 273.15) * 1.8 + 32}ºF!`
        } else if (tem1[0].selected && tem2[2].selected) {
            temres.innerHTML = `O resultado é ${tmnm + 273.15}ºK!`
        } else if (tem1[1].selected && tem2[2].selected) {
            temres.innerHTML = `O resultado é ${(tmnm - 32) / 1.8 + 273.15}ºK!`
        } else {
            alert('[ERRO] Verifique as opções selecionadas e tente novamente!')
        }
    }
}