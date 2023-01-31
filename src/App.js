const Content = (props) => {
  console.log(props.parts);

  return(
    <div>
      <p>
        {props.parts.part[0].name}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
    {
      name: 'Fundamentals of react',
      exercise: 10
    },
    {
      name: 'Using props to pass data',
      exercise: 7
    },
    {
      name: 'State of a component',
      exercise: 14
    }]
  }
  return (
    <div>
      <Content parts = {course} />
    
    </div>
  )

}

export default App