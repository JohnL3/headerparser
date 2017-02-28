module.exports = function returnValues(list, ip) {
	
var strA = list['accept-language'];
var strB = list['user-agent'];
var strC = ip;
var strD = '';

var regTA = /\,/g;
var regTB = /[^0-9\.]{1,}/;
var regTE = /\(.{1,50}\)/;
var regTF = /[^\(].{1,}[^\)]/;

var res = regTA.exec(strA).index;

strD = strC.match(regTB);
if(!strD === null) strC = strC.replace(strD[0],"");
strB = strB.match(regTE);
strB = strB[0].match(regTF);
strA = strA.substring(0,res);

var result = {
	'ipaddress':strC,
    'language':strA,
    'software':strB[0]
  };
  return result;
}