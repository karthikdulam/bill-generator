import { useRef } from 'react'

export default function FuelBillForm({ data, onChange }) {
  const fileRef = useRef(null)

  const handleLogo = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      onChange('logo', url)
    }
  }

  return (
    <div>
      <div className="logo-upload-group">
        <label>Station Logo</label>
        <div className="logo-upload-area">
          <img src={data.logo} alt="Logo" className="logo-preview-thumb" onError={e => { e.target.src = ''; e.target.style.display = 'none' }} />
          <button className="logo-upload-btn" onClick={() => fileRef.current?.click()}>
            Change Logo
          </button>
          <input ref={fileRef} type="file" accept="image/*" hidden onChange={handleLogo} />
        </div>
      </div>

      <div className="form-section-divider">Station Details</div>

      <div className="form-group">
        <label>Station Name</label>
        <textarea value={data.stationName} onChange={e => onChange('stationName', e.target.value)} rows={2} />
      </div>

      <div className="form-group">
        <label>Station Address</label>
        <textarea value={data.stationAddress} onChange={e => onChange('stationAddress', e.target.value)} rows={3} />
      </div>

      <div className="form-group">
        <label>Receipt No.</label>
        <input value={data.receiptNo} onChange={e => onChange('receiptNo', e.target.value)} />
      </div>

      <div className="form-section-divider">Fuel Details</div>

      <div className="form-group">
        <label>Product</label>
        <select value={data.product} onChange={e => onChange('product', e.target.value)}>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>CNG</option>
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Rate / LTR (₹)</label>
          <input value={data.rateLtr} onChange={e => onChange('rateLtr', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Amount (₹)</label>
          <input value={data.amount} onChange={e => onChange('amount', e.target.value)} />
        </div>
      </div>

      <div className="form-section-divider">Vehicle & Customer</div>

      <div className="form-row">
        <div className="form-group">
          <label>Vehicle Type</label>
          <select value={data.vehicleType} onChange={e => onChange('vehicleType', e.target.value)}>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>CNG</option>
            <option>Electric</option>
          </select>
        </div>
        <div className="form-group">
          <label>Vehicle No</label>
          <input value={data.vehicleNo} onChange={e => onChange('vehicleNo', e.target.value)} />
        </div>
      </div>

      <div className="form-group">
        <label>Customer Name</label>
        <input value={data.customerName} onChange={e => onChange('customerName', e.target.value)} />
      </div>

      <div className="form-section-divider">Date & Payment</div>

      <div className="form-row">
        <div className="form-group">
          <label>Date</label>
          <input type="date" value={data.date} onChange={e => onChange('date', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input type="time" value={data.time} onChange={e => onChange('time', e.target.value)} />
        </div>
      </div>

      <div className="form-group">
        <label>Payment Mode</label>
        <select value={data.mode} onChange={e => onChange('mode', e.target.value)}>
          <option>Online</option>
          <option>Cash</option>
          <option>Card</option>
          <option>UPI</option>
        </select>
      </div>

      <div className="form-section-divider">Side Watermark Image</div>

      <div className="logo-upload-group">
        <label>Side Logo (vertical strip)</label>
        <div className="logo-upload-area">
          <img src={data.sideLogo || import.meta.env.BASE_URL + 'logos/side-logo.png'} alt="Side" className="logo-preview-thumb" onError={e => { e.target.style.display = 'none' }} />
          <button className="logo-upload-btn" onClick={() => {
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = 'image/*'
            input.onchange = (ev) => {
              const file = ev.target.files[0]
              if (file) onChange('sideLogo', URL.createObjectURL(file))
            }
            input.click()
          }}>
            Change Side Logo
          </button>
        </div>
      </div>
    </div>
  )
}
