## 사물인터넷 Homework 
### 2023120401 남다율

#### Chapter 1 예제 요점

1. 예제 1-01.js
  - 변수란, 변경 가능한 데이터가 담길 수 있는 공간 또는 그릇이다.
  - 이러한 변수를 a라는 식별자로 지정하여 선언하였으며, 컴퓨터는 이를 위해 메모리에서 비어있는 공간 하나를 확보한다.
2. 예제 1-02.js
  - 설정한 공간의 이름을 가진 주소를 검색하여 그곳에 문자열을 할당하는 과정이다.
  - 할당하려는 데이터를 위한 별도의 메모리 공간을 확보하여, 그 주소를 변수 영역에 저장하는 방식이다.
3. 예제 1-03.js
  - 기본형 데이터는 불변성의 특징을 가진다.
  - 따라서, b에 저장했던 5 자체를 7로 바꿀 수 없다.
4. 예제 1-04.js
  - 참조형 데이터는 가변값인 경우가 많지만 설정에 따라 불변값으로 활용할 수 있다.
  - 참조형 데이터를 obj1을 통해 할당하는 연습이다.
5. 예제 1-05.js
  - 참조형 데이터의 프로퍼티를 재할당하는 과정이다.
  - obj1이 바라보고 있는 주소가 변하진 않지만, a라는 객체 내부의 값이 2로 변하였다.
6. 예제 1-06.js
  - 참조형 데이터의 프로퍼티에 다시 참조형 데이터를 할당하는 경우이다.
7. 예제 1-07.js
  - 기본형 데이터는 a, b를 통해, 참조형 데이터는 obj1, obj2을 통해 변수 복사의 차이를 비교하는 예제이다.
8. 예제 1-08.js
  - 변수 복사 후, 객체의 프로퍼티를 변경한 경우이다.
  - 기본형 데이터의 경우에는 주소가 달라지지만, 참조형 데이터의 경우에는 바라보고 있는 객체가 달라지지 않는다.
9. 예제 1-09.js
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

1. 예제 2-01.js
  - 실행 컨텍스트와 콜 스택을 작성해보는 예제이다.
  - 전역 컨텍스트, outer, inner 순으로 콜 스택에 쌓이며 inner, outer, 전역 컨텍스트 순으로 제거된다.
2. 예제 2-02.js
  - 호이스팅 개념을 이해하기 위한 예제이다.
  - 예제 2-2는 원본 코드이며, 이를 통해 호이스팅을 예제 2-3과 4에서 설명하려고 한다.
3. 예제 2-03.js
  - 예제 2-2에서 인자들과 함께 함수를 호출한 동작은 예제 2-3에서 arguments에 전달된 인자를 담는 것을 제외하면 코드 내부에서 변수를 선언한 것과 같다.
  - 인자를 함수 내부의 다른 코드보다 먼저 선언 및 할당이 이뤄진 것으로 간주할 수 있다.
4. 예제 2-04.js
  - 실제 자바스크립트 엔진이 끌어올리진 않지만, 호이스팅을 이해하기 쉽게 예제 2-2를 재배열한 코드이다.
  - environment Record는 현재 실행될 컨텍스트의 대상 코드 내에 어떤 식별자들이 있는지에만 관심있다.
  - 변수를 호이스팅할 때 변수명만 끌어올리고 할당 과정은 그대로 남겨둔다.
  - 호이스팅을 마친 후 코드를 실행하게 되면 순서대로 1, 1, 2 의 결과가 출력된다.
5. 예제 2-05.js
  - 호이스팅 개념을 이해하기 위한 두 번째 예제이다.
  - 함수 선언을 추가하였다.
6. 예제 2-06.js
  - 호이스팅을 마친 상태이다.
  - 변수명과 함수 선언의 정보를 위로 끌어올린다.
  - 이때, 변수는 선언부만 끌어올리지만 함수 선언은 함수 전체를 끌어올린다.
7. 예제 2-07.js
  - 해석의 편의를 위해, 호이스팅이 끝난 상태에서의 함수 선언문은 함수명으로 선언한 변수에 함수를 할당한 것처럼 여겼다.
  - 호이스팅을 마친 후 순서대로 b 함수, 'bbb', 'bbb' 의 결과가 출력된다.
8. 예제 2-08.js
  - 함수 정의엔 세 가지 방식이 있다.
  - 함수 선언문은 function 정의부만 존재하고 별도의 할당 명령이 없는 것이다. 반드시 함수명이 정의되어야 한다.
  - 익명 함수 표현식은 정의한 function을 별도의 변수에 할당하는데 함수명을 정의하지 않은 것이다.
  - 기명 함수 표현식은 정의한 function을 별도의 변수에 할당하는데 함수명을 정의한 것이다.
9. 예제 2-09.js
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

1. 예제 3-01.js
  - 전역 공간에서 this는 전역 객체를 가리키는데, 브라우저 환경에서의 전역 객체는 window이다.
2. 예제 3-02.js
  - 전역 공간에서 this는 전역 객체를 가리키는데, Node.js 환경에서의 전역 객체는 global이다.
3. 예제 3-03.js
  - 전역변수를 선언하면 자바스크립트 엔진은 이를 전역객체의 프로퍼티로 할당하므로, window.a와 this.a는 모두 1을 출력한다. 
4. 예제 3-04.js
  - 전역 공간에서 var로 변수를 선언하는 것은 window의 프로퍼티에 직접 할당하는 것과 대부분 동일하게 동작한다.
5. 예제 3-05.js
  - '삭제'명령은 전역변수 선언와 전역객체의 프로퍼티 할당 사이에 전혀 다른 경우이다.
6. 예제 3-06.js
  - 어떤 함수를 객체의 프로퍼티에 할당한다고 해서 그 자체로서 무조건 메서드가 되지 않으며 객체의 메서드로서 호출할 경우에만 메서드로 동작하고 그렇지 않으면 함수로 동작한다.
  - 함수 앞에 점이 있으면 메서드로서 호출한 것이며, 점이 없으면 함수로서 호출한 것이다.
7. 예제 3-07.js
  - 점 표기법, 대괄호 표기법 상관없이 어떤 함수를 호출할 때 그 함수 이름 앞에 객체가 명시되어 있으면 메서드로 호출한 것이고 그렇지 않은 모든 경우에는 함수로 호출한 것이다.
8. 예제 3-08.js
  - this에는 호출한 주체에 대한 정보가 담기며, 점 표기법의 경우 마지막 점 앞에 명시된 객체가 this가 된다.
9. 예제 3-09.js
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
  - call, apply, bind 메서드를 이용하면 보다 깔끔하게 메서드의 내부함수에서 메서드의 this를 그대로 바라보게 할 수 있다.
  - 예제에서는 call과 bind 메서드를 이용하였다.
28. 예제 3-28.js
  - 콜백 함수를 인자로 받는 함수나 메서드 중에서 기본적으로 콜백 함수 내에서의 this에 관여하는 함수, 메서드에 대해서도 bind 메서드를 통해 this 값을 사용자의 입맛에 맞게 바꿀 수 있다.
29. 예제 3-29.js
  - 화살표 함수는 실행 컨텍스트 생성 시 this를 바인딩하는 과정이 제외되었다.
  - 화살표 함수 내부에는 this가 없으며 접근하고자 할 때 스코프체인상 가장 가까운 this에 접근하게 된다.
30. 예제 3-30.js
  - 배열 메서드인 forEach는, 콜백 함수를 인자로 받는 메서드 중 일부는 추가로 this로 지정할 객체인 thisArg를 인자로 지정할 수 있다.
  - 6번째 줄에서 배열을 순회하면서 콜백 함수를 실행하며 콜백 함수 내부에서의 this는 forEach 함수의 두 번째 인자로 전달해준 9번째 줄 this가 바인딩된다.
31. 예제 3-31.js
  - forEach와 마찬가지로 thisArg를 인자로 받는 메서드들이 많이 있다.
  - 그러한 메서드들을 적은 예제이다.
  - forEach, map, filter, some, every, find, findIndex 등

#### Chapter 4 예제 요점

1. 예제 4-01.js
  - 콜백 함수는 다른 코드의 인자로 넘겨주는 함수이다.
  - 이 예제에서는 setInterval안의 익명의 함수가 콜백 함수로서, 설정된 0.3초마다 자동으로 실행된다.

2. 예제 4-02.js
  - 예제 1을 더 쉽게 수정한 코드이다.
  - timer 변수에 setInterval의 ID 값이 담기며 콜백 함수인 cbFunc이 0.3초마다 자동으로 실행된다.

3. 예제 4-03.js
  - 이 예제에서는 map 메서드를 적용하여 배열의 각 요소에 대해 인자로 주어진 콜백 함수를 실행한다.
  - 콜백 함수 내에서는 currentValue 값과 index를 콘솔에 출력하게 된다.

4. 예제 4-04.js
  - 예제 3을 map 메서드 대신 제이쿼리 방식처럼 순서를 바꾸어 적용한 경우이다.
  - 하지만, 순서가 달라졌기 때문에 전혀 다른 결과가 출력되므로 map 메서드에 정의된 규칙에 따라 함수 작성이 필수적이다.

5. 예제 4-05.js
  - this에는 thisArg 값이 있을 경우에는 그 값을, 없을 경우에는 전역객체를 지정한다.
  - 첫 번째 인자에는 메서드의 this가 배열을 가리킬 것이므로 배열의 i번째 요소 값을, 두 번째 인자에는 i 값을, 세 번째 인자에는 배열 자체를 지정해 호출하게 된다.

6. 예제 4-06.js
  - setTimeout은 내부에서 콜백 함수를 호출할 때 call 메서드의 첫 번째 인자에 전역객체를 넘기므로 콜백 함수 내부에서의 this가 전역객체를 가리킨다.
  - forEach는 별도의 인자로 this를 넘겨주지 않았으므로 전역객체를 가리킨다.
  - addEventListener는 콜백 함수 내부에서의 this가 addEventListener를 호출한 주체인 HTML 엘리먼트를 가리킨다.

7. 예제 4-07.js
  - 콜백 함수로 어떤 객체의 메서드를 전달하여도 그 메서드는 메서드가 아닌 함수로서 호출된다.
  - obj 객체의 logValues는 메서드로 정의되었지만, forEach 함수의 콜백 함수로서 전달하였기 때문에 함수로서 호출된다.

8. 예제 4-08.js
  - 여러 단계를 거쳐 this에 다른 값을 바인딩하는 전통적인 방식이다.
  - 하지만 실제로 this를 사용하지 않으며 번거로운 단점이 있다. 

9. 예제 4-09.js
  - 예제 4-08을 기반으로 this를 사용하지 않았다.
  - 직관적이지만 작성한 함수를 this를 통해 다양한 상황에 재활용할 수 없게 되는 단점이 있다.

10. 예제 4-10.js
  - 예제 4-08에서 만든 함수를 다른 객체에 재활용할 수 있는 예제이다.
  - callback2에는 (obj1의 func를 복사한) obj2의 func를 실행한 결과를 담아 이를 콜백으로 사용한다.

11. 예제 4-11.js
  - bind 메서드를 이용하면 예제 4-08,09,10의 전통적인 방법을 아쉬운 점들을 보완할 수 있다.
  - setTimeout(obj1.func.bind(obj2), 1500)에서 obj1의 func 메서드를 obj2 객체에 바인딩하여 1.5초 후에 실행한다.

12. 예제 4-12.js
  - 콜백 지옥이란 콜백 함수를 익명 함수로 전달하는 과정이 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상이다.
  - 이 예제에서 각 콜백은 커피 이름을 전달하고 목록에 이름을 추가하며 목적 달성에는 지장은 없지만 들여쓰기 수준이 과도하게 깊어졌다.

13. 예제 4-13.js
  - 콜백 지옥을 해결하는 가장 간단한 방법으로, 익명의 콜백 함수를 모두 기명함수로 전환하는 예제이다.

14. 예제 4-14.js
  - 동기적인 것처럼 보이게끔 처리해주는 장치를 마련하고자 ES6에서 Promise, Generator 등이 도입되었다.
  - new 연산자와 함게 호출한 Promise의 인자로 넘겨주는 콜백 함수는 호출할 때 바로 실행되지만 그 내부에 resolve, reject 함수를 호출하는 구문이 있을 때는 둘 중 하나가 실행되기 전까지는 다음 또는 오류 구문으로 넘어가지 않는다. 
  - 따라서 비동기 작업이 완료될 때 비로소 resolve, reject를 호출하는 방법으로 비동기 작업의 동기적 표현이 가능하다.

15. 예제 4-15.js
  - 클로저를 통해 예제 4-14의 반복적인 내용을 함수화하여 간결히 나타낸 예제이다.

16. 예제 4-16.js
  - ES6의 Generator를 도입한 예제이다.
  - *붙은 함수가 Generator 함수이며, 이 함수를 실행하면 Iterator가 반환되는데 Iterator는 next 메서드를 가지고 있다.

16. 예제 4-17.js
  - ES2017의 async/await를 도입한 예제이다.
  - 비동기 작업을 수행하고자 하는 함수 앞에 async를 표기하고 함수 내부에서 실질적인 비동기 작업이 필요한 위치마다 await를 표기한다.

#### Chapter 5 예제 요점

1. 예제 5-01.js
  - outer 함수에서 변수 a를 선언하였으며 inner 함수에서 a의 값을 1만큼 증가시킨 다음 출력한다.
  - inner 함수 내부에 a를 선언하지 않았기에 environmentRecord에서 값을 찾지 못하므로 outerEnvironmentReference에 지정된 상위 컨텍스트인 outer의 LexicalEnvironment에 접근하여 a를 찾는다.

2. 예제 5-02.js
  - 예제 5-01과 다르게 inner 함수를 실행한 결과를 리턴한다.
  - 따라서, outer 함수의 실행 컨텍스트가 종료된 시점에 a 변수를 참조하는 대상이 없어진다.

3. 예제 5-03.js
  - 예제 5-01,02와 달리 outer의 실행 컨텍스트가 종료된 후에도 inner 함수를 호출할 수 있게 만드는 예제이다.
  - 6번째 줄에서 inner 함수의 실행 결과가 아닌 inner 함수 자체를 반환한다. 

4. 예제 5-04.js
  - 클로저는 어떤 함수 A에서 선언한 변수 a를 참조하는 내부함수 B를 외부로 전달할 경우 A의 실행 컨텍스트가 종료된 이후에도 변수 a가 사라지지 않는 현상이다.
  - 하지만, 외부로 전달이 return만을 의미하지는 않는다.
  - 이 예제는 return 없이 클로저가 발생한 경우에 대한 것이다.

5. 예제 5-05.js
  - 클로저의 필요성이 사라지게 될 때 메모리 해제를 해주면 메모리를 효율적으로 관리할 수 있다.
  - return, setInterval, evenListener을 통해 메모리 해제를 구현할 수 있다.

6. 예제 5-06.js
  - fruits 변수를 순회하며 li를 생성하고 각 li를 클릭하게 되면 해당 리스너에 기억된 콜백 함수를 실행한다.

7. 예제 5-07.js
  - 예제 5-06에서 fruit를 인자로 받아 출력하는 형태로 바꾼 예제이다.
  - (B) 함수의 쓰임새가 콜백 함수에 국한되지 않는 경우일 때 반복을 줄이기 위해 (B)를 외부로 분리하는 것이다.

8. 예제 5-08.js
  - 각 li를 클릭하면 클릭한 대상의 과일명이 아닌 [object MouseEvent]라는 값이 출력되는 문제를 해결하기 위해 bind 메서드를 활용한 예제이다.

9. 예제 5-09.js
  - 예제 5-08처럼 bind 메서드를 이용하게 되면 이번트 객체가 인자로 넘어오는 순서가 바뀌는 점 및 함수 내부에서의 this가 원래의 그것과 달라지게 된다.
  - 따라서 이 예제에서는 고차함수를 이용하여 변경사항이 발생하지 않도록 코딩하였다.

10. 예제 5-10.js
  - 간단한 게임을 만들어 접근 권한을 제어하는 연습이다.
  - 연료, 연비, 총 이동거리를 설정하였지만 타인이 값을 마음대로 바꾸게 되면 문제가 발생한다.

11. 예제 5-11.js
  - 예제 5-10에서의 문제점을 클로저를 통해 보완한 예제이다.
  - createCar 함수를 실행함으로써 객체를 생성한다.
  - 연료, 연비 변수는 비공개 멤버로 지정해 외부 접근을 제한하였으며 이동거리 변수는 getter만을 부여하여 읽기 전용 속성을 부여하였다.

12. 예제 5-11 추가.js
  - 예제 5-11에서 연료, 연비, 이동거리를 변경하고자 하는 시도를 구현한 예제이다.
  - 클로저를 통해 변수를 보호하였기 때문에 갑승ㄹ 변경하고자 하는 시도는 대부분 실패하게 된다.

13. 예제 5-12.js
  - run 메서드를 다른 내용으로 덮어씌우는 어뷰징까지 막기 위해서 객체를 return하기 전에 미리 변경할 수 없게끔 조치를 취한다.

14. 예제 5-13.js
  - 부분 적용 함수는 n개의 인자를 받는 함수에 미리 m개의 인자만 넘겨 기억시키고 나중에 n-m개의 인자를 넘기면 비로소 원래 함수의 실행 결과를 얻게끔 하는 함수이다.
  - addPartial 함수는 인자 5개를 미리 적용하고 추후 추가적으로 인자들을 전달하면 모든 인자를 모아 원래의 함수가 실행되는 부분 적용 함수이다.

15. 예제 5-14.js
  - 첫 번째 인자에 원본 함수를, 두 번째 인자 이후부터는 미리 적용할 인자들을 전달하고, 부분 적용 함수에서 다시 나머지 인자들을 받아 이들을 한데 모아 원본 함수를 호출한다.
  - 이를 통해 실행 시점의 this를 그대로 반영함으로써 this에 아무런 영향을 주지 않게 된다.

16. 예제 5-15.js
  - 비워놓음 표시를 위해 미리 전역객체에 _라는 프로퍼티를 준비하며 삭제 변경 등의 접근에 대한 방어 차원에서 여러 가지 프로퍼티 속성을 설정한다.
  - 처음 넘겨준 인자들 중 _로 비워놓은 공간마다 나중에 넘어온 인자들이 차례로 끼워넣도록 구현한다.
  - 이를 통해 인자들을 원하는 위치에 미리 넣어놓고 나중에는 빈 자리에 인자를 채워넣어 실행할 수 있게 된다.

17. 예제 5-16.js
  - 디바운스는 짧은 시간 동안 동일한 이벤트가 많이 발생할 경우 이를 전부 처리하지 않고 처음 또는 마지막에 발생한 이벤트에 대해 한 번만 처리하는 것이다.
  - 이 예제에서의 디바운스 함수는 출력 용도로 지정한 eventName과 실행할 함수, 마지막으로 발생한 이벤트인지 여부를 판단하기 위한 대기시간을 받는다.

18. 예제 5-16 참고1.js
  - ES5 환경에서는 _를 비워놓음으로 사용하였지만 ES6에서는 Symbol.for을 활용할 수 있다.
  - Symbol.for 메서드는 전역 심볼공간에 인자로 넘어온 문자열이 이미 있으면 해당 값을 참조하고, 선언돼 있지 않으면 새로 만드는 방식이다.

19. 예제 5-16 참고2.js
  -

20. 예제 5-17.js
  -

21. 예제 5-18.js
  -