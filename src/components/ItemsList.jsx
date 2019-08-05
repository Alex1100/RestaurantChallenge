import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { formatImgUrl } from '../utils';

  const useStyles = makeStyles(_ => ({
    card: {
      maxWidth: 345,
      marginLeft: 30,
      marginTop: 100,
      height: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    playIcon: {
        height: '30vw',
        width: '30vw',
        color: 'white',
        maxWidth: 45,
        maxHeight: 45,
        backgroundColor: '#4f3529',
        borderRadius: '50%',
    },
    MuiIconButtonRoot: {
        backgroundColor: '#4f3529',
        '&:hover': {
            backgroundColor: '#4f3529',
            boxShadow: '0px 1px 2px 1.5px rgba(0, 0, 0, 0.3)'
        }
    },
  }));


export const ItemsList = (props) => {
    const classes = useStyles();

    return (
        <>
            <div style={{marginBottom: '100px'}}>
                <Grid container spacing={3}>
                    {Object.values(props.sectionItems)
                    .filter(menuOption => menuOption && menuOption.name && menuOption.name.en)
                    .map((option) => {
                        const imgPath = formatImgUrl(option.image.asset._ref);

                        return (
                            <>
                                <Grid key={`${option._id}_item`} item xs={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.media}
                                            image={`${process.env.PUBLIC_URL}/images/${imgPath}`}
                                            title={`${option.name.en}`}
                                        />
                                        <CardContent>
                                            <div style={{width: '50%', height: '80px'}}>
                                                <Typography variant="body2" style={{color: '#4f3529', fontWeight: 800, fontSize: '125%'}} component="p">
                                                    {option.name.en}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                        <div style={{width: '50%', display: 'flex', marginLeft: '45%', marginBottom: '5%', bottom: 0, right: 50, justifyContent: 'flex-end'}}>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="add to favorites" className={classes.MuiIconButtonRoot}>
                                                    <PlayArrowIcon className={classes.playIcon} />
                                                </IconButton>
                                            </CardActions>
                                        </div>
                                    </Card>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </div>
        </>
    );
}