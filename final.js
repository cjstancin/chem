function ready(){
    no_display();
    AS.onclick = function(){
        console.log(this)
        if (this.classList.contains('change_color')) {
            this.classList.remove('change_color')
            console.log("nas");
        } else {
            this.classList.add('change_color')
        }
        if (document.getElementById("AS1").style.display == "none") {
            document.getElementById("AS1").style.display = "block"; 
            console.log("Atomic Structure first open")
        } else if (document.getElementById("AS1").style.display == "block") {
            document.getElementById("AS1").style.display = "none";
            console.log("Atomic Structure first close")
        };
        if (document.getElementById("AS2").style.display == "none") {
            document.getElementById("AS2").style.display = "block"; 
            console.log("Atomic Structure second open")
        } else if (document.getElementById("AS2").style.display == "block") {
            document.getElementById("AS2").style.display = "none";
            console.log("Atomic Structure second closed")
        };
        no_display_after_close_as();
    }
    AS1.onclick = function(){
        if (document.getElementById("energy").style.display == "none") {
            document.getElementById("energy").style.display = "inline"; 
            document.getElementById("enequal").style.display = "inline"; 
            document.getElementById("frequency").style.display = "inline"; 
            document.getElementById("ecalculate1").style.display = "inline"; 
            console.log("Atomic Structure first open");
        } else if (document.getElementById("energy").style.display == "inline") {
            document.getElementById("energy").style.display = "none";
            document.getElementById("enequal").style.display = "none";
            document.getElementById("frequency").style.display = "none";
            document.getElementById("ecalculate1").style.display = "none";
            
            console.log("Atomic Structure first close");
        };
    }
    AS2.onclick = function(){
        if (document.getElementById("frequencyy").style.display == "none") {
            document.getElementById("frequencyy").style.display = "inline"; 
            document.getElementById("spequal").style.display = "inline"; 
            document.getElementById("wavelength").style.display = "inline"; 
            document.getElementById("ecalculate2").style.display = "inline"; 
            console.log("Atomic Structure second open");
        } else if (document.getElementById("frequencyy").style.display == "inline") {
            document.getElementById("frequencyy").style.display = "none";
            document.getElementById("spequal").style.display = "none";
            document.getElementById("wavelength").style.display = "none";
            document.getElementById("ecalculate2").style.display = "none";
            console.log("atomic structure second close");
        }
    }

    AB.onclick = function(){
        if (this.classList.contains('change_color')) {
            this.classList.remove('change_color')
            console.log("nas");
        } else {
            this.classList.add('change_color')
        }
        if (document.getElementById("ph1").style.display == "none") {
            document.getElementById("ph1").style.display = "block"; 
            console.log("Acid Bases first open")
        } else if (document.getElementById("ph1").style.display == "block") {
            document.getElementById("ph1").style.display = "none";
            console.log("Acid Bases first close")
        };
        if (document.getElementById("ph2").style.display == "none") {
            document.getElementById("ph2").style.display = "block"; 
            console.log("Acid Bases second open")
        } else if (document.getElementById("ph2").style.display == "block") {
            document.getElementById("ph2").style.display = "none";
            console.log("Acid Bases second closed")
        };
        no_display_after_close_ab();
    }
    
    ph1.onclick = function(){
        if (document.getElementById("phequal").style.display == "none") {
            document.getElementById("phequal").style.display = "inline";
            document.getElementById("ph_input").style.display = "inline";
            document.getElementById("add_ph").style.display = "inline";
            document.getElementById("poh_input").style.display = "inline";
            document.getElementById("pcalculate1").style.display = "inline";
            console.log("ph show");
        } else if (document.getElementById("phequal").style.display == "inline") {
            document.getElementById("phequal").style.display = "none";
            document.getElementById("ph_input").style.display = "none";
            document.getElementById("add_ph").style.display = "none";
            document.getElementById("poh_input").style.display = "none";
            document.getElementById("pcalculate1").style.display = "none";
            console.log("ph hide");
        }
    }

    ph2.onclick = function(){
        if (document.getElementById("ph_input2").style.display == "none") {
            document.getElementById("ph_input2").style.display = "inline";
            document.getElementById("phequals").style.display = "inline";
            document.getElementById("h_plus").style.display = "inline";
            document.getElementById("pcalculate2").style.display = "inline";
            console.log("Acid Bases second open")
        } else if (document.getElementById("ph_input2").style.display == "inline") {
            document.getElementById("ph_input2").style.display = "none";
            document.getElementById("phequals").style.display = "none";
            document.getElementById("h_plus").style.display = "none";
            document.getElementById("pcalculate2").style.display = "none";
            console.log("Acid Bases second close")
        }
    }

    GLS.onclick = function(){
        if (this.classList.contains('change_color')) {
            this.classList.remove('change_color')
            console.log("nas");
        } else {
            this.classList.add('change_color')
        }
        if (document.getElementById("gls1").style.display == "none") {
            document.getElementById("gls1").style.display = "block"; 
            console.log("Gases Liquids first open")
        } else if (document.getElementById("gls1").style.display == "block") {
            document.getElementById("gls1").style.display = "none";
            console.log("Gases Liquids first close")
        };
        if (document.getElementById("gls2").style.display == "none") {
            document.getElementById("gls2").style.display = "block"; 
            console.log("Gases Liquids second open")
        } else if (document.getElementById("gls2").style.display == "block") {
            document.getElementById("gls2").style.display = "none";
            console.log("Gases Liquids second close")
        };
        no_display_after_close_gls();
    }

    gls1.onclick = function(){
        if (document.getElementById("p").style.display == "none") {
            document.getElementById("p").style.display = "inline";
            document.getElementById("v").style.display = "inline";
            document.getElementById("glequal").style.display = "inline";
            document.getElementById("n").style.display = "inline";
            document.getElementById("r").style.display = "inline";
            document.getElementById("t").style.display = "inline";
            document.getElementById("gcalculate1").style.display = "inline";
        } else if (document.getElementById("p").style.display == "inline") {
            document.getElementById("p").style.display = "none";
            document.getElementById("v").style.display = "none";
            document.getElementById("glequal").style.display = "none";
            document.getElementById("n").style.display = "none";
            document.getElementById("r").style.display = "none";
            document.getElementById("t").style.display = "none";
            document.getElementById("gcalculate1").style.display = "none";
        };
    }

    gls2.onclick = function(){
        if (document.getElementById("k").style.display == "none") {
            document.getElementById("k").style.display = "inline"
            document.getElementById("glequals").style.display = "inline";
            document.getElementById("c").style.display = "inline";
            document.getElementById("c_plus").style.display = "inline";
            document.getElementById("gcalculate2").style.display = "inline";
        } else if (document.getElementById("k").style.display == "inline") {
            document.getElementById("k").style.display = "none"
            document.getElementById("glequals").style.display = "none";
            document.getElementById("c").style.display = "none";
            document.getElementById("c_plus").style.display = "none";
            document.getElementById("gcalculate2").style.display = "none";
        };
    }

    TD.onclick = function(){
        if (this.classList.contains('change_color')) {
            this.classList.remove('change_color')
            console.log("nas");
        } else {
            this.classList.add('change_color')
        }
        if (document.getElementById("td1").style.display == "none") {
            document.getElementById("td1").style.display = "block"; 
            console.log("Thermodynamics first open")
        } else if (document.getElementById("td1").style.display == "block") {
            document.getElementById("td1").style.display = "none";
            console.log("Thermodynamics first close");
        };
        if (document.getElementById("td2").style.display == "none") {
            document.getElementById("td2").style.display = "block"; 
            console.log("Thermodynamics second open")
        } else if (document.getElementById("td2").style.display == "block") {
            document.getElementById("td2").style.display = "none";
            console.log("Thermodynamics second close");
        };
        no_display_after_close_td();
    }

    td1.onclick = function(){
        if (document.getElementById("q").style.display == "none") {
            document.getElementById("q").style.display = "inline"
            document.getElementById("tequal").style.display = "inline";
            document.getElementById("m").style.display = "inline";
            document.getElementById("sp").style.display = "inline";
            document.getElementById("ct").style.display = "inline";
            document.getElementById("tcalculate1").style.display = "inline";
        } else if (document.getElementById("q").style.display == "inline") {
            document.getElementById("q").style.display = "none"
            document.getElementById("tequal").style.display = "none";
            document.getElementById("m").style.display = "none";
            document.getElementById("sp").style.display = "none";
            document.getElementById("ct").style.display = "none";
            document.getElementById("tcalculate1").style.display = "none";
    };
    }

    td2.onclick = function(){
        if (document.getElementById("l").style.display == "none") {
            document.getElementById("l").style.display = "inline"
            document.getElementById("tequals").style.display = "inline";
            document.getElementById("char").style.display = "inline";
            document.getElementById("tim").style.display = "inline";
            document.getElementById("tcalculate2").style.display = "inline";
        } else if (document.getElementById("l").style.display == "inline") {
            document.getElementById("l").style.display = "none"
            document.getElementById("tequals").style.display = "none";
            document.getElementById("char").style.display = "none";
            document.getElementById("tim").style.display = "none";
            document.getElementById("tcalculate2").style.display = "none";
        };
    }

    function no_display(){
        no_display_for_as();
        no_display_for_ab();
        no_display_for_gls();
        no_display_for_td();
    }

    let z = 0

    function no_display_for_as(){
        let ids_as = ['AS1', 'AS2', 'energy', 'enequal', 'frequency', 'wavelength', 'spequal', 'frequencyy', 'ecalculate1', 'ecalculate2']
        for (let id of ids_as) {
            document.getElementById(id).style.display = "none";
        }
    }

    function no_display_for_ab(){
        let ids_ab = ['ph1', 'ph2', 'phequal', 'ph_input', 'add_ph', 'poh_input', 'ph_input2', 'phequals' ,'h_plus', 'pcalculate1', 'pcalculate2']
        for (let id of ids_ab) {
            document.getElementById(id).style.display = "none";    
        }
    }

    function no_display_for_gls(){
        let ids_gls = ['gls1', 'gls2', 'p', 'v', 'glequal', 'n', 'r', 't', 'k', 'glequals','c', 'c_plus', 'gcalculate1', 'gcalculate2']
        for (let id of ids_gls) {
            document.getElementById(id).style.display = "none";
        }
    }

    function no_display_for_td(){
        let ids_td = ['td1', 'td2', 'q', 'tequal', 'm', 'sp', 'ct', 'l', 'tequals', 'char', 'tim', 'tcalculate1', 'tcalculate2']
        for (let id of ids_td) {
            document.getElementById(id).style.display = "none";
        }
    }

    function no_display_after_close_as(){
        let ids_as_close = ['energy', 'enequal', 'frequency', 'wavelength', 'spequal', 'frequencyy', 'ecalculate1', 'ecalculate2']
        for (let id of ids_as_close) {
            document.getElementById(id).style.display = "none";
        }
    }

    function no_display_after_close_ab(){
        let ids_ab_close = ['phequal', 'ph_input', 'add_ph', 'poh_input', 'ph_input2', 'phequals' ,'h_plus', 'pcalculate1', 'pcalculate2']
        for (let id of ids_ab_close) {
            document.getElementById(id).style.display = "none";    
        }
    }

    function no_display_after_close_gls(){
        let ids_gls_close = ['p', 'v', 'glequal', 'n', 'r', 't', 'k', 'glequals','c', 'c_plus', 'gcalculate1', 'gcalculate2']
        for (let id of ids_gls_close) {
            document.getElementById(id).style.display = "none";
        }
    }

    function no_display_after_close_td(){
        let ids_td_close = ['q', 'tequal', 'm', 'sp', 'ct', 'l', 'tequals', 'char', 'tim', 'tcalculate1', 'tcalculate2']
        for (let id of ids_td_close) {
            document.getElementById(id).style.display = "none";
        }
    }

    

    ecalculate1.onclick = function(){
        let energy = document.getElementById('energy').value;
        let frequency = document.getElementById('frequency').value;
        energy = parseFloat(energy);
        frequency = parseFloat(frequency);
        if (isNaN(energy) && !isNaN(frequency)) {
            let eng = frequency * 6.626*(10**-34);
            document.getElementById('energy').value = eng;
            console.log(eng);
        } else if (!isNaN(energy) && isNaN(frequency)) {
            let fre = energy / 6.626*(10**-34);
            document.getElementById('frequency').value = fre;
            console.log(fre);
        } else {
            document.body.style.backgroundColor = "red";
            setTimeout(()=>{
                document.body.style.backgroundColor = 'aquamarine'
            }, 1000)
        };
    }

    ecalculate2.onclick = function(){
        let wavelength = document.getElementById('wavelength').value;
        let frequencyy = document.getElementById('frequencyy').value;
        wavelength = parseFloat(wavelength);
        frequencyy = parseFloat(frequencyy);
        if (!isNaN(wavelength) && isNaN(frequencyy)) {
            let freq = 2.998*(10**8) / wavelength;
            document.getElementById('frequencyy').value = freq;
            console.log(freq);
        } else if (isNaN(wavelength) && !isNaN(frequencyy)) {
            let wav = 2.998*(10**8) / frequencyy;
            document.getElementById('wavelength').value = wav;
            console.log(wav);   
        } else {
            document.body.style.backgroundColor = "red";
            setTimeout(()=>{
                document.body.style.backgroundColor = 'aquamarine'
            }, 1000)
        };
    }

    pcalculate1.onclick = function(){
        let ph = document.getElementById('ph_input').value;
        let poh = document.getElementById('poh_input').value;
        ph = parseFloat(ph);
        poh = parseFloat(poh);
        if (!isNaN(ph) && isNaN(poh)) {
            let poh_val = 14 - ph;
            document.getElementById('poh_input').value = poh_val;
            console.log(poh); 
        } else if (isNaN(ph) && !isNaN(poh)) {
            let ph_val = 14 - poh;
            document.getElementById('ph_input').value = ph_val;
            console.log(ph); 
        } else {
            document.body.style.backgroundColor = "red";
            setTimeout(()=>{
                document.body.style.backgroundColor = 'aquamarine'
            }, 1000)
        };
    }

    pcalculate2.onclick = function(){
        let ph_input2 = document.getElementById('ph_input2').value;
        let h_plus = document.getElementById('h_plus').value;
        ph_input2 = parseFloat(ph_input2);
        h_plus = parseFloat(h_plus);
        if (!isNaN(ph_input2) && isNaN(h_plus)) {
            let h_value = 10**(-1*ph_input2)
            document.getElementById('h_plus').value = h_value;
            console.log(h_value);
        } else if (isNaN(ph_input2) && !isNaN(h_plus)) {
            let ph_value = -1*Math.log10(h_plus)
            document.getElementById('ph_input2').value = ph_value;
            console.log(ph_value);
        } else {
            document.body.style.backgroundColor = "red";
            setTimeout(()=>{
                document.body.style.backgroundColor = 'aquamarine'
            }, 1000)
        };
    }

    gcalculate1.onclick = function(){
        let pressure = document.getElementById('p').value;
        let volume = document.getElementById('v').value;
        let moles = document.getElementById('n').value;
        let temperature = document.getElementById('t').value;
        pressure = parseFloat(pressure);
        volume = parseFloat(volume);
        moles = parseFloat(moles);
        temperature = parseFloat(temperature);
        if (isNaN(pressure) && !isNaN(volume) && !isNaN(moles) && !isNaN(temperature)) {
            let p = (moles*temperature*8.314)/volume
            document.getElementById('p').value = p;
            console.log(p);
        } else if (!isNaN(pressure) && isNaN(volume) && !isNaN(moles) && !isNaN(temperature)) {
            let v = (moles*temperature*8.314)/pressure
            document.getElementById('v').value = v;
            console.log(v);
        } else if (!isNaN(pressure) && !isNaN(volume) && isNaN(moles) && !isNaN(temperature)) {
            let n = (pressure*volume)/(8.314*temperature)
            document.getElementById('n').value = n;
            console.log(n);
        } else if (!isNaN(pressure) && !isNaN(volume) && !isNaN(moles) && isNaN(temperature)) {
            let t = (pressure*volume)/(8.314*moles)
            document.getElementById('t').value = t;
            console.log(t);
        } else {
            document.body.style.backgroundColor = "red";
            setTimeout(()=>{
                document.body.style.backgroundColor = 'aquamarine'
            }, 1000)
        };
    }

    gcalculate2.onclick = function(){
        let kelvin = document.getElementById('k').value;
        let celsius = document.getElementById('c').value;
        kelvin = parseFloat(kelvin);
        celsius = parseFloat(celsius);
        if (isNaN(kelvin) && !isNaN(celsius)) {
            let k = celsius + 273
            document.getElementById('k').value = k;
            console.log(k);
        } else if (!isNaN(kelvin) && isNaN(celsius)) {
            let c = kelvin - 273
            document.getElementById('c').value = c;
            console.log(c);
        } else {
            document.body.style.backgroundColor = "red";
            setTimeout(()=>{
                document.body.style.backgroundColor = 'aquamarine'
            }, 1000)
        };
    }

    tcalculate1.onclick = function(){
        let heat = document.getElementById('q').value;
        let t_mass = document.getElementById('m').value;
        let sp = document.getElementById('sp').value;
        let ct = document.getElementById('ct').value;
        q = parseFloat(heat);
        m = parseFloat(t_mass);
        sp = parseFloat(sp);
        ct = parseFloat(ct);
        if (isNaN(q) && !isNaN(m) && !isNaN(sp) && !isNaN(ct)) {
            let q_value = m * sp * ct
            document.getElementById("q").value = q_value;
            console.log(q_value);
        } else if (!isNaN(q) && isNaN(m) && !isNaN(sp) && !isNaN(ct)) {
            let m_value = q / (sp * ct)
            document.getElementById("m").value = m_value;
            console.log(m_value);
        } else if (!isNaN(q) && !isNaN(m) && isNaN(sp) && !isNaN(ct)) {
            let sp_value = q / (m * ct)
            document.getElementById("sp").value = sp_value;
            console.log(sp_value);
        } else if (!isNaN(q) && !isNaN(m) && !isNaN(sp) && isNaN(ct)) {
            let ct_value = q / (m * sp)
            document.getElementById("ct").value = ct_value;
            console.log(ct_value);
        } else {
            document.body.style.backgroundColor = "red";
            setTimeout(()=>{
                document.body.style.backgroundColor = 'aquamarine'
            }, 1000)
        };
    }

    tcalculate2.onclick = function(){
        let l = document.getElementById('l').value;
        let charge = document.getElementById('char').value;
        let time = document.getElementById('tim').value;
        l = parseFloat(l);
        charge = parseFloat(charge);
        time = parseFloat(time);

        if (isNaN(l) && !isNaN(charge) && !isNaN(time)) {
            let l_value = charge/time;
            document.getElementById("l").value = l_value;
            console.log(l_value); 
        } else if (!isNaN(l) && isNaN(charge) && !isNaN(time)) {
            let charge_value = l * time;
            document.getElementById("char").value = charge_value;
            console.log(charge_value);
        } else if (!isNaN(l) && !isNaN(charge) && isNaN(time)) {
            let time_value = charge/l;
            document.getElementById("tim").value = time_value;
            console.log(time_value);
        } else {
            document.body.style.backgroundColor = "red";
            setTimeout(()=>{
                document.body.style.backgroundColor = 'aquamarine'
            }, 1000)
        };
    }

    
}

document.addEventListener("DOMContentLoaded", ready);