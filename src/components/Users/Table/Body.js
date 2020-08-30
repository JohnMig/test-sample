import React from 'react'
import { TableBody } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Row } from './Row'

const Rows = ({ page, rowsPerPage, data, stableSort, getComparator, order, orderBy }) => {
  return stableSort(data, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => <Row row={row} key={row.id} />)
}

export const Body = (props) => {
  return (
    <TableBody>
      <Rows {...props} />
    </TableBody>
  )
}

Rows.propTypes = {
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  stableSort: PropTypes.func.isRequired,
  getComparator: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
}
