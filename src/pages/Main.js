import Form from "../components/Form.js";
import List from "../components/List.js";

function Main() {
  return (
    <div className="container max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row">
        <Form />
        <List />
      </div>
    </div>
  );
}

export default Main;
