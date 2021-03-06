import { makeStyles } from '@material-ui/core/styles'

const pageOneStyles = makeStyles((theme) => ({
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
}))

export default pageOneStyles
