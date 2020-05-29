import { makeStyles } from '@material-ui/core/styles'

const pageTwoStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexWrap: 'wrap',

    padding: 20,
    borderRadius: 10,
    margin: 30,
    background: '#ece9e6' /* fallback for old browsers */,
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

export default pageTwoStyles
