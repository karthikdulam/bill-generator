import { useState, useRef, useCallback, useEffect } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import './App.css'

import { getSession, getAdminData, logout, isAdmin } from './auth'
import Login from './components/Login'
import AdminPanel from './components/AdminPanel'
import FuelBillForm from './components/FuelBillForm'
import FuelBillPreview from './components/FuelBillPreview'
import BookReceiptForm from './components/BookReceiptForm'
import BookReceiptPreview from './components/BookReceiptPreview'
import InternetBillForm from './components/InternetBillForm'
import InternetBillPreview from './components/InternetBillPreview'
import RentReceiptForm from './components/RentReceiptForm'
import RentReceiptPreview from './components/RentReceiptPreview'

const BASE = import.meta.env.BASE_URL

const BILL_TYPES = [
  { id: 'fuel', label: 'Fuel Bill', icon: '⛽', desc: 'Petrol / Diesel receipt' },
  { id: 'book', label: 'Book Receipt', icon: '📖', desc: 'Bookstore purchase receipt' },
  { id: 'internet', label: 'Internet Bill', icon: '🌐', desc: 'ISP / Broadband invoice' },
  { id: 'rent', label: 'Rent Receipt', icon: '🏠', desc: 'Monthly rent receipt' },
]

function emptyFuelData() {
  return {
    stationName: '', stationAddress: '', receiptNo: '', product: 'Petrol',
    rateLtr: '', amount: '', volume: '', vehicleType: 'Petrol', vehicleNo: '',
    customerName: '', date: '', time: '', mode: 'Online',
    logo: BASE + 'logos/hp-logo.png', logoSize: 60, watermarkText: '', serialNo: ''
  }
}

function emptyBookData() {
  return {
    receiptNo: '', receiptDate: '', customerName: '', bookName: '',
    author: '', publisher: '', paymentMethod: 'Card', storeName: '',
    storeAddress: '', description: '', qty: '', price: ''
  }
}

function emptyInternetData() {
  return {
    receiptNumber: '', date: '', customerName: '', customerAddress: '',
    billAccountNumber: '', paymentMethod: 'Online', receiptDate: '',
    providerName: '', providerAddress: '', billingCycle: 'Monthly',
    planSpeed: '', planPackage: '', planValidity: 'Monthly', planAmount: '',
    logo: BASE + 'logos/act-logo.png', logoSize: 80
  }
}

function emptyRentData() {
  return {
    receiptNo: '', date: '', tenantName: '', landlordName: '',
    landlordPan: '', propertyAddress: '', rentAmount: '',
    rentPeriod: '', paymentMode: 'Online Transfer'
  }
}

function nowDateAndTime() {
  const now = new Date()
  const date = now.toISOString().slice(0, 10)
  const time = now.toTimeString().slice(0, 5)
  return { date, time }
}

function buildInitialData(adminData) {
  const { date, time } = nowDateAndTime()
  if (!adminData) {
    return {
      fuel: { ...emptyFuelData(), date, time },
      book: { ...emptyBookData(), receiptDate: date },
      internet: { ...emptyInternetData(), date, receiptDate: date },
      rent: { ...emptyRentData(), date }
    }
  }
  return {
    fuel: { ...adminData.fuel, logo: BASE + 'logos/hp-logo.png', date, time },
    book: { ...adminData.book, receiptDate: date },
    internet: { ...adminData.internet, logo: BASE + 'logos/act-logo.png', date, receiptDate: date },
    rent: { ...adminData.rent, date }
  }
}

function App() {
  const [session, setSession] = useState(() => getSession())
  const [activeType, setActiveType] = useState('fuel')
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [fileName, setFileName] = useState('')
  const previewRef = useRef(null)
  const fuelPreviewRef = useRef(null)

  const initData = buildInitialData(session?.r === 'admin' ? getAdminData() : null)
  const [fuelData, setFuelData] = useState(initData.fuel)
  const [bookData, setBookData] = useState(initData.book)
  const [internetData, setInternetData] = useState(initData.internet)
  const [rentData, setRentData] = useState(initData.rent)

  useEffect(() => {
    const interval = setInterval(() => {
      const s = getSession()
      if (!s && session) {
        setSession(null)
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [session])

  const handleLogin = (s) => {
    setSession(s)
    const data = buildInitialData(s.r === 'admin' ? getAdminData() : null)
    setFuelData(data.fuel)
    setBookData(data.book)
    setInternetData(data.internet)
    setRentData(data.rent)
  }

  const handleLogout = () => {
    logout()
    setSession(null)
    setFuelData(emptyFuelData())
    setBookData(emptyBookData())
    setInternetData(emptyInternetData())
    setRentData(emptyRentData())
  }

  if (!session) {
    return <Login onLogin={handleLogin} />
  }

  const getSetCurrentData = () => {
    switch (activeType) {
      case 'fuel': return setFuelData
      case 'book': return setBookData
      case 'internet': return setInternetData
      case 'rent': return setRentData
      default: return () => {}
    }
  }

  const handleFieldChange = (field, value) => {
    const setter = getSetCurrentData()
    setter(prev => ({ ...prev, [field]: value }))
  }

  const capturePreview = async () => {
    if (!previewRef.current) return null
    const el = previewRef.current
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      logging: false,
    })
    return canvas
  }

  const downloadPNG = async () => {
    const canvas = await capturePreview()
    if (!canvas) return
    const link = document.createElement('a')
    link.download = `${fileName.trim() || activeType + '-receipt'}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const downloadPDF = async () => {
    const canvas = await capturePreview()
    if (!canvas) return
    const imgData = canvas.toDataURL('image/jpeg', 0.6)
    const imgWidth = canvas.width
    const imgHeight = canvas.height
    const pdfWidth = imgWidth * 0.264583
    const pdfHeight = imgHeight * 0.264583
    const pdf = new jsPDF({
      orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
      unit: 'mm',
      format: [pdfWidth, pdfHeight],
    })
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(`${fileName.trim() || activeType + '-receipt'}.pdf`)
  }

  const renderForm = () => {
    switch (activeType) {
      case 'fuel':
        return <FuelBillForm data={fuelData} onChange={handleFieldChange} />
      case 'book':
        return <BookReceiptForm data={bookData} onChange={handleFieldChange} />
      case 'internet':
        return <InternetBillForm data={internetData} onChange={handleFieldChange} />
      case 'rent':
        return <RentReceiptForm data={rentData} onChange={handleFieldChange} />
      default:
        return null
    }
  }

  const renderPreview = () => {
    switch (activeType) {
      case 'fuel':
        return <FuelBillPreview data={fuelData} ref={fuelPreviewRef} />
      case 'book':
        return <BookReceiptPreview data={bookData} />
      case 'internet':
        return <InternetBillPreview data={internetData} />
      case 'rent':
        return <RentReceiptPreview data={rentData} />
      default:
        return null
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <h1 className="app-title">Bill Generator</h1>
          <span className="app-subtitle">Generate professional receipts & invoices</span>
        </div>
        <div className="header-right">
          {session.r === 'admin' && <AdminPanel />}
          <div className="user-info">
            <span className="user-name">{session.u}</span>
            {session.r === 'admin' && <span className="user-badge">Admin</span>}
          </div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          <div className="sidebar-title">Select Bill Type</div>
          {BILL_TYPES.map(type => (
            <button
              key={type.id}
              className={`sidebar-item ${activeType === type.id ? 'active' : ''}`}
              onClick={() => setActiveType(type.id)}
            >
              <span className="sidebar-icon">{type.icon}</span>
              <div className="sidebar-text">
                <span className="sidebar-label">{type.label}</span>
                <span className="sidebar-desc">{type.desc}</span>
              </div>
            </button>
          ))}
        </aside>

        <main className="main-content">
          <div className="content-grid">
            <section className="form-section">
              <div className="section-header">
                <h2>Fill Details</h2>
              </div>
              <div className="form-body">
                {renderForm()}
              </div>
            </section>

            <section className="preview-section">
              <div className="section-header">
                <h2>Live Preview</h2>
                <div className="preview-actions">
                  <input
                    className="filename-input"
                    type="text"
                    placeholder="File name (optional)"
                    value={fileName}
                    onChange={e => setFileName(e.target.value)}
                  />
                  <button className="action-btn" onClick={downloadPNG} title="Download PNG">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    PNG
                  </button>
                  <button className="action-btn" onClick={downloadPDF} title="Download PDF">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    PDF
                  </button>
                  {activeType === 'fuel' && (
                    <button className="action-btn" onClick={() => fuelPreviewRef.current?.reloadWatermark()} title="Randomize watermark position">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
                      Reload
                    </button>
                  )}
                  <button className="action-btn expand-btn" onClick={() => setIsFullScreen(true)} title="Expand">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                    Expand
                  </button>
                </div>
              </div>
              <div className="preview-body">
                <div className="preview-wrapper" ref={previewRef}>
                  {renderPreview()}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={() => setIsFullScreen(false)}>
          <div className="fullscreen-container" onClick={e => e.stopPropagation()}>
            <button className="fullscreen-close" onClick={() => setIsFullScreen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className="fullscreen-preview-actions">
              <button className="action-btn light" onClick={downloadPNG}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                PNG
              </button>
              <button className="action-btn light" onClick={downloadPDF}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                PDF
              </button>
            </div>
            <div className="fullscreen-receipt">
              {renderPreview()}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
