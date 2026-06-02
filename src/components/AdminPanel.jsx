import { useState } from 'react'
import { createAccount, getAccountList, deleteAccount } from '../auth'

export default function AdminPanel() {
  const [open, setOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [msgType, setMsgType] = useState('')
  const [accounts, setAccounts] = useState(() => getAccountList())
  const [loading, setLoading] = useState(false)

  const handleCreate = async (e) => {
    e.preventDefault()
    setMsg('')
    if (username.length < 3) { setMsg('Username must be at least 3 characters'); setMsgType('error'); return }
    if (password.length < 4) { setMsg('Password must be at least 4 characters'); setMsgType('error'); return }

    setLoading(true)
    try {
      await createAccount(username, password)
      setMsg(`Account "${username}" created`)
      setMsgType('success')
      setUsername('')
      setPassword('')
      setAccounts(getAccountList())
    } catch (err) {
      setMsg(err.message)
      setMsgType('error')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = (uname) => {
    try {
      deleteAccount(uname)
      setAccounts(getAccountList())
      setMsg(`Account "${uname}" deleted`)
      setMsgType('success')
    } catch (err) {
      setMsg(err.message)
      setMsgType('error')
    }
  }

  if (!open) {
    return (
      <button className="admin-toggle-btn" onClick={() => setOpen(true)} title="Manage Accounts">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
        Accounts
      </button>
    )
  }

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h3>Manage Accounts</h3>
        <button className="admin-close-btn" onClick={() => setOpen(false)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleCreate} className="admin-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? '...' : 'Create'}
        </button>
      </form>

      {msg && <div className={`admin-msg ${msgType}`}>{msg}</div>}

      {accounts.length > 0 && (
        <div className="admin-accounts-list">
          {accounts.map(a => (
            <div key={a.username} className="admin-account-row">
              <span>{a.username}</span>
              <button onClick={() => handleDelete(a.username)} title="Delete">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
