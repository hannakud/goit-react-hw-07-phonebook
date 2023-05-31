import { ProgressBar } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.loader}>
    <ProgressBar
      height="80"
      width="100"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#3E89F4"
      barColor="#F4F43E"
    />
  </div>
);
