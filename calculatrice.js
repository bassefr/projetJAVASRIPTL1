const s_Calculator = () => {
  const display = document.getElementById('calcDisplay');
  const buttons = document.getElementById('buttons');

  const ButtonClick = (event) => {
    const value = event.target.value;
    if (value === undefined) return;
    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        if (display.value.includes('/0')) {
          display.value = 'Division par 0 impossible';
          return;
        }
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Expression invalide';
      }
    } else if (value === 'DEL') {
      display.value = display.value.slice(0, -1);
    } else {
      if (display.value === ' Division par 0 impossible' || display.value === ' Expression invalide') {
        display.value = '';
      }
      display.value += value;
    }
  };

  const KeyPress = (event) => {
    const validKeys = "0123456789+-*/.()";
    const key = event.key;
    if (!validKeys.includes(key)) {
      if (key === 'Enter') {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = ' Expression invalide';
        }
        event.preventDefault();
      } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
        event.preventDefault();
      } else {
        display.value = ' Caractère invalide';
        event.preventDefault();
      }
    }
  };

  buttons.addEventListener('click', ButtonClick);
  display.addEventListener('keypress', KeyPress);
};

document.addEventListener('DOMContentLoaded', s_Calculator);
