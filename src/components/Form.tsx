import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showError, setShowError] = useState(false);

  function showText() {
    setShowError(!showError);
  }

  return (
    <div>
      <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="name"
      />

      
    </form>

    {showError && <p className="text-red-500">This is an error</p>}
      <button onClick={showText}>SHOW</button>
    </div>
  );
}

// 3 steps for form handling
// create useState for each input
// give the input the value of the useStste
// give it onchange

// conditional rendering
