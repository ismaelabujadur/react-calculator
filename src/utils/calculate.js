const calculate = (expression) => {

    // We check that it matches an expected pattern that can be properly evaluated
    const matched = (new RegExp('([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*')).exec(expression);

    if (expression == '') {
        return 0;
    }

    // If not return 0
    if (!matched) {
        return 0;
    }

    // If starts with wrong operators then throw an error
    if (/^[*+\/]/.test(expression)) {
        return () => {
            throw new Error('Cannot start the expression with invalid operators')
        }
    }

    if (/\/0/.test(expression)) {
        return () => {
            throw new Error('Cannot divide by zero')
        }
    }

    return new Function(`return ${matched[0]}`)()
};

export default calculate;