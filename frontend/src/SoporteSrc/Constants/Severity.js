import React from 'react'

const Severity = {
	0: 1,
	1: 1,
	2: 7,
	3: 30,
	4: 365
}

export default function dateSeverity(severity, date) {
	const n_date1 = date.split("-")
	const n_date2 = n_date1[2].split(":")
	const n_date3 = n_date2[0].split("T")
	const new_date = new Date(n_date1[0]+"-"+n_date1[1]+"-"+n_date3[0])
	return addDays(new_date, Severity[severity]+1)
}

function addDays(date, days) {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}