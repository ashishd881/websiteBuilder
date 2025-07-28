import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor() {
  const [code, setCode] = useState(`console.log("Hello, Monac0o!");`);

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Editor
        height="300px"        // reduce height
        width="600px" 
        defaultLanguage="javascript"
        value={code}
        theme="vs-dark"
        onChange={(value) => setCode(value)}
        options={{
        readOnly: false,
        minimap: { enabled: false },
        fontSize: 14,
        wordWrap: 'on',
        scrollBeyondLastLine: false,
      }}
      />
      <button
        onClick={() => console.log(code)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
      >
        Log Code
      </button>
    </div>
  );
}
