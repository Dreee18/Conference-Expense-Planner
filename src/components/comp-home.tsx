import './comp-home.css'

function HomeComp() {
    const handleClick = () => {

    }
  return (
    <>
      <div className="content-container">
        <div className="col1">
          <h1 className="title">Conference Expense <br/> Planner</h1>
          <p>Plan your next major event with us!</p>
          <button id='btn-getstarted' onClick={() => handleClick}>Get Started</button>
        </div>
        <div className="col2">
          <p>
            Welcome to BudgetEase Solutions, your trusted partner in simplifying
            budget management and financial solutions. At BudgetEase, we
            understand the importance of effective budget planning and strive to
            provide intuitive, user-friendly solutions to meet the diverse needs
            of our clients. 
            <br/>
            <br/>
            With a commitment to efficiency and innovation, we empower individuals and business to take control of their finances and achieve their goals with ease.
            <br/>
            <br/>
            At BudgetEase Solutions, our mission is to make budgeting effortless and accessible for everyone. Whether you're a small owner, a busy professional, or an individual looking to manage your personal finances, we offer tailored solutions to streamline your budgeting process.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeComp;
