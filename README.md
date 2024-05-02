## 사물인터넷 Homework 
### 2023120401 남다율

#### Chapter 1 예제 요점

1. 예제 1-1.js
  - 변수란, 변경 가능한 데이터가 담길 수 있는 공간 또는 그릇이다.
  - 이러한 변수를 a라는 식별자로 지정하여 선언하였으며, 컴퓨터는 이를 위해 메모리에서 비어있는 공간 하나를 확보한다.
2. 예제 1-2.js
  - 설정한 공간의 이름을 가진 주소를 검색하여 그곳에 문자열을 할당하는 과정이다.
  - 할당하려는 데이터를 위한 별도의 메모리 공간을 확보하여, 그 주소를 변수 영역에 저장하는 방식이다.
3. 예제 1-3.js
  - 기본형 데이터는 불변성의 특징을 가진다.
  - 따라서, b에 저장했던 5 자체를 7로 바꿀 수 없다.
4. 예제 1-4.js
  - 참조형 데이터는 가변값인 경우가 많지만 설정에 따라 불변값으로 활용할 수 있다.
  - 참조형 데이터를 obj1을 통해 할당하는 연습이다.
5. 예제 1-5.js
  - 참조형 데이터의 프로퍼티를 재할당하는 과정이다.
  - obj1이 바라보고 있는 주소가 변하진 않지만, a라는 객체 내부의 값이 2로 변하였다.
6. 예제 1-6.js
  - 참조형 데이터의 프로퍼티에 다시 참조형 데이터를 할당하는 경우이다.
7. 예제 1-7.js
  - 기본형 데이터는 a, b를 통해, 참조형 데이터는 obj1, obj2을 통해 변수 복사의 차이를 비교하는 예제이다.
8. 예제 1-8.js
  - 변수 복사 후, 객체의 프로퍼티를 변경한 경우이다.
  - 기본형 데이터의 경우에는 주소가 달라지지만, 참조형 데이터의 경우에는 바라보고 있는 객체가 달라지지 않는다.
9. 예제 1-9.js
  - 변수 복사 후, 객체 자체를 변경한 경우이다.
  - 이때는 참조형 데이터의 경우에도 주소가 달라진다.
  - 참조형 데이터의 가변성은 참조형 데이터 내부의 프로퍼티를 변경할 때 성립한다.
10. 예제 1-10.js
  - 유저 이름 변경을 통한 불변 객체가 필요한 경우에 대한 예제이다.
11. 예제 1-11.js
  - 예제 10을 불변 객체를 이용하여 해결한 예제이다.
  - 변경 전인 user와 변경 후인 user2를 서로 다른 객체를 바라보게 하였다.
12. 예제 1-12.js
  - 기존 정보를 복사해서 새로운 객체를 반환하는 함수를 만든 예제이다.
  - 얕은 복사를 통해 대상 객체에 정보가 많을수록, 변경해야 할 정보가 많을수록 사용자가 입력하는 수고를 덜 수 있다.
13. 예제 1-13.js
  - 얕은 복사 함수인 copyObject를 이용하여 객체 복사하는 예제이다.
14. 예제 1-14.js
  - 중첩된 객체에 대한 얕은 복사 예제이다.
  - 중첩된 객체에 대해서도 불변 객체로 만들 필요가 있다.
15. 예제 1-15.js
  - 중첩된 객체에 대한 깊은 복사 예제이다.
  - 중첩된 객체에 대해서도 copyObject 함수를 활용하여 중첩 객체의 프로퍼티를 불변 객체로 만들어 주었다.
16. 예제 1-16.js
  - 객체의 프로퍼티에 참조형 데이터가 있을 때마다 재귀적으로 얕은 복사를 수행하는 번거로움이 있다.
  - 따라서, copyObject 함수를 깊은 복사 방식으로 고친 예제이다.
17. 예제 1-17.js
  - 만든 깊은 복사 copyObjectDeep 함수를 수행해 본 예제이다.
18. 예제 1-18.js
  - 깊은 복사를 하는 또다른 방식인 JSON을 수행해 보는 예제이다.
19. 예제 1-19.js
  - undefined는 자바스크립트에서 '없음'을 나타내는 값이다.
  - 자바스크립트 엔진이 자동으로 undefined를 부여하는 경우에 대한 예제이다.
20. 예제 1-20.js
  - 배열을 통해 비어있는 요소와 undefined를 할당한 요소의 출력 결과를 비교한 예제이다.
21. 예제 1-21.js
  - 비어있는 요소는 순회와 관련된 많은 배열 메서드들의 순회 대상에서 제외된다.
22. 예제 1-22.js
  - 자바스크립트에서 '없음'을 나타내는 두 가지, undefined와 null을 비교하는 예제이다.
  - undefined와 null은 동등 연산자를 통해서는 같다고 판단하며, 일치 연산자를 통해 정확히 판별할 수 있다.

#### Chapter 2 예제 요점

1. 예제 2-1.js
  - 실행 컨텍스트와 콜 스택을 작성해보는 예제이다.
  - 전역 컨텍스트, outer, inner 순으로 콜 스택에 쌓이며 inner, outer, 전역 컨텍스트 순으로 제거된다.
2. 예제 2-2.js
  - 호이스팅 개념을 이해하기 위한 예제이다.
  - 예제 2-2는 원본 코드이며, 이를 통해 호이스팅을 예제 2-3과 4에서 설명하려고 한다.
3. 예제 2-3.js
  - 예제 2-2에서 인자들과 함께 함수를 호출한 동작은 예제 2-3에서 arguments에 전달된 인자를 담는 것을 제외하면 코드 내부에서 변수를 선언한 것과 같다.
  - 인자를 함수 내부의 다른 코드보다 먼저 선언 및 할당이 이뤄진 것으로 간주할 수 있다.
4. 예제 2-4.js
  - 실제 자바스크립트 엔진이 끌어올리진 않지만, 호이스팅을 이해하기 쉽게 예제 2-2를 재배열한 코드이다.
  - environment Record는 현재 실행될 컨텍스트의 대상 코드 내에 어떤 식별자들이 있는지에만 관심있다.
  - 변수를 호이스팅할 때 변수명만 끌어올리고 할당 과정은 그대로 남겨둔다.
  - 호이스팅을 마친 후 코드를 실행하게 되면 순서대로 1, 1, 2 의 결과가 출력된다.
5. 예제 2-5.js
  - 호이스팅 개념을 이해하기 위한 두 번째 예제이다.
  - 함수 선언을 추가하였다.
6. 예제 2-6.js
  - 호이스팅을 마친 상태이다.
  - 변수명과 함수 선언의 정보를 위로 끌어올린다.
  - 이때, 변수는 선언부만 끌어올리지만 함수 선언은 함수 전체를 끌어올린다.
7. 예제 2-7.js
  - 해석의 편의를 위해, 호이스팅이 끝난 상태에서의 함수 선언문은 함수명으로 선언한 변수에 함수를 할당한 것처럼 여겼다.
  - 호이스팅을 마친 후 순서대로 b 함수, 'bbb', 'bbb' 의 결과가 출력된다.
8. 예제 2-8.js
  - 함수 정의엔 세 가지 방식이 있다.
  - 함수 선언문은 function 정의부만 존재하고 별도의 할당 명령이 없는 것이다. 반드시 함수명이 정의되어야 한다.
  - 익명 함수 표현식은 정의한 function을 별도의 변수에 할당하는데 함수명을 정의하지 않은 것이다.
  - 기명 함수 표현식은 정의한 function을 별도의 변수에 할당하는데 함수명을 정의한 것이다.
9. 예제 2-9.js
  - 함수 선언문과 함수 표현식의 차이를 호이스팅을 통해 알아보는 예제이다.
10. 예제 2-10.js
  - 호이스팅을 마친 상태이다.
  - 함수 선언문은 전체를 호이스팅하였고 함수 표현식은 변수 선언부만 호이스팅한다.
11. 예제 2-11.js
  - 전역 컨텍스트가 활성화될 때 전역공간에 선언된 함수들이 모두 가장 위로 끌어올려진다.
  - 따라서, 동일 변수명에 서로 다른 값을 할당한 경우에 나중에 할당한 값이 먼저 할당한 값을 덮어씌운다.
  - 결국 코드를 실행하는 중에 실제로 호출되는 함수는 맨 마지막에 선언된 함수뿐이다.
  - 이런 경우가 함수 선언문을 써서 의도치 않는 결과를 내는 상황이다. 
12. 예제 2-12.js
  - 예제 2-11에서 sum 함수를 모두 함수 표현식으로 정의하였다.
  - 상대적으로 함수 표현식이 더 안전하다.
13. 예제 2-13.js
  - 스코프란 식별자에 대한 유효범위를 말한다.
  - 스코프를 안에서부터 바깥으로 차례로 검색해나가는 것을 스코프 체인이라고 한다.
  - 스코프 체인을 가능하게 하는 것은 LexicalEnvironment의 두 번째 수집 자료인 outerEnvironmentReference이다.
14. 예제 2-14.js
  - 크롬 브라우저 환경에서는 함수 내부에서 함수를 출력하여, 스코프 체인 중 현재 실행 컨텍스트를 제외한 상위 스코프 정보들을 개발자 도구의 콘손을 통해 확인할 수 있다.
15. 예제 2-15.js
  - 크롬 브라우저 환경에서 스코프 체인을 확인할 때, 함수 내부에서 실제로 호출할 외부 변수들의 정보만 보여준다.
16. 예제 2-16.js
  - 모든 모던 브라우저에서 디버거를 이용하면 스코프 체인의 좀 더 제대로 된 정보를 확인할 수 있다.

#### Chapter 3 예제 요점

1. 예제 3-1.js
  - 전역 공간에서 this는 전역 객체를 가리키는데, 브라우저 환경에서의 전역 객체는 window이다.
2. 예제 3-2.js
  - 전역 공간에서 this는 전역 객체를 가리키는데, Node.js 환경에서의 전역 객체는 global이다.
3. 예제 3-3.js
  - 전역변수를 선언하면 자바스크립트 엔진은 이를 전역객체의 프로퍼티로 할당하므로, window.a와 this.a는 모두 1을 출력한다. 
4. 예제 3-4.js
  - 전역 공간에서 var로 변수를 선언하는 것은 window의 프로퍼티에 직접 할당하는 것과 대부분 동일하게 동작한다.
5. 예제 3-5.js
  - '삭제'명령은 전역변수 선언와 전역객체의 프로퍼티 할당 사이에 전혀 다른 경우이다.
6. 예제 3-6.js
  - 어떤 함수를 객체의 프로퍼티에 할당한다고 해서 그 자체로서 무조건 메서드가 되지 않으며 객체의 메서드로서 호출할 경우에만 메서드로 동작하고 그렇지 않으면 함수로 동작한다.
  - 함수 앞에 점이 있으면 메서드로서 호출한 것이며, 점이 없으면 함수로서 호출한 것이다.
7. 예제 3-7.js
  - 점 표기법, 대괄호 표기법 상관없이 어떤 함수를 호출할 때 그 함수 이름 앞에 객체가 명시되어 있으면 메서드로 호출한 것이고 그렇지 않은 모든 경우에는 함수로 호출한 것이다.
8. 예제 3-8.js
  - this에는 호출한 주체에 대한 정보가 담기며, 점 표기법의 경우 마지막 점 앞에 명시된 객체가 this가 된다.
9. 예제 3-9.js
  - 메서드 내부에서 정의하고 실행한 함수에서의 this를 헷갈리기 쉽다.
  - 내부함수도 이를 함수로서 호출했는지 메서드로서 호출했는지만 파악한다면 this를 알기 쉽다.
10. 예제 3-10.js
  - 변수를 활용하여 this를 우회할 수 있다.
  - outer 스코프에서 self 변수에 this를 저장한 상태에서 호출한 innerFunc2의 경우 self에는 객체 obj가 출력된다.
11. 예제 3-11.js
  - 화살표 함수는 this를 바인딩하지 않는다.
  - 이는 함수 내부에서 this가 전역객체를 바라보는 문제를 보완하고자함이다.
12. 예제 3-12.js
  - 콜백 함수 내부에서의 this는 전역객체를 참조합니다.
13. 예제 3-13.js
  - 생성자 함수는 어떤 공통된 성질을 지니는 객체들을 생성하는 데 사용하는 함수이다.
  - new 명령어와 함께 함수를 호출하면 해당 함수가 생성자로서 동작하게 되며 어떤 함수가 생성자 함수로서 호출된 경우 내부에서의 this는 곧 새로 만들 구체적인 인스턴스 자신이 된다.
14. 예제 3-14.js
  - call 메서드는 메서드의 호출 주체인 함수를 즉시 실행하도록 하는 명령이다.
  - 함수를 그냥 실행하면 this는 전역객체를 참조하며 call 메서드를 이용하면 임의의 객체를 this로 지정할 수 있다.
15. 예제 3-15.js
  - 객체의 메서드를 그냥 호출하면 this는 객체를 참조하며 call 메서드를 이용하면 임의의 객체를 this로 지정할 수 있다.
16. 예제 3-16.js
  - apply 메서드는 call 메서드와 기능적으로 완전히 동일하다.
  - 다만, call 메서드는 첫 번째 인자를 제외한 나머지 모든 인자들을 호출할 함수의 매개변수로 지정하지만 apply 메서드는 두 번째 인자를 배열로 받아 그 배열의 요소들을 호출할 함수의 매개변수로 지정한다.
17. 예제 3-17.js
  - 유사배열객체에 배열 메서드를 적용하여 call/apply 메서드를 활용한 예제이다.
  - 객체에는 배열 메서드를 직접 적용할 수 없지만, 키가 0 또는 양의 정수인 프로퍼티가 존재하고 length 프로퍼티의 값이 0 또는 양의 정수인 객체, 즉 유사배열객체 경우 call 또는 apply 메서드를 이용해 배열 메서드를 차용할 수 있다.
  - 배열 메서드인 push를 객체 obj에 적용해 프로퍼티 3에 'd'를 추가했으며, slice 메서드를 적용해 객체를 배열로 전환하였다.
18. 예제 3-18.js
  - arguments, NodeList에 배열 메서드를 적용하여 call/apply 메서드를 활용한 예제이다.
  - 함수 내부에서 접근할 수 있는 arguments 객체도, Node 선택자로 선택한 결과인 NodeList도 예제 3-17과 같이 배열로 전환해서 활용할 수 있다.
19. 예제 3-19.js
  - 문자열에 배열 메서드를 적용하여 call/apply 메서드를 활용한 예제이다.
  - 문자열은 length 프로퍼티가 읽기 전용이므로 원본 문자열에 변경을 가하는 메서드는 에러가 나며, concat처럼 대상이 반드시 배열이어야 하는 경우엔 에러는 안나지만 제대로 된 결과를 없을 수 없다.
  - 원본 문자열에 변경을 가하는 메서드는 push, pop, shift, unshift, splice 등이 있다.
20. 예제 3-20.js
  - ES6의 Array.from 메서드를 적용하여 call/apply 메서드를 활용한 예제이다.
  - Array.from 메서드는 유사배열객체 또는 순회 가능한 모든 종류의 데이터 타입을 배열로 전환한다.
21. 예제 3-21.js
  - 생성자 내부에서 다른 생성자를 호출하여 call/apply 메서드를 활용한 예제이다.
  - 생성자 내부에 다른 생성자와 공통된 내용이 있을 경우 call/apply를 이용해 다른 생성자를 호출하면 간단하게 반복을 줄일 수 있다.
22. 예제 3-22.js
  - 최대/최솟값을 구하는 코드를 직접 구현하여 call/apply 메서드를 활용하지 못한 예제이다.
  - apply를 사용하지 않아 코드가 불필요하게 길고 가독성도 떨어지는 것을 알 수 있다.
23. 예제 3-23.js
  - 여러 인수를 받는 메서드인 Math.max/Math.min에 apply를 적용하여 예제 3-22를 간단하게 구현한 예제이다.
24. 예제 3-24.js
  - ES6의 펼치기 연산자를 활용하여 call/apply 메서드를 활용한 예제이다.
  - 펼치기 연산자를 이용하면 apply를 적용하는 것보다 간편하게 작성할 수 있다.
25. 예제 3-25.js
  - bind 메서드는 즉시 호출하지 않고 넘겨 받은 this 및 인수들을 바탕으로 새로운 함수를 반환하기만 하는 메서드이다.
  - bind 메서드는 함수에 미리 this를 적용하는 것과 부분 적용 함수를 구현하는 두 가지 목적을 모두 지닌다.
  - 예제에서 bindFunc1 변수를 통해서는 bind는 this만을 지정하였고, bindFunc2 변수를 통해서는 bind는 this 지정과 함께 부분 적용 함수를 구현하였다.
26. 예제 3-26.js
  - name 프로퍼티에는 동사 bind의 수동태인 bound라는 접두어가 붙는다.
27. 예제 3-27.js

28. 예제 3-28.js

29. 예제 3-29.js

30. 예제 3-30.js

31. 예제 3-31.js