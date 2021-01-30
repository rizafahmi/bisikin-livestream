function List() {
  return (
    <div className="list" style={{flex: 7}}>
      <ul className="divide-y divide-gray-200">
        <li className="py-4 flex">
          <div className="ml-3">
            <p className="text-base font-bold text-gray-900">Version history for projects</p>
            <p className="text-sm font-semibold text-purple-500">IN PROGRESS</p>
            <p className="text-sm font-normal text-gray-600">Ini adalah teks contoh untuk latihan tailwind</p>
          </div>
        </li>
        <li className="py-4 flex">
          <div className="ml-3">
            <p className="text-base font-bold text-gray-900">Share projecct with selected people</p>
            <p className="text-sm font-semibold text-blue-500">ICEBOX</p>
            <p className="text-sm font-normal text-gray-600">Ini adalah teks contoh untuk latihan tailwind</p>
          </div>
        </li>
        <li className="py-4 flex">
          <div className="ml-3">
            <p className="text-base font-bold text-gray-900">Sort people by recently active</p>
            <p className="text-sm font-semibold text-green-500">DONE</p>
            <p className="text-sm font-normal text-gray-600">Ini adalah teks contoh untuk latihan tailwind</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default List;
