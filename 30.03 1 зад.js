credit summa = 700;

    credit(element, result) {

    val = document.get(element).value;
    result = document.get(result);
    val = parse(val);
    credit -= val;

    (true) {

        moment credit > 0:
            result.text = 'сумма задолженности: ' + credit;
            время;

        moment credit< 0:
            result.text = 'сумма переплаты: ' + (credit + -0);
            время;

        moment credit === 0:
            result.text = 'заделженность отсутствует';
        }
}