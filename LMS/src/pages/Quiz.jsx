import React, { useState, useEffect } from 'react';

function Quiz({ quiz }) {
  const  quizTitle = quiz.title;
  const  quizDescription = quiz.description;
  const  quizRetakeTime = quiz.retakeTime;
  const quizAttempts = quiz.attempts ;
  const questions = quiz.questions ;
  const [alertMessage, setAlertMessage] = useState('');

  let userAnswers = [];


  const handleAnswerChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answerOptions[optionIndex].selected = value;
    setQuestions(updatedQuestions);
  };

  const countAnsweredQuestions = () => {
    return questions.reduce((acc, question) => {
      const hasAnswered = question.answerOptions.some(option => option.selected);
      return acc + (hasAnswered ? 1 : 0);
    }, 0);
  };

  useEffect(() => {
    const totalQuestions = questions.length;
    const answeredQuestions = countAnsweredQuestions();
    const unansweredQuestions = totalQuestions - answeredQuestions;

    if (unansweredQuestions === 0) {
      setAlertMessage('All questions are answered! Ready to submit 👍🙂😊');
    } else {
      setAlertMessage(`${unansweredQuestions} more question${unansweredQuestions > 1 ? 's' : ''} to answer 😑🥱`);
    }
  }, [questions]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle quiz submission logic here
    alert('Quiz submitted!');
  };

  return (
    <div className="quiz-container mt-4" id='quiz-container'>
      <h2 className='quiz-title'>{quizTitle}</h2> <hr />
      <p className='quiz-description'>{quizDescription}</p>
      <p><strong>Duration to retake the quiz:</strong> {quizRetakeTime}</p>
      <p><strong>Attempts Allowed:</strong> {quizAttempts}</p>

      <form onSubmit={handleSubmit}>
        {questions.map((question, qIndex) => (
          <div key={qIndex} className="question-block mb-5 border-start border-secondary ps-3">
            <p className="question-text quiz-question"><strong>{qIndex + 1}. {question.questionText}:</strong> <hr />  </p> 
            {question.helperText && <p className="helper-text"><i>{question.helperText}</i></p>}
            <div className="options-container border-0">
              {question.answerOptions.map((option, oIndex) => (
                <div key={oIndex} className="option-block mb-2 ms-2">
                  <input
                    role='button'
                    type={question.answerOptions.length > 2 ? 'checkbox' : 'radio'}
                    id={`question-${qIndex}-option-${oIndex}`}
                    name={`question-${qIndex}`}
                    onChange={(e) => handleAnswerChange(qIndex, oIndex, e.target.checked)}
                  />
                  <label className='quiz-option ms-2' role='button'  htmlFor={`question-${qIndex}-option-${oIndex}`}>{option.text}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        {alertMessage && (
        <div className={`alert ${alertMessage.includes('All questions are answered') ? 'alert-success' : 'alert-warning'}`} role="alert">
          {alertMessage}
        </div>
      )}
    <button
    type="submit"
    disabled={!!alertMessage} // Convert alertMessage to a boolean to determine if the button should be disabled
    className="fs-6 custom-button3 mb-5 px-3 d-flex justify-content-center m-auto"
    >
    Submit
    </button>
      </form>
    </div>
  );
}

export default Quiz;

