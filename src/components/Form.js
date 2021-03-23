import { useState } from "react";
import qoreContext, { client } from "../qoreContext.js";
import { getListRow } from "../lib/helpers.js";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { insertRow, status } = qoreContext.view("allFeedback").useInsertRow();

  const { revalidate } = getListRow("allFeedback");
  // console.log(revalidate);

  async function handleSubmitForm(e) {
    e.preventDefault();
    const result = await insertRow({ title, description, image });
    setTitle("");
    setDescription("");
    setImage("");
    revalidate();
  }
  async function handleFileChange(e) {
    const file = e.currentTarget.files?.item(0);
    if (!file) return;
    const url = await client.view("allFeedback").upload(file);
    await setImage(url);
  }

  return (
    <div className="form" style={{ flex: 3 }}>
      <div className="bg-gray-200 overflow-hidden shadow rounded-sm my-5">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="font-bold text-sm">Berikan ide untuk fitur</h3>
          <p className="text-xs">
            Fitur apa yang akan membuat aplikasi ini menjadi lebih berguna?
          </p>
          <form className="" onSubmit={handleSubmitForm}>
            <div className="my-4">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Ide brilian kamu"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                className="shadow-sm text-xs focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-sm p-1"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Deskripsika ide brilian kamu"
                onChange={(e) => setDescription(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-xs border-gray-300 rounded-sm p-1"
                value={description}
              ></textarea>
            </div>
            <div class="my-4">
              <input type="file" onChange={handleFileChange} />
            </div>
            <div>
              <button className="bg-black text-white px-2 py-1 rounded-sm uppercase text-xs font-medium block w-full shadow-sm">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
