import React from 'react';
import Project from '../projects'

// Storing project details in variables
const core = {
  name: 'cor3 workout traacker',
  description: '1 rep maximun workout tracker.',
  deployed: 'https://cor3app.herokuapp.com/',
  repo: 'https://github.com/Raflores10/workout-tracker',
  src: 'cor3.png'
}

const wrkScheduler = {
  name: 'Work Day Scheduler',
  description: 'This is a scheduler that allows users to add and save to do items.',
  deployed: 'https://raflores10.github.io/workday-scheduler/',
  repo: 'https://github.com/Raflores10/workday-scheduler',
  src: 'wrkday.png'
}

const quote= {
  name: 'Quote Game',
  description: 'This is a set of quote based games. ',
  deployed: 'https://hornickjohn.github.io/quote-game/',
  repo: 'https://github.com/hornickjohn/quote-game',
  src: 'quotes.png'
}

const rexgex = {
  name: 'Regex Tutorial',
  description: 'This is a tutorial on regex and how it is used with usernames',
  repo: 'https://github.com/Raflores10/regex-tuto',
  src: 'regex.png'
}


const quiz = {
  name: 'First Quiz',
  description: 'Test your food knowledge with this quiz.',
  deployed: 'https://raflores10.github.io/First-Quiz/',
  repo: 'https://github.com/Raflores10/First-Quiz',
  src: 'quiz.png'
}

// Displaying portfolio info using project props
export default function Portfolio() {
  return (
    <div>
      <h1 className='text-center title'>Portfolio</h1>
        <div className='row card-area mt-5'>
          <div className='card-container col-12 d-flex flex-wrap justify-content-center'>
            <Project name={core.name} description={core.description} deployed={core.deployed} repo={core.repo} src={core.src}/>
            <Project name={wrkScheduler.name} description={wrkScheduler.description} deployed={wrkScheduler.deployed} repo={wrkScheduler.repo} src={wrkScheduler.src}/>
            <Project name={quote.name} description={quote.description} deployed={quote.deployed} repo={quote.repo} src={quote.src}/>
          </div>
            <div className='card-container col-12 d-flex flex-wrap justify-content-center mt-5'>
              <Project name={rexgex.name} description={rexgex.description} deployed={rexgex.deployed} repo={rexgex.repo} src={rexgex.src}/>
              <Project name={quiz.name} description={quiz.description} deployed={quiz.deployed} repo={quiz.repo} src={quiz.src}/>
            </div>
        </div>
    </div>
  );
}