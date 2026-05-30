export default function RentReceiptForm({ data, onChange }) {
  return (
    <div>
      <div className="form-section-divider">Receipt Info</div>

      <div className="form-row">
        <div className="form-group">
          <label>Receipt No</label>
          <input value={data.receiptNo} onChange={e => onChange('receiptNo', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" value={data.date} onChange={e => onChange('date', e.target.value)} />
        </div>
      </div>

      <div className="form-section-divider">Tenant Details</div>

      <div className="form-group">
        <label>Tenant Name</label>
        <input value={data.tenantName} onChange={e => onChange('tenantName', e.target.value)} />
      </div>

      <div className="form-section-divider">Rent Details</div>

      <div className="form-row">
        <div className="form-group">
          <label>Rent Amount (₹)</label>
          <input value={data.rentAmount} onChange={e => onChange('rentAmount', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Rent Period</label>
          <input value={data.rentPeriod} onChange={e => onChange('rentPeriod', e.target.value)} placeholder="e.g. May 2025" />
        </div>
      </div>

      <div className="form-group">
        <label>Property Address</label>
        <textarea value={data.propertyAddress} onChange={e => onChange('propertyAddress', e.target.value)} rows={3} />
      </div>

      <div className="form-group">
        <label>Payment Mode</label>
        <select value={data.paymentMode} onChange={e => onChange('paymentMode', e.target.value)}>
          <option>Online Transfer</option>
          <option>Cash</option>
          <option>Cheque</option>
          <option>UPI</option>
        </select>
      </div>

      <div className="form-section-divider">Landlord Details</div>

      <div className="form-group">
        <label>Landlord Name</label>
        <input value={data.landlordName} onChange={e => onChange('landlordName', e.target.value)} />
      </div>

      <div className="form-group">
        <label>Landlord PAN</label>
        <input value={data.landlordPan} onChange={e => onChange('landlordPan', e.target.value)} />
      </div>
    </div>
  )
}
