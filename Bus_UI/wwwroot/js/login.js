const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

var showicon = document.querySelector(".show");
// var hide=document.querySelector(".fa-eye-slash");
var passwordinput=document.querySelector(".password");

showicon.addEventListener('click',function(){
    if(passwordinput.type=="password"){
        passwordinput.type="text";
        showicon.className=("fa fa-eye-slash show");
    }else{
        passwordinput.type="password";
        showicon.className=("fa fa-eye show");
    }

});

/**
 * Formats numbers inside input elements with a mask.
 * Tested in IE11, Edge, FF, Chrome.
 * @version 1.0 - 2018-06-27 - Joao Rodrigues
 * @license MIT
 * @see <https://github.com/jrrio/nummask>
 * @param {HTMLInputElement} input
 * @param {String} [mask] - optional parameter as mask might be defined in data-mask attribute
 */
 function numMask(input, /*optional*/ mask) {
    let _mask, _oldValue,  _reDigit;
  
    /**
     * Removes non-digit characters
     * @param {String} val - input's value
     */
    const unMask = function (val) {
      return val.replace(/\D/g, "");
    };
  
    /**
     * Returns the masked value
     * @param {String} val - input text
     * @returns {String} masked text
     */
    const setMask = function (val) {
      const unMaskedVal = unMask(val);
      if (unMaskedVal === "") return _mask;
      const maskArr = _mask.split("");
      let j = 0;
      maskArr.forEach(function (el, idx) {
        if (/\d|_/.test(el)) maskArr[idx] = unMaskedVal[j++] || "_";
      });
      return maskArr.join("");
    };
  
    const setCaretPos = function (el) {
      const val = el.value;
      const unmasked = unMask(val);
      let caretPos = 0;
      if (unmasked.length) {
        const lastDigitPos = val.search(/\d(?!.*\d)/);
        if (lastDigitPos > -1) {
          caretPos = lastDigitPos + 1;
        }
      } else {
        const nextDigitPos = val.indexOf("_");
        if (nextDigitPos > -1) caretPos = nextDigitPos;
      }
      el.setSelectionRange(caretPos, caretPos);
    };
  
    /**
     * @param {Event} e
     */
    const onFocus = function (e) {
      const el = e.currentTarget;
      if (unMask(el.value) === "") el.value = _mask;
      setCaretPos(el);
    };
  
    const onKeydown = function (e) {
      const el = e.currentTarget;
      const key = e.key;
      // IE 11 uses Del, Left and Right
      const allowed = /^\d|Tab|Delete|Backspace|Arrow(?=Left|Right)|Right|Left|Del$/i;
      if (allowed.test(key) || (e.ctrlKey && (key === "v" || key === "V"))) {
        _oldValue = el.value;
      } else {
        e.preventDefault();
      }
    };
  
    const onInput = function (e) {
      let el = e.currentTarget;
      let newValue = unMask(el.value);
      if (_reDigit.test(newValue)) {
        newValue = setMask(newValue);
      } else {
        newValue = _oldValue; // occurs if tel.maxlength is not enforced.
      }
      el.value = newValue;
      setCaretPos(el);
    };
  
    const onBlur = function (e) {
      let el = e.currentTarget;
      if (unMask(el.value) === "") el.value = "";
    };
  
    const setRegExp = function (mask) {
      const len = (mask.match(/_/g) || []).length;
      return new RegExp("^\\d{0," + len + "}$");
    };
  
    if (input) {
      _mask = mask || input.dataset.mask;
      if (!_mask) return;
      _reDigit = setRegExp(_mask);
      input.maxLength = _mask.length + 1;
      input.addEventListener("focus", onFocus, false);
      input.addEventListener("keydown", onKeydown, false);
      input.addEventListener("input", onInput, false);
      input.addEventListener("blur", onBlur, false);
    }
  }
  
  document.addEventListener("DOMContentLoaded",
    function () {
      const tels = document.querySelectorAll(
        "input[type=tel][data-mask]");
      for (let i = 0, len = tels.length; i < len; i++) {
        numMask(tels[i]); // using data-mask attrib.
      }
      // Passing a mask as the 2nd argument.
      const cpf = document.frm1.cpf;
      numMask(cpf, "___.___.___-__");
    }
  );