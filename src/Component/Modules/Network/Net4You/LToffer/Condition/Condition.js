import React from 'react';
import './Condition.css';

const Condition = () => {
  return (
    <div className='mainCondition'>
       <div className='container'>
                <h1>Terms & Conditions Apply </h1>

                <ul>
                    <li>All prices are exclusive of all Government Taxes and are payable at the of signup.</li>
                    <li>CPE (Customer Premises Device) will remain Optix property and will be retrieved, in case of disconnection.        </li>
                    <li>This offer is valid for residential customers only.</li>
                    <li>One-time installation cost of PKR 10,000 will be charged at the time of signup or customer opt to pay equal installments of PKR 1,000 per month for a period of 12 months.                    </li>
                    <li>One-time installation cost is nonrefundable.</li>
                    <li>Additional charges may apply for add-on services.</li>
                    <li>For 50Mbps and above speed dual band WiFi AP is required. No bandwidth assurance will be committed in case the said condition is not fulfilled.              </li>
                    <li>Optix in its sole discretion, reserves the right to change or amend any of the above-mentioned terms and conditions without any prior notice.                    </li>
                    <li>Fair usage policy applies. </li>
                </ul>
       </div>
    </div>
  )
}

export default Condition
