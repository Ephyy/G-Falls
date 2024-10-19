
function CommandLine( {message, userInput} ) {
  return (
    <div className="command-line">
        <div className="flex">
            <span className='user-info-container'>
                <span className="text-green-500">v@localhost</span>
                <span>:</span>
                <span className="text-fuchsia-600">/root</span>
            </span>
            <span className='user-input-container'>
              <span className='px-2'>#</span>
              <span>{userInput}</span>
            </span>
        </div>
        {message && (
            <div>
                {message}
            </div>
        )}
    </div>
  )
}

export default CommandLine;