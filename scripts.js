//This is Spinal Tap
function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.toLowerCase().split(/(?:_| )+/).join("-");
  }
console.log(spinalCase("This Is Spinal Tap"));

//Search and Replace
function myReplace(str, before, after) {
  var index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  str = str.replace(before, after);
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

//HTML Entities
function convertHTML(str) {
    var temp = str.split("");  

    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
  }
  
console.log(convertHTML("Dolce & Gabbana"));