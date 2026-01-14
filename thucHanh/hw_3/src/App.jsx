import './App.css'
import Card from './components/Card'

function App() {

  const students = [
    { id: 1, name: 'Pzon', classInfo: 'CS6', desc: 'Interested in AI' },
    { id: 2, name: 'Minh', classInfo: 'CS6', desc: 'Web Developer' },
    { id: 3, name: 'An', classInfo: 'CS7', desc: 'UI/UX Designer' },
    { id: 4, name: 'Linh', classInfo: 'CS8', desc: 'Data Scientist' },
  ];

  const NumberOfStudents = students.length;

  return (
    <>
      <div className="container">
        <header className='stats-header'>
          <h1>Students stats</h1>
          <p>Total students: <span>{NumberOfStudents}</span></p>
        </header>

        <div className="card-grid">
          {students.map((student) =>(
            <Card
              Name = {student.name}
              ClassInfo={student.classInfo}
              Description={student.desc}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
