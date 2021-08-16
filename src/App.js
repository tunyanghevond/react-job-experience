import { useState, useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="isLoading">
        <h1>loading...</h1>
      </section>
    );
  }
  const { company, duties, dates, title, id } = jobs[value];

  return (
    <section className="section">
      <header className="header">
        <h1>expiernce</h1>
        <div className="underlin"></div>
      </header>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, ind) => {
            return (
              <button
                className={`btn-job  ${ind === value && "activ-btn"}`}
                key={ind}
                onClick={() => setValue(ind)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h2>{title}</h2>
          <h3>{company}</h3>
          <small>{dates}</small>
          {duties.map((dutie) => {
            return (
              <div key={Math.random() + id} className="job-desc">
                <button>
                  <AiOutlineDoubleRight className="icon" />
                </button>
                <p>{dutie}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
