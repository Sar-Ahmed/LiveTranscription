import './App.css';
import Notes from './pages/notes';

function App() {
  return (
    <div className="App">
      <Notes />
    </div>
  );
}

export default App;


// import { useWhisper } from './hook';

// const {
  //   transcript,
  //   pauseRecording,
  //   startRecording,
  //   stopRecording,
  // } = useWhisper({
  //   streaming: true,
  //   timeSlice: 1_000, // 1 second
  //   whisperConfig: {
  //     language: 'en',
  //   },
  //   apiKey: "YOUR_OPEN_AI_TOKEN"
  // })
{/* <button type="button" onClick={() => startRecording()}>Start</button>
      <button type="button" onClick={() => pauseRecording()}>Pause</button>
      <button type="button" onClick={() => stopRecording()}>Stop</button>
      <p><b>Transcribed Text:</b> </p>
      <div style={{ border: '1px solid #ddd', padding:8, height:'50vh', overflow:'scroll' }}>
        <p>{transcript.text}</p>
      </div> */}
