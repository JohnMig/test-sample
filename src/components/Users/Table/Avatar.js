import React from 'react'
import {
  TableRow,
  TableCell,
  Collapse,
  Box,
  Typography
} from '@material-ui/core'
import Faker from 'faker'
import PropTypes from 'prop-types'

const cellStyles = {
  paddingBottom: 0,
  paddingTop: 0
}

export const Avatar = ({ open }) => {
  return (
    <TableRow>
      <TableCell style={cellStyles} colSpan={5}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={1}>
            <Typography variant="h6" gutterBottom component="div">
              Avatar
            </Typography>
            <p>{Faker.image.avatar()}</p>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  )
}

Avatar.propTypes = {
  open: PropTypes.bool.isRequired
}
