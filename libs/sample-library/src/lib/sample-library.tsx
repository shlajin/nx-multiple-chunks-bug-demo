import styles from './sample-library.module.css';

/* eslint-disable-next-line */
export interface SampleLibraryProps {}

export function SampleLibrary(props: SampleLibraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SampleLibrary!</h1>
    </div>
  );
}

export default SampleLibrary;
