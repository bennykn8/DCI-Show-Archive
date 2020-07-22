var Show = function(c, y, t, s, p, l){
  this.corps = c;
  this.year = y;
  this.showTitle = t;
  this.score = s;
  this.placement = p;
  this.link = "shows/" + this.year + "/" + l;
  this.toString = "<a href=" + this.link + ">"+ this.corps + " " + this.year + " - \"" + this.showTitle + "\"</a>";
  };
  
var bd2019 = new Show("Blue Devils", 2019, "Ghostlight", 98.325, 1,"bd2019.html");
var bd2018 = new Show("Blue Devils", 2018, "Dreams and Nighthawks", 97.350, 2,"bd2018.html");
var bd2017 = new Show("Blue Devils", 2017, "Metamorph", 98.538, 1, "bd2017.html");
var bd2016 = new Show("Blue Devils", 2016, "As Dreams Are Made On", 97.250, 2,"../../pagenotfound.html");
var bloo2019 = new Show("Bluecoats", 2019, "The Bluecoats", 98.238, 2, "bloo2019.html");
var bloo2018 = new Show("Bluecoats", 2018, "Session 44", 96.950, 3, "bloo2018.html");
var bloo2017 = new Show("Bluecoats", 2017, "Jagged Line", 95.163, 5, "../../pagenotfound.html");
var bloo2016 = new Show("Bluecoats", 2016, "Down Side Up", 97.650, 1, "bloo2016.html");
var scv2019 = new Show("Santa Clara Vanguard", 2019, "Vox Eversio", 96.600, 3, "scv2019.html");
var scv2018 = new Show("Santa Clara Vanguard", 2018, "Babylon", 98.625, 1, "scv2018.html");
var scv2017 = new Show("Santa Clara Vanguard", 2017, "Ouroboros", 97.600, 2, "scv2017.html");
var scv2016 = new Show("Santa Clara Vanguard", 2016, "Force of Nature", 95.300, 4, "../../pagenotfound.html");
var crown2019 = new Show("Carolina Crown", 2019, "Beneath The Surface", 96.563, 4, "crown2019.html");
var crown2018 = new Show("Carolina Crown", 2018, "Beast", 95.500, 4, "crown2018.html");
var crown2017 = new Show("Carolina Crown", 2017, "It is", 96.575, 3, "crown2017.html");
var crown2016 = new Show("Carolina Crown", 2016, "Relentless", 97.088, 3, "../../pagenotfound.html");
var cav2019 = new Show("Cavaliers", 2019, "The Wrong Side of The Tracks", 95.400, 5, "cav2019.html");
var cav2018 = new Show("Cavaliers", 2018, "On Madness and Creativity", 93.213, 6, "../../pagenotfound.html");
var cav2017 = new Show("Cavaliers", 2017, "Men Are From Mars", 95.200, 4, "../../pagenotfound.html");
var cav2016 = new Show("Cavaliers", 2016, "Propaganda", 94.025, 5, "../../pagenotfound.html");
var bac2019 = new Show("Boston Crusaders", 2019, "Goliath", 94.488, 6, "bac2019.html");
var bac2018 = new Show("Boston Crusaders", 2018, "S.O.S.", 94.313, 5, "bac2018.html");
var bac2017 = new Show("Boston Crusaders", 2017, "Wicked Games", 92.962, 6, "../../pagenotfound.html");
var bac2016 = new Show("Boston Crusaders", 2016, "Quixotic", 84.800, 12, "../../pagenotfound.html");
var bk2019 = new Show("Blue Knights", 2019, "I Remember Everything", 92.050, 7, "bk2019.html");
var bk2018 = new Show("Blue Knights", 2018, "The Fall and Rise", 88.925, 9, "../../pagenotfound.html");
var bk2017 = new Show("Blue Knights", 2017, "i", 90.400, 8, "../../pagenotfound.html");
var bk2016 = new Show("Blue Knights", 2016, "The Great Event", 90.738, 7, "../../pagenotfound.html");
var bs2019 = new Show("Blue Stars", 2019, "Call of the Wild", 91.225, 8, "bs2019.html");
var bs2018 = new Show("Blue Stars", 2018, "The Once and Future Carpenter", 90.050, 8, "../../pagenotfound.html");
var bs2017 = new Show("Blue Stars", 2017, "Star Crossed", 87.938, 10, "../../pagenotfound.html");
var bs2016 = new Show("Blue Stars", 2016, "Le Rêve", 89.050, 9, "../../pagenotfound.html");
var cadets2019 = new Show("Cadets", 2019, "Behold", 89.838, 9, "cadets2019.html");
var cadets2018 = new Show("Cadets", 2018, "The Unity Project", 92.225, 7, "../../pagenotfound.html");
var cadets2017 = new Show("Cadets", 2017, "The Faithful, The Fallen, The Forgiven", 91.675, 7, "../../pagenotfound.html");
var cadets2016 = new Show("Cadets", 2016, "The Awakening", 92.763, 6, "../../pagenotfound.html");
var mandarins2019 = new Show("Mandarins", 2019, "Subterra", 89.300, 10, "mandarins2019.html");
var mandarins2018 = new Show("Mandarins", 2018, "Life Rite After", 88.150, 10, "../../pagenotfound.html");
var crossmen2019 = new Show("Crossmen", 2019, "Valkyrie", 87.550, 11, "crossmen2019.html");
var crossmen2018 = new Show("Crossmen", 2018, "The In-Between", 86.750, 12, "../../pagenotfound.html");
var crossmen2017 = new Show("Crossmen", 2017, "Enigma", 86.825, 11, "../../pagenotfound.html");
var crossmen2016 = new Show("Crossmen", 2016, "Continuum", 86.975, 10, "../../pagenotfound.html");
var pr2019 = new Show("Phantom Regiment", 2019, "I Am Joan", 87.238, 12, "pr2019.html");
var pr2018 = new Show("Phantom Regiment", 2018, "This New World", 86.950, 11, "../../pagenotfound.html");
var pr2017 = new Show("Phantom Regiment", 2017, "Phantasm", 88.125, 9, "../../pagenotfound.html");
var pr2016 = new Show("Phantom Regiment", 2016, "Voice of Promise", 89.963, 8, "../../pagenotfound.html");
var ms2017 = new Show("Madison Scouts", 2017, "The Last Man Standing", 85.250, 12, "../../pagenotfound.html");
var acad2016 = new Show("The Academy", 2016, "Drum Corpse Bride", 86.100, 11, "../../pagenotfound.html");

var bdShows = {corpsName: "Blue Devils", showArray: [bd2019, bd2018, bd2017, bd2016]};
var blooShows = {corpsName: "Bluecoats", showArray: [bloo2019, bloo2018, bloo2017, bloo2016]};
var scvShows = {corpsName: "Santa Clara Vanguard", showArray: [scv2019, scv2018, scv2017, scv2016]};
var crownShows = {corpsName: "Carolina Crown", showArray: [crown2019, crown2018, crown2017, crown2016]};
var cavShows = {corpsName: "Cavaliers", showArray: [cav2019, cav2018, cav2017, cav2016]};
var bacShows = {corpsName: "Boston Crusaders", showArray: [bac2019, bac2018, bac2017, bac2016]};
var bkShows = {corpsName: "Blue Knights", showArray: [bk2019, bk2018, bk2017, bk2016]};
var bsShows = {corpsName: "Blue Stars", showArray: [bs2019, bs2018, bs2017, bs2016]};
var cadetsShows = {corpsName: "Cadets", showArray: [cadets2019, cadets2018, cadets2017, cadets2016]};
var mandarinsShows = {corpsName: "Mandarins", showArray: [mandarins2019, mandarins2018]};
var crossmenShows = {corpsName: "Crossmen", showArray: [crossmen2019, crossmen2018, crossmen2017, crossmen2016]};
var prShows = {corpsName: "Phantom Regiment", showArray: [pr2019, pr2018, pr2017, pr2016]};
var msShows = {corpsName: "Madison Scouts", showArray: [ms2017]};
var acadShows = {corpsName: "The Academy", showArray: [acad2016]}

var showArchive = [acadShows, bdShows, bkShows, bsShows, blooShows, bacShows, cadetsShows, crossmenShows, crownShows, cavShows, msShows, mandarinsShows, prShows, scvShows];

var awards2019 = ["Bluecoats", "Santa Clara Vanguard", "Blue Devils", "Boston Crusaders", "Carolina Crown"];
var awards2018 = ["Santa Clara Vanguard", "Santa Clara Vanguard", "Santa Clara Vanguard", "Boston Crusaders", "Santa Clara Vanguard"];
var awards2017 = ["Blue Devils", "Santa Clara Vanguard", "Blue Devils", "Santa Clara Vanguard", "Carolina Crown"];
var awards2016 = ["Bluecoats", "Santa Clara Vanguard", "Carolina Crown", "Carolina Crown", "Carolina Crown"];

var awardWinners = [awards2019, awards2018, awards2017, awards2016];

var text = ""; 
function generateDefaultArchive() {
  text = "";
  var arr = []; 
  for(let i = 2019; i > 2015; i--) {
    arr = getShowsByYear(i);
    document.getElementById("showContainer").innerHTML += "<h4>" + i + "</h4><br>"; 
    displaySearchResults(arr);
  }
}
function submitSearch() {
  document.getElementById("showContainer").innerHTML = "";
  var f = document.forms["filter"];
  var arr = [];
  var filledElems = [];
  for(var i = 0; i < f.length-1; i++) {
    if(f.elements[i].value !== "") {
      filledElems += i;
      switch(i) { 
        case 0:
          arr.push(getShowsByCorps(f.elements[0].value));
          break;
        case 1:
          arr.push(getShowsByYear(f.elements[1].value));
          break;
        case 2:
          arr.push(getShowsByTitle(f.elements[2].value));
          break;
        case 3:
          arr.push(getShowsByPlacement(f.elements[3].value));
          break;
        default:
          alert("error");
      }
    }
  }
  if(arr.length == 0) {generateDefaultArchive();}
  else {
    text = "<h4>";
    for(var z = 0; z < filledElems.length; z++) {
      if(z == filledElems.length-1) {
        if(filledElems[z] == 3) {
          switch(f.elements[3].value * 1) {
            case 1:
              text += f.elements[3].value + "st</h4><br>";
              break;
            case 2:
              text += f.elements[3].value + "nd</h4><br>";
              break;
            case 3:
              text += f.elements[3].value + "rd</h4><br>";
              break;
            default:
              text += f.elements[3].value + "th</h4><br>";
          }  
        }
        else {text += f.elements[filledElems[z]].value + "</h4><br>";}
      }
      else {text += f.elements[filledElems[z]].value + " + ";} 
    }
    document.getElementById("showContainer").innerHTML += text;
    var filt;
    if(arr.length == 1) {filt = arr[0];}
    else {
      filt = filterArrays(arr, arr[0], arr[1], 0);
    }
    if(filt.length == 0) {
      document.getElementById("showContainer").innerHTML += "<p>No Results Found</p>";
    }
    else {displaySearchResults(filt);}
  }
}

function getShowsByCorps(c) {
  var arr = [];
  for(let i of showArchive) {
    if(i.corpsName == c) {arr = i.showArray;}
  }
  return arr;
}
function getShowsByYear(y) {
  var arr = [];
  for(let i of showArchive) {
    for(let z of i.showArray) {
      if(z.year == y)
        arr.push(z);
    }  
  }
  return arr;
}
function getShowsByTitle(t) {
  var patt = new RegExp(t, "i");
  var arr = [];
  for(let i of showArchive) {
    for(let z of i.showArray) {
      if(patt.test(z.showTitle)) {arr.push(z);}
    }
  }
  return arr;
}
function getShowsByPlacement(p) {
  var arr = [];
  for(let i of showArchive) {
    for(let z of i.showArray) {
      if(z.placement == p) {arr.push(z);}
    }
  }
  return arr;
}

function filterArrays(elems, arr1, arr2, x) {
  if(x == elems.length-1) {return arr1;}
  var filtered = [];
  for(let i of arr1) {
    for(let z of arr2) {
      if(i == z) {filtered.push(i);}
    }
  }
  return filterArrays(elems, filtered, elems[x+2], x+1);
}
function displaySearchResults(arr){
  text = "";
  for(let i of arr) {
    text += i.toString;
    if(i.link.indexOf("../../pagenotfound.html") > -1)
      text += "<span> * </span>";
    text += "<br>";
  } 
  document.getElementById("showContainer").innerHTML += text;
}