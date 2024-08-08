import React, { useState } from 'react';

function MakeQuiz() {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [quizDuration, setQuizDuration] = useState('');
  const [quizAttempts, setQuizAttempts] = useState(1);
  const [questions, setQuestions] = useState([
    { questionText: '', answerOptions: [{ text: '', isCorrect: false }] }
  ]);
  const [step, setStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (event) => {
    event.preventDefault();
    const form = event.target.closest('form');
    if (form.checkValidity()) {
      if (step === 2 && currentQuestionIndex === questions.length - 1) {
        setStep(step + 1);
      } else if (step === 2) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setQuestions([...questions, { questionText: '', answerOptions: [{ text: '', isCorrect: false }] }]);
      } else {
        setStep(step + 1);
      }
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

  const handleQuestionChange = (value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].questionText = value;
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (questionIndex) => {
    // Logic to add an option for a specific question
    const updatedQuestions = [...questions];
    if (updatedQuestions[questionIndex].answerOptions.length < 4) {
      updatedQuestions[questionIndex].answerOptions.push({ text: '', isCorrect: false });
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
  };

  return (
    <div className="carousel create-quiz-carousel create-group-carousel shadow make-quiz" id='create-group-carousel'>
      {step === 0 && (
        <div className="carousel-item active d-flex justify-content-center">
          <form className="p-4" onSubmit={handleNext}>
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
            <button type="submit" className="btn custom-button3 btn-next">Next</button>
          </form>
        </div>
      )}
      {step === 1 && (
        <div className="carousel-item active d-flex justify-content-center">
            <form className="p-4" onSubmit={handleNext} style={{ maxWidth: "800px" }}>
            <div className="form-group">
                <label htmlFor="quizDuration">
                Duration  <br/>
                <p className='text-secondary'><small>choose the time that needs to pass before retrying the quiz</small></p>
                </label>
                <div className="form-check d-flex justify-content-center arround">
                    <input
                        type="radio"
                        name="quizDuration"
                        id="duration60"
                        value="60"
                        checked={quizDuration === '60'}
                        onChange={(e) => setQuizDuration(e.target.value)}
                    />
                    <label className="form-check-label ms-2 mt-1" htmlFor="duration60">
                        60 mins
                    </label>
                </div>
                <div className="form-check d-flex justify-content-center">
                    <input
                        selected
                        type="radio"
                        name="quizDuration"
                        id="duration8"
                        value="8"
                        checked={quizDuration === '8'}
                        onChange={(e) => setQuizDuration(e.target.value)}
                    />
                    <label className="form-check-label ms-2 mt-1" htmlFor="duration8">
                        8 hours
                    </label>
                </div>
                <div className="form-check d-flex justify-content-center">
                    <input
                        type="radio"
                        name="quizDuration"
                        id="duration24"
                        value="24"
                        checked={quizDuration === '24'}
                        onChange={(e) => setQuizDuration(e.target.value)}
                    />
                    <label className="form-check-label ms-2 mt-1" htmlFor="duration24">
                        24 hours
                    </label>
                </div>
            </div>
            <button type="button" className="btn custom-button2 btn-prev" onClick={handlePrev}>Previous</button>
            <button type="submit" className="btn custom-button3 btn-next">Next</button>
            </form>
        </div>
      
      )}
      {step === 2 && (
        <div className="carousel-item active d-flex justify-content-center" >
        <form className="p-4" onSubmit={handleNext}>
          <div className="form-group">
            <label htmlFor="questionText">Question {currentQuestionIndex + 1}</label>
            <input
              type="text"
              className="form-control"
              id="questionText"
              value={questions[currentQuestionIndex].questionText}
              onChange={(e) => handleQuestionChange(e.target.value)}
              placeholder="Enter question text"
              required
            />
          </div>
          <div className="table-container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Correct Answer</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {questions[currentQuestionIndex].answerOptions.map((option, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={option.text}
                        onChange={(e) => handleAnswerChange(index, 'text', e.target.value)}
                        placeholder="Enter option text"
                        required
                      />
                    </td>
                    <td>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={`isCorrect${index}`}
                          checked={option.isCorrect}
                          onChange={(e) => handleAnswerChange(index, 'isCorrect', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor={`isCorrect${index}`}>
                          Correct Answer
                        </label>
                      </div>
                    </td>
                    <td>
                      {questions[currentQuestionIndex].answerOptions.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleRemoveOption(index)}
                        >
                          <i className="bi bi-dash"></i> {/* Bootstrap Icons for "-" */}
                        </button>
                      )}
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={handleAddOption}
                      >
                        <i className="bi bi-plus"></i> {/* Bootstrap Icons for "+" */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn custom-button2 btn-prev" onClick={handlePrev}>Previous</button>
            {currentQuestionIndex < questions.length - 1 ? (
              <button type="submit" className="btn custom-button3 btn-next">Next</button>
            ) : (
              <button type="submit" className="btn custom-button3 btn-next">Finish</button>
            )}
          </div>
        </form>
      </div>
      )}
      {step === 3 && (
        <div className="carousel-item active d-flex justify-content-center">
        <form className="p-4" onSubmit={handleSubmit}>
          <h5>Review and Confirm</h5>
          <p><strong>Quiz Title:</strong> {quizTitle}</p>
          <p><strong>Description:</strong> {quizDescription}</p>
          <p><strong>Duration:</strong> {quizDuration} {(quizDuration == 60) ? "minutes" : "hours"}</p>
          <p><strong>Attempts Allowed:</strong> {quizAttempts}</p>
          <div className="review-questions-container">
            {questions.map((q, index) => (
              <div key={index} className="review-question">
                <p className="question-text"><strong>Question {index + 1}:</strong> {q.questionText}</p>
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
