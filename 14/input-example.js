import { useState } from 'react';

function App() {
  const [ user, setUser ] = useState({name: 'Elice', school: 'Elice Univ'});
  // const [ name, setName ] = useState('');
  // const [ school, setSchool ] = useState('');

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleSchoolChange = (e) => {
  //   setSchool(e.target.value);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newUser = { ...user };
    newUser[name] = value;
    setUser(newUser);
  }

  return (
    <div>
      {/* Name: <input onChange={handleNameChange} />
      School: <input onChange={handleSchoolChange} /> */}
      Name: <input name="name" value={user.name} onChange={handleChange} />
      School: <input name="school" value={user.school} onChange={handleChange} />
      <br /> 입력 값: {user.name}님은 {user.school}에 재학 중입니다.
    </div>
  );
};

export default App;