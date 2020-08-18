/**
 * 
 document.body.onload = Lyric;
 function Lyric(){
     var newTag = document.createElement("p")
     var newContent = document.createTextNode([`Echt - Junimond
     Die Welt schaut rauf
     Zu meinem Fenster
     Mit müden Augen
     Ganz staubig und scheu
     Ich bin hier oben auf meiner Wolke
     Ich seh' dich kommen, aber du gehst vorbei
     Doch jetzt tut's nicht mehr weh
     Nee, jetzt tut's nicht mehr weh
     Und alles bleibt stumm
     Und kein Sturm kommt auf wenn ich dich seh'
     Es ist vorbei, bye bye Junimond
     Es ist vorbei
     Es ist vorbei, bye bye
     Zweitausend Stunden hab' ich gewartet
     Ich hab' sie alle gezählt und verflucht
     Ich hab' getrunken, geraucht und gebetet
     Hab' dich flussauf- und flussabwärts gesucht
     Doch jetzt tut's nicht mehr weh
     Nee, jetzt tut's nicht mehr weh
     Und alles bleibt stumm
     Und kein Sturm kommt auf wenn ich dich seh'
     Es ist vorbei, bye bye Junimond
     Es ist vorbei
     Es ist vorbei, bye bye
     Doch jetzt tut's nicht mehr weh
     Nee, jetzt tut's nicht mehr weh
     Und alles bleibt stumm
     Und kein Sturm kommt auf wenn ich dich seh'
     Es ist vorbei, bye bye Junimond
     Es ist vorbei
     Es ist vorbei, bye bye
     Es ist vorbei, bye bye Junimond
     Es ist vorbei
     Es ist vorbei, bye bye
     Es ist vorbei, bye bye Junimond
     Es ist vorbei
     Es ist vorbei, bye bye
     Es ist vorbei, bye bye Junimond
     Es ist vorbei
     Es ist vorbei, bye bye`]);
     
     //const unique = newContent[0].reduce((result, element)=>{
         //    return result.includes(element) ? result : [...result,element];
         //},[]);
         
         //var newContent = {}
         //$(p).each( function(){
             //    var txt = $(this).text();
             //    if(newContent[txt])
             //    $(this).remove();
             //    else
             //    newContent[txt] = true;
             //})
             var newText = newTag.appendChild(newContent);
             console.log(newText)
             document.body.style.backgroundColor ="red"
             document.body.style.fontSize = "25px"
             document.body.append(newText)
            }
            var listArray = [
                "cia",
                "cia",
                "anx"
            ];
            var uniquesArray = [];
            var counting = 0;
            var found = false;
            
            for (i = 0; i < listArray.length; i++) {
                for (y = 0; y < uniquesArray.length; y++) {
                    if ( listArray[i] == uniquesArray[y] ) {
                        found = true;
                    }
                }
                counting++;
                if (counting == 1 && found == false) {
                    uniquesArray.push(listArray[i]);
                }
                found = false;
                counting = 0;
            }
            
            console.log(listArray);
            console.log(uniquesArray);
            
            */
            
            
    var ListOfArray = [
    `Es ist vorbei, bye bye Junimond\nEs ist vorbei\nEs ist vorbei, bye bye`,
    `Es ist vorbei, bye bye Junimond\nEs ist vorbei\nEs ist vorbei, bye bye`,
    `Doch jetzt tut's nicht mehr weh\nNee, jetzt tut's nicht mehr weh\nUnd alles bleibt stumm\nUnd kein Sturm kommt auf wenn ich dich seh`,
    `Es ist vorbei, bye bye Junimond\nEs ist vorbei\nEs ist vorbei, bye bye`,

    ];
var myUniquesArray = [];
var count = 0;
var gotIt = false;

for (x = 0; x < ListOfArray.length; x++) {
	for (z = 0; z < myUniquesArray.length; z++) {
		if ( ListOfArray[x] == myUniquesArray[z] ) {
			gotIt = true;
        }
    }
	count++;
	if (count == 1 && gotIt == false) {
		myUniquesArray.push(ListOfArray[x]);
	}
	gotIt = false;
	count = 0;
}

console.log(ListOfArray);
console.log(myUniquesArray);

var p = document.createElement("p");
p.style.fontWeight ="bold",
p.style.color ="gray",
p.style.fontSize ="25px",
p.style.display ="flex",
p.style.backgroundColor ="red",
p.style.justifyContent ="center",
p.style.textAlign ="center"

p += myUniquesArray;

document.body.append(p)
console.log(p) 


