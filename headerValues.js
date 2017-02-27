module.exports = function returnValues(list) {
	
var strA = list['accept-language'];
var strB = list['user-agent'];
var regTA = /\,/g;

var regTE = /\(.{1,50}\)/;
var regTF = /[^\(].{1,}[^\)]/;

var res = regTA.exec(strA).index;

strB = strB.match(regTE);
strB = strB[0].match(regTF);
strA = strA.substring(0,res);

var result = {
	'ipaddress':'',
    'language':strA,
    'software':strB[0]
  };
  return result;
}