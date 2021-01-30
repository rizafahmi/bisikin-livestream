function Form() {
  return (
    <div className="form" style={{flex: 3}}>
      <div className="bg-gray-200 overflow-hidden shadow rounded-sm my-5">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="font-bold text-sm">Suggest a feature</h3>
          <p className="text-xs">What would make this app more useful?</p>
          <form className="">
            <div className="my-4">
              <input type="text" name="title" id="title" placeholder="Your briliant idea" className="shadow-sm text-xs focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-sm" />
            </div>
            <div className="my-4">
              <textarea placeholder="Describe your brillian idea" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-xs border-gray-300 rounded-sm"></textarea>
            </div>
            <div>
              <button className="bg-black text-white px-2 py-1 rounded-sm uppercase text-xs font-medium block w-full shadow-sm">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;
