
/* eslint-disable react/prop-types */

const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1}: exercise1 = {props.exercise1}
      </p>
      <p>
        {props.part2}: exercise2 = {props.exercise2}
      </p>
      <p>
        {props.part3}: exercise3 = {props.exercise3}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises :{props.total}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  


  return (
    <div>
      <h2>
        <Header course={course} />
      </h2>

      <p> 
        <Content
          part1={part1}
          exercise1={ exercises1}
          part2={part2}
          exercise2={exercises2}
          part3={part3}
          exercise3={exercises3}
        />
      </p>
   
      <p>
       
        <Total total={exercises1 + exercises2 + exercises3} />
      </p>
    </div>
  );
};

export default App;