import React, { useState, useEffect } from 'react';

function MakeQuiz() {
  const [quizTitle, setQuizTitle] = useState(localStorage.getItem('quizTitle') || '');
  const [quizDescription, setQuizDescription] = useState(localStorage.getItem('quizDescription') || '');
  const [quizDuration, setQuizDuration] = useState(localStorage.getItem('quizDuration') || '');
  const [quizAttempts, setQuizAttempts] = useState(Number(localStorage.getItem('quizAttempts')) || 1);
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem('questions')) || [
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      { questionText: '', helperText: '', answerOptions: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }, { text: '', isCorrect: false }] },
      // ... (rest of the questions)
    ]
  );
  const [step, setStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    let footer = document.querySelector("footer");
    if (footer) {
      footer.style.display = "none";
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizTitle', quizTitle);
  }, [quizTitle]);

  useEffect(() => {
    localStorage.setItem('quizDescription', quizDescription);
  }, [quizDescription]);

  useEffect(() => {
    localStorage.setItem('quizDuration', quizDuration);
  }, [quizDuration]);

  useEffect(() => {
    localStorage.setItem('quizAttempts', quizAttempts);
  }, [quizAttempts]);

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  const handleNext = (event) => {
    event.preventDefault();
    const form = event.target.closest('form');
    if (form.checkValidity()) {
      setStep(step + 1);
    } else {
      form.reportValidity(); // Show built-in validation messages
    }
  };

  const handlePrev = () => {
    if (step === 2 && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setStep(step - 1);
    }
  };

  const handleAnswerChange = (questionIndex, optionIndex, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answerOptions[optionIndex][field] = value;
    setQuestions(updatedQuestions);
  };
  
  const handleQuestionChange = (questionIndex, value, field) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex][field] = value;
    setQuestions(updatedQuestions);
  };
  const handleAddOption = () => {
    const updatedQuestions = [...questions];
    if (updatedQuestions[currentQuestionIndex].answerOptions.length < 10) {
      updatedQuestions[currentQuestionIndex].answerOptions.push({ text: '', isCorrect: false });
      setQuestions(updatedQuestions);
    }
  };

  const handleRemoveOption = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].answerOptions = updatedQuestions[currentQuestionIndex].answerOptions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.clear(); // Clear localStorage after quiz is submitted
    alert('Quiz created!');
  };

  return (
    <div className="carousel create-quiz-carousel shadow make-quiz" id='create-quiz-carousel'>
      {step === 0 && (
        <div className="carousel-item active d-flex justify-content-center">
          <form className="make-quiz-form" onSubmit={handleNext}>
            <div className="form-group">
              <label htmlFor="quizTitle">Quiz Title</label>
              <input
                type="text"
                className="form-control"
                id="quizTitle"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                placeholder="Enter quiz title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="quizDescription">Description</label>
              <textarea
                className="form-control"
                id="quizDescription"
                value={quizDescription}
                onChange={(e) => setQuizDescription(e.target.value)}
                placeholder="Enter quiz description"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="quizDuration">Duration</label>
              <select
                className="form-select"
                id="quizDuration"
                value={quizDuration}
                onChange={(e) => setQuizDuration(e.target.value)}
                required
              >
                <option value="">Select duration <small>Time required to retake the quiz</small></option>
                <option value="60">60 mins</option>
                <option value="8">8 hours</option>
                <option value="24">24 hours</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quizAttempts">Attempts Allowed</label>
              <input
                type="number"
                className="form-control"
                id="quizAttempts"
                value={quizAttempts}
                onChange={(e) => setQuizAttempts(e.target.value)}
                min="1"
                required
              />
            </div>
            <button type="submit" className="btn custom-button3 btn-next">Next</button>
          </form>
        </div>
      )}

      {step === 1 && (
        <div className="carousel-item active d-flex justify-content-center">
          <form className="make-quiz-form" onSubmit={handleNext}>
          <ol>
  {questions.map((question, index) => (
    <li key={index}>
      <div className="question-block mb-5">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="questionText"
            value={question.questionText}
            onChange={(e) => handleQuestionChange(index, e.target.value, 'questionText')}
            placeholder="Enter question text"
            required
          />
        </div>
        <div className="form-group">
          <select
            className="form-select"
            id="helperText"
            value={question.helperText}
            onChange={(e) => handleQuestionChange(index, e.target.value, 'helperText')}
            placeholder="Enter helper text (e.g., Choose all correct answers)"
          >
            <option value="Choose all that match">Choose all the correct answers</option>
            <option value="Choose one">Choose one</option>
          </select>
        </div>
        <div className="options-container">
          {question.answerOptions.map((option, optIndex) => (
            <div className="row mb-2" key={optIndex}>
              <div className="col-auto d-flex align-items-center">
                <input
                  type="checkbox"
                  className="me-2"
                  checked={option.isCorrect}
                  onChange={(e) => handleAnswerChange(index, optIndex, 'isCorrect', e.target.checked)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  value={option.text}
                  onChange={(e) => handleAnswerChange(index, optIndex, 'text', e.target.value)}
                  placeholder={`Option ${optIndex + 1}`}
                  required
                />
              </div>
              {question.answerOptions.length > 2 && (
                <div className="col-auto d-flex align-items-center">
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => handleRemoveOption(optIndex)}
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                </div>
              )}
            </div>
          ))}
          <div className="d-flex justify-content-start mt-3">
            <button
              type="button"
              className="btn custom-button3"
              onClick={() => handleAddOption(index)}
            >
              + Add option
            </button>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <br />
      </div>
    </li>
  ))}
</ol>


            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn custom-button2 btn-prev" onClick={handlePrev}>Previous</button>
              <button type="submit" className="btn custom-button3 btn-next">Next</button>
            </div>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="carousel-item active d-flex justify-content-center">
          <form className="make-quiz-form" onSubmit={handleSubmit}>
            <h5>Review and Confirm</h5>
            <p><strong>Quiz Title:</strong> {quizTitle}</p>
            <p><strong>Description:</strong> {quizDescription}</p>
            <p><strong>Duration:</strong> {quizDuration} {(quizDuration === '60') ? "minutes" : "hours"}</p>
            <p><strong>Attempts Allowed:</strong> {quizAttempts}</p>
            <div className="review-questions-container">
              {questions.map((q, index) => (
                <div key={index} className="review-question">
                  <p className="question-text"><strong>Question {index + 1}:</strong> {q.questionText}</p>
                  {q.helperText && <p className="helper-text">{q.helperText}</p>}
                  <ul className="answer-options">
                    {q.answerOptions.map((option, i) => (
                      <li key={i}>
                        {option.text} {option.isCorrect ? '(Correct)' : ''}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn custom-button2 btn-prev" onClick={handlePrev}>Previous</button>
              <button type="submit" className="btn custom-button3 btn-next">Create Quiz</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default MakeQuiz;
