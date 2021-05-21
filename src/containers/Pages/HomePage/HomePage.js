import React from 'react';
import P from '../../../components/htmlTags/P';

const HomePage = () => {
  // const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
  //
  // React.useEffect(() => {
  //   resizeHandler();
  //   window.addEventListener('resize', resizeHandler);
  // }, []);
  const test = 1;
  return (
    <div className="App">
      <header className="App-header">`
        <P className="StreamChartLegend">StreamChartLegend</P>
        <p>
          Edit 11111111111111111111111112111 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React</a>
      </header>
    </div>
  );
};

export default HomePage;
