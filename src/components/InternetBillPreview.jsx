import { useState } from 'react'
import { formatDate } from '../utils'

export default function InternetBillPreview({ data }) {
  const [logoError, setLogoError] = useState(false)

  return (
    <div className="internet-invoice">
      <div className="internet-title">Internet Invoice</div>

      <div className="internet-top-section">
        <div className="internet-logo-area">
          {!logoError ? (
            <img
              src={data.logo}
              alt="Provider Logo"
              style={{ width: data.logoSize || 80, height: data.logoSize || 80 }}
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="internet-logo-placeholder">
              ACT<br />Logo
            </div>
          )}
        </div>
        <div className="internet-receipt-details">
          <div className="internet-receipt-details-title">Receipt Details</div>
          <div className="internet-detail-line">
            <span className="internet-detail-label">Receipt Number:</span> {data.receiptNumber}
          </div>
          <div className="internet-detail-line">
            <span className="internet-detail-label">Date:</span> {formatDate(data.date)}
          </div>
        </div>
      </div>

      <div className="internet-two-col">
        <div className="internet-billed-to">
          <div className="internet-section-title">Billed To,</div>
          <div className="internet-detail-line">
            <span className="internet-detail-label">Customer Name:</span> {data.customerName}
          </div>
          <div className="internet-detail-line">
            <span className="internet-detail-label">Customer Address:</span> {data.customerAddress}
          </div>
          <div className="internet-detail-line">
            <span className="internet-detail-label">Bill Account Number:</span> {data.billAccountNumber}
          </div>
        </div>
        <div className="internet-provider">
          <div className="internet-section-title">Internet Provider Details</div>
          <div className="internet-detail-line">{data.providerName}</div>
          <div className="internet-detail-line">{data.providerAddress}</div>
          <div className="internet-detail-line">
            Billing Cycle: {data.billingCycle}
          </div>
        </div>
      </div>

      <div className="internet-payment-row">
        <div>
          <span className="internet-detail-label">Payment Method</span><br />
          {data.paymentMethod}
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className="internet-detail-label">Receipt Date</span><br />
          {formatDate(data.receiptDate)}
        </div>
      </div>

      <div className="internet-summary-title">Service Plan Summary</div>
      <table className="internet-table">
        <thead>
          <tr>
            <th>Plan Speed</th>
            <th>Plan Package</th>
            <th>Plan Validity</th>
            <th>Plan Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.planSpeed}</td>
            <td>{data.planPackage}</td>
            <td>{data.planValidity}</td>
            <td>₹ {data.planAmount}</td>
          </tr>
        </tbody>
      </table>

      <div className="internet-total-row">
        <span className="internet-total-label">Total:</span>{' '}
        <span className="internet-total-amount">₹ {data.planAmount}</span>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '16px 0' }} />

      <div className="internet-footer">
        ALL PAYMENTS TO BE MADE IN FAVOUR OF {data.providerName}
      </div>

      <div className="internet-footer-note">
        THIS IS A COMPUTER GENERATED INVOICE AND DOES NOT REQUIRE ANY SIGNATURE
      </div>
    </div>
  )
}
