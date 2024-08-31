
import React from 'react'

function CommandLine( {message, userInput} ) {
  return (
    <div>
        <div className="flex">
            <span className="text-green-500">v@localhost</span>
            <span>:</span>
            <span className="text-fuchsia-600">/root</span>
            <span>#</span>
            <span>{userInput}</span>
        </div>
        {message && (
            <div>
                {message}
            </div>
        )}
    </div>
  )
}

export default CommandLine