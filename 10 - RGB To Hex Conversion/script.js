// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
    return toHex(r) + toHex(g) + toHex(b);
}

function toHex(num) {
    return  num < 0 ? '00' :
            num > 255 ? 'FF' :
            ('0' + Number(num).toString(16)).slice(-2).toUpperCase();
}

// A continuación una primera versión, muy rústica.

// function toHex(num) {
//     const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
//     num = num < 0 ? 0 :
//         num > 255 ? 255 :
//         num;
//     return hex[Math.floor(num / 16)] + hex[num % 16];
// }