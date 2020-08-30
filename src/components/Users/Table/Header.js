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
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'year', numeric: true, disablePadding: false, label: 'Year' },
    { id: 'color', numeric: false, disablePadding: false, label: 'Color' }
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
