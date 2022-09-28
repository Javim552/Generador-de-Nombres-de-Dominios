
var pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let dominio = "";

for (let i = 0; i < pronoun.length; i++) {
  

        for(let x= 0; x < adj.length; x++) {
        
           

                    for (let k = 0; k < noun.length; k++) {
                        
                        dominio = dominio + pronoun[i] + adj[x] + noun[k] +".com\n" ;
                       
                    }
                    
            
        
        }
  }

  console.log(dominio);

  



  
  /*for (let j = 0; j < pronoun.length; j++) {
    dominio3 = pronoun[1] + adj[a] + noun[j] +".com";
    console.log(dominio3);

  }
 
/*
thegreatjogger.com
thegreatracoon.com
thebigjogger.com
thebigracoon.com
ourgreatjogger.com
ourgreatracoon.com
ourbigjogger.com
ourbigracoon.com 
*/