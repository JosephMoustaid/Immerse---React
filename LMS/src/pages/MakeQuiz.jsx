import React, { useState, useEffect } from 'react';

function MakeQuiz() {
  // Load data from localStorage or initialize with default values
  const [quizTitle, setQuizTitle] = useState(() => localStorage.getItem('quizTitle') || '');
  const [quizDescription, setQuizDescription] = useState(() => localStorage.getItem('quizDescription') || '');
  const [quizDuration, setQuizDuration] = useState(() => localStorage.getItem('quizDuration') || '');
  const [quizAttempts, setQuizAttempts] = useState(() => parseInt(localStorage.getItem('quizAttempts'), 10) || 1);
  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem('questions');
    if (savedQuestions) {
      const parsedQuestions = JSON.parse(savedQuestions);
      // basicly we load the saved question objects , then add empty ebjects for other not filled yet
      return [
        ...parsedQuestions,
        ...Array(15 - parsedQuestions.length).fill({
          questionText: '',
          helperText: 'Choose all the correct answers',
          answerOptions: [
            { text: '', isCorrect: false },
            { text: '', isCorrect: false },
            { text: '', isCorrect: false },
            { text: '', isCorrect: false }
          ]
        })
      ];
    }
    // Default case if no saved questions are found
    return Array(15).fill({
      questionText: '',
      helperText: 'Choose all the correct answers',
      answerOptions: [
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false }
      ]
    });
  });
  
  const [step, setStep] = useState(() => parseInt(localStorage.getItem('step'), 10) || 0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => parseInt(localStorage.getItem('currentQuestionIndex'), 10) || 0);

  // Save state to localStorage whenever it changes
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

  useEffect(() => {
    localStorage.setItem('step', step);
  }, [step]);

  useEffect(() => {
    localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
  }, [currentQuestionIndex]);

  useEffect(() => {
    let footer = document.querySelector("footer");
    if (footer) {
      footer.style.display = "none";
    }
  }, []);

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

  const handleAnswerChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].answerOptions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (value, field) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex][field] = value;
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
    // Handle quiz creation logic here
    alert('Quiz created!');
    localStorage.clear(); // Clear localStorage after successful form submission
  };

  return (
    <div className="carousel create-quiz-carousel shadow make-quiz" id='create-quiz-carousel'>
      {/* Step 0: Quiz Info */}
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
                <option value="">Select duration</option>
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

      {/* Step 1: Questions */}
      {step === 1 && (
        <div className="carousel-item active d-flex justify-content-center">
          <form className="make-quiz-form" onSubmit={handleNext}>
            <ol>
              {questions.map((question, questionIndex) => (
                <li key={questionIndex}>
                  <div className="question-block mb-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="questionText"
                        value={question.questionText}
                        onChange={(e) => handleQuestionChange(e.target.value, 'questionText')}
                        placeholder="Enter question text"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-select"
                        id="helperText"
                        value={question.helperText}
                        onChange={(e) => handleQuestionChange(e.target.value, 'helperText')}
                        placeholder="Enter helper text (e.g., Choose all correct answers)"
                      >
                        <option value="Choose all that match">Choose all the correct answers</option>
                        <option value="Choose one">Choose one</option>
                      </select>
                    </div>
                    <div className="options-container">
                      {question.answerOptions.map((option, optionIndex) => (
                        <div className="row mb-2" key={optionIndex}>
                          <div className="col-auto d-flex align-items-center">
                            <input
                              type="checkbox"
                              className="me-2"
                              checked={option.isCorrect}
                              onChange={(e) => handleAnswerChange(optionIndex, 'isCorrect', e.target.checked)}
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              value={option.text}
                              onChange={(e) => handleAnswerChange(optionIndex, 'text', e.target.value)}
                              placeholder={`Option ${optionIndex + 1}`}
                              required
                            />
                          </div>
                          {question.answerOptions.length > 2 && (
                            <div className="col-auto d-flex align-items-center">
                              <button
                                type="button"
                                className="remove-button"
                                onClick={() => handleRemoveOption(optionIndex)}
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
                          onClick={handleAddOption}
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
              <button type="button" className="btn custom-button2 btn-prev" onClick={handlePrev}>
                Previous
              </button>
              <button type="submit" className="btn custom-button3 btn-next">
                Next
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 2: Submit */}
      {step === 2 && (
        <div className="carousel-item active d-flex justify-content-center">
          <form className="make-quiz-form" onSubmit={handleSubmit}>
            <h3>Review and Submit</h3>
            <div className="review-section">
              <p><strong>Title:</strong> {quizTitle}</p>
              <p><strong>Description:</strong> {quizDescription}</p>
              <p><strong>Duration:</strong> {quizDuration} minutes</p>
              <p><strong>Attempts Allowed:</strong> {quizAttempts}</p>
              <h4>Questions:</h4>
              <ol>
                {questions.map((question, questionIndex) => (
                  <li key={questionIndex}>
                    <p>{question.questionText}</p>
                    <p><strong>Helper Text:</strong> {question.helperText}</p>
                    <ul>
                      {question.answerOptions.map((option, optionIndex) => (
                        <li key={optionIndex}>
                          {option.text} {option.isCorrect && <strong>(Correct)</strong>}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn custom-button2 btn-prev" onClick={handlePrev}>
                Previous
              </button>
              <button type="submit" className="btn custom-button3 btn-submit">
                Submit Quiz
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default MakeQuiz;
