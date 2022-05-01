import CryptoJS from 'crypto-jS'

const ord = (str) => {
     return parseInt(str.charCodeAt(0));
}
// chr func look php
const chr = (n) => {
     // first if to check params
     if (n < 128){
          //if params match to 128 worked
          return String.fromCharCode(n);
     } else {
          //its else if not worked and it worked
          return "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ " [n - 128];
     }
}

//main func
export function secret(auth){

     //the variable to return and do end changes in for loop
     var t = "";

     //the variable you set it Equal to a varible 
     var b = "";

     //we set it Equal params gets from calling func
     var a = auth

     // the first part of channge are substrs
     b = a.substr(16, 8);
     b += a.substr(0, 8);
     b += a.substr(24);
     b += a.substr(8, 8);

     //second part of change are for loop
     for(var i = 0; i < b.length; i++){

          //the if for checking the data type gets from first part
          if (parseInt(b[i]) == NaN){

            // if data was number worked
            t += chr((((ord(b[i]) - 48) + 5) % 10) + 48);

          }else{

               //it worked when data type are not a number 
               t += chr((((ord(b[i]) - 97) + 9) % 26) + 97);

          }
     }
     //its end we return data to use

     return t;
}

export function decrypt(key,secret){
     var iv = '\x00';
     iv = iv.repeat(16);
     var decrypted = CryptoJS.AES.decrypt(secret, CryptoJS.enc.Utf8.parse(key),{ iv: CryptoJS.enc.Utf8.parse(iv) });
     var parsed = decrypted.toString(CryptoJS.enc.Utf8);
     return parsed;
}

export function encrypt(key,secret) {
     var iv = '\x00';
     iv = iv.repeat(16);
     var encrypted = CryptoJS.AES.encrypt(secret,CryptoJS.enc.Utf8.parse(key),{ iv: CryptoJS.enc.Utf8.parse(iv) });
     var string = encrypted + ''
     return string;
}