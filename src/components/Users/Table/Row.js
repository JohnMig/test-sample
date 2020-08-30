import React, { useState } from 'react'
import { TableRow, TableCell, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import PropTypes from 'prop-types'

import { Avatar } from './Avatar'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

export const Row = ({ row: { id, name, year, color } }) => {
  const classes = useRowStyles()
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{id}</TableCell>
        <TableCell align="right">{name}</TableCell>
        <TableCell align="right">{year}</TableCell>
        <TableCell align="right">{color}</TableCell>
      </TableRow>
      <Avatar open={open} />
    </React.Fragment>
  )
}

Row.propTypes = {
  row: PropTypes.object.isRequired
}
