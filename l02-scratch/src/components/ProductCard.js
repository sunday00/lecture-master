import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 150,
  },
});

const ProductCard = ({ avatarSrc, title, subtitle, description, imgSrc }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4}>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar src={avatarSrc}>R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title={title}
          subheader={subtitle}
        />
        {imgSrc && (
          <CardMedia
            className={classes.media}
            image={imgSrc}
            title="Paella dish"
          />
        )}
        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy</Button>
          <Button size="small">Offer</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
