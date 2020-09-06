import React from 'react'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel
} from '@material-ui/core'
import PropTypes from 'prop-types'

export const Header = ({ order, orderBy, onRequestSort }) => {
  const handleSort = (property) => (event) => {
    onRequestSort(event, property)
  }

  const headCells = [
    { id: 'id', numeric: true, disablePadding: true, label: 'Id' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    { id: 'first', numeric: false, disablePadding: false, label: 'First Name' },
    { id: 'last', numeric: false, disablePadding: false, label: 'Last Name' }
  ]

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'right'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ textAlign: headCell.id === 'id' ? 'left' : 'right' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={handleSort(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

Header.propTypes = {
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired
}
