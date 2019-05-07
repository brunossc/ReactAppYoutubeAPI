import React from 'react';
import SearchBar from './SearchBar';
import YoutubeService from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { term: '', videos: [], selectedVideo: null };
    totalResult = 0;

    onSubmitSearchForm = (term) => {
        this.LoadVideosList(term);
    }

    onVideoSelected = (video) => {
        this.setState({ selectedVideo: video });

    }

    LoadVideosList = async (term) => {

        const videosItens = (await YoutubeService.get('/search', { params: { q: term } })).data.items;
        this.setState(
            {
                videos: videosItens,
                selectedVideo: videosItens[0]
            });
    }

    render() {
        console.log(this.state.selectedVideo);
        return (
            <div className='ui container'>
                <p />
                <SearchBar submitFunction={this.onSubmitSearchForm} totalResult={this.state.videos.length} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo} /></div>
                        <div className="five wide column"><VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected} /></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default App;