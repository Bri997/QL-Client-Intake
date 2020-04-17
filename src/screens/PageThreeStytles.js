import { makeStyles } from '@material-ui/core/styles'

const pageThreeStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(10),
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

export default pageThreeStyles
