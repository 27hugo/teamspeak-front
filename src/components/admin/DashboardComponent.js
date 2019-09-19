import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 15
  },
  card: {
    marginBottom: 20,
    maxWidth: 600
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[900],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">
        Bienvenido {localStorage.getItem('alias') !== 'null' ? localStorage.getItem('alias') : localStorage.getItem('nombre')},
        aquí podrás gestionar la información de tu cuenta y<br/>administrar tus canales en el servidor de teamspeak.
      </Typography>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            CH
          </Avatar>
        }
        title="Canales activos"
        subheader="2"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Actualmente tienes 2 canales activos de un total de 2.
        </Typography>
      </CardContent>
      </Card>

      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            CL
          </Avatar>
        }
        title="Clientes Registrados"
        subheader="89"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Se han registrado 45 usuarios en la plataforma
        </Typography>
      </CardContent>
      </Card>

    </div>
  );
}