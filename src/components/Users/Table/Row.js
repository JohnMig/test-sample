import React, { useState, useRef } from 'react'
import { TableRow, TableCell, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from 'sanitize-html'
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Avatar } from './Avatar'
import { isValidEmail, sanitizeEmail } from '../../../utils/emailValidator'
import { editingCell } from '../../../store/actions/editableCellAction'
import { store } from '../../../store/store'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  },
  editableStyles: {
    border: 'none',
    outline: 'none'
  }
})

const Row = ({
  row: { id, email, first_name, last_name, avatar },
  onMessageOpen,
  editingCell
}) => {
  const classes = useRowStyles()
  const [open, setOpen] = useState(false)
  const text = useRef(email)

  const handleChange = (event) => {
    text.current = event.target.value
    editingCell(true) // DISPATCH ACTION
  }

  const handleBlur = async (id) => {
    const email = text.current

    // detect blur without interaction using direct store for current state
    // and to avoid incorrect state instead of mapStateToProps with connect
    if (!store.getState().editing.editing) {
      return
    }
    
    editingCell(false) // DISPATCH ACTION
    
    if (!isValidEmail(email)) {
      setTimeout(() => {
        onMessageOpen('Invalid Email. Unsaved Change.')
      }, 1000)
      return
    }

    if (email) {
      try {
        const response = await axios.put('https://reqres.in/api/users', {
          id,
          email: sanitizeHtml(sanitizeEmail(email), {
            allowedTags: [],
            allowedAttributes: {}
          })
        })

        const data = response.data
        console.log(data) // CHECK RESPONSE

        if (data && data.updatedAt) {
          onMessageOpen('Saved.')
        } else {
          onMessageOpen('Error occurred when saving.')
        }
      } catch (e) {}
    }
  }

  const handleKeyPress = (event, id) => {
    const key = event.which || event.charCode

    if (key === 13) {
      event.preventDefault()
      event.target.blur()
      handleBlur(id)
    }
  }

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
        <TableCell align="right">
          <ContentEditable
            html={text.current}
            className={classes.editableStyles}
            onChange={handleChange}
            onBlur={() => handleBlur(id)}
            onKeyPress={(event) => handleKeyPress(event, id)}
          />
        </TableCell>
        <TableCell align="right">{first_name}</TableCell>
        <TableCell align="right">{last_name}</TableCell>
      </TableRow>
      <Avatar open={open} avatar={avatar} />
    </React.Fragment>
  )
}

export default connect(null, { editingCell })(Row)

Row.propTypes = {
  row: PropTypes.object.isRequired,
  onMessageOpen: PropTypes.func.isRequired
}
