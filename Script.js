function searchbyNum()
{

    var data_pokemon = { "1" : {"Pokemon_Number":"1", "Name": "Bulbasaur", "Descendant":"Ivysaur", "TypeCombo":"Grass/Poison"}, 
                         "2" : {" Pokemon_Number":"2", "Name": "Ivysaur", "Parent":"Bulbasaur", "Descendant":"Venusaur", "TypeCombo":"Grass/Poison" },
                         "3" : {" Pokemon_Number":"3", "Name": "Venusaur", "Parent":"Ivysaur", "TypeCombo":"Grass/Poison"  },
                         "4" : {" Pokemon_Number":"4", "Name": "Charmander", "Descendant":"Charmeleon", "TypeCombo":"Fire" },
                         "5" : {" Pokemon_Number":"5", "Name": "Charmeleon", "Parent":"Charmander", "Descendant":"Charizard", "TypeCombo":"Fire"},
                         "6" : {" Pokemon_Number":"6","Name": "Charizard", "Parent":"Charmeleon", "TypeCombo":"Fire/Flying"},
                         "7" : {" Pokemon_Number":"7","Name": "Squirtle", "Descendant":"Wartortle", "TypeCombo":"Water"},
                         "8" : {" Pokemon_Number":"8","Name": "Wartortle", "Parent":"Squirtle", "Descendant":"Blastoise", "TypeCombo":"Water"},
                         "9" : {" Pokemon_Number":"9","Name": "Blastoise", "Parent":"Wartortle", "TypeCombo":"Water"},
                         "10" : {" Pokemon_Number":"10","Name": "Caterpie", "Descendant":"Metapod", "TypeCombo":"Bug"},
                         "11" : {" Pokemon_Number":"11","Name": "Metapod", "Parent":"Caterpie", "Descendant":"Butterfree", "TypeCombo":"Bug"},
                         "12" : {" Pokemon_Number":"12","Name": "Butterfree", "Parent":"Metapod", "TypeCombo":"Bug/Flying"},
                         "13" : {" Pokemon_Number":"13","Name": "Weedle", "Descendant":"Kakuna", "TypeCombo":"Bug/Poison"},
                         "14" : {" Pokemon_Number":"14","Name": "Kakuna", "Parent":"Weedle", "Descendant":"Beedrill", "TypeCombo":"Bug/Poison"},
                         "15" : {" Pokemon_Number":"15","Name": "Beedrill", "Parent":"Kakuna","TypeCombo":"Bug/Poison"},
                         "16" : {" Pokemon_Number":"16","Name": "Pidgey", "Descendant":"Pidgeotto", "TypeCombo":"Normal/Flying"},
                         "17" : {" Pokemon_Number":"17","Name": "Pidgeotto", "Parent":"Pidgey", "Descendant":"Pidgeot", "TypeCombo":"Normal/Flying"},
                         "18" : {" Pokemon_Number":"18","Name": "Pidgeot", "Parent":"Pidgeotto", "TypeCombo":"Normal/Flying"},
                         "19" : {" Pokemon_Number":"19","Name": "Rattata", "Descendant":"Raticate", "TypeCombo":"Normal"},
                         "20" : {" Pokemon_Number":"20","Name": "Raticate", "Parent":"Rattata", "TypeCombo":"Normal"}

    }
    var images_obj = { "1" : "pokemon/1.png", 
                       "2" : "pokemon/2.png",
                       "3" : "pokemon/3.png",
                       "4" : "pokemon/4.png",
                       "5" : "pokemon/5.png",
                       "6" : "pokemon/6.png",
                       "7" : "pokemon/7.png",
                       "8" : "pokemon/8.png",
                       "9" : "pokemon/9.png",
                       "10" : "pokemon/10.png",
                       "11" : "pokemon/11.png",
                       "12" : "pokemon/12.png",
                       "13" : "pokemon/13.png",
                       "14" : "pokemon/14.png",
                       "15" : "pokemon/15.png",
                       "16" : "pokemon/16.png",
                       "17" : "pokemon/17.png",
                       "18" : "pokemon/18.png",
                       "19" : "pokemon/19.png",
                       "20" : "pokemon/20.png"

    }

    var input_from_num_box = document.getElementById("snum");
    var numbers =  /^\d+$/;
    var elementdiv = document.createElement("div");
   
    var currentDiv = document.getElementById("search_results");
      
    if(input_from_num_box.value.match(numbers)&& input_from_num_box.value>=1 && input_from_num_box.value<=20)
      {
        
        var filter = input_from_num_box.value;
        var arr_keys=[];
        var img_match = [];
        var arr_match=[];
        arr_keys = Object.keys(data_pokemon);
        var size=arr_keys.length;

        for(i=0;i<size;i++)
        {
          if(arr_keys[i].indexOf(filter)>-1 )
          {
              arr_match.push(data_pokemon[arr_keys[i]]);
              img_match.push(images_obj[arr_keys[i]]);

          }
        } 
        elementdiv.style.backgroundColor="black";
        elementdiv.style.borderRadius="15px";
        elementdiv.style.marginTop="10px";
        var len = arr_match.length;
        if(len>0)
        {
            var myList = document.createElement("ul");
            myList.className="list";
            for(var j=0; j<len; j++)
            {
                var listItem = document.createElement("li");
                var img = document.createElement("img");
                img.src = img_match[j];
                img.style.marginLeft ="auto";
                img.style.marginRight = "auto";
                
                listItem.appendChild(img);

                listItem.style.color= "whitesmoke";
                listItem.style.width = "330px";
                listItem.style.height="360px";
                listItem.style.overflow= "hidden";
                listItem.style.margin = "10px";
                listItem.style.display="block";
                listItem.style.paddingBottom="10px";
                listItem.style.textAlign="center";
        
                for(const property in arr_match[j])
                {
                    
                    var value = `${property}: ${arr_match[j][property]}`;
                    //var final_value = JSON.stringify(value,null,10);

                    var listvalue = document.createTextNode(value);
                    var br = document.createElement("br");
                   
                    listItem.appendChild(br);
                    listItem.appendChild(listvalue);
                    myList.appendChild(listItem);
                }
            }
        }
        var br = document.createElement("br");
        elementdiv.appendChild(br);
        elementdiv.appendChild(document.createTextNode("SEARCH RESULTS"));
        elementdiv.style.color="whitesmoke";
        elementdiv.style.textAlign="center";
        elementdiv.appendChild(myList);
        currentDiv.textContent=" ";
        currentDiv.appendChild(elementdiv);   
      }
    else
      {
        if(input_from_num_box.value=="")
        {
           
           currentDiv.textContent=" ";
           currentDiv.appendChild(elementdiv);
        }
        else
        {
        alert('Please input numeric characters of length not more than 20');
        return false;
        }
      }
}

function searchbyName()
{
    var data_pokemon = { "Bulbasaur" : {"Number":"1", "Name": "Bulbasaur", "Descendant":"Ivysaur", "TypeCombo": "Grass/Poison"}, 
                         "Ivysaur" : {"Number":"2", "Name": "Ivysaur", "Parent":"Bulbasaur", "Descendant":"Venusaur", "TypeCombo": "Grass/Poison" },
                         "Venusaur": {"Number":"3", "Name": "Venusaur", "Parent":"Ivysaur", "TypeCombo": "Grass/Poison"  },
                         "Charmander" : {"Number":"4", "Name": "Charmander", "Descendant":"Charmeleon", "TypeCombo": "Fire" },
                         "Charmeleon" : {"Number":"5", "Name": "Charmeleon", "Parent":"Charmander", "Descendant":"Charizard", "TypeCombo": "Fire"},
                         "Charizard" : {"Number":"6","Name": "Charizard",  "Parent":"Charmeleon", "TypeCombo": "Fire/Flying"},
                         "Squirtle" : {"Number":"7","Name": "Squirtle",  "Descendant":"Wartortle", "TypeCombo": "Water"},
                         "Wartortle" : {"Number":"8","Name": "Wartortle", "Parent":"Squirtle", "Descendant":"Blastoise", "TypeCombo": "Water"},
                         "Blastoise" : {"Number":"9","Name": "Blastoise", "Parent":"Wartortle", "TypeCombo": "Water"},
                         "Caterpie" : {"Number":"10","Name": "Caterpie", "Descendant":"Metapod", "TypeCombo": "Bug"},
                         "Metapod" : {"Number":"11","Name": "Metapod",  "Parent":"Caterpie", "Descendant":"Butterfree", "TypeCombo": "Bug"},
                         "Butterfree" : {"Number":"12","Name": "Butterfree", "Parent":"Metapod", "TypeCombo": "Bug/Flying"},
                         "Weedle" : {"Number":"13","Name": "Weedle", "Descendant":"Kakuna", "Type Combo": "Bug/Poison"},
                         "Kakuna" : {"Number":"14","Name": "Kakuna", "Parent":"Weedle", "Descendant":"Beedrill", "TypeCombo": "Bug/Poison"},
                         "Beedrill" : {"Number":"15","Name": "Beedrill", "Parent":"Kakuna", "TypeCombo": "Bug/Poison"},
                         "Pidgey" : {"Number":"16","Name": "Pidgey", "Descendant":"Pidgeotto", "TypeCombo": "Normal/Flying"},
                         "Pidgeotto" : {"Number":"17","Name": "Pidgeotto", "Parent":"Pidgey", "Descendant":"Pidgeot", "TypeCombo": "Normal/Flying"},
                         "Pidgeot" : {"Number":"18","Name": "Pidgeot", "Parent":"Pidgeotto", "TypeCombo": "Normal/Flying"},
                         "Rattata" : {"Number":"19","Name": "Rattata", "Descendant":"Raticate", "TypeCombo": "Normal"},
                         "Raticate" : {"Number":"20","Name": "Raticate", "Parent":"Rattata", "TypeCombo": "Normal"}

    }
    var images_obj = { "Bulbasaur" : "pokemon/1.png", 
                       "Ivysaur" : "pokemon/2.png",
                       "Venusaur": "pokemon/3.png",
                       "Charmander" : "pokemon/4.png",
                       "Charmeleon" : "pokemon/5.png",
                       "Charizard" : "pokemon/6.png",
                       "Squirtle" : "pokemon/7.png",
                       "Wartortle" : "pokemon/8.png",
                       "Blastoise" : "pokemon/9.png",
                       "Caterpie" : "pokemon/10.png",
                       "Metapod" : "pokemon/11.png",
                       "Butterfree" : "pokemon/12.png",
                       "Weedle"  : "pokemon/13.png",
                       "Kakuna" : "pokemon/14.png",
                       "Beedrill" : "pokemon/15.png",
                       "Pidgey" : "pokemon/16.png",
                       "Pidgeotto" : "pokemon/17.png",
                       "Pidgeot" : "pokemon/18.png",
                       "Rattata" : "pokemon/19.png",
                       "Raticate" : "pokemon/20.png"

    }
    var input_from_name_box = document.getElementById("sname");
    var alphabets = /^[A-Za-z]+$/;
    var elementdiv = document.createElement("div");
    var currentDiv = document.getElementById("search_results");
    var length_of_name = input_from_name_box.value.length;
    if(input_from_name_box.value.match(alphabets) && length_of_name<=20)
    {
        var filter = input_from_name_box.value.toUpperCase();
        var arr_keys=[];
        var arr_match=[];
        var img_match=[];
        var j = 0;
        arr_keys = Object.keys(data_pokemon);
        var size=arr_keys.length;
        var i = 0;
        for(i=0;i<size;i++)
        {
          if(arr_keys[i].toUpperCase().indexOf(filter)>-1)
          {
              arr_match.push(data_pokemon[arr_keys[i]]);
              img_match.push(images_obj[arr_keys[i]])

          }
        }
        elementdiv.style.backgroundColor="black";
        var len = arr_match.length;
        if(len>0)
        {
            var myList = document.createElement("ul");
            myList.className="list";
            for(var j=0; j<len; j++)
            {
                var listItem = document.createElement("li");
                var img = document.createElement("img");
                img.src = img_match[j];
                img.style.marginLeft ="auto";
                img.style.marginRight = "auto";
                listItem.appendChild(img);

                listItem.style.color= "whitesmoke";
                listItem.style.width = "330px";
                listItem.style.height="360px";
                listItem.style.overflow= "hidden";
                listItem.style.margin = "10px";
                listItem.style.display="block";
                listItem.style.paddingBottom="10px";
                listItem.style.textAlign="center";
        
                for(const property in arr_match[j])
                {
                    
                    var value = `${property}: ${arr_match[j][property]}`;
                    //var final_value = JSON.stringify(value,null,10);

                    var listvalue = document.createTextNode(value);
                    var br = document.createElement("br");
                   
                    listItem.appendChild(br);
                    listItem.appendChild(listvalue);
                    myList.appendChild(listItem);
                }
            }
        }
        var br = document.createElement("br");
        elementdiv.appendChild(br);
        elementdiv.appendChild(document.createTextNode("SEARCH RESULTS"));
        elementdiv.style.color="whitesmoke";
        elementdiv.style.textAlign="center";
        elementdiv.appendChild(myList);
        currentDiv.textContent=" ";
        currentDiv.appendChild(elementdiv);   
      }
    
    else
    {
        if(input_from_name_box.value=="")
        {
           
           currentDiv.textContent=" ";
           currentDiv.appendChild(elementdiv);
        }
        else
        {
        alert('Please enter alphabets of length not more than 20');
        return false;
        }
    }
}