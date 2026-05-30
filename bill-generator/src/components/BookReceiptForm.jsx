export default function BookReceiptForm({ data, onChange }) {
  return (
    <div>
      <div className="form-section-divider">Receipt Info</div>

      <div className="form-row">
        <div className="form-group">
          <label>Receipt No</label>
          <input value={data.receiptNo} onChange={e => onChange('receiptNo', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Receipt Date</label>
          <input type="date" value={data.receiptDate} onChange={e => onChange('receiptDate', e.target.value)} />
        </div>
      </div>

      <div className="form-section-divider">Customer (Bill To)</div>

      <div className="form-group">
        <label>Customer Name</label>
        <input value={data.customerName} onChange={e => onChange('customerName', e.target.value)} />
      </div>

      <div className="form-section-divider">Book Details</div>

      <div className="form-group">
        <label>Book Name</label>
        <input value={data.bookName} onChange={e => onChange('bookName', e.target.value)} />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Author</label>
          <input value={data.author} onChange={e => onChange('author', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Publisher</label>
          <input value={data.publisher} onChange={e => onChange('publisher', e.target.value)} />
        </div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea value={data.description} onChange={e => onChange('description', e.target.value)} rows={4} />
      </div>

      <div className="form-row-3">
        <div className="form-group">
          <label>Qty</label>
          <input value={data.qty} onChange={e => onChange('qty', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Price (₹)</label>
          <input value={data.price} onChange={e => onChange('price', e.target.value)} />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <select value={data.paymentMethod} onChange={e => onChange('paymentMethod', e.target.value)}>
            <option>Card</option>
            <option>Cash</option>
            <option>UPI</option>
            <option>Online</option>
          </select>
        </div>
      </div>

      <div className="form-section-divider">Store (Sold By)</div>

      <div className="form-group">
        <label>Store Name</label>
        <input value={data.storeName} onChange={e => onChange('storeName', e.target.value)} />
      </div>

      <div className="form-group">
        <label>Store Address</label>
        <textarea value={data.storeAddress} onChange={e => onChange('storeAddress', e.target.value)} rows={3} />
      </div>
    </div>
  )
}
