#  Wina Bwangu FINTECH Dashboard

##  Case Study Overview

**Wina Bwangu** is one of the leading FINTECH companies in Zambia, operating several mobile booths across Lusaka District. These booths offer digital financial services like Airtel Money, MTN Money, Zamtel Money, Zanaco, and FNB. Each booth offers a tailored selection of services based on demand and capital optimization strategies.

This project is a **web-based application** developed to track and visualize transaction performance across these booths using a combination of a front-end client, a service-side backend, and a database.

---

## Booth Locations

| Booth | Location      |
|-------|---------------|
| Wina1 | Lusaka CPD    |
| Wina2 | Libala        |
| Wina3 | Kabwata       |
| Wina4 | Mandevu       |
| Wina5 | Woodlands     |
| Wina6 | Matero East   |

---

##  Services and Revenue Limits

| Service       | Monthly Limit | Revenue per Kwacha |
|---------------|---------------|---------------------|
| Airtel Money  | 350,000       | 0.05                |
| MTN Money     | 160,000       | 0.06                |
| Zamtel Money  | 70,000        | 0.045               |
| Zanaco        | 80,000        | 0.035               |
| FNB           | 80,000        | 0.04                |

---

##  Services Offered by Booths

- **Wina1**: Airtel Money, MTN Money, Zamtel Money, Zanaco, FNB  
- **Wina2**: Airtel Money, MTN Money, Zamtel Money, FNB  
- **Wina3**: Airtel Money, MTN Money, Zamtel Money, Zanaco, FNB  
- **Wina4**: Airtel Money, MTN Money, Zamtel Money  
- **Wina5**: Airtel Money, MTN Money, Zanaco, FNB  
- **Wina6**: Airtel Money, MTN Money, Zamtel Money  

---

##  Web Application Features

###  Transaction Management

- Auto-generate a unique **Transaction ID** for each transaction (combination of text and numbers).
- Allow users to **select a Mobile Booth** from a dropdown, auto-displaying its location.
- Show only **relevant services** for the selected booth, along with the **revenue rate per Kwacha** for the selected service.

###  Financial Calculations

- **Calculate transaction amounts after tax**.
- Use **data bars** to visualize tax obligations per transaction.
- Load **170 out of 308 transactions** into the database (from Table 3, Appendix 1).

###  Dashboard Features

- **Cumulative totals** and **amounts remaining** for each service’s monthly limit.
- **Total revenue** per mobile booth.
- **Service frequency** usage at each booth.
- Overall **company revenue** and **capital required** for a month.
- **Pie chart** to visualize revenue vs. capital requirement.
