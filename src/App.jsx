import { Outlet } from 'react-router-dom'

export default function App() {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
      <div className="m-2">
        <div className="flex gap-2 mb-4">
          <button
            onClick={handleClick}
            className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
          >
            CRUD
          </button>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}
