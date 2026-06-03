import { useRef } from 'react'

export default function InternetBillForm({ data, onChange }) {
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
        <label>Provider Logo</label>
        <div className="logo-upload-area">
          <img src={data.logo} alt="Logo" className="logo-preview-thumb" onError={e => { e.target.style.display = 'none' }} />
          <button className="logo-upload-btn" onClick={() => fileRef.current?.click()}>
            Change Logo
          </button>
          <input ref={fileRef} type="file" accept="image/*" hidden onChange={handleLogo} />
        </div>
        <div className="logo-size-slider">
          <label>Logo Size: {data.logoSize || 80}px</label>
          <input type="range" min="20" max="200" value={data.logoSize || 80} onChange={e => onChange('logoSize', Number(e.target.value))} />
        </div>
      </div>

      <div className="form-section-divider">Receipt Details</div>

      <div className="form-row">
        <div className="form-group">
          <label>Receipt Number</label>
          <input value={data.receiptNumber} onChange={e => onChange('receiptNumber', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" value={data.date} onChange={e => onChange('date', e.target.value)} />
        </div>
      </div>

      <div className="form-section-divider">Customer (Billed To)</div>

      <div className="form-group">
        <label>Customer Name</label>
        <input value={data.customerName} onChange={e => onChange('customerName', e.target.value)} />
      </div>

      <div className="form-group">
        <label>Customer Address</label>
        <textarea value={data.customerAddress} onChange={e => onChange('customerAddress', e.target.value)} rows={3} />
      </div>

      <div className="form-group">
        <label>Bill Account Number</label>
        <input value={data.billAccountNumber} onChange={e => onChange('billAccountNumber', e.target.value)} />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Payment Method</label>
          <select value={data.paymentMethod} onChange={e => onChange('paymentMethod', e.target.value)}>
            <option>Online</option>
            <option>Cash</option>
            <option>Card</option>
            <option>UPI</option>
            <option>Auto Debit</option>
          </select>
        </div>
        <div className="form-group">
          <label>Receipt Date</label>
          <input type="date" value={data.receiptDate} onChange={e => onChange('receiptDate', e.target.value)} />
        </div>
      </div>

      <div className="form-section-divider">Internet Provider</div>

      <div className="form-group">
        <label>Provider Name</label>
        <input value={data.providerName} onChange={e => onChange('providerName', e.target.value)} />
      </div>

      <div className="form-group">
        <label>Provider Address</label>
        <textarea value={data.providerAddress} onChange={e => onChange('providerAddress', e.target.value)} rows={3} />
      </div>

      <div className="form-group">
        <label>Billing Cycle</label>
        <select value={data.billingCycle} onChange={e => onChange('billingCycle', e.target.value)}>
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Half Year</option>
          <option>Annual</option>
        </select>
      </div>

      <div className="form-section-divider">Service Plan</div>

      <div className="form-row">
        <div className="form-group">
          <label>Plan Speed</label>
          <input value={data.planSpeed} onChange={e => onChange('planSpeed', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Plan Package</label>
          <input value={data.planPackage} onChange={e => onChange('planPackage', e.target.value)} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Plan Validity</label>
          <input value={data.planValidity} onChange={e => onChange('planValidity', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Plan Amount (₹)</label>
          <input value={data.planAmount} onChange={e => onChange('planAmount', e.target.value)} />
        </div>
      </div>
    </div>
  )
}
