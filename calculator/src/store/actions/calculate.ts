const calculate = (expression: string) => {
    return {
        type: 'SET_EXPRESSION',
        payload: expression
    }
};

export { calculate };