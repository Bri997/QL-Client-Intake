import { makeStyles } from '@material-ui/core/styles'

const pageTwoStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: '65vw',
  },

  multiLine: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: '65vw',
  },
  formControl: {
    margin: theme.spacing(0),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    minWidth: 150,
  },
}))

export default pageTwoStyle
