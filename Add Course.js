addNDrop();

function addNDrop(){
    if (typeof console._commandLineAPI !== 'undefined') {
        console.API = console._commandLineAPI;
    } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
        console.API = console._inspectorCommandLineAPI;
    } else if (typeof console.clear !== 'undefined') {
        console.API = console;
    }
    console.API.clear();
    console.log("Running add n drop ");
    var buffer = document.querySelectorAll("table.datadisplaytable");
    var carray = document.cookie.split(";");
    var found1 = false, found2 = false, found3 = false;
    var got = false;
    for (var i = 0; i < carray.length; i++){
        var c = carray[i];
        var status;
        while(c.charAt(0) == ' ') c = c.substring(1);

        if (c.indexOf("section1") === 0){
            status = c.substring(9);
            if (status == "none") found1 = true;
            else {
                if (status != "false"){                    
                    found1 = c.substring(9);
                    got = true;
                    document.getElementById("crn_id1").value = found1;
                    console.log("CRN "+found1+" is ready for registration");
                }
            }
        }
        if (c.indexOf("section2") === 0){
            status = c.substring(9);
            if (status == "none") found2 = true;
            else{
                if (status != "false"){                    
                    found2 = c.substring(9);
                    document.getElementById("crn_id2").value = found2;
                    console.log("CRN "+found2+" is ready for registration");
                }
            }
        }
        if (c.indexOf("section3") === 0){
            status = c.substring(9);
            if (status == "none") found3 = true;
            else{
                if (status != "false"){                    
                    found2 = c.substring(9);
                    document.getElementById("crn_id3").value = found3;
                    console.log("CRN "+found3+" is ready for registration");
                }
            }
        }
    }
    if (found1 && found2 && found3 && got) document.getElementsByName("REG_BTN")[1].click();
    var second = 3;
    setInterval(function(){
        if (!second) clearInterval(this);
        else console.log(second--);
    }, 1000);
    setTimeout(addNDrop, 3000);
}
