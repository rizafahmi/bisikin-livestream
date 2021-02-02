function List({ data }) {
  return (
    <div className="list" style={{flex: 7}}>
      <ul className="divide-y divide-gray-200">
        {data.map(function(feedback) {
          return (
            <li className="py-4 flex">
              <div className="ml-3">
                <p className="text-base font-bold text-gray-900">{feedback.title}</p>
                <p className="text-sm font-semibold text-green-500">{feedback.status}</p>
                <p className="text-sm font-normal text-gray-600">{feedback.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List;
