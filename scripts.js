$(document).ready(function() {
  const questions = [
      { question: "나는 숨은 그림 찾기를 잘한다.", type: "F" },
      { question: "나는 영화 속 한 장면의 자세한 부분을 잘 기억한다.", type: "F" },
      { question: "나는 피드백을 받는 것을 즐긴다.", type: "D" },
      { question: "나는 연역적 추론보다는 귀납적인 추론이 더 편하다.", type: "D" },
      { question: "나는 복잡한 정보 속에서 디테일을 잘 캐치한다.", type: "F" },
      { question: "나는 이름보다 얼굴을 더 잘 기억하고 알아본다.", type: "R" },
      { question: "나는 문제를 해결할 때 직감보다 논리를 사용한다.", type: "L" },
      { question: "나는 규칙이 있는 과제보다 자유 주제 프로젝트가 더 좋다.", type: "R" },
      { question: "나는 내가 매우 창의적이라고 생각한다.", type: "R" },
      { question: "나는 실화 바탕 영화가 판타지 영화보다 좋다.", type: "L" },
      { question: "나는 뭔가 이해되지 않고 불확실한 상황을 잘 못 견딘다.", type: "A" },
      { question: "나는 최선의 해결책이 하나만 있지는 않은 것 같은 문제를 해결하는 것은 피하고 싶다.", type: "A" },
      { question: "나는 익숙함보다는 새로움이 좋다.", type: "T" },
      { question: "나는 모호한 상황에서 그닥 스트레스를 받지 않는다.", type: "T" },
      { question: "나는 한 가지 관점에서만 생각할 수 없는 문제는 조금 위협적으로 느껴진다.", type: "A" },
      { question: "나는 신중하게 계획을 세운다.", type: "P" },
      { question: "나는 되는대로 행동한다.", type: "I" },
      { question: "나는 나 자신을 스스로 통제한다.", type: "P" },
      { question: "나는 깊이 생각해야 하는 문제가 있으면 쉽게 지루해진다.", type: "I" },
      { question: "나는 침착하게 생각하는 편이다.", type: "P" },
  ];

  const learningStyles = {
      FLAP: `학습 스타일:
분석적으로 파고들려고 함
디테일을 중요시하며 신중한 경향이 있음
체계적인 방식을 좋아하고 불명확한 것이 싫음
독립적으로 공부하는 것이 더 좋음
공부할 때 명확한 가이드라인이 필요함

학습 방법 추천:
혼자 공부하기
세부적인 계획을 세워 순차적으로 공부하기
스스로 평가하며 분석하기`,
      FLAI: `학습 스타일:
분석적으로 파고들려고 함
디테일과 전체 구조 모두 중요하게 생각
독립적으로 공부하는 것이 더 좋음
애매모호한 것이 싫으며 결정을 빠르게 내림

학습 방법 추천:
혼자 공부하기
명확하고 간결한 가이드라인 세우기
공부 내용 구조화하기`,
      FLTP: `학습 스타일:
분석적으로 파고들려고 함
디테일을 중요시하며 신중한 경향이 있음
어려운 내용에도 잘 도전함
독립적으로 공부하는 것이 더 좋음
탐구적이고 수학적인 사고를 가지고 있음

학습 방법 추천:
혼자 공부하기
시간을 가지고 깊게 파고들며 원리 탐구하기
시각적 보조 자료 활용하기`,
      FLTI: `학습 스타일:
분석적으로 파고들려고 함
디테일과 전체 구조 모두 중요하게 생각
어려운 내용에도 망설임 없이 도전함
독립적으로 공부하는 것이 더 좋음
의사 결정이 빠른 편

학습 방법 추천:
혼자 공부하기
간결한 가이드라인을 세우고 유연하게 공부하기
실습 활동을 통해 공부하기`,
      FRAP: `학습 스타일:
창의적이고 직관적으로 생각함
전체적인 맥락을 중시하며, 디테일도 중요하게 생각
즉흥적이며 시각적 자료를 선호
독립적으로 공부하는 것이 더 좋음
명확한 가이드라인이 필요함

학습 방법 추천:
혼자 공부하기
큰 그림을 이해할 수 있도록 학습 내용 구조화하기
시각적 자료 활용하기`,
      FRAI: `학습 스타일:
창의적이고 직관적으로 생각함
전체적인 맥락을 중시함
즉흥적이며 결정을 빠르게 내림
독립적으로 공부하는 것이 더 좋음
명확하고 간결한 가이드라인이 필요함

학습 방법 추천:
혼자 공부하기
시각적 자료와 함께 간결한 가이드라인 세우기
창의적 과제와 실습 활동을 통해 학습하기`,
      FRTP: `학습 스타일:
창의적이고 직관적으로 생각함
전체적인 맥락을 중시하며, 디테일도 중요하게 생각
어려운 내용에도 잘 도전함
독립적으로 공부하는 것이 더 좋음
탐구적이고 수학적인 사고를 가지고 있음

학습 방법 추천:
혼자 공부하기
창의적 과제와 탐구 기반 학습 방법 사용하기
시각적 자료 활용하기`,
      FRTI: `학습 스타일:
창의적이고 직관적으로 생각함
전체적인 맥락을 중시하며, 디테일도 중요하게 생각
어려운 내용에도 망설임 없이 도전함
독립적으로 공부하는 것이 더 좋음
의사 결정이 빠른 편

학습 방법 추천:
혼자 공부하기
간결한 가이드라인을 세우고 창의적으로 접근하기
실습 활동을 통해 학습하기`,
      DLAP: `학습 스타일:
사회적 상호작용을 중요시하며, 다른 사람들과 함께 학습하는 것을 선호
디테일을 중요시하며 신중한 경향이 있음
체계적인 방식을 좋아하고 불명확한 것이 싫음
명확한 가이드라인이 필요함

학습 방법 추천:
그룹 프로젝트와 협력 학습
명확한 피드백 제공
시각적 자료와 함께 학습 내용 구조화하기`,
      DLAI: `학습 스타일:
사회적 상호작용을 중요시하며, 다른 사람들과 함께 학습하는 것을 선호
디테일과 전체 구조 모두 중요하게 생각
결정을 빠르게 내림
명확하고 간결한 가이드라인이 필요함

학습 방법 추천:
팀 활동과 협력 학습
명확하고 간결한 피드백 제공
시각적 자료 활용하기`,
      DLTP: `학습 스타일:
사회적 상호작용을 중요시하며, 다른 사람들과 함께 학습하는 것을 선호
디테일을 중요시하며 신중한 경향이 있음
어려운 내용에도 잘 도전함
탐구적이고 수학적인 사고를 가지고 있음

학습 방법 추천:
협력 학습과 그룹 프로젝트
탐구 기반 학습 방법 사용하기
시각적 자료 활용하기`,
      DLTI: `학습 스타일:
사회적 상호작용을 중요시하며, 다른 사람들과 함께 학습하는 것을 선호
디테일과 전체 구조 모두 중요하게 생각
어려운 내용에도 망설임 없이 도전함
결정을 빠르게 내림

학습 방법 추천:
팀 활동과 협력 학습
창의적 과제와 실습 활동을 통해 학습하기
간결한 가이드라인 세우기`,
      DRAP: `학습 스타일:
사회적 상호작용을 중요시하며, 다른 사람들과 함께 학습하는 것을 선호
전체적인 맥락을 중시하며, 디테일도 중요하게 생각
즉흥적이며 시각적 자료를 선호
명확한 가이드라인이 필요함

학습 방법 추천:
협력 학습과 그룹 프로젝트
시각적 자료와 함께 명확한 피드백 제공
창의적 학습 방법 사용하기`,
      DRAI: `학습 스타일:
사회적 상호작용을 중요시하며, 다른 사람들과 함께 학습하는 것을 선호
전체적인 맥락을 중시함
즉흥적이며 결정을 빠르게 내림
명확하고 간결한 가이드라인이 필요함

학습 방법 추천:
팀 활동과 협력 학습
명확하고 간결한 피드백 제공
시각적 자료 활용하기`,
      DRTP: `학습 스타일:
사회적 상호작용을 중요시하며, 다른 사람들과 함께 학습하는 것을 선호
전체적인 맥락을 중시하며, 디테일도 중요하게 생각
어려운 내용에도 잘 도전함
탐구적이고 창의적인 사고를 가지고 있음

학습 방법 추천:
협력 학습과 그룹 프로젝트
창의적 과제와 탐구 기반 학습 방법 사용하기
시각적 자료 활용하기`,
      DRTI: `학습 스타일:
사회적 상호작용을 중요시하며, 다른 사람들과 함께 학습하는 것을 선호
전체적인 맥락을 중시함
어려운 내용에도 망설임 없이 도전함
결정을 빠르게 내림

학습 방법 추천:
팀 활동과 협력 학습
창의적 과제와 실습 활동을 통해 학습하기
큰 그림을 이해할 수 있도록 학습 내용 구조화하기`
  };

  const pageTitle = $("<h1>공부 MBTI 테스트!</h1>");
    $("#question-container").before(pageTitle);

  let currentQuestion = 0;
  let scores = { F: 0, D: 0, R: 0, L: 0, A: 0, T: 0, P: 0, I: 0 };

  const questionContainer = $("#question-container");
  const resultContainer = $("#result-container");
  const resultText = $("#result-text");
  const retryButton = $("#retry-button");

  

  function showQuestion(index) {
      questionContainer.text(questions[index].question);
  }

  function calculateResult() {
      const groups = [
          { types: ['F', 'D'], start: 0, end: 5 },
          { types: ['R', 'L'], start: 5, end: 10 },
          { types: ['A', 'T'], start: 10, end: 15 },
          { types: ['P', 'I'], start: 15, end: 20 }
      ];

      return groups.map(group => {
          const type1 = group.types[0];
          const type2 = group.types[1];
          return scores[type1] >= scores[type2] ? type1 : type2;
      }).join('');
  }

  function showResult() {
    const result = calculateResult();
    const learningStyle = learningStyles[result].split('\n\n');
    const learningStyleFormatted = learningStyle[0].split('\n').slice(1).map(style => `- ${style}`).join('<br>');
    const learningMethodsFormatted = learningStyle[1].split('\n').slice(1).map(method => `- ${method}`).join('<br>');
    
    // 학습 유형에 해당하는 번호 계산
    const resultNumber = {
        "FLAP": 1,
        "FLAI": 2,
        "FLTP": 3,
        "FLTI": 4,
        "FRAP": 5,
        "FRAI": 6,
        "FRTP": 7,
        "FRTI": 8,
        "DLAP": 9,
        "DLAI": 10,
        "DLTP": 11,
        "DLTI": 12,
        "DRAP": 13,
        "DRAI": 14,
        "DRTP": 15,
        "DRTI": 16
    }[result];

    resultText.html(`<div style="text-align: left; margin: auto; width: 50%;">
                        <strong>학습 유형: ${result} (${resultNumber})</strong><br><br>
                        <strong>학습 스타일:</strong><br>
                        ${learningStyleFormatted}<br><br>
                    </div>
                    <div style="text-align: left; margin: auto; width: 50%;">
                        <strong>학습 방법 추천:</strong><br>
                        ${learningMethodsFormatted}
                    </div>
                    <br><br>
                    <strong>학습 유형 번호를 기억해주세요! ==> ${resultNumber}</strong><br><br>
                    <p style="text-align: center;">아래 링크로 들어가 결과를 입력해주세요!</p>
                    <p style="text-align: center;"><a href="https://forms.gle/9UyD71KhM1tyYFq28">https://forms.gle/9UyD71KhM1tyYFq28</a></p>`);
    
    resultContainer.removeClass('d-none');
    resultContainer.addClass('d-block');
    $("#quiz-container").hide();
}







  $("#yes-button, #no-button").click(function() {
      if ($(this).attr("id") === "yes-button") {
          scores[questions[currentQuestion].type]++;
      } else {
          const oppositeType = {
              F: 'D', D: 'F',
              R: 'L', L: 'R',
              A: 'T', T: 'A',
              P: 'I', I: 'P'
          }[questions[currentQuestion].type];
          scores[oppositeType]++;
      }

      currentQuestion++;
      if (currentQuestion < questions.length) {
          showQuestion(currentQuestion);
      } else {
          showResult();
      }
  });

  retryButton.click(function() {
      currentQuestion = 0;
      scores = { F: 0, D: 0, R: 0, L: 0, A: 0, T: 0, P: 0, I: 0 };
      $("#quiz-container").show();
      resultContainer.removeClass('d-block');
      resultContainer.addClass('d-none');
      showQuestion(currentQuestion);
  });

  showQuestion(currentQuestion);
});
