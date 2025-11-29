const ErrorMessage = ({ error, onClose }) => {
  if (!error) return null

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex justify-between items-center">
      <p className="text-red-800">{error}</p>
      <button
        onClick={onClose}
        className="text-red-600 hover:text-red-800 font-bold"
      >
        ✕
      </button>
    </div>
  )
}

export default ErrorMessage
