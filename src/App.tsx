import './App.css';
import { useWhisper } from './hook';

function App() {
  const {
    transcript,
    pauseRecording,
    startRecording,
    stopRecording,
  } = useWhisper({
    streaming: true,
    timeSlice: 1_000, // 1 second
    whisperConfig: {
      language: 'en',
    },
    apiKey: "YOUR_OPEN_AI_TOKEN"
  })
  return (
    <div className="App">
      <button type="button" onClick={() => startRecording()}>Start</button>
      <button type="button" onClick={() => pauseRecording()}>Pause</button>
      <button type="button" onClick={() => stopRecording()}>Stop</button>
      <p><b>Transcribed Text:</b> </p>
      <div style={{ border: '1px solid #ddd', padding:8, height:'50vh', overflow:'scroll' }}>
        <p>{transcript.text}</p>
      </div>
    </div>
  );
}

export default App;
