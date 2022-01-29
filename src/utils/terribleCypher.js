const terribleCypher = {
  encode: (str) => {
    let o = [];
    for (let i = 0; i < str.length; i++) {
      o[i] = str.charCodeAt(i);
    }
    return o;
  },
  decode: (arr) => {
      return String.fromCharCode(...arr);
  }
};

export default terribleCypher;
