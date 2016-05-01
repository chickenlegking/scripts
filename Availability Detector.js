var section1s = ["MATH444D3"];
var section2s = "";
var section3s = "";
detectRemaining(section1s, section2s, section3s);

function detectRemaining(section1s, section2s, section3s){
    console.log("Running detection");
    var buffer = document.querySelectorAll("table.datadisplaytable");
    var list = buffer[0].getElementsByTagName("tr");
    document.cookie = "section1=none";
    document.cookie = "section2=none";
    document.cookie = "section3=none";
    var found1 = false, found2 = false, found3 = false;
    var got1 = false, got2 = false, got3 = false;
    for (var i = 0; i < list.length; i++){
        var items = list[i].getElementsByTagName("td");
        if (items.length){
            var courseID;
            var currCourse = items[2].textContent + items[3].textContent;
            var currSection = items[4].textContent;
            var status;
            if (section1s !== ""){
                courseID = section1s[0].substring(0, section1s[0].search(/\d\d\d/)+3);
                if (courseID == currCourse){
                    got1 = true;
                    if (!found1) document.cookie = "section1=false";
                    section1s.forEach(function(sectionString){
                        var section = sectionString.substring(courseID.length);
                        if (section == currSection && !found1){
                            status = items[0].firstChild.nodeType;
                            if (status == 3){
                                console.log("Seat available for section "+section);
                                document.cookie = "section1="+items[1].textContent;
                                found1 = true;
                            }
                            else{
                                console.log("No seat available for section "+section);
                            }
                        }
                    });
                }
            }
            if (section2s !== ""){
                courseID = section2s[0].substring(0, section2s[0].length-3);
                if (courseID == currCourse){
                    got2 = true;
                    if (!found2) document.cookie = "section2=false";
                    section2s.forEach(function(sectionString){
                        var section = sectionString.substring(courseID.length);
                        if (section == currSection && !found2){
                            status = items[0].firstChild.nodeType;
                            if (status == 3){
                                console.log("Seat available for section "+section);
                                document.cookie = "section1="+items[1].textContent;
                                found1 = true;
                            }
                            else{
                                console.log("No seat available for section "+section);
                            }
                        }
                    });
                }
            }
            if (section3s !== ""){
                courseID = section3s[0].substring(0, section3s[0].length-3);
                if (courseID == currCourse){
                    got3 = true;
                    if (!found3) document.cookie = "section3=false";
                    section3s.forEach(function(sectionString){
                        var section = sectionString.substring(courseID.length);
                        if (section == currSection && !found3){
                            status = items[0].firstChild.nodeType;
                            if (status == 3){
                                console.log("Seat available for section "+section);
                                document.cookie = "section1="+items[1].textContent;
                                found1 = true;
                            }
                            else{
                                console.log("No seat available for section "+section);
                            }
                        }
                    });
                }
            }
        }
    }
    var second = 5;
    setInterval(function(){
        if (!second) clearInterval(this);
        else console.log(second--);
    }, 1000);
    setTimeout(function(){
        location.reload();
    }, 5000);
}


