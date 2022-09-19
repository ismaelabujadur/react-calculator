const calculate = (expression: string) => {
    const matched = (new RegExp('([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*')).exec(expression);

    if (!matched) { return 0; }

    if (/^[*+/]/.test(expression)) {
        return () => {
            throw new Error('The expression cannot start with invalid operators (* or /)');
        };
    }

    return new Function(`return ${matched[0]}`)();
}

export default calculate;