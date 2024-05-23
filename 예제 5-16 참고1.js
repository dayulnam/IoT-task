(
    function () {
        var EmptySpace = Symbol.for('EMPTY_SPACE');
        // 기존 전역 심볼공간에 'EMPTY_SPACE'라는 문자열을 가진 심볼이 없으므로 새로 생성.
        console.log(EmptySpace);
    }
)();

(
    function () {
        console.log(Symbol.for('EMPTY_SPACE'));
        // 기존 전역 심볼공간에 'EMPTY_SPACE'라는 문자열의 심볼이 있으므로 해당 값을 참조.
    }
)();