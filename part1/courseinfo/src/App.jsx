const Header = ({course}) => {
  return <h1>{course}</h1>
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <>
    <Part part={parts[0].part} exercises={parts[0].exercises} />
    <Part part={parts[1].part} exercises={parts[1].exercises} />
    <Part part={parts[2].part} exercises={parts[2].exercises} />
    </>
  )
}

const Total = ({parts}) => {
  return (
    <p>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App