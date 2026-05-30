import { formatDate } from '../utils'

export default function BookReceiptPreview({ data }) {
  const total = Number(data.qty) * Number(data.price)

  return (
    <div className="book-receipt">
      <div className="book-header">Book Receipt</div>
      <hr className="book-hr" />

      <div className="book-meta-row">
        <div>
          <span className="book-meta-label">Receipt No:</span> {data.receiptNo}
        </div>
        <div>
          <span className="book-meta-label">Receipt Date:</span> {formatDate(data.receiptDate)}
        </div>
      </div>

      <div className="book-two-col">
        <div className="book-bill-to">
          <div className="book-section-title" style={{ color: '#2c5f8a' }}>Bill To,</div>
          <div className="book-detail-line">
            <span className="book-detail-label">Customer Name:</span> {data.customerName}
          </div>
          <div className="book-detail-line">
            <span className="book-detail-label">Book Name:</span> {data.bookName}
          </div>
          <div className="book-detail-line">
            <span className="book-detail-label">Author:</span> {data.author}
          </div>
          <div className="book-detail-line">
            <span className="book-detail-label">Book Publisher:</span> {data.publisher}
          </div>
        </div>
        <div className="book-sold-by">
          <div className="book-section-title" style={{ color: '#2c5f8a' }}>Sold By,</div>
          <div className="book-detail-line">
            <span className="book-detail-label">Store Name:</span> {data.storeName}
          </div>
          <div className="book-detail-line">
            <span className="book-detail-label">Store Address:</span> {data.storeAddress}
          </div>
        </div>
      </div>

      <div className="book-payment">
        <span className="book-detail-label">Payment Method:</span> {data.paymentMethod}
      </div>

      <div className="book-summary-title">Receipt Summary</div>
      <table className="book-table">
        <thead>
          <tr>
            <th style={{ width: '120px' }}>Item</th>
            <th>Description</th>
            <th className="col-qty" style={{ width: '50px' }}>Qty</th>
            <th className="col-price" style={{ width: '70px' }}>Price</th>
            <th className="col-total" style={{ width: '80px' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.bookName}</td>
            <td>{data.description}</td>
            <td className="col-qty">{data.qty}</td>
            <td className="col-price">{data.price}</td>
            <td className="col-total">₹ {isNaN(total) ? '0' : total}</td>
          </tr>
        </tbody>
      </table>

      <div className="book-total-row">
        Total:<br />
        <span className="book-total-amount">₹ {isNaN(total) ? '0' : total}</span>
      </div>

      <hr className="book-hr" style={{ borderTopWidth: '1px', borderColor: '#ddd' }} />

      <div className="book-thankyou">Thank You ! Visit Again</div>

      <div className="book-quote">
        Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers
      </div>

      <div className="book-quote">
        Books are good company, in sad times and happy times, for books are people – people who have managed to stay alive by hiding between the covers of a book.
      </div>
    </div>
  )
}
