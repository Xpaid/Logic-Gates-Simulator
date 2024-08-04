document.addEventListener('DOMContentLoaded', () => {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const logicGate = document.getElementById('logicGate');
    const result = document.getElementById('result');

    function updateResult() {
        const value1 = parseInt(input1.value);
        const value2 = parseInt(input2.value);
        const gate = logicGate.value;

        let output;
        switch (gate) {
            case 'AND':
                output = value1 && value2;
                break;
            case 'OR':
                output = value1 || value2;
                break;
            case 'NAND':
                output = !(value1 && value2);
                break;
            case 'NOR':
                output = !(value1 || value2);
                break;
            case 'XOR':
                output = value1 ^ value2;
                break;
            case 'XNOR':
                output = !(value1 ^ value2);
                break;
        }
        
        result.textContent = output ? 1 : 0;
    }

    input1.addEventListener('change', updateResult);
    input2.addEventListener('change', updateResult);
    logicGate.addEventListener('change', updateResult);

    // Initialize the result on page load
    updateResult();
});
