// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { data } from "@multiple-chunks-bug-demo/sample-library"

export function App() {
  return (
    <div>
      <h1>DEMO</h1>
      <img src={data.appleData.image} />
      <img src={data.orangeData.image} />
    </div>
  );
}

export default App;
