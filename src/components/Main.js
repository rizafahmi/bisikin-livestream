import Form from './Form.js';
import List from './List.js';

function Main({ data }) {
  return (
    <div className="container max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <Form />
          <List data={data} />
        </div>
    </div>
  )
}

export default Main;
