import React from 'react';
import Typography from '@material-ui/core/Typography';
import FolderOutlined from '@material-ui/icons/FolderOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class GitRepoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        const headers = new Headers();
        headers.append('Authorization', 'Basic bWF0dHlhY2U6NTIyMWFkN2Y5OTk3MWU0MWZmMGJkNTI5ODQwZWMzMTgzNzA0NzJlMA==');
        headers.append('User-Agent', ': user-page-app');

        const init = {
            method: 'GET',
            headers
        }

        fetch("https://api.github.com/users/mattaisthorpe/repos", init)
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
            return <div><p>Error: {error.message}</p></div>;
        } else if (!isLoaded) {
            return <div><p>Loading...</p></div>;
        } else {
            return (
                <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                        Public Git Repos
                        </Typography>
                        <List component="nav" aria-label="main mailbox folders">
                            {items.map(function (item) {
                                return (
                                    <React.Fragment key={item.id}>
                                        <ListItem button component="a" href={item.html_url}>
                                            <ListItemIcon>
                                                <FolderOutlined />
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} secondary={item.description} />
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

export default GitRepoList;
