import React from 'react';
import Typography from '@material-ui/core/Typography';
import CreateOutlined from '@material-ui/icons/CreateOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class LatestBlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://matthewaisthorpe.com.au/wp-json/wp/v2/posts?per_page=5")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Latest Blog Posts
                        </Typography>
                        <List component="nav" aria-label="main mailbox folders">
                            {items.map(function (item) {
                                return (
                                    <React.Fragment key={item.id}>
                                        <ListItem button component="a" href={item.link}>
                                            <ListItemIcon>
                                                <CreateOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary={item.title.rendered} secondary={item.excerpt.rendered.replace(/<[^>]*>?/gm, '')}/>
                                        </ListItem>
                                    </React.Fragment>
                                );
                            })}
                        </List>
                    </CardContent>
                </Card>
            );
        }
    }
}

export default LatestBlogList;
